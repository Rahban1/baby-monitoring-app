import { useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';
import PermissionService from '../services/PermissionService';

export interface UsePermissionsReturn {
  permissionStatus: 'unknown' | 'granted' | 'denied' | 'error';
  isChecking: boolean;
  isRequesting: boolean;
  checkPermissions: () => Promise<void>;
  requestPermissions: () => Promise<boolean>;
  openSettings: () => void;
}

export const usePermissions = (): UsePermissionsReturn => {
  const [permissionStatus, setPermissionStatus] = useState<'unknown' | 'granted' | 'denied' | 'error'>('unknown');
  const [isChecking, setIsChecking] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  
  const permissionService = PermissionService.getInstance();

  const checkPermissions = async () => {
    setIsChecking(true);
    try {
      const areGranted = await permissionService.arePermissionsGranted();
      setPermissionStatus(areGranted ? 'granted' : 'denied');
    } catch (error) {
      console.error('Error checking permissions:', error);
      setPermissionStatus('error');
    } finally {
      setIsChecking(false);
    }
  };

  const requestPermissions = async (): Promise<boolean> => {
    setIsRequesting(true);
    try {
      const result = await permissionService.requestPermissionsWithFlow();
      
      if (result.success) {
        setPermissionStatus('granted');
        return true;
      } else {
        setPermissionStatus('denied');
        Alert.alert(
          'Permissions Required',
          result.message + '\n\nPlease enable the required permissions in your device settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: openSettings }
          ]
        );
        return false;
      }
    } catch (error) {
      console.error('Error requesting permissions:', error);
      setPermissionStatus('error');
      Alert.alert(
        'Permission Error',
        'There was an issue requesting permissions. Please try again or enable them manually in your device settings.',
        [
          { text: 'Open Settings', onPress: openSettings },
          { text: 'OK' }
        ]
      );
      return false;
    } finally {
      setIsRequesting(false);
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return {
    permissionStatus,
    isChecking,
    isRequesting,
    checkPermissions,
    requestPermissions,
    openSettings,
  };
};
