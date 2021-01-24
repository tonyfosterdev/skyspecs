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
import { EmptyResult } from './components/EmptyResult';
import { SearchInput } from './components/SearchInput';
import { SearchResults } from './components/SearchResult';
import { ViewGist } from './components/ViewGist';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <div>
            <SearchInput />
            <Switch>
              { /* TODO: Use complex pattern to resolve the empty result */}
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
