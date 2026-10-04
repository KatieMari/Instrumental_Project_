// Imports useState and useEffect from React
import { useEffect, useState } from "react";
// Platform tells us if we're running on a phone or in a web browser
import { Platform, useWindowDimensions } from "react-native";
// Imports Orientation from Expo-Screen-Orientation
import { Orientation, addOrientationChangeListener, getOrientationAsync } from "expo-screen-orientation";

export default function useOrientation() {
    // Sets the State for Orientation (used on phones and tablets)
    const [CurrentOrientation, setOrientation] = useState(Orientation.UNKNOWN);
    // Current window size - used on the web, where there's no device to rotate
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        // On the web we use the window size instead (see below)
        if (Platform.OS === "web") return;

        // Async Function, Executed in the Background, Await Function = Wait to Obtain the Result
        const loadOrientation = async () => {
            const orientation = await getOrientationAsync();
            setOrientation(orientation);
        };

        // Execute the Function Once when the Screen Opens
        loadOrientation();
        // Update the Orientation Everytime it Changes
        const subscription = addOrientationChangeListener(loadOrientation);

        // Clean Up: Stop Listening when the Screen Closes
        return () => subscription.remove();
        // Empty Array = Only Set Up the Listener Once (not on every render)
    }, []);

    // In a Web Browser: a Window Wider than it is Tall Counts as Landscape
    if (Platform.OS === "web") {
        return width >= height ? Orientation.LANDSCAPE_LEFT : Orientation.PORTRAIT_UP;
    }

    return CurrentOrientation;
};
