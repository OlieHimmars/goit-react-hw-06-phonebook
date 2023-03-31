import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },

    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
