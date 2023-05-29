import React from "react";
import Notes from "../screen/Notes";
import Home from "../screen/Home";
import Category from "../screen/Category";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
export default function MainNavigator() {
  const routeName = useSelector((state) => state.routes.routesName);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Folders' component={Home} />
        <Stack.Screen
          name='Notes'
          component={Category}
          options={{ title: routeName }}
        />
        <Stack.Screen name='Write' component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
