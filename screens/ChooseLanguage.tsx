import * as React from 'react';
import {View, Text, TouchableOpacity,Button } from 'react-native';


const ChooseLanguageScreen = () => {
    const [choosenLanguage, setchoosenLanguage] = React.useState('ENGLISH')

return(
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
     <Text style={{fontSize:18, fontFamily: 'Poppins-bold'}}>QuickAid</Text>
     <Text style={{fontSize:13,  fontFamily: 'Poppins-bold', marginTop:12}}>Choose language</Text>

     <TouchableOpacity
     style={{borderColor:'pink', width:"80%", borderRadius:1, }}
     >
        SWAHILI
     </TouchableOpacity>

     <TouchableOpacity
     style={{borderColor:'pink', width:"80%", borderRadius:1}}
     >
        SWAHILI
     </TouchableOpacity>

     <View style={{marginTop:10}}>
     <Button title='Next'/> 
     </View>
    </View>
)
}

export default ChooseLanguageScreen;