import React from "react";

export function Navbar({ setModalStatus }) {
  return (
    <div>
      <nav className="nav">
        <div className="custom-container">
          <div className="parent">
            <div className="child">
              <div className="logo">
                <h2>Phrases Founder</h2>
              </div>
            </div>

            <div className="child">
              <div
                className="add"
                onClick={() => setModalStatus(true)}
                id="open-popout"
              >
                <button>add word</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
