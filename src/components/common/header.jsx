import React from "react";
import icon from "../../res/icons/search.svg";
export function Header() {
  return (
    <header className="header">
      <div className="custom-container">
        <h2>
          find any phrase!
          <span role="img" aria-label={"img"}>
            {" "}
            😎{" "}
          </span>
        </h2>
        <p>
          or add a phrase if you have one
          <span role="img" aria-label={"img"}>
            {" "}
            ✍🏽{" "}
          </span>
        </p>
        <div className="search">
          <div className="input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for a phrase..."
            />
          </div>

          <div className="input">
            <select name="" id="">
              <option value="1">Category</option>
              <option value="1">Home</option>
              <option value="1">School</option>
              <option value="1">Work</option>
            </select>
          </div>

          <div className="input">
            <select name="" id="">
              <option value="1">Accent</option>
              <option value="1">American</option>
              <option value="1">British</option>
              <option value="1">Canadian</option>
            </select>
          </div>

          <button>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
