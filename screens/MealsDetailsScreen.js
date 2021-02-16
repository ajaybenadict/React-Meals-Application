import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealsDetailsScreen = (props) => {
  const mealIds = props.navigation.getParam("mealId");

  const displayMeals = MEALS.find((meal) => meal.id === mealIds);
  return (
    <View style={styles.screen}>
      <Text>{displayMeals.title}</Text>
      <Button
        title="Go to categories "
        onPress={() => {
          props.navigation.push("Categories");
        }}
      />
    </View>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealId");

  const selectedCategory = MEALS.find((meal) => meal.id === mealID);

  return {
    headerTitle: selectedCategory.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("marked " + selectedCategory.title + " as favourite");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetailsScreen;
