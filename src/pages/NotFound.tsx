import { Box, Text, Image, Button } from "@chakra-ui/react";
const NotFound =() => {
    return (
        <>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
          <center>
          <Box >
             <Image boxSize={'300px'} src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658637263/People_search-cuate_vwqqbv.svg'} />
          
          
           </Box>

           <Text my={'1em'} textAlign={'center'}> The page is not Found </Text>

           <Button w={'10%'} _hover={{bg: '#000'}} bg={'#7f58e2'} 
            onClick={ e => history.back(    )}
           color={'#fff'} py={'1.6em'} mx={'auto'}> Reload </Button>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore */}
          </center>

        
        </>
    )
}

export default NotFound ;