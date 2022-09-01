//@ts-ignor 

import { FormControl, Input } from "@chakra-ui/react"
interface FormItems {
    placeholder?: string ,
    onChange?: string 
}

export const Inputs =({ placeholder, onChange }:FormItems) => {
    return (
        <>
            <FormControl>
                {/* @ts-nocheck */}
                 <Input placeholder={placeholder} variant={"filled"} py={'1.5em'}/>
                 
            </FormControl>
        
        </>
        
    )
}

