// import React from "react";
// import Container from "./Container";

// function App() {
//   return (
//     <div className="App">
//       <Container />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SongOverview from "./components/SongOverview";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" exact component={SongOverview} />
        <Route path="/about" component={About} />
        <Route path="/playlist" component={SongOverview} />
      </Switch>
    </Router>
  );
}
