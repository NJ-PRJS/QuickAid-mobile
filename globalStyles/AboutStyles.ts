import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const AboutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent,
        alignItems:"center"
    },
    aboutHero:{
        marginTop:50,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.3,
        borderRadius:15,
        backgroundColor:Colors.secondary,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    hiText: {
        fontFamily:"Poppins-semibold",
        fontSize: 16,
        textAlign:"left"
    },
    imageContainer:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.26,
    },

    imageStyle:{
        height:"100%",
        width:"100%",

    },
    aboutBody:{
      marginTop:30,
      paddingHorizontal:20,
        width: Dimensions.get('window').width * 0.9,
    },
    section:{
        marginTop:4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    sectionsText: {
        fontFamily:"Poppins-semibold",
        fontSize: 16,
        textAlign:"left"
    },
    verison:{
        marginTop:50,

    },
    versionText: {
        fontFamily:"Poppins-regular",
        fontSize: 16,
        textAlign:"center"
    },

})
