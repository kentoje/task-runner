import React from 'react'
import { Modal, Text, Button, TextInput } from 'react-native'

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
          setNewTodo({
            id: new Date().toISOString(),
            userId: currentUser.id,
            title: event,
            completed: false,
          })
        }}
        value={newTodo.title}
      />
      <Button
        onPress={() => {
          addTodo(newTodo)
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
