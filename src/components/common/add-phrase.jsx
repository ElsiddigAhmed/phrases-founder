import React from "react";

export function AddPhrase({ setModalStatus, modalStatus }) {
  return (
    <div className={`add-word ${modalStatus && "open"}`}>
      <div className="pop-header">
        <h4>
          add a word
          <span role="img" aria-label="img">
            {" "}
            🔮{" "}
          </span>
        </h4>

        <button onClick={() => setModalStatus(false)} id="close-popout">
          &times;
        </button>
      </div>

      <div className="pop-body">
        <div className="add-input">
          <input
            type="text"
            name=""
            placeholder="E.g : what's up, (Don't add bad words 😡)"
            id=""
          />
        </div>

        <div className="d-flex">
          <div className="add-input">
            <select name="" id="">
              <option value="1">Language</option>
              <option value="1">English</option>
              <option value="1">Arabic</option>
            </select>
          </div>

          <div className="add-input">
            <select name="" id="">
              <option value="1">Accent</option>
              <option value="1">American</option>
              <option value="1">British</option>
              <option value="1">Canadian</option>
            </select>
          </div>
        </div>

        <div className="add-input">
          <textarea placeholder="word meaning..."></textarea>
        </div>

        <button>add word</button>
      </div>
    </div>
  );
}
