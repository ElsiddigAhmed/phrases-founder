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
    const data = await getData("phrases");
    if (data.message === "Network Error") {
      return dispatch({ type: GET_PHRASES, payload: null });
    }
    dispatch({ type: GET_PHRASES, payload: data });
  } catch (err) {
    dispatch({ type: GET_PHRASES_ERR, payload: err });
  }
};
export const addPhrase = (data) => async (dispatch) => {
  try {
    const res = await postData("phrases", data);
    dispatch({ type: ADD_PHRASE, payload: res });
  } catch (err) {
    dispatch({ type: ADD_PHRASE_ERR, payload: err });
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
  phrases: null,
  errors: null,
};
// const phrases = [
//   {
//     phrase: "Get Lost",
//     meaning: "get out of my face (bad word)",
//     accent: "American",
//     category: "General",
//   },
// ];
export const Phrases = (state = initial_state, { type, payload }) => {
  switch (type) {
    case GET_PHRASES:
      return { ...state, phrases: payload };

    case GET_PHRASES_ERR:
      return { ...state, error: payload };

    case ADD_PHRASE:
      return { errors: null, phrases: [...state.phrases, payload] };

    case ADD_PHRASE_ERR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
