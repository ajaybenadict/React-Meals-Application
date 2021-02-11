import React from "react";
import { View, StyleSheet, Text, Button, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen is working!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meals Details"
        onPress={() => {
          props.navigation.navigate("MealsDetails");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "white",
    },
    headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
