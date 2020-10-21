import React from "react";
import "../res/css/style.css";
import { Navbar } from "./common/navbar";
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import { AddPhrase } from "./common/add-phrase";
import { connect } from "react-redux";
import { actions } from "../data/reduces/";

class Home extends React.Component {
  state = {
    categories: [],
    phrases: [],
    accents: [],
    modalStatus: false,
    loading: false,
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getAccents();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({ categories: newProps?.categories, phrases: newProps?.phrases, accents: newProps?.accents });
    if (newProps?.phrases[0]) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  setModalStatus = (modalStatus) => {
    this.setState({ modalStatus });
  };

  getPhrasesByFilter = (filter) => {
    this.setState({ loading: true });

    if (filter.accent !== "Accent" && filter.category !== "Category") {
      return this.props.getPhrasesByFilter(`?accent=${filter.accent}&category=${filter.category}`);
    }

    return this.props.getPhrasesByFilter("");
  };

  addPhrase = (data) => {
    this.props.addPhrase(data);
    this.setState({ loading: true });
  };
  render() {
    return (
      <div>
        <Navbar setModalStatus={this.setModalStatus} />
        <Header categories={this.state.categories} accents={this.state.accents} getPhrasesByFilter={this.getPhrasesByFilter} />

        <div className="result">
          {this.state.loading ? (
            <div className="child" style={{ background: "none" }}>
              <div className="bottom-cta" style={{ textAlign: "center" }}>
                <div className="lds-dual-ring"></div>
              </div>
            </div>
          ) : (
            <div className="custom-container">
              {this.state.phrases && this.state.phrases[0] ? (
                this.state.phrases?.map((phrase, idx) => {
                  return (
                    <div className="child" key={idx}>
                      <div className="word">
                        <h4>{phrase?.phrase}</h4>

                        <span className="accent">
                          <span role="img" aria-label="img">
                            🏁{" "}
                          </span>{" "}
                          {phrase.accent?.accent}
                        </span>
                      </div>

                      <div className="means">
                        <h2>meaning :</h2>
                        <small>{phrase?.meaning}</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="child">
                  <div className="bottom-cta" style={{ textAlign: "center" }}>
                    {/* <div class="lds-dual-ring"></div> */}
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
          )}
        </div>
        <AddPhrase
          categories={this.state.categories}
          accents={this.state.accents}
          addPhrase={this.addPhrase}
          modalStatus={this.state.modalStatus}
          setModalStatus={this.setModalStatus}
        />
        <Footer />
      </div>
    );
  }
}

/*********************************************/
/****************Redux Mapper*****************/
/*********************************************/

const mapStateToProps = (state) => {
  return {
    phrases: state.Phrases?.phrases,
    categories: state.Phrases?.categories,
    accents: state.Phrases?.accents,
  };
};

export default connect(mapStateToProps, actions)(Home);
