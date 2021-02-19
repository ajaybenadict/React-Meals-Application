import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useSelector } from "react-redux";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);

  const mealIds = props.navigation.getParam("mealId");

  const displayMeals = availableMeals.find((meal) => meal.id === mealIds);
  return (
    <ScrollView>
      <Image source={{ uri: displayMeals.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{displayMeals.duration}m</DefaultText>
        <DefaultText>{displayMeals.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{displayMeals.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {displayMeals.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {displayMeals.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  //const selectedCategory = MEALS.find((meal) => meal.id === mealID);

  return {
    headerTitle: mealTitle,
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
  image: {},
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 22,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealsDetailsScreen;
