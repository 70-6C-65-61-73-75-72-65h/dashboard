import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "@src/pages/Login";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";
import Main from "./pages/Main";
// import Class from "@src/pages/Class";
interface Props {}

export default function Routes({}: Props): ReactElement {
  return (
    <div className="page-whole">
      <Route exact path={"*"}>
        <Navbar />
      </Route>
      <div className="page">
        <Route exact path={"*"}>
          <Header />
        </Route>

        <Switch>
          <Route exact path={["/main", "/"]}>
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
