// Imports useState and useEffect from React
import { useEffect, useState } from "react";
// Imports Orientation from Expo-Screen-Orientation
import { Orientation, addOrientationChangeListener, getOrientationAsync } from "expo-screen-orientation";

export default function useOrientation() {
    // Sets the State for Orientation, 
    const [CurrentOrientation, setOrientation] = useState(Orientation.UNKNOWN)

    // Async Function, Executed in the Background, Await Function = Wait to Obtain the Result, get Orientantion and Wait for Eesult (not stopping all the code for it)
    const loadOrientation = async () => {
        const Orientation = await getOrientationAsync();
        setOrientation(Orientation);
    }
    // console.log ("Hello World");
    useEffect(() => {
        // Execute the Function
        loadOrientation()
        // Load the Orientation, Everytime is Changes its Update Screen Orientation Value
        addOrientationChangeListener(loadOrientation)
    });

    return CurrentOrientation;
};