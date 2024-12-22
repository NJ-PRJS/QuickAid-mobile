import {StyleSheet} from "react-native";

const COLORS = {primary: '#fff', white: '#F94C81'};

export const styles = StyleSheet.create({
    subtitle: {
        // color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
        fontFamily:"Poppins-semibold",
        width:270
    },
    title: {
        // color: COLORS.white,
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        width:250,
        fontFamily:"Poppins-bold"
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        height: 50,
        borderRadius: 50,
        backgroundColor:COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        width:80,
        elevation:10
    },
    btnsk: {
        height: 50,
        borderRadius: 50,
        backgroundColor:COLORS.white,
        justifyContent: 'center',
        // alignItems: 'center',
        width:80,
        marginTop:10
    },
    getStatedbtn:{
        height: 50,
        borderRadius: 50,
        backgroundColor:COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:10,
        flex:1
    }
});
