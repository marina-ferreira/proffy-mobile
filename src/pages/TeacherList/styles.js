import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  teacherList: {
    marginTop: -40
  },

  searchForm: {
    marginBottom: 0
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    backgroundColor: '#fff'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    height: 56,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361'
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  }
})

export default styles
