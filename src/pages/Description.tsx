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

            <StepContainer step={2} title={'Brief description about the team'}>
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
                  <Textarea placeholder="Is the team capable of providing capital the project? What does the team intend to do with funds after mint out?" 
                  my={'1em'} h={'30vh'} variant={'filled'} />

                    <Flex gap={'1em'}>
                                 {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore */}
                      <Buttons onClick={ e => history.back()}>Back</Buttons>
                                   {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                             // @ts-ignore */}
                      <Buttons bg={'#7f58e2'} color={'#fff'} onClick={ e => navigate('/verification')}>Next Step</Buttons>
                    </Flex>
                </Box>

            </StepContainer>
            
        </>
    )
}