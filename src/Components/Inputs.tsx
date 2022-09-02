//@ts-ignor 
//@typescript-nochecks
//@ts-no-check
//@no-check
import { FormControl, Input } from "@chakra-ui/react"
interface FormItems {
    placeholder?: string ,
    onChange?: string ,
    value ?: string ,
    type ?: string ,
    disabled?: boolean
}

export const Inputs =({ placeholder, onChange, value , type, disabled }:FormItems) => {
    return (
        <>
            <FormControl>
                {/* @ts-nocheck */}
                 <Input placeholder={placeholder} value={value}
                 disabled={disabled} onChange={onChange}
                 type={type} variant={"filled"} py={'1.5em'}/>
                 
            </FormControl>
        
        </>
        
    )
}

