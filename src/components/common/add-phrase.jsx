import React, { useState } from "react";
import joi from "joi";
export function AddPhrase({ setModalStatus, modalStatus, addPhrase }) {
  const [phrase, setPhrase] = useState("");
  const [meaning, setMeaning] = useState("");
  const [category, setCategory] = useState(null);
  const [accent, setAccent] = useState(null);
  const [errors, setErrors] = useState(null);
  const submitData = () => {
    const { value, error } = joi
      .object()
      .keys({
        phrase: joi.string().required(),
        category: joi.string().required(),
        accent: joi.string().required(),
        meaning: joi.string().required(),
      })
      .validate({ phrase, meaning, category, accent });
    if (error) {
      return setErrors(error.message);
    }
    setErrors(null);
    addPhrase(value);
    setModalStatus(false);
    setMeaning("");
    setPhrase("");
    setCategory(null);
    setAccent(null);
  };
  return (
    <div className={`add-word ${modalStatus && "open"}`}>
      <div className="pop-header">
        <h4>
          add a phrase
          <span role="img" aria-label="img">
            {" "}
            🔮{" "}
          </span>
        </h4>

        <button onClick={() => setModalStatus(false)} id="close-popout">
          &times;
        </button>
      </div>
      {errors && (
        <div
          style={{
            color: "red",
            margin: "3px 0px 5px 0px",
            textAlign: "center",
          }}
        >
          <small>{errors}</small>
        </div>
      )}
      <div className="pop-body">
        <div className="add-input">
          <input
            type="text"
            name=""
            placeholder="E.g : what's up, (Don't add bad phrases 😡)"
            id=""
            onChange={({ target }) => setPhrase(target.value)}
          />
        </div>

        <div className="d-flex">
          <div className="add-input">
            <select
              name=""
              id=""
              onChange={({ target }) => setCategory(target.value)}
            >
              <option>Category</option>
              <option>Home</option>
              <option>School</option>
              <option>Work</option>
            </select>
          </div>

          <div className="add-input">
            <select
              name=""
              id=""
              onChange={({ target }) => setAccent(target.value)}
            >
              <option>Accent</option>
              <option>American</option>
              <option>British</option>
              <option>Canadian</option>
            </select>
          </div>
        </div>

        <div className="add-input">
          <textarea
            placeholder="phrase meaning..."
            onChange={({ target }) => setMeaning(target.value)}
          ></textarea>
        </div>

        <button onClick={submitData}>add phrase</button>
      </div>
    </div>
  );
}
