
import {createSlice,PayloadAction} from "@reduxjs/toolkit"





type ProfilePass={
    qtdCaractere:boolean,
    numberPass:boolean,
    specialCaractere:boolean,
    upperPass:boolean
}


const initialState:ProfilePass={
    qtdCaractere:false,
    numberPass:false,
    specialCaractere:false,
    upperPass:false
}


const ProfileSlicePass=createSlice({
    name:"password",
    initialState,
    reducers:{
        setQtdCaractere:(state,
            action:PayloadAction<Omit<ProfilePass,'numberPass'|'specialCaractere'|'upperPass' >>
        )=>{state.qtdCaractere=action.payload.qtdCaractere},
        setNumberPass:(state,
            action:PayloadAction<Omit<ProfilePass,'qtdCaractere'|'specialCaractere'|'upperPass' >>
        )=>{state.numberPass=action.payload.numberPass},
         setSpecialCaractere:(state,
            action:PayloadAction<Omit<ProfilePass,'qtdCaractere'|'numberPass'|'upperPass' >>
        )=>{state.specialCaractere=action.payload.specialCaractere},
         setUpperPass:(state,
            action:PayloadAction<Omit<ProfilePass,'qtdCaractere'|'numberPass'|'specialCaractere' >>
        )=>{state.upperPass=action.payload.upperPass},
    }
})


export const {setUpperPass,setSpecialCaractere,setNumberPass,setQtdCaractere}=ProfileSlicePass.actions
export default ProfileSlicePass.reducer



