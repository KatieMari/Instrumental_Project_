import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        // Tab Component from Expo Router - Creates a Bottom Tab Navigation Layout
        <Tabs
            screenOptions={{
                // Colour for Nav Bar
                tabBarActiveTintColor: "#b9accaff",
            }}
        >
            <Tabs.Screen
                // Piano Tab
                name="Piano"
                options={{
                    title: "Piano",
                    headerShown: false,
                    // Icon Displayed
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="piano" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                // Guitar Tab
                name="Guitar"
                options={{
                    title: "Guitar",
                    headerShown: false,
                    // Icon Displayed
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="guitar" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}