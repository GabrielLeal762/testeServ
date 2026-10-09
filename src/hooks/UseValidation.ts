import { InputProps } from "@/types/Formulario"
import { useEffect,useState } from "react"

import { useDispatch } from "react-redux";
import { setUpperPass,
    setNumberPass,
    setQtdCaractere,
    setSpecialCaractere } from "@/redux/pass/createPass";


    

export const UseValidation = (input: InputProps[]) => {

    const [formValues, setFormValues] = useState(input.map((inputs) => inputs.value || ""))
    const [valid, setValid] = useState<boolean>(false)
    const dispatch=useDispatch()



    useEffect(() => {
        
        const Validation = input.every((value, index) => {
            const valor = formValues[index]
            if (value.type === "email") {
                return /\S+@\S+\.\S+/.test(String(valor))

            }
            if (value.type === "password") {
                 const password = formValues[index]
               const widthPass=String(valor).length>=8 && String(valor).length<=16
               if(widthPass){
                dispatch(setQtdCaractere({qtdCaractere:true}))
                
               }else{ dispatch(setQtdCaractere({qtdCaractere:false}))}
               const upperCasePass= /[A-Z]/.test(String(password)) 
               if(upperCasePass){
                dispatch(setUpperPass({upperPass:true}))
                
               }else{dispatch(setUpperPass({upperPass:false}))}

               const specialCaracterPass=/[!@#$%^&*(),.?":{}|<>]/.test(String(password)); 
               if(specialCaracterPass){
                dispatch(setSpecialCaractere({specialCaractere:true}))
                
               }else{ dispatch(setSpecialCaractere({specialCaractere:false}))}
               const numberPass=/\d/.test(String(password));
               if(numberPass){
                dispatch(setNumberPass({numberPass:true}))
                
               }else{ dispatch(setNumberPass({numberPass:false}))}

               return widthPass && upperCasePass && specialCaracterPass && numberPass

            }
            return true
        })

        setValid(Validation)



    }, [formValues, input])

    const HandleChange = (index: number, input: string) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = input
            return newValue

        })

    }

    return { HandleChange, valid, formValues }


}
