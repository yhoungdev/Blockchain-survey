import { Children } from "react"

interface ButtonModel {
    value ?: string,
    bg ?: string,
    children?: string
}

export const Button =({children , bg }:ButtonModel)=> {
    return (
        <>
            <Button bg={bg}>
                {children}
            </Button>
        </>
    )
}