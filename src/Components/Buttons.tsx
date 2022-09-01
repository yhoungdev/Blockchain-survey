
import {Button} from '@chakra-ui/react'
interface ButtonModel {
    value ?: string,
    bg ?: string,
    children?: string
}

export const Buttons =({children , bg }:ButtonModel)=> {
    return (
        <>
            <Button bg={bg} py={'1.6em'} px={'1.6em'} w={'100%'} _hover={{}}>
                {children}
            </Button>
        </>
    )
}