/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Center, Button, Modal, Text} from 'native-base';

export default function ModalComponent({header, body, isOpened}) {
  const [showModal, setShowModal] = useState(isOpened);
  console.log('Modal ', showModal);
  return (
    <Center>
      {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" bg={'red.300'}>
          <Modal.CloseButton />
          <Modal.Header>{header}</Modal.Header>
          <Modal.Body>
            <Text>{body}</Text>
          </Modal.Body>
          <Modal.Footer bg={'red.300'}>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                Go Back
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
