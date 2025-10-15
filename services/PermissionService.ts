// PermissionService using Expo Location permissions for Expo Go
import * as Location from 'expo-location';

class PermissionService {
  private static instance: PermissionService;

  public static getInstance(): PermissionService {
    if (!PermissionService.instance) {
      PermissionService.instance = new PermissionService();
    }
    return PermissionService.instance;
  }

  /**
   * Check if foreground location permission is granted
   */
  async arePermissionsGranted(): Promise<boolean> {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error checking location permission:', error);
      return false;
    }
  }

  /**
   * Request foreground location permission with user-friendly flow
   */
  async requestPermissionsWithFlow(): Promise<{ success: boolean; message: string }> {
    try {
      const { status: currentStatus } = await Location.getForegroundPermissionsAsync();
      if (currentStatus === 'granted') {
        return { success: true, message: 'Location permission already granted' };
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        return { success: true, message: 'Location permission granted' };
      } else if (status === 'denied') {
        return { success: false, message: 'Location permission denied' };
      } else {
        return { success: false, message: `Location permission status: ${status}` };
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      return { success: false, message: 'Error requesting location permission' };
    }
  }
}

export default PermissionService;
