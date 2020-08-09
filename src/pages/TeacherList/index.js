import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

const TeacherList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])
  const [favoriteIds, setFavoriteIds] = useState([])

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (!response) return

      const ids = JSON.parse(response).map(({ id }) => id)
      setFavoriteIds(ids)
    })
  }

  const handleSubmit = () => {
    if (!subject || !weekDay || !time) return

    loadFavorites()

    api.get('/classes', { params: { subject, week_day: weekDay, time } })
      .then(response => {
        setTeachers(response.data)
        setIsFilterVisible(false)
      })
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Available Proffys"
        headerRight={(
          <BorderlessButton onPress={() => setIsFilterVisible(!isFilterVisible)}>
            <Feather name="filter" size={20} color='#fafafa' />
          </BorderlessButton>
        )}
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              placeholder="What is the subject?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput
                  style={styles.input}
                  placeholder="What is the day?"
                  placeholderTextColor="#c1bccc"
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="At what time?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map(teacher => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favoriteIds.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList
