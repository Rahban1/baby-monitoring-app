import Icon from "@/components/Icon";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePermissions } from "../hooks/usePermissions";

export default function DevicesScreen() {
  const { permissionStatus, requestPermissions } = usePermissions();
  
  // Mock data for demonstration
  const devices = [
    { 
      id: "1", 
      name: "Nursery Monitor", 
      status: "Online", 
      battery: "85%", 
      lastSeen: "2 min ago",
      room: "Master Bedroom",
      temperature: "22°C"
    },
    { 
      id: "2", 
      name: "Living Room Cam", 
      status: "Offline", 
      battery: "12%", 
      lastSeen: "1 hour ago",
      room: "Living Room",
      temperature: "24°C"
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <View className="bg-white/80 backdrop-blur-sm px-6 py-6 border-b border-white/30">
        <View className="flex-row items-center justify-between mb-2">
          <View>
            <Text className="text-3xl font-light text-gray-800">
              Your Devices
            </Text>
            <Text className="text-gray-600 mt-1">
              Monitor your little ones from anywhere
            </Text>
            {permissionStatus === 'denied' && (
              <View className="mt-2 flex-row items-center">
                <Icon name="shield" size={16} color="#EF4444" />
                <Text className="text-red-600 text-sm ml-2">
                  Permissions required for device discovery
                </Text>
              </View>
            )}
          </View>
          <View className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full items-center justify-center">
            <Icon name="device-mobile" size={24} color="#8B5CF6" />
          </View>
        </View>
      </View>
      
      <ScrollView className="flex-1 px-6 py-6">
        <View className="space-y-6">
          {devices.map((device) => (
            <View key={device.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50">
              {/* Device Header */}
              <View className="flex-row justify-between items-start mb-4">
                <View className="flex-1">
                  <Text className="text-xl font-semibold text-gray-800 mb-1">
                    {device.name}
                  </Text>
                  <Text className="text-gray-500 text-sm">
                    {device.room}
                  </Text>
                </View>
                <View className={`px-3 py-2 rounded-full ${
                  device.status === "Online" 
                    ? "bg-green-100 border border-green-200" 
                    : "bg-red-100 border border-red-200"
                }`}>
                  <Text className={`text-xs font-semibold ${
                    device.status === "Online" ? "text-green-700" : "text-red-700"
                  }`}>
                    {device.status}
                  </Text>
                </View>
              </View>
              
              {/* Device Stats */}
              <View className="flex-row space-x-4 mb-6">
                <View className="flex-1 bg-gray-50 rounded-2xl p-3">
                  <View className="flex-row items-center mb-1">
                    <Icon name="battery" size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">Battery</Text>
                  </View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {device.battery}
                  </Text>
                </View>
                <View className="flex-1 bg-gray-50 rounded-2xl p-3">
                  <View className="flex-row items-center mb-1">
                    <Icon name="thermometer" size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">Temperature</Text>
                  </View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {device.temperature}
                  </Text>
                </View>
              </View>
              
              {/* Last Seen */}
              <View className="bg-blue-50 rounded-2xl p-3 mb-6">
                <View className="flex-row items-center">
                  <Icon name="clock" size={16} color="#2563EB" />
                  <Text className="text-sm text-blue-700 font-medium ml-2">
                    Last seen: {device.lastSeen}
                  </Text>
                </View>
              </View>
              
              {/* Action Buttons */}
              <View className="flex-row space-x-3">
                <TouchableOpacity className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-6 rounded-2xl shadow-lg active:scale-95 transition-transform">
                  <View className="flex-row items-center justify-center">
                    <Icon name="settings" size={20} color="#FFFFFF" />
                    <Text className="text-white font-semibold ml-2">
                      Configure
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-white border border-gray-200 py-4 px-6 rounded-2xl shadow-sm active:scale-95 transition-transform">
                  <View className="flex-row items-center justify-center">
                    <Icon name="chart" size={20} color="#6B7280" />
                    <Text className="text-gray-700 font-semibold ml-2">
                      Analytics
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        
        {/* Add New Device */}
        <View className="mt-8">
          <Link href="/wifi-setup" asChild>
            <TouchableOpacity className="bg-gradient-to-r from-green-400 to-blue-500 py-6 px-8 rounded-3xl shadow-lg active:scale-95 transition-transform">
              <View className="flex-row items-center justify-center">
                <Icon name="plus" size={24} color="#FFFFFF" />
                <Text className="text-white text-xl font-semibold ml-3">
                  Add New Device
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
        
        {/* Quick Actions */}
        <View className="mt-8 bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-white/50">
          <Text className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Quick Actions
          </Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="flex-1 bg-white py-4 px-4 rounded-2xl shadow-sm active:scale-95 transition-transform">
              <View className="items-center">
                <Icon name="chart" size={24} color="#6B7280" />
                <Text className="text-gray-700 font-medium text-sm mt-2">Reports</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white py-4 px-4 rounded-2xl shadow-sm active:scale-95 transition-transform">
              <View className="items-center">
                <Icon name="bell" size={24} color="#6B7280" />
                <Text className="text-gray-700 font-medium text-sm mt-2">Alerts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white py-4 px-4 rounded-2xl shadow-sm active:scale-95 transition-transform">
              <View className="items-center">
                <Icon name="settings" size={24} color="#6B7280" />
                <Text className="text-gray-700 font-medium text-sm mt-2">Settings</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Footer */}
      <View className="bg-white/80 backdrop-blur-sm px-6 py-4 border-t border-white/30">
        <Link href="/auth" asChild>
          <TouchableOpacity className="flex-row items-center justify-center py-3">
            <Icon name="logout" size={20} color="#6B7280" />
            <Text className="text-gray-600 font-medium ml-2">
              Sign Out
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}