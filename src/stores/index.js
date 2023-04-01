import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './reducers/users';

export const store = configureStore({
    reducer:{
        users: UsersReducer
    }
})