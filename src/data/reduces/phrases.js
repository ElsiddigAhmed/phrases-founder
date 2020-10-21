import { getData, postData } from "../../api";

/****************************************************** */
/****************************************************** */
/****************************************************** */
/*********************TYPES SECTION******************** */
/****************************************************** */
/****************************************************** */
/****************************************************** */
export const GET_PHRASES = "GET_PHRASES";
export const GET_PHRASES_ERR = "GET_PHRASES_ERR";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_ERR = "GET_CATEGORIES_ERR";
export const GET_ACCENTS = "GET_ACCENTS";
export const GET_ACCENTS_ERR = "GET_ACCENTS_ERR";
export const ADD_PHRASE = "ADD_PHRASE";
export const ADD_PHRASE_ERR = "ADD_PHRASE_ERR";

/****************************************************** */
/****************************************************** */
/****************************************************** */
/*******************ACTIONS SECTION******************** */
/****************************************************** */
/****************************************************** */
/****************************************************** */
export const getPhrases = () => async (dispatch) => {
  try {
    const data = await getData("/phrases");

    dispatch({ type: GET_PHRASES, payload: data });
  } catch (err) {
    dispatch({ type: GET_PHRASES_ERR, payload: err });
  }
};
export const getPhrasesByFilter = (filter) => async (dispatch) => {
  try {
    const data = await getData("/phrases/filter" + filter);

    dispatch({ type: GET_PHRASES, payload: data });
  } catch (err) {
    dispatch({ type: GET_PHRASES_ERR, payload: err });
  }
};
export const addPhrase = (data) => async (dispatch) => {
  try {
    const res = await postData("/phrases", data);
    dispatch({ type: ADD_PHRASE, payload: res });
  } catch (err) {
    dispatch({ type: ADD_PHRASE_ERR, payload: err });
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const data = await getData("/categories");

    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (err) {
    dispatch({ type: GET_CATEGORIES_ERR, payload: err });
  }
};

export const getAccents = () => async (dispatch) => {
  try {
    const data = await getData("/accents");

    dispatch({ type: GET_ACCENTS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ACCENTS_ERR, payload: err });
  }
};

/****************************************************** */
/****************************************************** */
/****************************************************** */
/*******************REDUCER SECTION******************** */
/****************************************************** */
/****************************************************** */
/****************************************************** */

// creating initial state for phrases reducer
const initial_state = {
  phrases: [],
  errors: null,
  categories: [],
  accents: [],
};
export const Phrases = (state = initial_state, { type, payload }) => {
  switch (type) {
    case GET_PHRASES:
      return { ...state, phrases: payload };

    case GET_PHRASES_ERR:
      return { ...state, error: payload };

    case ADD_PHRASE:
      return { ...state, errors: null, phrases: [...state.phrases, payload] };

    case ADD_PHRASE_ERR:
      return { ...state, error: payload };

    case GET_CATEGORIES: {
      return { ...state, categories: payload };
    }
    case GET_CATEGORIES_ERR: {
      return { ...state, error: payload };
    }
    case GET_ACCENTS: {
      return { ...state, accents: payload };
    }
    case GET_ACCENTS_ERR: {
      return { ...state, error: payload };
    }

    default:
      return state;
  }
};
