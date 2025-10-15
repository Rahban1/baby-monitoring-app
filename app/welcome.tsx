import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icon";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <View className="flex-1 items-center justify-center px-8">
        {/* Hero Section */}
        <View className="items-center mb-12">
          {/* Baby Icon */}
          <View className="w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full items-center justify-center mb-6 shadow-lg">
            <Icon name="baby" size={48} color="#8B5CF6" />
          </View>
          
          <Text className="text-5xl font-light text-gray-800 mb-3 text-center">
            BabyGuard
          </Text>
          <Text className="text-xl text-gray-600 text-center leading-relaxed max-w-sm">
            Peace of mind for every parent, safety for every little one
          </Text>
        </View>
        
        {/* Features Preview */}
        <View className="w-full max-w-sm mb-12">
          <View className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-3">
                <Icon name="bell" size={20} color="#059669" />
              </View>
              <Text className="text-gray-700 font-medium">Real-time monitoring</Text>
            </View>
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                <Icon name="device-mobile" size={20} color="#2563EB" />
              </View>
              <Text className="text-gray-700 font-medium">Smart notifications</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-purple-100 rounded-full items-center justify-center mr-3">
                <Icon name="sleep" size={20} color="#7C3AED" />
              </View>
              <Text className="text-gray-700 font-medium">Sleep tracking</Text>
            </View>
          </View>
        </View>
        
        {/* CTA Section */}
        <View className="w-full max-w-sm space-y-4">
          <Link href="/auth" asChild>
            <TouchableOpacity className="bg-gradient-to-r from-pink-400 to-purple-500 py-5 px-8 rounded-2xl shadow-lg active:scale-95 transition-transform">
              <Text className="border-2 p-2 bg-pink-100 rounded-xl text-center text-xl font-semibold">
                Start Your Journey
              </Text>
            </TouchableOpacity>
          </Link>
          
          <Text className="text-center text-gray-500 text-sm leading-relaxed">
            Join thousands of parents who trust BabyGuard for their little ones
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}