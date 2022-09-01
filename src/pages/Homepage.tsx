import { Box, Button, Container , Text} from "@chakra-ui/react";
import { ContainerLayout } from "../Layouts/ContainerLayou";

const Homepage =() => {
    return (
        <>

         <Box>
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
           
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
                <Container maxW={['100%' , '50%']}>
                    <Box display={'flex'} flexDir={'column'} h={'80vh'} alignContent={'center'} justifyContent={'center'}>
                        <Text textAlign={'center'} className={'font'} fontWeight={'black'} 
                        fontSize={['1.8em','3em']} p={'1.2em'} >
                            Fillup crypto survey in Due Minutes Lets know more 
                        </Text>
                        
                                   
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
                        <center>
                        
                        <Button w={'30%'} _hover={{bg: '#000'}} bg={'#7f58e2'} color={'#fff'} py={'1.6em'} mx={'auto'}>
                            Fill Survey
                        </Button>

                                   
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
                        </center>
                    </Box>
                </Container>
       
         </Box>
        
        </>
    )
}

export default Homepage;