import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import Header from "./Header";
import "./App.css";
import history from "./history";

const App = () => {
  return (
    <div className="ui-container">
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
