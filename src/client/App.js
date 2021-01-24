import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import { Empty } from 'antd';
import { SearchInput } from './components/SearchInput';
import { SearchResults } from './components/SearchResults';
import { ViewGist } from './components/ViewGist';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

// Vman45

function EmptyResult() {
  return (
    <div className="EmptyResult">
      <Empty />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <div>
            <SearchInput />
            <Switch>
              <Route exact path="/search">
                <EmptyResult />
              </Route>
              <Route exact path="/">
                <EmptyResult />
              </Route>
              <Route path="/search/:username">
                <SearchResults />
              </Route>
              <Route path="/gist/:username/:gistId">
                <ViewGist />
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
