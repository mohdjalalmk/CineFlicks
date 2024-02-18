import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "./style";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  uri: string;
  posterUri: string;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const video = React.useRef<Playback>(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({
        uri:props.uri
      },
      {},
      false
      );
    })();
  }, [props.uri]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: props.uri,
        }}
        posterSource={{
          uri: props.posterUri,
        }}
        // usePoster={true}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status: {}) => setStatus(() => status)}
      />
      {/* <View style={stxyxles.buttoxns}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
}
