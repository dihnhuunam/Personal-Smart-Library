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
    // Check if user is available before fetching data
    if (user && user.email) {
      fetchUserData(user.email); // Pass the user's email
    }
  }, [user]); // Include user in the dependency array to ensure useEffect runs when user changes

  const fetchUserData = (email) => {
    const apiURL = `http://192.168.1.4:5000/api/users/getUserByEmail?email=${email}`; // Update your API endpoint
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
    // Prepare the updated data
    const updatedData = {
      FullName: userData.FullName,
      Dob: userData.Dob,
      // Add other fields as needed
    };

    // Perform the PUT request to update the user data
    fetch('http://192.168.1.4:5000/api/users/updateUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, ...updatedData }), // Pass the user's email
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

