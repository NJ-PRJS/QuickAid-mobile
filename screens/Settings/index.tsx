import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {SettingsStyle} from "../../globalStyles/SettingsStyle";
import {Switch, Button, ButtonGroup} from "@rneui/base";
import {AboutStyles} from "../../globalStyles/AboutStyles";
import {useQuickAidContext} from "../../Context";
import {SingleAidStyles} from "../../globalStyles/SingleAid";

const
 Settings = () => {
     const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
     const languages = ['English', 'Swahili'];
     const {defaultLanguage} = useQuickAidContext();
     const handleLanguageChange = (selectedIndex:any) => {
         setSelectedLanguageIndex(selectedIndex);
         // You can implement language change logic here
     };

     const handleLogout = () => {
         // You can implement logout logic here
         // For example, clear user token or navigate to login screen
         // navigation.navigate('Login');
     };
  return (
      <ScrollView style={SettingsStyle.container}  >
          <Text style={SettingsStyle.header}>
              {defaultLanguage?.language === "ENGLISH"? `QuickAid settings 
              `:`QuickAid settings`}
          </Text>
          <View >
              <ButtonGroup
                  onPress={handleLanguageChange}
                  selectedIndex={selectedLanguageIndex}
                  buttons={languages}
                  containerStyle={SettingsStyle.languageButtonGroup}
                  textStyle={SettingsStyle.languageButtonText}
                  selectedButtonStyle={SettingsStyle.selectedLanguageButton}
                  selectedTextStyle={SettingsStyle.selectedLanguageButtonText}
              />
          </View>
          {/*<TouchableOpacity onPress={handleLogout} style={[SettingsStyle.logoutButton]}>*/}
          {/*    /!* Logout button *!/*/}
          {/*    <Text style={SettingsStyle.logoutButtonText}>LOGOUT</Text>*/}
          {/*</TouchableOpacity>*/}
      </ScrollView>
  )
}

export default Settings;
