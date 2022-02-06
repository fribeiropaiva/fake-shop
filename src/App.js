import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductPage } from "./components/ProductPage";
import { ProductDetails } from "./components/ProductDetails";
import "./global.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
