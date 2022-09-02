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
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore   */}
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome</ModalHeader>
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