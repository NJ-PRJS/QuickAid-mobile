import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export  const SingleAidStyles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:Colors.accent,
        },
        headerButton: {
            marginHorizontal: 20,
        },
        headerButtonText: {
            fontSize: 16,
            color: Colors.primary,
        },
        imageStyle:{
            height: 140,
            width: '100%',
        },
        why:{
            paddingHorizontal:10,
            paddingVertical:5,
            marginTop:3
        },
        whyText:{
           fontFamily:"Poppins-semibold",
            fontSize:13
        },
        stepsView:{
            marginTop:5,
            paddingHorizontal:10
        },
        stepView:{
         marginTop:5
        },
        stepImage:{
            height:90,
            width:"70%",
        },
        stepDesc:{
            fontFamily:"Poppins-regular",
            fontSize:10,
            marginTop:2
        }
    }
)

