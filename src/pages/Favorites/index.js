import React from 'react'
import { View, Image, Text, TouchableOpacity , ImageBackground} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'

import teachImg from '../../assets/images/give-classes-background.png'

import styles from './styles'

const Favorites = () => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <PageHeader title="My Favorite Proffys" />
    </View>
  )
}

export default Favorites
