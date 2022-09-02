import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

interface ModalModel {

    isOpen ?: string,
    onOpen ?: string ,
    onClose ?: string,
    children ?: string 
    
}


const ModalContainer =({isOpen , onOpen, children , onClose } : ModalModel) => {
    return (
        <>
        
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             {children}
          </ModalBody>

        </ModalContent>
      </Modal>
        
        </>
    )
}

export default ModalContainer;