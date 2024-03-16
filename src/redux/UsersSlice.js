// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';  


// const initialState = {
//     users: [],
//     currentUser: JSON.parse(localStorage.getItem('currentUser')) ?? null,
//     isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) ?? false,
//     isAuthorized: JSON.parse(localStorage.getItem('isAuthorized')) ?? false,
//     loading: false,
//     error: false
// }

// const url = 'http://localhost:3000/api/v1/users';
// const customAPI = axios.create({
//     baseURL: 'http://localhost:3000',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })  

// const makeApiCall = async (endpoint, user, ThunkAPI) => {
//     try {
//         const response = await customAPI.post(endpoint, user);
//         const data  = await response.data;
//         const token = response.headers['x-auth-token'];

//         if (token) {
//             localStorage.setItem('currentUser', JSON.stringify(data));
//             localStorage.setItem('isAuthenticated', true);
//             localStorage.setItem('isAuthorized', data.isAdmin);
//         }
//     } catch (error) {
//         return ThunkAPI.rejectWithValue(error.response.data);
//     }
// }

// export const registerUser = createAsyncThunk('users/registerUser', async (user, ThunkAPI) => {
//     return await makeApiCall('/auth', user, ThunkAPI);
// })

// // export const loginUser = createAsyncThunk('users/loginUser', async (user, ThunkAPI) => {
// //     return await makeApiCall('/auth/login', user, ThunkAPI);
// // })
// export const loginUser = createAsyncThunk('users/loginUser', async (userCredentials) => {
//     try {
//       const response = await axios.post('http://localhost:3000/auth/sign_in', userCredentials);
  
//       // Check if the response contains user data and a role field (e.g., isAdmin)
//       const userData = response.data;
  
//       if (userData && userData.role) {
//         const isAdmin = userData.role === 'admin';
  
//         // Update the Redux state with the user information, isAuthenticated, and isAuthorized
//         return {
//           ...userData,
//           isAuthenticated: true,
//           isAuthorized: isAdmin,
//         };
//       } else {
//         // Handle the case where the response does not contain the expected data
//         throw new Error('Invalid response format');
//       }
//     } catch (error) {
//       // Handle login failure (optional)
//       throw error;
//     }
//   });

//  export const logoutUser = createAsyncThunk('users/logoutUser', async () => {
//     localStorage.removeItem('currentUser');
//    localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('isAuthorized');
//  })

// export const getUsers = createAsyncThunk(
//     'users/getUsers',
//     async (_, { rejectWithValue }) => {
//       try {
//         const response = await axios(url);
//         return response.data;
//       } catch (err) {
//         return rejectWithValue('Unable to fetch users');
//       }
//     }
//   );

//   export const createUser = createAsyncThunk(
//     'users/createUser',
//     async (user, { rejectWithValue }) => {
//       try {
//         const response = await axios.post(url, user);
//         localStorage.setItem('currentUser', JSON.stringify(response.data));
//         localStorage.setItem('isAuthenticated', true);
//         localStorage.setItem('isAuthorized', response.data.isAdmin);
//         return response.data;
//       } catch (err) {
//         return rejectWithValue('Unable to create user');
//       }
//     }
//   );

//     export const deleteUser = createAsyncThunk(
//         'users/deleteUser',
//         async (id, { rejectWithValue }) => {
//         try {
//             await axios.delete(`${url}/${id}`);
//             return id;
//         } catch (err) {
//             return rejectWithValue('Unable to delete user');
//         }
//         }
//     );

// const usersSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.currentUser = null;
//             state.isAuthenticated = false;
//             state.isAuthorized = false;
//         },
//         setAuthorized: (state, action) => {
//             state.isAuthorized = action.payload;
//           },
//     },

//     extraReducers: (builder) => {
//         builder
//         .addCase(registerUser.fulfilled, (state, action) => {
//             state.currentUser = action.payload;
//             state.isAuthenticated = true;
//             state.isAuthorized = action.payload.isAdmin;
//         })
//         .addCase(loginUser.fulfilled, (state, action) => {
//             state.currentUser = action.payload;
//             state.isAuthenticated = true;
//             state.isAuthorized = action.payload.isAdmin;
//         })
//         .addCase(logoutUser.fulfilled, (state) => {
//             state.currentUser = null;
//             state.isAuthenticated = false;
//             state.isAuthorized = false;
//         })
//         .addCase(getUsers.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(getUsers.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users = action.payload;
//         })
//         .addCase(getUsers.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         })
//         .addCase(createUser.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(createUser.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users.push(action.payload);
//         })
//         .addCase(createUser.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         })
//         .addCase(deleteUser.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(deleteUser.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users = state.users.filter((user) => user._id !== action.payload);
//         })
//         .addCase(deleteUser.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         })
//     }
// })

// export const {logout, setAuthorized} = usersSlice.actions;

// export default usersSlice.reducer;




// src/redux/UserSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const usersSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: [],
//     error: null,
//     isAuthorized: false,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       const { user, role } = action.payload;
//       state.user = user;
//       state.isAuthorized = true;
//       state.error = null;
//       state.user.role = role; 
//     },
    
//     setError: (state, action) => {
//       state.user = null;
//       state.isAuthorized = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthorized = false;
//       state.error = null;
//     },
//   },
// });

// export const { setUser, setError, logout } = usersSlice.actions;
// export const selectUser = (state) => state.user;


import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}, // Initialize as an object, not an array
    error: null,
    isAuthorized: JSON.parse(localStorage.getItem('isAuthorized')) ?? false,
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) ?? false,
  },
  reducers: {
    setUser: (state, action) => {
      const { user, role } = action.payload;
      state.user = { ...user, role }; // Ensure 'role' is set as part of the user object
      state.isAuthorized = true;
      state.isAuthenticated = true;
      state.error = null;
    },
    
    setError: (state, action) => {
      state.user = {};
      state.isAuthorized = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = {};
      state.isAuthorized = false;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { setUser, setError, logout } = usersSlice.actions;
export const selectUser = (state) => state.user;


export default usersSlice.reducer;




