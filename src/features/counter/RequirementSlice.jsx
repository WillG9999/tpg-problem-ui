import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const submitRequirement = createAsyncThunk(
  'requirement/submitRequirement',
  async ({ problemId, requirement }) => {
    const response = await fetch(`http://localhost:8080/api/define/create/requirement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': 'demo-user-123',
      },
      body: JSON.stringify({ problemId, text: requirement }),
    });
    if (!response.ok) {
      throw new Error('Failed to submit requirement');
    }
    return await response.json();
  }
);

const requirementSlice = createSlice({
  name: 'requirement',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitRequirement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitRequirement.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitRequirement.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default requirementSlice.reducer;
