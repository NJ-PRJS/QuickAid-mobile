import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SingleAidStyles} from "../../globalStyles/SingleAid";
import {useQuickAidContext} from "../../Context";
import {aidData as aidEnglishData} from "../../data/EnglishAidData";
import {aidData as aidSwahiliData} from "../../data/SwahiliAidData";
import {Button} from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons"
import {AidData, aidStepType} from "../../models/AidModal";

const
    SingleAidScreen = (props:any) => {
        const {defaultLanguage} = useQuickAidContext();
        const [currentAid, setCurrentAid] = useState<AidData>()
        const aidData = defaultLanguage?.language === "ENGLISH"? aidEnglishData : aidSwahiliData;
        const [bookMarked, setBookMarked] = useState(false)
        const {aidId} = props.route.params;

        const loadAidData = async () => {
            const foundAid = aidData.find( aid => aid?.id === aidId);
            setCurrentAid(foundAid);

            await props.navigation.setOptions({

                headerTitle:foundAid?.aidTitle,

                headerRight: () => (
                    <TouchableOpacity
                        style={SingleAidStyles.headerButton}
                        onPress={() => setBookMarked(!bookMarked)}
                    >
                        {bookMarked? <Ionicons name="bookmark" size={20} color="blue" />: <Ionicons name="bookmark-outline" size={20} color="black" />}
                    </TouchableOpacity>
                ),


            });
        }

        useEffect(() => {
            loadAidData()
        }, []);

        return (
            <ScrollView style={SingleAidStyles.container}>
                <Image source={currentAid?.imagedsc} style={SingleAidStyles.imageStyle} resizeMode="stretch"/>
                <View style={SingleAidStyles.why}>
                    <Text style={SingleAidStyles.whyText}>
                        {defaultLanguage?.language === "ENGLISH"? `Why ${currentAid?.aidTitle
                        }`:`Kwanini ${currentAid?.aidTitle
                        }`}
                    </Text>
                    <Text style={[SingleAidStyles.whyText, {marginTop:4, fontFamily:"Poppins-regular",}]}>
                        {currentAid?.why}
                    </Text>
                </View>

                <View style={SingleAidStyles.stepsView}>
                    <Text style={SingleAidStyles.whyText}>
                        {defaultLanguage?.language === "ENGLISH"? `First Aid Steps for: ${currentAid?.aidTitle
                        }`:`Huduma ya kwanza kwa: ${currentAid?.aidTitle
                        }`}
                    </Text>
                    <View style={SingleAidStyles.stepsView}>
                        {currentAid?.aidSteps.map((aid:aidStepType) => {
                            return(
                                <View style={SingleAidStyles.stepView} key={aid.id}>
                                    <Text style={[SingleAidStyles.whyText, {marginTop:4}]}>
                                        {aid.step}: {aid.title}
                                    </Text>
                                    <Image source={currentAid?.imagedsc} style={SingleAidStyles.stepImage} resizeMode="stretch"/>
                                    <Text style={[SingleAidStyles.stepDesc]}>
                                        {aid.description}
                                    </Text>
                                </View>
                            )}
                        )}
                    </View>
                </View>
                <View style={[SingleAidStyles.why, {marginTop: 5}]}>
                    <Text style={SingleAidStyles.whyText}>
                        {defaultLanguage?.language === "ENGLISH"? `How to prevent ${currentAid?.aidTitle
                        }`:`Nmna ya kuzuia ${currentAid?.aidTitle
                        }`}
                    </Text>
                    <Text style={[SingleAidStyles.whyText, {marginTop:4, fontFamily:"Poppins-regular",}]}>
                        {currentAid?.howToPrv}
                    </Text>
                </View>
            </ScrollView>
        )
    }

export default SingleAidScreen;
