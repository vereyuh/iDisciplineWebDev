import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // sidebar + content side by side
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default styles;
