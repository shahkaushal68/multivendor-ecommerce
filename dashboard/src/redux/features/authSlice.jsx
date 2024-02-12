import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = authSlice.actions

export default authSlice.reducer