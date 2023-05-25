// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { StrictMode } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
// import Header from "./components/Header";

// const App = () => <PortfolioContainer />;

function App() {
    return (
        <>
            <PortfolioContainer />;
            <Footer />
        </>
    );
}

export default App;

