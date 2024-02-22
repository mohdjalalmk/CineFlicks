import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { FlatList } from "react-native-gesture-handler";
import MovieTile from "../MovieTile";
import { useNavigation } from "@react-navigation/native";
interface MovieRowProps {
  title: string;
  movies: Array<{ id: string; poster: string }>;
  onPressMovie: (movie: { id: string; poster: string }) => void;
}

export default function MovieRow(props: MovieRowProps) {
  console.log(props);
  const navigation = useNavigation();

  const { title, movies, onPressMovie } = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.warn(item);
              navigation.navigate('Movie Detail', { id:item.id ,image:item.poster});

              // onMoviePress(item);
            }}
          >
            <MovieTile url={item.poster} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}
