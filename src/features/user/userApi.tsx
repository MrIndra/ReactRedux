import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

//createAsyncThunk Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.data)
  })

  export default fetchUsers