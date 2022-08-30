import Main from "./components/Main";
import NavBar from "./components/nav/NavBar";
import NavBarMobile from "./components/nav/NavBarMobile";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
      <NavBarMobile />
    </div>
  );
}

export default App;
