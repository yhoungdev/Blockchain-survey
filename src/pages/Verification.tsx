//@ts-no-checks
import { Box, Flex, Button, Image, Textarea, Text } from "@chakra-ui/react"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import {BiUser} from 'react-icons/bi'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import StepContainer from "../Layouts/StepContainer"
//@ts-ignor

export const Verification =() => {
    return(
        <>

            <StepContainer step={3} title={'Single & Multi Verification'} >
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}


                    <Box>


                        <Flex  gap={'2em'} mb={"2em"}>
                            
                            <Buttons>
                                         
                            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore */}
                                <BiUser size={'1.5em'}/>
                            </Buttons>

                            <Buttons>
                                         
                                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                               <AiOutlineUsergroupAdd size={'1.5em'}/>
                            </Buttons>
                        </Flex>

                        <Box>
                            <Text mb={'1em'}> I Want this </Text>
                        </Box>


                        
                    </Box>

                    <Flex gap={'1em'} flexDir={['column-reverse']}>
                                 {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                         // @ts-ignore */}
                      <Buttons onClick={ e => history.back()}>Back</Buttons>
                      <Buttons bg={'#7f58e2'} color={'#fff'}>Next Step</Buttons>
                    </Flex>
                </Box>

            </StepContainer>
            
        </>
    )
}