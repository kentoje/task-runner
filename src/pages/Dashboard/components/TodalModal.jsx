import React from 'react'
import {
  Modal,
  Text,
  Button,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'

const TodalModal = ({
  modalVisible,
  closeModal,
  setNewTodo,
  currentUser,
  newTodo,
  addTodo,
}) => {
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
        <Text style={styles.title}>What do you need to do ?</Text>
        <TextInput
          onChangeText={(event) => {
            setNewTodo({ title: event })
          }}
          value={newTodo.title}
          style={styles.input}
          placeholder="Eat at korean restaurant"
        />
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button}>
            <Button
              onPress={() => {
                addTodo({
                  ...newTodo,
                  id: uuidv4(),
                  completed: false,
                  userId: currentUser.id,
                })
                setNewTodo({ title: '' })
                closeModal()
              }}
              title="Submit"
              color="#fff"
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.cancel]}>
            <Button
              onPress={() => {
                closeModal()
              }}
              title="Cancel"
              color="#fff"
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
    backgroundColor: '#3AB557',
  },
  cancel: {
    marginLeft: 24,
    backgroundColor: '#F3514E',
  },
})
export default TodalModal
