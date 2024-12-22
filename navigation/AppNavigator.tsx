// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import OnboardingScreen from '../screens/onBoardingScreens';
import ChooseLanguageScreen from '../screens/ChooseLanguage';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../constants/Colors";
import AidScreen from "../screens/Aid";
import AboutScreen from "../screens/About";
import MapScreen from '../screens/Map';
import SingleAidScreen from "../screens/SingleAid";
import UserFeedback from "../screens/UserFeedback";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    position: 'absolute',
                    // bottom: 10,
                    height: 72,
                    paddingBottom: 20,
                    width: '100%',
                    // marginLeft: 20,
                    shadowColor: "white",
                    backgroundColor: 'white',
                },
                headerShown: false,
            }}
            sceneContainerStyle={{
                marginBottom: 62,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontFamily: 'Poppins-bold',
                    },
                }}
            />
            <Tab.Screen
                name="Aid"
                component={AidScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="hospital-box-outline"
                            color={color}
                            size={25}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontFamily: 'Poppins-bold',
                    },
                    tabBarLabel: 'Aid',
                }}
            />
            <Tab.Screen
                name="Location"
                component={MapScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="map-marker"
                            color={color}
                            size={25}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontFamily: 'Poppins-bold',
                    },
                    tabBarLabel: 'Location',
                }}
            />
            <Tab.Screen
                name="Benediction"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="rocket-outline"
                            color={color}
                            size={25}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontFamily: 'Poppins-bold',
                    },
                    tabBarLabel: 'QuickAid',
                }}
            />

        </Tab.Navigator>

    );
}

function AidStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:true,
            }}
        >
            <Stack.Screen name="aid" component={SingleAidScreen} />
            <Stack.Screen name="Feedback" component={UserFeedback} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    );
}

function AppNavigator() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown:false,
          }}
      >
          <Stack.Screen name="language" component={ChooseLanguageScreen} />
          <Stack.Screen name="onboarding" component={OnboardingScreen} />
          <Stack.Screen name="home" component={AppStack} />
          <Stack.Screen name="aidStack" component={AidStack} />
      </Stack.Navigator>

  );
}

export default AppNavigator;
