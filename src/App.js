import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "./App.css";

// import About from "./components/About";
// import Nav from "./components/Nav";

const App = () => <PortfolioContainer />;
// function App() {
//   const [categories] = useState([
//     { name: "about me" },
//     { name: "portfolio" },
//     { name: "contact" },
//     { name: "resume" },
//   ]);
//   const [currentCategory, setcurrentCategory] = useState([0]);
//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setcurrentCategory={setcurrentCategory}
//         currentCategory={currentCategory}
//       ></Nav>
//       <main>
//         <About></About>
//       </main>
//     </div>
//   );
// }

export default App;
