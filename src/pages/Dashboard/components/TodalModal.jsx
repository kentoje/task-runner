import React from 'react'
import { Modal, Text, Button, TextInput } from 'react-native'
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
      visible={modalVisible}
      onRequestClose={() => {
        closeModal()
      }}
    >
      <Text>Add a brand new Todo!</Text>
      <TextInput
        onChangeText={(event) => {
          setNewTodo({ title: event })
        }}
        value={newTodo.title}
      />
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
        color="coral"
      />
      <Button
        onPress={() => {
          closeModal()
        }}
        title="Cancel"
        color="black"
      />
    </Modal>
  )
}

export default TodalModal
