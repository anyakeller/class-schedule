import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Header } from "./components";
import { PageDetailsProvider } from "./utils/GlobalState";
import { PageData, PageOrder } from "./utils/PageData";

function App() {
  return (
    <PageDetailsProvider>
      <div className="App">
        <Navbar />
        <Header />
        <div className="container-sm my-3">
          <Switch>
            {PageOrder.map((path, index) => {
              const page = PageData[path];
              return (
                <Route
                  exact
                  path={page.pathname}
                  component={page.component}
                  key={index}></Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </PageDetailsProvider>
  );
}

export default App;
