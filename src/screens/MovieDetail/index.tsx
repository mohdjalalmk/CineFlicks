import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./style";
import movies from "../../../data/movie";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import PlayButton from "../../components/PlayButton";
import CustomButton from "../../components/CustomButton";
import VideoPlayer from "../../components/VideoPlayer";

interface MovieDetailProps{
  id:string,
  image:string
}

export default function MovieDetail(route:MovieDetailProps) {
  console.log(route);
  
  return (
    <SafeAreaView style={styles.container}>
      <VideoPlayer
      posterUri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg"
      uri='https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />
      <Text style={styles.title}>{movies.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{movies.year}</Text>
        <MaterialIcons name="hd" size={24} />
      </View>
      <PlayButton title="Play" icon="controller-play" />
      <PlayButton title="download" icon="download" />
      <Text>{movies.plot}</Text>
      <View style={{ flexDirection: "row" }}>
        <CustomButton title={"watchlist"} icon="plus" />
        <CustomButton title={"like"} icon="thumbs-up" />
        <CustomButton title={"share"} icon="share" />
      </View>
    </SafeAreaView>
  );
}
