import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export  const FeedBackStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent,
        // alignItems:"center"
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
    signUpText: {
        fontSize: 15,
        fontFamily: 'Poppins-bold',
        marginTop: '3%',
        marginBottom: '5%',
    },
    nameStyles: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        marginTop: '3%',
        marginBottom: '3%',
        width: '48%',
        height: 50,
        paddingStart: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    input: {
        marginTop: '3%',
        marginBottom: '3%',
        width: '80%',
        height: 50,
        paddingStart: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    horizontalLine: {
        height: 1,
        width: '90%',
        backgroundColor: 'gray',
        marginVertical: 20,
    },
    footerText: {
        textAlign: 'center',
        color: 'black',
        fontFamily:"Poppins-black",
        fontSize: 8,
        position:"absolute",
        bottom:0

    },
    customButton: {
        width: '75%',
        height: '7%',
        backgroundColor: "#00aced", // Customize the button background color
        justifyContent: "center", // Center text vertically
        alignItems: "center", // Center text horizontally
        borderRadius: 10, // Add rounded corners
        marginTop: '8%',
        marginBottom: '8%',
    },
    buttonText: {
        fontSize: 18,
        color: "#ECE1E1",
        fontFamily:"Poppins-semibold"
    },
})
