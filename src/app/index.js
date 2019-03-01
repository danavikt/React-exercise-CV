import React from "react";
import { Header, Main, Footer, ErrorBoundary } from "./components";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import "./index.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "en",
      showHeader: true,
      error: false,
    };
  }

  toggleHeader = () => {
    this.setState(state => ({ showHeader: !state.showHeader }));
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log("ERROR", error);
    console.log("INFO", info);
  }

  render() {
    const { language, showHeader, error } = this.state;

    if (error) {
      return <div>Ooops! Something went wrong!</div>;
    }

    return (
      <ErrorBoundary
        message={
          <div>
            <h1>Ooops, something went wrong</h1>
          </div>
        }
      >
        <div className="App">
          <button type="button" onClick={this.toggleHeader}>
            <span role="img" aria-label="hide header">
              {showHeader ? "❌" : "✔️"}
            </span>
          </button>
          {showHeader && (
            <Header
              onLanguage={lang => this.setState({ language: lang })}
              language={language}
            />
          )}
          <Main language={language} />
        </div>
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
