import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Hello ...</Header>
      <Button 
        mode="outlined"
        icon="account-circle">
        Edit profile
      </Button>
      <Button 
        mode="outlined"
        icon="book-open">
        Category
      </Button>
      <Button 
        mode="outlined"
        icon="progress-pencil">
        Progress
      </Button>
      <Button 
        mode="outlined"
        icon="file-chart">
        Statistic
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
