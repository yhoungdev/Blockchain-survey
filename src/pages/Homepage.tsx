import { Box, Button, Container , useDisclosure, Text} from "@chakra-ui/react";
import { ContainerLayout } from "../Layouts/ContainerLayou";
import {useAuth0} from '@auth0/auth0-react'
import ModalContainer from "../Components/ModalContainer";
import { Inputs } from "../Components/Inputs";
import { Buttons } from "../Components/Buttons";
import { useState } from "react";

import {postData} from '../utils/request'
import { generate } from 'generate-password';



const Homepage =() => {

  
    

    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [name , setName ] = useState()
    const [confirmPassword , setConfirmPassword ] = useState()

    //state to gerate random password 
    const [ randomPassword , setRandomePassword ] = useState();


    const [loader , setLoader ] = useState(false)
    //initlized login
    const {isOpen: isReg , onOpen:onReg , onClose: closeReg } = useDisclosure()


    //function to gerate password 
    const randomPass = () => {
        const items = ['!Solnawe3r453','!Polnawe3eq453',
        'Uo!olnawe3r453', '!pZNo@nawe3r453',
        '@Sol!ioxwgrpz', 'Pqrstuv@d23'    
         ]
        //now generate rand int 
        const generatePassword = items[Math.floor(Math.random()*items.length)]
        setRandomePassword(generatePassword)
        console.log(generatePassword)

        console.log(randomPassword)
    }

    //handle form creation 
    const createAccount = async () => {

        
        setLoader(true)

        const payload = {
            name: name,
            email : email,
            password : randomPassword ,
            confirmPassword: randomPassword
        }
        try {
           
            const response =  await postData('/admin/signup', payload );
            setLoader(false);
               //check if status is sucess 
               if(response.response._id) {
                  //set item to localStorage 
                
               } 



               
        } catch ( error ) {
            
            setLoader(false)
        }
    }
    
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
                        
                        <Button w={'30%'} _hover={{bg: '#000'}} 
                        
                        bg={'#7f58e2'} color={'#fff'} py={'1.6em'} mx={'auto'}
                        onClick={ e => onReg()}
                        
                        >
                            Login 
                        </Button>

                                   
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
                        </center>
                    </Box>
                </Container>

                <ModalContainer isOpen={isReg} onClose={closeReg}>

                        <Box my={'0.5em'}>
                          <Inputs placeholder="Project Name " onChange={ e => setName(e.target.value)}/>
                        </Box>
                        <Inputs placeholder="Email" onChange={ e => setEmail(e.target.value)}/>
                        
                        <Box my={'1em'}>
                            <Text my={'0.5em'}>
                                The strings below is your password 
                            </Text>

                            

                            <Inputs disabled={true} value={randomPassword} placeholder={randomPassword <=0 ? 'Generate a password ' :'' }/>

                            <Button onClick={randomPass}>Generate Password</Button>
                        </Box>

                        <Buttons bg={'var(--primary-color)'} color={'#fff'}
                            loadingText={'Please Wait'}
                            isLoading={loader}
                            onClick={createAccount}
                            >
                            Sign up
                        </Buttons>
                </ModalContainer>
       
         </Box>
        
        </>
    )
}

export default Homepage;