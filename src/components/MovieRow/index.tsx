import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./style";
import { FlatList } from "react-native-gesture-handler";
import MovieTile from "../MovieTile";

interface MovieRowData {
  item: {
    id: string;
    title: string;
    movies: Array<{ id: string; poster: string }>;
  };
}

export default function MovieRow(props: MovieRowData) {
  console.log(props); 
  
  const { title, movies } = props.item;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList 
      data={movies}
      renderItem={({item }) => <MovieTile url={item.poster} />}
      keyExtractor={(item) => item.id}
      horizontal
      />
    </View>
  );
}
