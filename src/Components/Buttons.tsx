//@ts-no-checks
//no-check
//no-checks
import {Button} from '@chakra-ui/react'
interface ButtonModel {
    value ?: string,
    bg ?: string,
    children?: string,
    color?:string,
    onClick?: string,
    fontWeight?:string ,
    _hover ?: string,
    isLoading?: string ,
    loadingText ?: string
}

export const Buttons =({children ,onClick, loadingText, isLoading, bg , _hover,  color , fontWeight}:ButtonModel)=> {
    return (
        <>  
                     
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}

            <Button bg={bg} onClick={onClick}    isLoading={isLoading} loadingText={loadingText} _hover={_hover} fontWeight={fontWeight} color={color} py={'1.6em'} px={'1.6em'} w={'100%'} _hover={{}}>
                {children}
            </Button>
        </>
    )
}