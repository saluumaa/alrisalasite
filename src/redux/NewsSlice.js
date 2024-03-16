import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import customApi from '../utils/axios';
import { getToken } from '../utils/localStorage';

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/news');
    return response.data;
  } catch (error) {
    throw error;
  }
});

// const makeApiCall = async (endpoint, news, thunkAPI) => {
//   try {
//     // Retrieve the authentication token from localStorage
//     const token = getToken();
//     if (!token) {
//       throw new Error('User is not authenticated. Authentication token not found.');
//     }

//     // Construct the headers object with the Authorization header containing the token
//     const headers = {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'multipart/form-data'
//     };

//     const response = await customApi.post(endpoint, news,
//        { headers });

//     const data = response.data; 

//     if (response.status === 201 || response.status === 200) {
//       return { news: data };
//     }
//   } catch (error) {
//     console.error('Error in makeApiCall:', error);

//     if (error.response && (error.response.status === 401 || error.response.status === 422)) {
//       return thunkAPI.rejectWithValue(error.response.data.errors[0]);
//     }
//     return thunkAPI.rejectWithValue(error.response?.data.errors || 'Unknown error');
//   }
// };


// export const createNews = createAsyncThunk('news/createNews', async (news, ThunkAPI) => {
//   return await makeApiCall('/api/v1/news', news, ThunkAPI);
// });


export const createNews = createAsyncThunk(
  'news/createNews',
  async (formData, { rejectWithValue }) => {
    try {
      const token =  getToken()
      if (!token) {
        throw new Error('User is not authenticated. Authentication token not found.');
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', 
      };

      const response = await axios.post('http://localhost:3000/api/v1/news', formData, { headers });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// export const eraseNews = createAsyncThunk('news/eraseNews', async (id, { getState }) => {
//   const { user } = getState().user;

//   if (!user || !user.isAuthenticated || !user.tokens || !user.tokens.accessToken) {
//     throw new Error('User is not authenticated');
//   }

//   const headers = {
//     Authorization: `Bearer ${user.tokens.accessToken}`,
//   };

//   try {
//     await axios.delete(`http://localhost:3000/api/v1/news/${id}`, { headers });
//     return id; 
//   } catch (error) {
//     throw error;
//   }
// });


export const eraseNews = createAsyncThunk(
  'news/eraseNews',
  async (id, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('User is not authenticated. Authentication token not found.');
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Assuming newsId is sent as JSON
      };
      const response = await axios.delete(`http://localhost:3000/api/v1/news/${id}`, { headers });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.payload.news && typeof action.payload.news === 'object') {
          state.news = action.payload.news;
        } else {
          console.error('Invalid news data in payload');
        }
      })
    
      // .addCase(createNews.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   if (action.payload.news && action.payload.news.image_url) {
      //     // Append the image_url to the news object if available
      //     state.news.push({ ...action.payload.news, image_url: action.payload.news.image_url });
      //   } else {
      //     console.error('Invalid news data in payload');
      //   }
      // })

      .addCase(createNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(eraseNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(eraseNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.news = state.news.filter((item) => item.id !== action.payload);
      })
      .addCase(eraseNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
