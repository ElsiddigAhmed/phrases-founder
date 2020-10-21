import { combineReducers } from "redux";
import { Phrases, getPhrases, addPhrase, getCategories, getAccents, getPhrasesByFilter } from "./phrases";
export const reduces = combineReducers({
  Phrases,
});

export const actions = {
  getPhrases,
  addPhrase,
  getCategories,
  getAccents,
  getPhrasesByFilter,
};
