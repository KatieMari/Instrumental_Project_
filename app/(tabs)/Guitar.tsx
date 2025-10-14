import Guitar from '@/Components/Guitar';
import useOrientation from '@/Hooks/useOrientation';
import { Text } from '@react-navigation/elements';
import { Orientation } from 'expo-screen-orientation';

export default function Index() {
    const CurrentOrientation = useOrientation();

    if (CurrentOrientation === Orientation.LANDSCAPE_LEFT) return <Guitar />;
    if (CurrentOrientation === Orientation.LANDSCAPE_RIGHT) return <Guitar />;
    else return <Text>Rotate Device to Landscape</Text>
        };