import { Box, Flex, Textarea, Text } from "@chakra-ui/react"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import { useNavigate } from "react-router-dom"
import StepContainer from "../Layouts/StepContainer"
//@ts-ignor

export const Description =() => {
    const navigate = useNavigate()
    return(
        <>

            <StepContainer step={2} title={'Breif description about team and background'}>
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
                  <Textarea placeholder="Are you capable of funding the project, How many sol are you holding? write a bried description
                        about you and also specify how many sol you are holding " 
                  my={'1em'} h={'30vh'} variant={'filled'} />

                    <Flex gap={'1em'}>
                      <Buttons onClick={ e => history.back()}>Back</Buttons>
                      <Buttons bg={'#7f58e2'} color={'#fff'} onClick={ e => navigate('/verification')}>Next Step</Buttons>
                    </Flex>
                </Box>

            </StepContainer>
            
        </>
    )
}