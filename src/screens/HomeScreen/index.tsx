import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';
import MovieTile from '../../components/MovieTile';
import catagories from '../../../data/categories'
import MovieRow from '../../components/MovieRow';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={catagories.items}
      renderItem={(item)=>(MovieRow(item))}
      />
    </View>
  );
}

