import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

 export const CostomSearchBarStyles = StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        fontFamily: "Poppins-semibold",
        color: Colors.primary,
        fontSize:13
    },
    inputContainerStyle:{
        backgroundColor: "white",
        // marginTop: -7,
    },
    containerStyle:{
        borderRadius: 10,
        backgroundColor: "white",
        borderColor: "transparent",
        height: 45,
        justifyContent:'center',
        alignItems:'center'
    }

});
