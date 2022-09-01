import { Box, Flex, Textarea, Text } from "@chakra-ui/react"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import StepContainer from "../Layouts/StepContainer"
//@ts-ignor

export const Description =() => {
    return(
        <>

            <StepContainer step={1} title={'Breif description about team and background'}>
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
                  <Textarea placeholder="Are you capable of funding the project, How many sol are you holding? write a bried description
                        about you and also specify how many sol you are holding " 
                  my={'1em'} h={'30vh'} variant={'filled'} />

                <Buttons>Next Step</Buttons>
                </Box>

            </StepContainer>
            
        </>
    )
}