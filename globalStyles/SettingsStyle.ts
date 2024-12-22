import {Dimensions, StyleSheet} from "react-native";
import Colors from "../constants/Colors";


export const SettingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        // backgroundColor: '#fff',
        // alignItems:"center",

    },
    header: {
        textAlign: 'center',
        marginTop: 20,
        fontFamily:"Poppins-bold"
    },
    languageButtonGroup: {
        marginBottom: 20,

    },
    languageButtonText: {
        fontSize: 16,
        color: '#555',
        fontFamily:"Poppins-semibold"
    },
    selectedLanguageButton: {
        backgroundColor: '#00aced',
    },
    selectedLanguageButtonText: {
        color: '#fff',
    },
    logoutButton: {
        flexDirection: 'row',
        backgroundColor: "#00aced",
        marginTop: 0,
        marginLeft: 20,
        borderRadius: 15,
        alignSelf: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 20,
        // width: "50%",
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily:"Poppins-regular"
        // letterSpacing: 1,
        // paddingLeft: 20,
    },
});
