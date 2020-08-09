import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useFocusEffect(() => {
    loadFavorites()
  })

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      response && setFavorites(JSON.parse(response))
    })
  }

  return (
    <View style={styles.container}>
      <PageHeader title="My Favorite Proffys" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites
