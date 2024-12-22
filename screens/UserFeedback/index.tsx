import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, ActivityIndicator, TouchableOpacity} from 'react-native';
import {FeedBackStyles} from "../../globalStyles/FeedBackStyles";
import {useQuickAidContext} from "../../Context";

const
    UserFeedback = () => {
        const {defaultLanguage} = useQuickAidContext();
        const [email, setEmail] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        return (
            <ScrollView style={FeedBackStyles.container} contentContainerStyle={{alignItems:"center"}}>
                <View style={FeedBackStyles.aboutHero}>
                    <View>
                        <Text style={[FeedBackStyles.hiText,{marginTop:30}]}>
                            {defaultLanguage?.language === "ENGLISH"?"The fastest way to get help.":"Njia haraka zaidi ya kupata msaada"}
                        </Text>
                        <Text style={[FeedBackStyles.hiText,{
                            fontFamily: "Poppins-regular", fontSize: 13
                        }]}>
                            {defaultLanguage?.language === "ENGLISH"?"We care about your health and well-being.":"Tunajali ustawi wa afya yako."}
                        </Text>
                    </View>
                    <View style={FeedBackStyles.imageContainer}>
                        <Image source={require("../../assets/quickaid.png")} style={FeedBackStyles.imageStyle} resizeMode="contain"/>
                    </View>

                </View>

                <Text style={FeedBackStyles.signUpText}>{defaultLanguage?.language === "ENGLISH"?"Give us a feedback":"Toa maoni yako."}</Text>

                <View style={FeedBackStyles.nameStyles}>
                    <TextInput
                        placeholder="First name"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={[FeedBackStyles.halfInput]}
                    />
                    <TextInput
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={setLastName}
                        style={[FeedBackStyles.halfInput]}
                    />
                </View>

                <TextInput
                    placeholder="Email: JohnDoe@gmail.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    style={[FeedBackStyles.input]}
                />
                <TextInput
                    placeholder="Message"
                    keyboardType="default"
                    value={phoneNumber}  // Value is set to phoneNumber state
                    onChangeText={setPhoneNumber}  // Updates phoneNumber state
                    style={[FeedBackStyles.input, {height: 90}]}
                />

                {isLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        // style={styles.loader}
                    />
                ) : (
                    <TouchableOpacity
                        style={FeedBackStyles.customButton}
                        // onPress={handleSignup}
                    >
                        <Text style={FeedBackStyles.buttonText}>Send Feedback</Text>
                    </TouchableOpacity>
                )}
                {/*<View style={FeedBackStyles.horizontalLine}></View>*/}
                <Text style={FeedBackStyles.footerText}>Copyright @ {new Date().getFullYear()} QuickAid</Text>
            </ScrollView>
        )
    }

export default UserFeedback;
