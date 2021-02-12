import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.textContainer}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 3,
  },
  textContainer: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});

export default CategoryGridTile;
