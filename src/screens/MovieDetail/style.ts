import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "contain",
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:10
  },
});
