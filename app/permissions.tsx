import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icon";
import { usePermissions } from "../hooks/usePermissions";

export default function PermissionsScreen() {
  const router = useRouter();
  const { permissionStatus, isRequesting, requestPermissions } =
    usePermissions();

  useEffect(() => {
    if (permissionStatus === "granted") {
      // Auto-navigate if permissions are already granted
      setTimeout(() => {
        router.push("/devices");
      }, 1000);
    }
  }, [permissionStatus, router]);

  const handleAllow = async () => {
    const success = await requestPermissions();
    if (success) {
      Alert.alert(
        "Permissions Granted",
        "You can now discover and connect to nearby baby monitoring devices.",
        [
          {
            text: "Continue",
            onPress: () => {
              router.push("/devices");
            },
          },
        ]
      );
    }
  };

  const handleDeny = () => {
    Alert.alert(
      "Permissions Required",
      "To use BabyGuard effectively, we need permission to discover nearby devices. You can grant these permissions later in your device settings.",
      [
        {
          text: "Continue Anyway",
          style: "default",
        },
        {
          text: "Grant Permissions",
          style: "default",
          onPress: handleAllow,
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <View className="flex-1 px-6 py-8">
        {/* Header */}
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full items-center justify-center mb-6 shadow-lg">
            <Icon name="devices" size={40} color="#8B5CF6" />
          </View>
          <Text className="text-2xl font-light text-gray-800 mb-2">
            Device Discovery
          </Text>
          <Text className="text-gray-600 text-center leading-relaxed">
            {permissionStatus === "granted"
              ? "Permissions granted! Setting up device discovery..."
              : "We need permission to find your baby monitoring devices"}
          </Text>
        </View>

        {/* Permission Card */}
        <View className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 mb-8">
          {/* Main Permission Icon */}
          <View className="items-center mb-6">
            <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-4">
              <Icon name="bluetooth" size={32} color="#2563EB" />
            </View>
            <Text className="text-lg font-semibold text-gray-800 text-center mb-2">
              Allow BabyGuard to find, connect to, and determine the relative
              position of nearby devices?
            </Text>
          </View>

          {/* Permission Details */}
          <View className="space-y-4 mb-8">
            <View className="flex-row items-start">
              <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3 mt-1">
                <Icon name="devices" size={16} color="#059669" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium mb-1">
                  Device Discovery
                </Text>
                <Text className="text-gray-600 text-sm leading-relaxed">
                  Find and connect to your baby monitoring devices automatically
                </Text>
              </View>
            </View>

            <View className="flex-row items-start">
              <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3 mt-1">
                <Icon name="location" size={16} color="#2563EB" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium mb-1">
                  Location Services
                </Text>
                <Text className="text-gray-600 text-sm leading-relaxed">
                  Determine device proximity for better monitoring accuracy
                </Text>
              </View>
            </View>

            <View className="flex-row items-start">
              <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center mr-3 mt-1">
                <Icon name="bell" size={16} color="#DC2626" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium mb-1">
                  Notifications
                </Text>
                <Text className="text-gray-600 text-sm leading-relaxed">
                  Receive instant alerts when your baby needs attention
                </Text>
              </View>
            </View>

            <View className="flex-row items-start">
              <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center mr-3 mt-1">
                <Icon name="shield" size={16} color="#7C3AED" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium mb-1">
                  Secure Connection
                </Text>
                <Text className="text-gray-600 text-sm leading-relaxed">
                  Establish secure connections with your devices
                </Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="space-y-4">
            {permissionStatus === "granted" ? (
              <View className="py-5 px-8 rounded-2xl bg-green-100 border border-green-200">
                <View className="flex-row items-center justify-center">
                  <Icon name="check" size={20} color="#059669" />
                  <Text className="text-green-800 text-lg font-semibold ml-3">
                    Permissions Granted
                  </Text>
                </View>
              </View>
            ) : (
              <>
                <TouchableOpacity
                  onPress={handleAllow}
                  disabled={isRequesting}
                  className={`py-5 px-8 rounded-2xl shadow-lg ${
                    isRequesting
                      ? "bg-gray-300"
                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                  } active:scale-95 transition-transform`}
                >
                  <View className="flex-row items-center justify-center">
                    {isRequesting ? (
                      <>
                        <Icon name="clock" size={20} color="#FFFFFF" />
                        <Text className="text-white text-lg font-semibold ml-3">
                          Requesting Permissions...
                        </Text>
                      </>
                    ) : (
                      <>
                        <Icon name="check" size={20} color="#FFFFFF" />
                        <Text className="text-white text-lg font-semibold ml-3">
                          Allow
                        </Text>
                      </>
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleDeny}
                  disabled={isRequesting}
                  className="bg-white border border-gray-200 py-4 px-8 rounded-2xl shadow-sm active:scale-95 transition-transform"
                >
                  <Text className="text-gray-700 text-lg font-semibold text-center">
                    Don't Allow
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>

        {/* Privacy Notice */}
        <View className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <View className="flex-row items-start">
            <Icon name="shield" size={20} color="#2563EB" />
            <View className="flex-1 ml-3">
              <Text className="text-blue-800 font-medium mb-1">
                Your Privacy Matters
              </Text>
              <Text className="text-blue-700 text-sm leading-relaxed">
                We only use these permissions to connect to your own devices.
                Your data is encrypted and never shared with third parties.
              </Text>
            </View>
          </View>
        </View>

        {/* Skip Option */}
        <View className="mt-8">
          <Link href="/devices" asChild>
            <TouchableOpacity className="flex-row items-center justify-center py-4">
              <Text className="text-gray-500 font-medium">Skip for now</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
