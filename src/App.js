import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import OrangeBoxes from "./components/orangeBoxes";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <Header />
    <PortfolioContainer />
    <Footer />
  </>
);


// function App() {
//   return (
//     <>
//       <div>
//         <PortfolioContainer />
//       </div>
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>Welcome to my portfolio!</p>
//           <OrangeBoxes />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   );
// }

export default App;
