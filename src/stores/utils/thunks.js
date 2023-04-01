import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async() => {
        try{
            const res = await axios.get('https://panorbit.in/api/users.json');
            // console.log(res.data.users)
            return res.data.users;
        }catch(err){
            console.log(err);
        }
    }
)