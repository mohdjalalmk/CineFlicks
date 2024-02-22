import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';
import MovieTile from '../../components/MovieTile';
import catagories from '../../../data/categories'
import MovieRow from '../../components/MovieRow';

export default function HomeScreen() {

  const handlePressMovie = (movie) => {
    console.log(`Pressed on movie: ${movie.id}`);
    // Add navigation logic here if needed
  };
  return (
    <View style={styles.container}>
      <FlatList
      data={catagories.items}
      renderItem={(item)=>( <MovieRow
      title={item.item.title} movies={item.item.movies} 
      onPressMovie={handlePressMovie}      />)}
      />
    </View>
  );
}

