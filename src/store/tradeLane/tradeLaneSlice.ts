import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api";
import { RootState } from "..";

export const fetchPorts = createAsyncThunk(
  "ports",
  async (_, { signal, rejectWithValue }) => {
    try {
      return await api.request("/ports", { signal });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchMarketRates = createAsyncThunk(
  "marketRates",
  async (
    params: { origin: string; destination: string },
    { signal, rejectWithValue },
  ) => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("origin", params.origin.toString());
      queryParams.append("destination", params.destination.toString());

      return await api.request("/rates" + queryParams.toString(), { signal });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const tradeLaneSlice = createSlice({
  name: "tradeLane",
  initialState: {
    isLoading: false,
    ports: [],
    marketRates: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPorts.pending.toString()]: state => {
      state.isLoading = true;
    },
    [fetchPorts.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.ports = action.payload.data;
    },
    [fetchMarketRates.pending.toString()]: state => {
      state.isLoading = true;
    },
    [fetchMarketRates.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.marketRates = action.payload.data;
    },
  },
});

export const selectPorts = (state: RootState) => state.tradeLane.ports;
export const selectMarketRates = (state: RootState) =>
  state.tradeLane.marketRates;

export default tradeLaneSlice.reducer;
