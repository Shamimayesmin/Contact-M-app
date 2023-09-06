import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../../../types/globalTypes";


interface Contact {
	data: IContact[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	status: boolean;
}

const initialState: Contact = {
	data: [],
    
	loading: "idle",
	error: null,
	status: false,
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		toggleState: (state) => {
			state.status = !state.status;
		},
	},
});

export const { toggleState } = contactSlice.actions;
export default contactSlice.reducer;
