import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { useFonts } from "expo-font";
import { QuickAidProvider } from "./Context";

// const fetchFonts = () => {
//   return Font.loadAsync({});
// };
export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const [fontsLoaded] = useFonts({
    "Poppins-black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-semibold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-extrabold": require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-extralight": require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-thin": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <QuickAidProvider>
      <AppNavigator />
      </QuickAidProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
