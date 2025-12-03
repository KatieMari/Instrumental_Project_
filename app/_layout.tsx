import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // Root-Level Navigation Stack for the App
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
