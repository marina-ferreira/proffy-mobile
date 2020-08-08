import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles'

const Landing = () => {
  const { navigate } = useNavigation()
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    const fetchConnections = async () => {
      const connections = await api.get('/connections')
      setTotalConnections(connections.data.total)
    }

    fetchConnections()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome {'\n'}
        <Text style={styles.titleBold}>What do you want to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={() => navigate('Study')}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </RectButton>

        <RectButton
          onPress={() => navigate('Teach')}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        A total of {totalConnections} {'\n'}
        connections achieved {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
