import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: {
    screen: CategoryMealsScreen,
  },
  MealsDetails: MealsDetailsScreen,
});

export default createAppContainer(MealsNavigator);
