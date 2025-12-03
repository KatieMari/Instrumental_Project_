import Piano from '@/Components/Piano';
import useOrientation from "@/Hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { Text } from "react-native";

export default function Index() {
  // Custom Hook that Returns the Device's Current Orientation
  const CurrentOrientation = useOrientation();

  // If the Device is Rotated to Landscape Left, Show the Piano
  if (CurrentOrientation === Orientation.LANDSCAPE_LEFT) return <Piano />;
  // If the Device is Rotated to Landscape Right, Show the Piano
  if (CurrentOrientation === Orientation.LANDSCAPE_RIGHT) return <Piano />;
  // Otherwise, the Device is in Portrait, ask the user to Rotate
  else return <Text>Rotate Device to Landscape</Text>
};




