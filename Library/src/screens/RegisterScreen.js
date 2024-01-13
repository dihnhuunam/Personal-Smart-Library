import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const auth = FIREBASE_AUTH;
  

  const signUp = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email.value, password.value);
      Alert.alert('Registration Successful', 'You have successfully registered!', [
        {
          text: 'Done, please login',
          onPress: () => {
            navigation.replace('LoginScreen');
          },
          
        },
        {
            text: 'Continue sign up',
            onPress: () => {
            },
            
          },
      ]);
    }
    catch (error){
      console.log(error);
      alert('Sign in failed ' +error.message );
    }
    finally {
      setLoading(false);
    }
  }
//   const onSignUpPressed = () => {
//     const nameError = nameValidator(name.value)
//     const emailError = emailValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError || nameError) {
//       setName({ ...name, error: nameError })
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Full Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Date Of Birth"
        returnKeyType="next"
        value={dob.value}
        onChangeText={(text) => setDob({ value: text, error: '' })}
        error={!!dob.error}
        errorText={dob.error}
      />
        <TextInput
        label="Gender"
        returnKeyType="next"
        value={gender.value}
        onChangeText={(text) => setGender({ value: text, error: '' })}
        error={!!gender.error}
        errorText={gender.error}
      />      
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      {registrationSuccess && (
        <View>
          <Text style={{ color: 'green', marginTop: 10 }}>Registration Successful!</Text> 
        </View>
      )}

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})