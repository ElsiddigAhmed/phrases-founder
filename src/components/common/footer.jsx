import React from "react";
import icon from "../../res/icons/github.svg";
export function Footer() {
  return (
    <footer>
      <div className="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ElsiddigAhmed/phrases-founder"
        >
          <div className="icon">
            <img src={icon} alt="" />
          </div>
        </a>
      </div>
      <p>
        Made with{" "}
        <span role="img" aria-label="img">
          💜
        </span>{" "}
        by <a href="https://github.com/ElsiddigAhmed">Elsiddig</a> &amp;{" "}
        <a href="https://omarui.co/">Omar</a>.
      </p>
      <small>
        this app is designed by Omar, the react implementation and API by
        Elsiddig{" "}
      </small>
    </footer>
  );
}
