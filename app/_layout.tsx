import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return <SafeAreaProvider>
    <Stack>
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="auth"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="permissions"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="devices"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wifi-setup"
        options={{ headerShown: false }}
      />
    </Stack>
  </SafeAreaProvider>;
}
