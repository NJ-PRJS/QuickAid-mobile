import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { SCREEN_HEIGHT } from "../constants/UiData";
import Colors from "../constants/Colors";
import { useQuickAidContext } from "../Context";

const ChooseLanguageScreen = ({ navigation }: any) => {
  const [choosenLanguage, setchoosenLanguage] = React.useState("ENGLISH");
  const { defaultLanguage, setDefaultLanguage } = useQuickAidContext();

  const changeLanguage = (language: string) => {
    setDefaultLanguage({ language: language });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: SCREEN_HEIGHT * 0.71,
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: "Poppins-bold" }}>QuickAid</Text>
      <Text
        style={{ fontSize: 15, fontFamily: "Poppins-semibold", marginTop: 3 }}
      >
        {defaultLanguage?.language === "SWAHILI"
          ? "Chagua Lugha"
          : "Choose language"}
      </Text>

      <TouchableOpacity
        style={{
          borderColor:
            defaultLanguage?.language === "SWAHILI" ? Colors.primary : "black",
          width: "80%",
          borderRadius: 5,
          height: 50,
          borderWidth: 1,
          padding: 5,
          marginTop: 10,
        }}
        onPress={() => {
          changeLanguage("SWAHILI");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-bold",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          SWAHILI
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderColor:
            defaultLanguage?.language === "ENGLISH" ? Colors.primary : "black",
          width: "80%",
          borderRadius: 5,
          height: 50,
          borderWidth: 1,
          padding: 5,
          marginTop: 5,
        }}
        onPress={() => {
          changeLanguage("ENGLISH");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-bold",
            marginTop: 11,
          }}
        >
          ENGLISH
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.getStatedbtn}
        onPress={() => navigation.navigate("onboarding")}
      >
        <Text
          style={{ fontFamily: "Poppins-bold", fontSize: 15, color: "white" }}
        >
          {defaultLanguage?.language === "SWAHILI" ? "ENDELEA" : "NEXT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  getStatedbtn: {
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    marginTop: 25,
    width: "80%",
  },
});
export default ChooseLanguageScreen;
