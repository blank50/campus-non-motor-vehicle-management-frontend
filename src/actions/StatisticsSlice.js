import { createSlice} from '@reduxjs/toolkit';

export const StatisticsSlice = createSlice({
    name: 'Statistics',
    initialState: {
        expenseAmountPerCategory: [],
    },
    reducers: {
        setExpensesAmountPerCategory: (state, action) => {
            return { ...state, expenseAmountPerCategory: [...action.payload]};
        }
    }
}) 
  
export default StatisticsSlice.reducer;
