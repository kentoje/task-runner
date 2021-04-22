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
  const submitBackgroundColor = Platform.OS === 'android' ? 'transparent' : '#3AB557'

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
              color={Platform.OS === 'ios' ? '#fff' : '#3AB557'}
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
    padding: 8,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 16,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    fontWeight: '500',
    fontSize: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  button: {
    padding: 8,
    fontSize: 16,
  },
  cancel: {
    marginLeft: 24,
  },
})
export default TodalModal
