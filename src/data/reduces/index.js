import { combineReducers } from "redux";
import { Phrases, getPhrases } from "./phrases";
export const reduces = combineReducers({
  Phrases,
});

export const actions = {
  getPhrases,
};
