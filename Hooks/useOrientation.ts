// Imports useState and useEffect from React
import { useEffect, useState } from "react";
// Imports Orientation from Expo-Screen-Orientation
import { Orientation, addOrientationChangeListener, getOrientationAsync } from "expo-screen-orientation";

export default function useOrientation() {
    // Sets the state for orientation, 
    const [CurrentOrientation, setOrientation] = useState(Orientation.UNKNOWN)

    // Async Function, Executed in the background, await function = wait to obtain the result, get orientantion and wait for result (not stopping all the code for it)
    const loadOrientation = async () => {
        const Orientation = await getOrientationAsync();
        setOrientation(Orientation);
    }
    // console.log ("Hello World");
    useEffect(() => {
        // Execute the function
        loadOrientation()
        // Load the orientation, everytime is changes its update screen orientation value
        addOrientationChangeListener(loadOrientation)
    });

    return CurrentOrientation;
};