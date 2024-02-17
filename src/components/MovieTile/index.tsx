import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./style";

interface MovieTileProps {
  url: string;
}

export default function MovieTile(props: MovieTileProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.movieImage} source={{ uri: props.url }} />
    </View>
  );
}
