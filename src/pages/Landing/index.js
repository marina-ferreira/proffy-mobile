import React from 'react'
import { View, Image, Text } from 'react-native'

import landingImg from '../../assets/images/landing.png'
import styles from './styles'

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome {'\n'}
        <Text style={styles.titleBold}>What do you want to do?</Text>
      </Text>
    </View>
  )
}

export default Landing
