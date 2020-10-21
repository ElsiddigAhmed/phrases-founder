import React, { useState } from "react";
import icon from "../../res/icons/search.svg";
export function Header({ getPhrasesByFilter, categories, accents }) {
  const [category, setCategory] = useState("Category");
  const [accent, setAccent] = useState("Accent");
  if (!categories && !accent) {
    return null;
  }
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
            <input type="text" name="" id="" placeholder="Search for a phrase..." />
          </div>

          <div className="input">
            <select value={category} onChange={({ target }) => setCategory(target.value)}>
              <option value="null">Category</option>
              {categories?.map((cat, idx) => {
                return (
                  <option key={idx} value={cat?._id}>
                    {cat?.category}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input">
            <select value={accent} onChange={({ target }) => setAccent(target.value)}>
              <option value="Accent">Accent</option>
              {accents
                ? accents?.map((acc, idx) => {
                    return (
                      <option key={idx} value={acc?._id}>
                        {acc?.accent}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>

          <button onClick={() => getPhrasesByFilter({ accent, category })}>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
