import React, { useState } from 'react'

import {
  Modal,
  Button,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import AppText from '../../../components/AppText'

const TodalModal = ({ modalVisible, closeModal, currentUser, addTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const cancelBackgroundColor = Platform.OS === 'android' ? 'transparent' : '#F3514E'
  const submitBackgroundColor =
    Platform.OS === 'android' ? 'transparent' : !inputValue.length ? '#EFEFEF' : '#007BC3'

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={modalVisible}
      onRequestClose={() => {
        closeModal()
      }}
    >
      <View style={styles.container}>
        <AppText style={styles.title}>What do you need to do?</AppText>
        <TextInput
          onChangeText={(event) => {
            setInputValue(event)
          }}
          value={inputValue}
          style={styles.input}
          placeholder="Eat at korean restaurant"
        />
        <View style={styles.buttons}>
          <TouchableHighlight
            style={{
              ...styles.button,
              backgroundColor: submitBackgroundColor,
            }}
            underlayColor={'#E9E9E944'}
          >
            <Button
              onPress={() => {
                addTodo({
                  id: uuidv4(),
                  title: inputValue,
                  completed: false,
                  userId: currentUser.id,
                })
                setInputValue('')
                closeModal()
              }}
              title="Submit"
              color={Platform.OS === 'ios' ? '#fff' : '#007BC3'}
              disabled={!inputValue?.length}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              ...styles.button,
              ...styles.cancel,
              backgroundColor: cancelBackgroundColor,
            }}
            underlayColor={'#E9E9E944'}
          >
            <Button
              onPress={() => {
                closeModal()
              }}
              title="Cancel"
              color={Platform.OS === 'ios' ? '#fff' : '#F3514E'}
            />
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  title: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 4,
    fontSize: 16,
    borderColor: '#DFDFDF',
    backgroundColor: '#F9F9F9',
    borderWidth: 1.5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // justifyContent: 'center',
  },
  button: {
    flex: 1,
    // padding: 8,
    fontSize: 16,
    borderRadius: 4,
  },
  cancel: {
    marginLeft: 8,
  },
})
export default TodalModal
