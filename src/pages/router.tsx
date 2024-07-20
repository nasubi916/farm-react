import { type ReactElement } from "react";
import { Link, Route, Switch } from "wouter";
import { About } from "./about";

export function App(): ReactElement {
  return (
    <>
      <Link to="/about">About</Link>
      <br />
      <Switch>
        <Route path="/">Home</Route>
        <Route component={About} path="/about">
          About
        </Route>
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  );
}
