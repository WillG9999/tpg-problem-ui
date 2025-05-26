// store/problemSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Constants
const API_PROBLEM = 'http://localhost:8080/api/define/create/problem';
const API_REQUIREMENT = 'http://localhost:8080/api/define/create/requirement';

// Async: Submit a new problem
export const submitProblem = createAsyncThunk(
  'problem/submitProblem',
  async ({ data, userId }, thunkAPI) => {
    const payload = {
      ...data,
      pestle: data.pestle.join(','),
      location: data.location,
      created_by_user_id: userId,
    };

    const response = await fetch(API_PROBLEM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': userId,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Problem creation failed');
    const result = await response.json(); // must return `problem_id`!
    return { problemId: result.problem_id, problemDetails: payload };
  }
);

// Async: Submit all requirements for a problem
export const submitRequirements = createAsyncThunk(
  'problem/submitRequirements',
  async ({ requirements, problemId, userId }, thunkAPI) => {
    for (let req of requirements) {
      const res = await fetch(API_REQUIREMENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId,
        },
        body: JSON.stringify({
          problem_id: problemId,
          description: req,
          created_by_user_id: userId,
        }),
      });

      if (!res.ok) throw new Error('Requirement submission failed');
    }
    return true;
  }
);

const problemSlice = createSlice({
  name: 'problem',
  initialState: {
    createdProblemId: null,
    problemDetails: null,
    pendingRequirements: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addRequirement: (state, action) => {
      state.pendingRequirements.push(action.payload);
    },
    clearRequirements: (state) => {
      state.pendingRequirements = [];
    },
    resetProblemFlow: (state) => {
      state.createdProblemId = null;
      state.problemDetails = null;
      state.pendingRequirements = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitProblem.pending, (state) => {
        state.status = 'submitting';
        state.error = null;
      })
      .addCase(submitProblem.fulfilled, (state, action) => {
        state.status = 'submitted';
        state.createdProblemId = action.payload.problemId;
        state.problemDetails = action.payload.problemDetails;
      })
      .addCase(submitProblem.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(submitRequirements.fulfilled, (state) => {
        state.pendingRequirements = [];
      });
  },
});

export const { addRequirement, clearRequirements, resetProblemFlow } = problemSlice.actions;
export default problemSlice.reducer;
