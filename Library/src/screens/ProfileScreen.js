// import React, { useState } from 'react'
// import { TouchableOpacity, StyleSheet, View } from 'react-native'
// import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Header from '../components/Header'
// import Button from '../components/Button'
// import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
// import SelectDropdown from "react-native-select-dropdown";


// export default function ProfileScreen({ navigation }) {
//     return (
//         <Background>
//             <BackButton goBack={navigation.goBack} />
//                 <View style={{flex: 1, width: '100%', marginTop: '50%'}}>
//                     <Header >EDIT YOUR PROFILE</Header>
//                     <View >
//                         <Text>Full Name:</Text>
//                         <TextInput/>
//                     </View>
//                     <View style={{ flexDirection: 'row'}}>
//                         <View style={{flex: 1}}>
//                             <Text>Gender:</Text>
//                         </View>
//                         <SelectDropdown 
//                         onSelect={() => {}}
//                         />
//                     </View>
//                     <View style={{flexDirection: 'row'}}>
//                         <View style={{flex: 1}}>
//                             <Text>Birthday:</Text>
//                         </View>
//                         <Button
//                                 mode="outlined"
//                                 onPress={() => {}}
//                                 style={{margin: 12, flex: 1}}
//                             >
//                         </Button>
//                     </View>
//                     <Button
//                         mode="contained"
//                         style={{ marginTop: 24 }}
//                     >
//                         UPDATE PROFILE
//                     </Button>
//                 </View>
//         </Background>
//     );
// };

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import SelectDropdown from 'react-native-select-dropdown';

export default function ProfileScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 1, width: '100%', marginTop: '50%', paddingHorizontal: 20 }}>
        <Header style={{ marginBottom: 20 }}>EDIT YOUR PROFILE</Header>

        <View style={{ marginBottom: 20 }}>
          <Text>Full Name:</Text>
          <TextInput />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <View style={{ flex: 1 }}>
            <Text>Gender:</Text>
          </View>
          <View style={{ flex: 2 }}>
            <SelectDropdown onSelect={() => {}} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <View style={{ flex: 1 }}>
            <Text>Birthday:</Text>
          </View>
          <Button
            mode="outlined"
            onPress={() => {}}
            style={{ margin: 12, flex: 1 }}
          ></Button>
        </View>

        <Button mode="contained" style={{ marginTop: 24 }}>
          UPDATE PROFILE
        </Button>
      </View>
    </Background>
  );
}
