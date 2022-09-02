import { Box, Button, Container , useDisclosure, Text} from "@chakra-ui/react";
import { ContainerLayout } from "../Layouts/ContainerLayou";
import {useAuth0} from '@auth0/auth0-react'
import ModalContainer from "../Components/ModalContainer";
import { Inputs } from "../Components/Inputs";
import { Buttons } from "../Components/Buttons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
     /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  */
import {postData} from '../utils/request'
import { generate } from 'generate-password';



const Homepage =() => {

   

    const navigate = useNavigate();
    
 

    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [name , setName ] = useState()
    const [confirmPassword , setConfirmPassword ] = useState()

    //state to gerate random password 
    const [ randomPassword , setRandomePassword ] = useState();


    //user login 
    const [ loginEmail , setLoginEmail ] = useState();
    const [ loginPassword , setLoginPassword ] = useState()


    const [loader , setLoader ] = useState(false)
    //initlized login
    const {isOpen: isReg , onOpen:onReg , onClose: closeReg } = useDisclosure()
    const {isOpen: isSign , onOpen:onSign , onClose: closeSign } = useDisclosure()


    //function to gerate password 
    const randomPass = () => {
        const items = ['!Solnawe3r453','!Polnawe3eq453',
        'Uo!olnawe3r453', '!pZNo@nawe3r453',
        '@Sol!ioxwgrpz001', 'Pqrstuv@d23'    
         ]
        //now generate rand int 
        const generatePassword = items[Math.floor(Math.random()*items.length)]
             /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  */
        setRandomePassword(generatePassword)
        console.log(generatePassword)

        console.log(randomPassword)
    }

    //handle form creation 
    const createAccount = async () => {

        //now set email to create account 
        localStorage.setItem('savedEmail' , email);
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
              
               if(response.response.admin._id) {
                  //set item to localStorage 
                  localStorage.setItem('token' , response.response.admin._id)
                  navigate('/survey')

               } 



               
        } catch ( error ) {
            
            setLoader(false)
        }
    }


    useEffect(() => {
        if(localStorage.getItem('tokenId')) {
            navigate('/survey')
        } else {
            navigate('/')
        }
    }, [])


    //open sign in and close signup
    const openSign =() => {
        onSign()
        closeReg()
    }


    //open sign up and close signin
    const openSignup =() => {
        onReg()
        closeSign()
    }
    


    //login 
    const login=  async ()=> {

        setLoader(true)
      

        
            setLoader(true)
    
            const payload = {
               
                email : loginEmail,
                password : loginPassword ,
          
            }
            try {
               
                const response =  await postData('/admin/login', payload );
                setLoader(false);
                   //check if status is sucess 
                  
                   if(response.response.token) {
                      //set item to localStorage 
                      localStorage.setItem('tokenId' , response.response.token)
                      if(localStorage.getItem('tokenId')) {
                        navigate('/survey')
                      }
    
                   } 

    
    
                   
            } catch ( error ) {
                
                setLoader(false)
            }
        
            if(localStorage.getItem('tokenId')) {
                navigate('/survey')
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
                                          
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}

                <ModalContainer isOpen={isReg} onClose={closeReg}>

                        <Box my={'0.5em'}>
                                                      
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
                          <Inputs placeholder="Project Name " onChange={ e => setName(e.target.value)}/>
                        </Box>
                                                  
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
                        <Inputs placeholder="Email" onChange={ e => setEmail(e.target.value)}/>
                        
                        <Box my={'1em'}>
                            <Text my={'0.5em'}>
                                The strings below is your password 
                            </Text>

                            
                             {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore   */}
                            <Inputs disabled={true} value={randomPassword} placeholder={randomPassword <=0 ? 'Generate a password ' :'' }/>

                            <Button onClick={randomPass}>Generate Password</Button>
                        </Box>

                        <Buttons bg={'var(--primary-color)'} color={'#fff'}
                            loadingText={'Please Wait'}
                                                      
              /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */
                            isLoading={loader}
                                                      
              /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */
                            onClick={createAccount}
                            >
                            Sign up
                        </Buttons>

                        <Text my={'0.5em'} textAlign={'center'} cursor={'pointer'} onClick={openSign}>Sign In</Text>
                </ModalContainer>





                 {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore  */}
                <ModalContainer isOpen={isSign} onClose={closeSign}>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore  */}
                        <Inputs placeholder="Email" onChange={ e => setLoginEmail(e.target.value)}/>
                        
                        <Box my={'1em'}>
                           

                                 {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  */}   

                            <Inputs placeholder="paste password" onChange={ e => setLoginPassword(e.target.value)} />  
                        </Box>

                        <Buttons bg={'var(--primary-color)'} color={'#fff'}
                            loadingText={'Please Wait'}

                                 /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  */
                            isLoading={loader}
                                 /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  */
                            onClick={login}
                            >
                            Sign In
                        </Buttons>

                        <Text my={'0.5em'} textAlign={'center'} cursor={'pointer'} onClick={openSignup}>Sign up</Text>
                </ModalContainer>

                {/* Sign in */}
       
         </Box>
        
        </>
    )
}

export default Homepage;