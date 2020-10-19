import { getData } from "../../api";

/****************************************************** */
/****************************************************** */
/****************************************************** */
/*********************TYPES SECTION******************** */
/****************************************************** */
/****************************************************** */
/****************************************************** */
export const GET_PHRASES = "GET_PHRASES";
export const GET_PHRASES_ERR = "GET_PHRASES_ERR";

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
    dispatch({ type: GET_PHRASES, payload: data });
  } catch (err) {
    dispatch({ type: GET_PHRASES_ERR, payload: err });
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

export const Phrases = (state = initial_state, { type, payload }) => {
  switch (type) {
    case GET_PHRASES:
      return { ...state, phrases: payload };

    case GET_PHRASES_ERR:
      return { ...state, error: payload };

    default:
      return state;
  }
};