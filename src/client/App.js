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

function SearchRoute({ children }) {
  return (
    <>
      <SearchInput />
      {children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <div>
            <Switch>
              { /* TODO: Use complex pattern to resolve the empty result */}
              <Route exact path="/search">
                <SearchRoute>
                  <EmptyResult />
                </SearchRoute>
              </Route>
              <Route exact path="/">
                <SearchRoute>
                  <EmptyResult />
                </SearchRoute>
              </Route>
              <Route path="/search/:username">
                <SearchRoute>
                  <SearchResults />
                </SearchRoute>
              </Route>
              <Route path="/gist/:username/:gistId">
                <SearchRoute>
                  <ViewGist />
                </SearchRoute>
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
