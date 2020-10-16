const { createSlice } = require('@reduxjs/toolkit')

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    pageTitle: 'Home',
  },
  reducers: {
    setPageTitle: (state, { payload }) => {
      state.pageTitle = payload
    },
  },
})

export const { reducer } = pageSlice
export const { setPageTitle } = pageSlice.actions
