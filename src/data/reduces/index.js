import { combineReducers } from "redux";
import { Phrases, getPhrases, addPhrase } from "./phrases";
export const reduces = combineReducers({
  Phrases,
});

export const actions = {
  getPhrases,
  addPhrase,
};
