import { Box, Flex, Text } from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import StepContainer from "../Layouts/StepContainer"
//@ts-ignor

export const Form =() => {

    const navigate = useNavigate()

    return(
        <>

            <StepContainer step={1} title={'Top Credibility'}>
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
                <Box display={'flex'} my={'0.5em'} flexDir={['column' , 'row']} gap={'1em'}>   
                    <Inputs placeholder="Project Name "/>
                    <Inputs placeholder="Project Name "/>
                </Box>

                <Box my={'1em'}>
                    <Text>Link</Text>
                    <Box display={'flex'} my={'1em'} flexDir={['column' , 'row']} gap={'1em'}>   
                    <Inputs placeholder="Project Name "/>
                    <Inputs placeholder="Project Name "/>
                    <Inputs placeholder="Project Name "/>
                </Box>

                <Flex flexDir={'column'} gap={'1em'}>
                    <Inputs placeholder="Project Name "/>
                    <Inputs placeholder="Project Name "/>
                </Flex>
                </Box>
                         {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
                <Buttons bg={'#7f58e2'} color={'#fff'} onClick={navigate('/description')}>Next Step</Buttons>
                </Box>

            </StepContainer>
            
        </>
    )
}