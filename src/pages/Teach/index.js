import React from 'react'
import { View, Image, Text, TouchableOpacity , ImageBackground} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import teachImg from '../../assets/images/give-classes-background.png'

import styles from './styles'

const Teach = () => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachImg}
        style={styles.imgBg}
        resizeMode="contain"
      >
        <Text style={styles.title}>Do you want to be a Proffy?</Text>
        <Text style={styles.description}>
          To get started, you need to register a teacher account on the web platform.
        </Text>
      </ImageBackground>

      <RectButton
        onPress={goBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Got it!</Text>
      </RectButton>
    </View>
  )
}

export default Teach
