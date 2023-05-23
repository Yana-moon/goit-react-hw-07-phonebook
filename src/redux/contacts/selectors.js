import { createSelector } from '@reduxjs/toolkit';
import { getFilterContacts } from 'redux/filter/selectorsFilter';

export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, getFilterContacts],
  (contactsItems, filter) => {
    return contactsItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);