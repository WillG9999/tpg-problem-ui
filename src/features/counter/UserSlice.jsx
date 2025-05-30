import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 'demo-user-123', // You can update this after login later
  },
  reducers: {
    setUserId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
