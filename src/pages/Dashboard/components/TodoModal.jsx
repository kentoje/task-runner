import React, { useState } from 'react'
import { Modal, Text, Button, TextInput } from 'react-native'
import { v4 as uuidv4 } from 'uuid'

const TodoModal = ({ modalVisible, closeModal, currentUser, addTodo }) => {
  const [inputValue, setInputValue] = useState('')

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
          setInputValue(event)
        }}
        value={inputValue}
      />
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

export default TodoModal
