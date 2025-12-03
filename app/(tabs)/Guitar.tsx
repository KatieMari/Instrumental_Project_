import Guitar from '@/Components/Guitar';
import useOrientation from '@/Hooks/useOrientation';
import { Text } from '@react-navigation/elements';
import { Orientation } from 'expo-screen-orientation';

export default function Index() {
    // Custom Hook that Returns the Device's Current Orientation
    const CurrentOrientation = useOrientation();

    // If the Device is Rotated to Landscape Left, Show the Guitar 
    if (CurrentOrientation === Orientation.LANDSCAPE_LEFT) return <Guitar />;
    // If the Device is Rotated to Landscape Right, Show the Guitar
    if (CurrentOrientation === Orientation.LANDSCAPE_RIGHT) return <Guitar />;
    // Otherwise, the Device is in Portrait, ask the user to Rotate
    else return <Text>Rotate Device to Landscape</Text>
};