import {createSlice} from '@reduxjs/toolkit';
import { fetchUsers } from '../utils/thunks';

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        selectedUser:null,
        profile:false,
        chat:false,
        subChat:null,
        users:[]
    },
    reducers:{
        setSelectedUser: (state,action) => {
            state.selectedUser = action.payload;
        },
        setProfile: (state,action) => {
            state.profile = action.payload;
        },
        setChat: (state,action) => {
            state.chat = action.payload;
        },
        setSubChat: (state,action) => {
            state.subChat = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchUsers.pending,(state)=>{
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected,(state)=>{
        })
    }
})

export const { setSelectedUser, setProfile, setChat, setSubChat } = usersSlice.actions;
export default usersSlice.reducer;