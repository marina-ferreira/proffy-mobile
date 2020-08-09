import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

const TeacherItem = ({ teacher, favorited }) => {
  const { subject, cost, name, avatar, whatsapp, bio } = teacher
  const [isFavorite, setIsFavorite] = useState(favorited)

  const handleWhatsapp = () => {
    api.post('connections', { user_id: teacher.id })
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`)
  }

  const handleToggleFavorite = async () => {
    const storageFavorites = await AsyncStorage.getItem('favorites')
    const favorites = storageFavorites ? JSON.parse(storageFavorites) : []

    if (isFavorite) {
      const filteredFavs = favorites.filter(({ id }) => id !== teacher.id)
      await AsyncStorage.setItem('favorites', JSON.stringify(filteredFavs))
    } else {
      favorites.push(teacher)
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
    }

    setIsFavorite(!isFavorite)
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ url: avatar }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Hour rate {'  '}
          <Text style={styles.priceValue}>R$ {cost}</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton,
              isFavorite ? styles.favorited : {}
            ]}
          >
            {isFavorite
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={handleWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Send Message</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
