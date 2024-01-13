import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import React from 'react';

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Hello {data.FullName}</Header>
      <Button 
        mode="outlined"
        icon="account-circle"
        onPress={() => {navigation.navigate('ProfileScreen')}}
        >
        Edit profile
      </Button>
      <Button 
        mode="outlined"
        icon="book-open"
        onPress={() => {navigation.navigate('CategoryScreen')}}
      >
        Category
      </Button>
      <Button 
        mode="outlined"
        icon="progress-pencil"
        onPress={() => {navigation.navigate('MyLibraryScreen')}}    
      >
        My Library
      </Button>
      <Button
        mode="outlined"
        icon="logout"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
