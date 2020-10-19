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
  const [phrases, setPhrases] = useState(null);

  useEffect(() => {
    setPhrases(props.phrases);
  }, [props]);

  useEffect(() => {
    props.getPhrases();
  });

  return (
    <div>
      <Navbar setModalStatus={setModalStatus} />
      <Header />

      <div className="result">
        <div className="custom-container">
          {phrases ? (
            phrases.map((phrase, idx) => {
              return (
                <div className="child" key={idx}>
                  <div className="word">
                    <h4>{phrase.phrase}</h4>

                    <span className="accent">
                      <span role="img" aria-label="img">
                        🏁{" "}
                      </span>{" "}
                      {phrase.accent}
                    </span>
                  </div>

                  <div className="means">
                    <h2>meaning :</h2>
                    <small>{phrase.meaning}</small>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="child">
              <div className="bottom-cta">
                <h2>
                  Search for a phrase right now
                  <span role="img" aria-label="img">
                    {" "}
                    👆{" "}
                  </span>
                  or add new one!
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <AddPhrase
        addPhrase={props.addPhrase}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
      <Footer />
    </div>
  );
}

/*********************************************/
/****************Redux Mapper*****************/
/*********************************************/

const mapStateToProps = (state) => {
  return {
    phrases: state.Phrases.phrases,
  };
};

export default connect(mapStateToProps, actions)(Home);
