import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

interface PlayButtonProps {
  onPressButton?: () => void;
  title?: string;
  icon?: string;
}

export default function PlayButton(props: PlayButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPressButton}>
      <Entypo name={props.icon} />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}
