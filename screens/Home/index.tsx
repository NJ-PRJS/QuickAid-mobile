import React, {useEffect, useState} from "react";
import {
    View, Text, Image, TouchableOpacity, FlatList,
} from "react-native";
import {homeStyles} from "../../globalStyles/HomeStyles";
import Colors from "../../constants/Colors";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from "../../globalStyles/onBoardingStyles";
import {StatusBar} from "expo-status-bar";
import {useQuickAidContext} from "../../Context";

const EnglishChats = ["I am Choking","Nose Bleeding","Bleeding and Wounds","Burns","Fractures and Sprains"]

const ChartView = ({chat}:{chat:string}) => {
    return(
        <TouchableOpacity activeOpacity={0.6}>
            <View style={homeStyles.chatView}>
                <Text style={homeStyles.chat}>
                    {chat}
                </Text>

                <View style={homeStyles.icon}>
                    <MaterialCommunityIcons
                        name="arrow-right"
                        color={Colors.primary}
                        size={30}

                    />
                </View>
            </View>
        </TouchableOpacity>
    )

}

const Home = () => {
    const [greeting, setGreeting] = useState("");
    const {defaultLanguage} = useQuickAidContext();


    const determineGreeting = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour < 12) {
            setGreeting("Good morning");
        } else if (currentHour < 18) {
            setGreeting("Good afternoon");
        } else {
            setGreeting("Good evening");
        }
    };

    useEffect(() => {
        determineGreeting(); // Call determineGreeting when the component mounts
    }, []);

  return (
    <View style={homeStyles.container}>
        <StatusBar />
      <View style={homeStyles.welcomeTop}>
          <View>
              <Text style={homeStyles.yourHandStyle}>
                  {defaultLanguage?.language === "ENGLISH"?"Your on hand":"Huduma ya kwanza"}
              </Text >
              <Text style={[homeStyles.yourHandStyle, {color:Colors.primary}]}>
                  {defaultLanguage?.language === "ENGLISH"?" Medical Guidance":"Kiganjani mwako"}
              </Text>
          </View>

          <View style={homeStyles.greetingsContainer}>
              <View>
                  <Text style={homeStyles.yourHandStyle}>
                      {greeting}!
                  </Text >
                  <Text style={[homeStyles.yourHandStyle, {color:Colors.primary}]}>
                      {defaultLanguage?.language === "ENGLISH"?"Feel Safe anywhere":"Jisikie uko salama popote"}
                  </Text>
              </View>
              <MaterialCommunityIcons
                  name="map-marker"
                  color={Colors.primary}
                  size={25}
              />
          </View>

      </View>
        <View style={homeStyles.heroContainer}>
            <Text style={homeStyles.emergencyText}>
                {defaultLanguage?.language === "ENGLISH"?"Emergency help":"Msaada wa haraka"}
            </Text>
            <Text style={homeStyles.emergencyText}>
                {defaultLanguage?.language === "ENGLISH"?"needed?":"Unahitajika?"}
            </Text>
            <Text style={homeStyles.quickaidText}>
                {defaultLanguage?.language === "ENGLISH"?"QuickAid is here for you":"QuickAid ipo hapa kwajili yako"}
            </Text>

            <View style={homeStyles.ellipseContainer}>
                <TouchableOpacity activeOpacity={0.8} >
                    <View style={homeStyles.ellipse}>

                        <Image source={require("../../assets/medkit.png")} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={[homeStyles.emergencyText, {fontSize: 20}]}>
                    {defaultLanguage?.language === "ENGLISH"?"Not sure what to do?":"Hauna uhakika na kipi cha kufanya?"}
                    </Text>
                <Text style={homeStyles.quickaidText}>
                    {defaultLanguage?.language === "ENGLISH"?"Pick the subject to chat":"Chagua mada hapa"}
                </Text>
            </View>
           <View style={homeStyles.flatList}>
               <FlatList
                   showsHorizontalScrollIndicator={false}
                   horizontal
                   data={EnglishChats}
                   // pagingEnabled
                   renderItem={({item}) => <ChartView chat={item}/>}
               />
           </View>
        </View>
    </View>
  )
}

export default Home
