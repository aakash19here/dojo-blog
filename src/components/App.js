import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar, BlogDetails } from '.';
import { Home, Create, NotFound } from '../pages';

const App = () => {
  console.log('App');
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
