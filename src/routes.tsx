import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "@src/pages/Login";
import Main from "./pages/Main";
// import Class from "@src/pages/Class";
interface Props {}

export default function Routes({}: Props): ReactElement {
  return (
    <>
      <Switch>
        {/* <Route exact path={'/landing'}>
                    <Landing />
                </Route> */}
        <Route exact path={["/main", "/"]}>
          <Main />
        </Route>
        {/* <Route exact path={"/login"}>
          <Login />
        </Route> */}
        {/* <Route exact path={'/signup'}>
                    <Signup />
                </Route> */}
        {/* <Route exact path={["/class", "/"]}>
          <Class />
        </Route> */}
        {/*  
                <Route exact path={'/lesson/:id'}>
                    <Lesson />
                </Route>
                <Route exact path={'/notifications'}>
                    <Notifications />
                </Route>
                <Route exact path={'/search'}>
                    <Search />
                </Route>
                <Route exact path={'/congrats'}>
                    <Congrats />
                </Route> */}
      </Switch>
    </>
  );
}
