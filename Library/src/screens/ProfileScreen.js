import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { useAuth } from '../Hook/useAuth';


export default function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    FullName: '',
    Dob: '',
  });

  useEffect(() => {
    if (user && user.email) {
      fetchUserData(user.email);
    }
  }, [user]);

  const fetchUserData = () => {
    const apiURL = `http://192.168.1.4:5000/api/users/getAllUsers`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setUserData({
          FullName: resJson.FullName,
          Dob: resJson.Dob,
        });
      })
      .catch((error) => {
        console.log('Error fetching user data: ', error);
      });
  };

  const handleUpdateProfile = () => {
    const updatedData = {
      FullName: userData.FullName,
      Dob: userData.Dob,
    };

    fetch('http://192.168.1.4:5000/api/users/updateUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, ...updatedData }), 
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log('User data updated successfully:', resJson);
      })
      .catch((error) => {
        console.log('Error updating user data: ', error);
      });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>EDIT YOUR PROFILE</Header>
      <TextInput
        label="Full Name"
        value={userData.FullName}
        onChangeText={(text) => setUserData({ ...userData, FullName: text })}
      />
      <TextInput
        label="Date of Birth"
        value={userData.Dob}
        onChangeText={(text) => setUserData({ ...userData, Dob: text })}
      />
      <Button mode="contained" style={{ marginTop: 24 }} onPress={handleUpdateProfile}>
        UPDATE PROFILE
      </Button>
    </Background>
  );
}



