import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeals: {
      screen: CategoryMealsScreen,
    },
    MealsDetails: MealsDetailsScreen,
  },
  {
    //initialRouteName: "MealsDetails",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
