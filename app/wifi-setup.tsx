import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icon";

export default function WiFiSetupScreen() {
  const [wifiName, setWifiName] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <ScrollView className="flex-1">
        <View className="px-6 py-6">
          {/* Header */}
          <View className="items-center mb-8">
          <View className="w-20 h-20 bg-gradient-to-br from-green-200 to-blue-200 rounded-full items-center justify-center mb-4 shadow-lg">
            <Icon name="wifi" size={40} color="#059669" />
          </View>
            <Text className="text-3xl font-light text-gray-800 mb-2">
              Device Setup
            </Text>
            <Text className="text-gray-600 text-center leading-relaxed max-w-sm">
              Connect your baby monitor to your home network
            </Text>
          </View>
          
          {/* Setup Steps */}
          <View className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-lg border border-white/50">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Setup Steps
            </Text>
            <View className="space-y-3">
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3">
                  <Text className="text-green-600 font-bold">1</Text>
                </View>
                <Text className="text-gray-700 flex-1">Name your device</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3">
                  <Text className="text-blue-600 font-bold">2</Text>
                </View>
                <Text className="text-gray-700 flex-1">Enter WiFi credentials</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center mr-3">
                  <Text className="text-purple-600 font-bold">3</Text>
                </View>
                <Text className="text-gray-700 flex-1">Connect and configure</Text>
              </View>
            </View>
          </View>
          
          {/* Form */}
          <View className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50">
            <View className="space-y-6">
              {/* Device Name */}
              <View>
                <View className="flex-row items-center mb-3">
                  <Icon name="monitor" size={20} color="#6B7280" />
                  <Text className="text-lg font-semibold text-gray-800 ml-2">
                    Device Name
                  </Text>
                </View>
                <TextInput
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 text-lg"
                  placeholder="e.g., Nursery Monitor, Baby's Room"
                  placeholderTextColor="#9CA3AF"
                  value={deviceName}
                  onChangeText={setDeviceName}
                />
                <Text className="text-gray-500 text-sm mt-2">
                  Choose a name that helps you identify this device
                </Text>
              </View>
              
              {/* WiFi Network */}
              <View>
                <View className="flex-row items-center mb-3">
                  <Icon name="wifi" size={20} color="#6B7280" />
                  <Text className="text-lg font-semibold text-gray-800 ml-2">
                    WiFi Network
                  </Text>
                </View>
                <TextInput
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 text-lg"
                  placeholder="Enter your WiFi network name"
                  placeholderTextColor="#9CA3AF"
                  value={wifiName}
                  onChangeText={setWifiName}
                  autoCapitalize="none"
                />
                <Text className="text-gray-500 text-sm mt-2">
                  Make sure your device is within range of this network
                </Text>
              </View>
              
              {/* WiFi Password */}
              <View>
                <View className="flex-row items-center mb-3">
                  <Icon name="lock" size={20} color="#6B7280" />
                  <Text className="text-lg font-semibold text-gray-800 ml-2">
                    WiFi Password
                  </Text>
                </View>
                <TextInput
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 text-lg"
                  placeholder="Enter your WiFi password"
                  placeholderTextColor="#9CA3AF"
                  value={wifiPassword}
                  onChangeText={setWifiPassword}
                  secureTextEntry
                  autoCapitalize="none"
                />
                <Text className="text-gray-500 text-sm mt-2">
                  This information is encrypted and stored securely
                </Text>
              </View>
            </View>
            
            {/* Action Buttons */}
            <View className="mt-8 space-y-4">
              <TouchableOpacity 
                onPress={handleConnect}
                disabled={isConnecting || !deviceName || !wifiName || !wifiPassword}
                className={`py-5 px-8 rounded-2xl shadow-lg ${
                  isConnecting || !deviceName || !wifiName || !wifiPassword
                    ? 'bg-gray-300' 
                    : 'bg-gradient-to-r from-green-500 to-blue-500'
                } active:scale-95 transition-transform`}
              >
                <View className="flex-row items-center justify-center">
                  {isConnecting ? (
                    <>
                      <Icon name="clock" size={20} color="#FFFFFF" />
                      <Text className="text-white text-xl font-semibold ml-3">
                        Connecting...
                      </Text>
                    </>
                  ) : (
                    <>
                      <Icon name="link" size={20} color="#FFFFFF" />
                      <Text className="text-white text-xl font-semibold ml-3">
                        Connect Device
                      </Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity className="bg-white border border-gray-200 py-4 px-8 rounded-2xl shadow-sm active:scale-95 transition-transform">
                <View className="flex-row items-center justify-center">
                  <Icon name="search" size={20} color="#6B7280" />
                  <Text className="text-gray-700 text-lg font-semibold ml-3">
                    Scan for Available Networks
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Help Section */}
          <View className="mt-8 bg-blue-50 rounded-3xl p-6 border border-blue-100">
            <View className="flex-row items-start">
              <Icon name="lightbulb" size={24} color="#2563EB" />
              <View className="flex-1 ml-3">
                <Text className="text-lg font-semibold text-blue-800 mb-2">
                  Need Help?
                </Text>
                <Text className="text-blue-700 leading-relaxed mb-3">
                  Make sure your device is in pairing mode and within range of your WiFi router.
                </Text>
                <TouchableOpacity className="bg-blue-200 py-2 px-4 rounded-xl">
                  <Text className="text-blue-800 font-medium text-center">
                    View Setup Guide
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          {/* Back Button */}
          <View className="mt-8">
          <Link href="/devices" asChild>
            <TouchableOpacity className="flex-row items-center justify-center py-4">
              <Icon name="arrow-left" size={20} color="#6B7280" />
              <Text className="text-gray-600 font-medium text-lg ml-2">
                Back to Devices
              </Text>
            </TouchableOpacity>
          </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}