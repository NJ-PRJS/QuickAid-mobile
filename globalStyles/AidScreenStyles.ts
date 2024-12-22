import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const AidScreenStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.accent,
    },
    searchbarContainer: {
        position: "relative",
        width: "80%",
        height: 45,
        borderRadius:15 ,
        borderColor: Colors.primary,
        overflow: "hidden",
        borderWidth: 2,
        marginVertical: 4.5,
        marginTop:50
    },
    aidsContainer:{
        marginTop:30,
    },
    hiText: {
        fontFamily:"Poppins-semibold",
        fontSize: 16,
        textAlign:"center"
    },
    aidView:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.6,
        borderRadius:15,
        backgroundColor:"white",
        padding:10,
        // marginRight:10,
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    aidsViews:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingHorizontal:10,
        gap:10
    },
    imageStyle:{
        height:"70%",
        width:"100%",

    },
    aidViewText:{
        fontFamily:"Poppins-regular",
        fontSize: 13,
        textAlign:"left",

    },
    boxView:{
        width: 60,
        height: 13,
        backgroundColor:"#B4B4B3",
        marginTop:1
    },


})
