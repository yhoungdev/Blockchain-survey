import { Container } from "@chakra-ui/react"
interface ContainerModel {
    children?:string 
}


export const ContainerLayout =({children}:ContainerModel) => {
    return (
        <>

            <Container  maxW={['100%' , '35%']} mx={'auto'}>
                {children}
            </Container>
        
        </>
    )
}