import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import fetchUsers  from './userApi'

//type user
type Users = {
  id: number
  name: string
  title: string
}

//type state
type InitialState = {
  loading : boolean,
  users: Users[]
  error: string
}

// State of the component
const initialState: InitialState = {
  loading: false,
  users: [],
  error: ''
}

//reducers and actions created automatically by adding suffix "Slice"
//createAsyncThunk in ./userApi Generates pending, fulfilled and rejected action types automatically
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, 
      (state, action: PayloadAction<Users[]>) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'something went wrong'
    })
  }
})

export default userSlice.reducer
