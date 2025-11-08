import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import io from 'socket.io-client';
import PermissionService from '../services/PermissionService';

// Backend base URL (use your Mac's IP when testing on a physical device)
const SOCKET_URL = 'http://192.168.1.48:5001';
const TOKEN_REG_URL = 'http://192.168.1.48:5001/register_token';

/**
 * Hook to set up push notifications (FCM) and real-time socket alerts.
 */
export function useAlerts() {
  useEffect(() => {
    // 1) Configure notifications
    async function configureNotifications() {
      try {
        // Configure how notifications are presented when the app is in the foreground
        Notifications.setNotificationHandler({
          handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
            shouldShowBanner: true,
            shouldShowList: true,
          }),
        });

        // Check notification permission through PermissionService
        const permissionService = PermissionService.getInstance();
        const hasPermissions = await permissionService.arePermissionsGranted();
        
        if (!hasPermissions) {
          console.warn('Notifications permission not granted. Redirecting to permissions screen.');
          return;
        }

        // Get the token (prefer passing projectId if available)
        const projectId = Constants?.expoConfig?.extra?.eas?.projectId || Constants?.easConfig?.projectId;
        const tokenData = await Notifications.getExpoPushTokenAsync(
          projectId ? { projectId } : undefined as any
        );
        const token = tokenData.data;
        console.log('🔔 Expo push token:', token);
        console.log('📱 Project ID:', projectId || 'none');

        // POST token to backend for server-side pushes
        try {
          console.log('📤 Sending token to:', TOKEN_REG_URL);
          const resp = await fetch(TOKEN_REG_URL, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({ token }),
          });
          
          if (!resp.ok) {
            const errorText = await resp.text();
            console.error('❌ Token registration failed:', resp.status, errorText);
            return;
          }
          
          const result = await resp.json();
          console.log('✅ Token register status:', resp.status, result);
        } catch (fetchError: any) {
          console.error('❌ Error registering token:', fetchError.message);
          if (fetchError.message.includes('Network request failed') || fetchError.message.includes('Failed to connect')) {
            console.error('💡 Make sure ws_server.py is running and accessible at', TOKEN_REG_URL);
          }
        }
      } catch (e) {
        console.warn('Error setting up notifications:', e);
      }
    }
    configureNotifications();

    // 2) Handle notifications when app is in foreground
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('📱 Notification received (foreground):', notification);
      Alert.alert(
        notification.request.content.title ?? 'Baby Safety Alert',
        notification.request.content.body ?? ''
      );
    });

    // Handle notifications when user taps them (background/quit state)
    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('📱 Notification tapped:', response);
      const data = response.notification.request.content.data;
      if (data?.status) {
        Alert.alert('Baby Safety Alert', `Status: ${data.status}`);
      }
    });

    // 3) Connect to WebSocket for live alerts
    const socket = io(SOCKET_URL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
    });
    
    socket.on('connect', () => {
      console.log('✅ Connected to socket server');
    });
    
    socket.on('connect_error', (error) => {
      console.error('❌ Socket connection error:', error);
    });
    
    socket.on('baby_alert', ({ status }) => {
      console.log('🔔 WebSocket alert received:', status);
      Alert.alert('Live Alert', status);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
      socket.disconnect();
    };
  }, []);
}