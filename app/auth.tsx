import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icon";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <View className="flex-1 px-8 py-6">
        {/* Header */}
        <View className="items-center mb-8 mt-8">
          <View className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full items-center justify-center mb-4 shadow-lg">
            <Icon name="lock" size={32} color="#8B5CF6" />
          </View>
          <Text className="text-3xl font-light text-gray-800 mb-2">
            Welcome Back
          </Text>
          <Text className="text-gray-600 text-center leading-relaxed">
            Sign in to access your baby monitoring dashboard
          </Text>
        </View>
        
        {/* Auth Options */}
        <View className="flex-1 justify-center space-y-6">
          {/* Google Sign In */}
          <Link href="/permissions" asChild>
            <TouchableOpacity className="bg-white py-5 px-6 mb-2 rounded-2xl shadow-lg border border-gray-100 active:scale-95 transition-transform">
              <View className="flex-row items-center justify-center">
                <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center mr-3">
                  <Icon name="google" size={20} color="#DB4437" />
                </View>
                <Text className="text-gray-800 text-lg font-semibold">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          
          {/* Apple Sign In */}
          <Link href="/permissions" asChild>
            <TouchableOpacity className="bg-gray-900 py-5 px-6 rounded-2xl shadow-lg active:scale-95 transition-transform">
              <View className="flex-row items-center justify-center">
                <View className="w-8 h-8 bg-gray-700 rounded-full items-center justify-center mr-3">
                  <Icon name="apple" size={20} color="#FFFFFF" />
                </View>
                <Text className="text-white text-lg font-semibold">
                  Continue with Apple
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          
          
          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-300"></View>
            <Text className="mx-4 text-gray-500 text-sm">or</Text>
            <View className="flex-1 h-px bg-gray-300"></View>
          </View>
          
          {/* Skip Option */}
          <Link href="/permissions" asChild>
            <TouchableOpacity className="bg-white/50 backdrop-blur-sm py-4 px-6 rounded-2xl border border-white/30 active:scale-95 transition-transform">
              <Text className="text-gray-600 text-center text-lg font-medium">
                Continue as Guest
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        
        {/* Footer */}
        <View className="items-center py-6">
          <Text className="text-gray-500 text-sm text-center leading-relaxed mb-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
          <Link href="/welcome" asChild>
            <TouchableOpacity className="flex-row items-center justify-center">
              <Icon name="arrow-left" size={16} color="#2563EB" />
              <Text className="text-blue-600 text-center font-medium ml-2">
                Back to Welcome
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}