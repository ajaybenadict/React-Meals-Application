import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MealsDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealsDetailsScreen is working!</Text>
      <Button
        title="Go to categories "
        onPress={() => {
          props.navigation.push("Categories");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetailsScreen;
