import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NomeBuscar = {
  nome: string;
};

const initialState: NomeBuscar = {
  nome: "",
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    pushName: (state, action: PayloadAction<NomeBuscar>) => {
      state.nome = action.payload.nome;
    },
  },
});

export const { pushName } = ProfileSlice.actions;

export default ProfileSlice.reducer;
