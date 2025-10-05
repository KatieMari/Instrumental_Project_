import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#e2acdfff",
            }}
        >
            <Tabs.Screen
                name="Piano"
                options={{
                    title: "Piano",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="piano" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Drum"
                options={{
                    title: "Drum",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="drum" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}