// PermissionService using Expo Location and Notifications permissions for Expo Go
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';

class PermissionService {
  private static instance: PermissionService;

  public static getInstance(): PermissionService {
    if (!PermissionService.instance) {
      PermissionService.instance = new PermissionService();
    }
    return PermissionService.instance;
  }

  /**
   * Check if required permissions are granted
   */
  async arePermissionsGranted(): Promise<boolean> {
    try {
      const locationStatus = (await Location.getForegroundPermissionsAsync()).status;
      const notificationStatus = (await Notifications.getPermissionsAsync()).status;
      
      return locationStatus === 'granted' && notificationStatus === 'granted';
    } catch (error) {
      console.error('Error checking permissions:', error);
      return false;
    }
  }

  /**
   * Request all required permissions with user-friendly flow
   */
  async requestPermissionsWithFlow(): Promise<{ success: boolean; message: string }> {
    try {
      // Request Location Permission
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== 'granted') {
        return { success: false, message: 'Location permission is required for device discovery' };
      }

      // Request Notification Permission
      const { status: notificationStatus } = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
        },
      });

      if (notificationStatus !== 'granted') {
        return { success: false, message: 'Notification permission is required for baby safety alerts' };
      }

      if (locationStatus === 'granted' && notificationStatus === 'granted') {
        return { success: true, message: 'All permissions granted' };
      } else {
        return { success: false, message: 'Some permissions were not granted' };
      }
    } catch (error) {
      console.error('Error requesting permissions:', error);
      return { success: false, message: 'Error requesting permissions' };
    }
  }
}

export default PermissionService;
