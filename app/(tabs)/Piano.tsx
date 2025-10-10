import Piano from '@/Components/Piano';
import useOrientation from "@/Hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { Text } from "react-native";

export default function Index() {
  const CurrentOrientation = useOrientation();

  if (CurrentOrientation === Orientation.LANDSCAPE_LEFT) return <Piano />;
  if (CurrentOrientation === Orientation.LANDSCAPE_RIGHT) return <Piano />;
  else return <Text>Rotate Device to Landscape</Text>
};




