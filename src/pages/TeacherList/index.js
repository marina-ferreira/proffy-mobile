import React from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

const TeacherList = () => {

  return (
    <View style={styles.container}>
      <PageHeader title="Available Proffys">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Subject</Text>
          <TextInput
            style={styles.input}
            placeholder="What is the subject?"
            placeholderTextColor="#c1bccc"
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Week Day</Text>
            <TextInput
              style={styles.input}
              placeholder="What is the day?"
              placeholderTextColor="#c1bccc"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Time</Text>
            <TextInput
              style={styles.input}
              placeholder="At what time?"
              placeholderTextColor="#c1bccc"
            />
          </View>
        </View>
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList
