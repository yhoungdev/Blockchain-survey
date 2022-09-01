import { Box, Flex, Text } from "@chakra-ui/react";
import { ContainerLayout } from "./ContainerLayou"

interface StepModel {
    children?: string ,
    step?: number ,
    title?: string
}
const StepContainer =({children , step, title}: StepModel) => {
    return (
        <>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
                <ContainerLayout>
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
                    <Flex bg={'#fff'} p={'2em'} borderRadius={'0.5em'} my={'2em'} flexDir={'column'} h={'100%'} justifyContent={'center'}>
                    <Box fontWeight={'bold'} my={"1em"}>
                        <Text fontWeight={'bold'}>{step} /3</Text>

                        <Text my={'1em'} fontWeight={'bold'} fontSize={'1.6em'}>{title }</Text>
                     </Box>

                     {children}

                    </Flex>
                </ContainerLayout>

        
                
         
        </>
    )
}

export default StepContainer;