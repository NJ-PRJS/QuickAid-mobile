import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const homeStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.accent,
        alignItems: 'center',

    },
    welcomeTop:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:40,
        paddingHorizontal:20,
        width: Dimensions.get('window').width * 0.99,
    },
    yourHandStyle:{
        fontSize:13,
        fontFamily:"Poppins-semibold"
    },
    hiText: {
        fontFamily:"Poppins-semibold",
        fontSize: 16,
    },
    greetingsContainer:{
        flexDirection:"row",
    },
    heroContainer:{
        marginTop:50,

    },
    emergencyText:{
      fontSize:25,
        fontFamily:"Poppins-bold",
        textAlign:"center"
    },
    quickaidText:{
        fontSize:13,
        fontFamily:"Poppins-regular",
        textAlign:"center",
        marginTop:5
    },
    ellipseContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ellipse: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        borderRadius: (Dimensions.get('window').width * 0.6) / 2,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
        borderWidth: 5,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.primary,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    icon: {
        marginTop: 40,

    },
    chatView:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.3,
        borderRadius:5,
        backgroundColor:"white",
        padding:10,
        marginRight:10,
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    chat:{
        fontFamily:"Poppins-semibold",
        fontSize:14
    },
    flatList:{
        marginTop:30,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    }
})
