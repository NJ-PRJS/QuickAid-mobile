import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import CustomSearchBar from "../../components/CostomSearchBar";
import {AidScreenStyles} from "../../globalStyles/AidScreenStyles";
import {useQuickAidContext} from "../../Context";
import {aidData as aidEnglishData} from "../../data/EnglishAidData";
import {aidData as aidSwahiliData} from "../../data/SwahiliAidData";
import React from "react";

const AidScreen = (props:any) => {
    const {defaultLanguage} = useQuickAidContext();

    const aidData = defaultLanguage?.language === "ENGLISH"? aidEnglishData : aidSwahiliData;

  return(
      <ScrollView style={AidScreenStyles.container}>

          <View style={[AidScreenStyles.container, {alignItems:"center"}]}>
              <View style={AidScreenStyles.searchbarContainer}>
                  <CustomSearchBar placeholder={defaultLanguage?.language === "ENGLISH"?"Find Aid help":"Pata Msaada unaohitaji hapa"}/>
              </View>
              <View style={AidScreenStyles.aidsContainer}>
                  <Text style={AidScreenStyles.hiText}>
                      {defaultLanguage?.language === "ENGLISH"?"Have an Emergency? find what you need here.":"Pata Msaada unaohitaji hapa"}
                  </Text>
                  <View style={AidScreenStyles.aidsViews}>

                      {aidData?.map((aid:any) => {
                          return(
                             <TouchableOpacity
                             onPress={() => {
                                 props.navigation.navigate('aidStack', {screen: 'aid',
                                     params: {
                                         aidId: aid?.id,
                                     }
                                 });
                             }}
                             key={aid.id}
                             >
                                 <View style={AidScreenStyles.aidView}
                                 >
                                     <Image source={aid?.imagedsc} style={AidScreenStyles.imageStyle} resizeMode="contain"/>
                                     <Text style={AidScreenStyles.aidViewText}>
                                         {aid?.aidTitle}
                                     </Text>
                                     <View style={AidScreenStyles.boxView}>
                                     </View>
                                 </View>
                             </TouchableOpacity>
                          )
                      })}

                  </View>
              </View>
          </View>
      </ScrollView>
  )
}

export default AidScreen;
