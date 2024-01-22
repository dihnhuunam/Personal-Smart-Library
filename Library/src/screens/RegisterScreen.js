import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });
  const [dob, setDob] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const onSignUpPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);  

    try {
        await fetch('http://192.168.159.1:5000/api/users/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FullName: fullName.value,
          Email: email.value,
          Password: password.value,
          Gender: gender.value,
          Dob: dob.value,
        }),
      });
    } catch (error) {
      console.error('Error connecting to the server:', error);
    }

    try {
      const response = await createUserWithEmailAndPassword(auth, email.value, password.value);
      if (response) {
        // User registered successfully with Firebase
        alert('Registration Successful!');
        navigation.replace('LoginScreen');
      }
    } catch (error) {
      console.error('Error registering user with Firebase:', error);
      alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
     }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Full Name"
        returnKeyType="next"
        value={fullName.value}
        onChangeText={(text) => setFullName({ value: text, error: '' })}
        error={!!fullName.error}
        errorText={fullName.error}
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
        loading={loading}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
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
});
