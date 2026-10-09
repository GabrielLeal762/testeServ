import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { UsuarioRedux } from "@/types"




type ProfileState=Omit<UsuarioRedux, "nome"|"password"|"administrador"|"_id">


const initialState:ProfileState={
    email:"",
    menssage:'' 
}

const ProfileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{
        setStateProfile:(
            state,
            action:PayloadAction<ProfileState>
        )=>{state.email=action.payload.email},

        setMenssage:(
            state,
            action:PayloadAction<string>
        )=>{state.menssage=action.payload}
        
    }
})


export const {setStateProfile,setMenssage}=ProfileSlice.actions

export default ProfileSlice.reducer