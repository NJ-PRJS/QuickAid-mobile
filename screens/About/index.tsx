import {Image, Text, TouchableOpacity, View} from "react-native";
import {AboutStyles} from "../../globalStyles/AboutStyles";
import React from "react";
import {AidScreenStyles} from "../../globalStyles/AidScreenStyles";
import {useQuickAidContext} from "../../Context";
import {Divider, Icon} from "@rneui/base";
import Colors from "../../constants/Colors";

const AboutScreen = (props:any) => {
    const {defaultLanguage} = useQuickAidContext();

  return(
      <View style={AboutStyles.container}>
        <View style={AboutStyles.aboutHero}>
            <View>
                <Text style={[AboutStyles.hiText,{marginTop:30}]}>
                    {defaultLanguage?.language === "ENGLISH"?"The fastest way to get help.":"Njia haraka zaidi ya kupata msaada"}
                </Text>
                <Text style={[AboutStyles.hiText,{
                    fontFamily: "Poppins-regular", fontSize: 13
                }]}>
                    {defaultLanguage?.language === "ENGLISH"?"We care about your health and well-being.":"Tunajali ustawi wa afya yako."}
                </Text>
            </View>
            <View style={AboutStyles.imageContainer}>
                <Image source={require("../../assets/quickaid.png")} style={AboutStyles.imageStyle} resizeMode="contain"/>
            </View>

        </View>

          <View style={AboutStyles.aboutBody}>
              <Text style={AboutStyles.hiText}>
                  QuickAid
              </Text>
          <TouchableOpacity activeOpacity={0.7} >
              <View style={AboutStyles.section} >
                  <Text style={AboutStyles.hiText}>
                      {defaultLanguage?.language === "ENGLISH"?"Read about First Aid.":"Soma kuhusu Huduma ya kwanza."}
                  </Text>
                  <Icon
                      raised
                      name="chevron-right"
                      type="material-community"
                        color={Colors.primary}
                      size={15}
                      containerStyle={{ width: 34 }}
                      // onPress={() => props.navigation.navigate("catwishlists")}
                      style={{}}
                  />
              </View>
          </TouchableOpacity>
              <Divider />
              <TouchableOpacity activeOpacity={0.7} >
                  <View style={AboutStyles.section} >
                      <Text style={AboutStyles.hiText}>
                          {defaultLanguage?.language === "ENGLISH"?"Privacy policy":"Privacy policy"}
                      </Text>
                      <Icon
                          raised
                          name="chevron-right"
                          type="material-community"
                          color={Colors.primary}
                          size={15}
                          containerStyle={{ width: 34 }}
                          // onPress={() => props.navigation.navigate("catwishlists")}
                          style={{}}
                      />
                  </View>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity activeOpacity={0.7} onPress={() => {
                  props.navigation.navigate('aidStack', {screen: 'Feedback',
                      params: {
                          aidId: 1,
                      }
                  });
              }}

              >
                  <View style={AboutStyles.section} >
                      <Text style={AboutStyles.hiText}>
                          {defaultLanguage?.language === "ENGLISH"?"User Feedback":"Maoni yako"}
                      </Text>
                      <Icon
                          raised
                          name="chevron-right"
                          type="material-community"
                          color={Colors.primary}
                          size={15}
                          containerStyle={{ width: 34 }}
                          // onPress={() => props.navigation.navigate("catwishlists")}
                          style={{}}
                      />
                  </View>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    props.navigation.navigate('aidStack', {screen: 'Settings',
                                        params: {
                                            aidId: 1,
                                        }
                                    });
                                }}
              >
                  <View style={AboutStyles.section} >
                      <Text style={AboutStyles.hiText}>
                          {defaultLanguage?.language === "ENGLISH"?"Settings":"Settings"}
                      </Text>
                      <Icon
                          raised
                          name="chevron-right"
                          type="material-community"
                          color={Colors.primary}
                          size={15}
                          containerStyle={{ width: 34 }}
                          // onPress={() => props.navigation.navigate("catwishlists")}
                          style={{}}
                      />
                  </View>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity activeOpacity={0.7} >
                  <View style={AboutStyles.section} >
                      <Text style={AboutStyles.hiText}>
                          {defaultLanguage?.language === "ENGLISH"?"Disclaimer":"Disclaimer"}
                      </Text>
                      <Icon
                          raised
                          name="chevron-right"
                          type="material-community"
                          color={Colors.primary}
                          size={15}
                          containerStyle={{ width: 34 }}
                          // onPress={() => props.navigation.navigate("catwishlists")}
                          style={{}}
                      />
                  </View>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity activeOpacity={0.7} >
                  <View style={AboutStyles.section} >
                      <Text style={AboutStyles.hiText}>
                          {defaultLanguage?.language === "ENGLISH"?"Read about First Aid.":"Soma kuhusu Huduma ya kwanza."}
                      </Text>
                      <Icon
                          raised
                          name="chevron-right"
                          type="material-community"
                          color={Colors.primary}
                          size={15}
                          containerStyle={{ width: 34 }}
                          // onPress={() => props.navigation.navigate("catwishlists")}
                          style={{}}
                      />
                  </View>
              </TouchableOpacity>
              <Divider />
          </View>

          <View style={AboutStyles.verison}>
             <Text style={AboutStyles.versionText}>QuickAid Version: 1.0.1</Text>
          </View>

      </View>
  )
}

export default AboutScreen;
