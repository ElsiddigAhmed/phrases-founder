import React, { useEffect, useState } from "react";
import "../res/css/style.css";
import { Navbar } from "./common/navbar";
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import { AddPhrase } from "./common/add-phrase";
import { connect } from "react-redux";
import { actions } from "../data/reduces/";
function Home(props) {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    props.getPhrases();
  });

  return (
    <div>
      <Navbar setModalStatus={setModalStatus} />
      <Header />
      <div className="result">
        <div className="custom-container">
          <div className="child">
            <div className="word">
              <h4>Get Lost</h4>

              <span className="accent">
                <span role="img" aria-label="img">
                  🏁{" "}
                </span>{" "}
                American
              </span>
            </div>

            <div className="means">
              <h2>meaning :</h2>
              <p>Get the fuck off my face</p>
            </div>
          </div>
          <div className="child">
            <div className="word">
              <h4>Get Lost</h4>

              <span className="accent">
                <span role="img" aria-label="img">
                  🏁{" "}
                </span>{" "}
                American
              </span>
            </div>

            <div className="means">
              <h2>meaning :</h2>
              <p>Get the fuck off my face</p>
            </div>
          </div>
        </div>
      </div>

      <AddPhrase modalStatus={modalStatus} setModalStatus={setModalStatus} />
      <Footer />
    </div>
  );
}

/*********************************************/
/****************Redux Mapper*****************/
/*********************************************/

const mapStateToProps = (state) => {
  return {
    phrases: state.Phrases,
  };
};

export default connect(mapStateToProps, actions)(Home);
