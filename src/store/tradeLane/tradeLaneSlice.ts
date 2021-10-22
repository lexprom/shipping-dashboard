import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "src/api";
import MarketRate from "src/models/marketRate";
import Port from "src/models/port";
import { RootState } from "..";

export enum MarketRates {
  Low,
  Average,
  High,
}

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

      return await api.request("/rates?" + queryParams.toString(), { signal });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

interface TradeLineSlice {
  error: string;
  isLoading: boolean;
  firstPort: Port | null;
  secondPort: Port | null;
  currentMarketRateFilter: MarketRates;
  ports: Port[];
  marketRates: MarketRate[];
}

export const tradeLaneSlice = createSlice<TradeLineSlice, {}>({
  name: "tradeLane",
  initialState: {
    error: "",
    isLoading: false,
    firstPort: null,
    secondPort: null,
    currentMarketRateFilter: MarketRates.Low,
    ports: [],
    marketRates: [],
  },
  reducers: {
    updateFirstPort: (state: TradeLineSlice, action: any) => {
      state.firstPort = action.payload;
    },
    updateSecondPort: (state: TradeLineSlice, action: any) => {
      state.secondPort = action.payload;
    },
    changeMarketRateFilter: (state: TradeLineSlice, action: any) => {
      state.currentMarketRateFilter = action.payload;
    },
  },
  extraReducers: {
    [fetchPorts.pending.toString()]: state => {
      state.isLoading = true;
    },
    [fetchPorts.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.ports = action.payload.data;
      state.firstPort = action.payload.data[0];
      state.secondPort = action.payload.data[1];
    },
    [fetchMarketRates.pending.toString()]: state => {
      state.isLoading = true;
    },
    [fetchMarketRates.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.marketRates = action.payload.data;
      state.error = "";

      if (
        action.payload.data.every(
          (value: MarketRate) =>
            value.day === null ||
            value.high === null ||
            value.low === null ||
            value.mean === null,
        )
      ) {
        state.error = "Data are incomplete";
      }
    },
    [fetchMarketRates.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      if (action.payload.response.status == 404) {
        state.error = "No data were found. Change your ports";
      } else {
        state.error = "An error ocurred";
      }
    },
  },
});

export const selectPorts = (state: RootState) => state.tradeLane.ports;
export const selectMarketRates = (state: RootState) =>
  state.tradeLane.marketRates;
export const selectFirstPort = (state: RootState) => state.tradeLane.firstPort;
export const selectSecondPort = (state: RootState) =>
  state.tradeLane.secondPort;
export const selectErrorMessage = (state: RootState) => state.tradeLane.error;
export const selectCurrentMarketRateFilter = (state: RootState) =>
  state.tradeLane.currentMarketRateFilter;
export const selectIsLoading = (state: RootState) => state.tradeLane.isLoading;

export const { updateFirstPort, updateSecondPort, changeMarketRateFilter } =
  tradeLaneSlice.actions as any;

export default tradeLaneSlice.reducer;
