// store.js
import { configureStore } from '@reduxjs/toolkit';
import problemReducer from '../ProblemSlice';
import userReducer from '../UserSlice'; // adjust path as needed
import requirementReducer from '../RequirementSlice'; // adjust path as needed

const store = configureStore({
  reducer: {
    problem: problemReducer,
        user: userReducer,
    requirement: requirementReducer,

    
  },
});

console.log('✅ Store loaded');
console.log('✅ Store loaded with reducers:', store.getState());




export default store;
