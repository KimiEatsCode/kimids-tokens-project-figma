import logo from "./images/group.png";
import "./App.scss";
// import styled from "styled-components";

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://amzn.github.io/style-dictionary/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" /></a>
        <p>
          React App using design tokens exported as a json from a Figma design file converted into a scss styles sheet using Style Dictionary
        </p>
        <a
          className="App-link"
          href="https://amzn.github.io/style-dictionary/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button>Check out Style Dictionary!</button></a>
        {/* <Button>Normal</Button>
    <Button primary>Primary</Button> */}
      </header>
    </div>
  );
}

export default App;
