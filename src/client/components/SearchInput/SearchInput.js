import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Input } from 'antd'

const { Search } = Input;

export function SearchInput() {

  // This will be used to prepopulate the search field
  const { username } = useParams();

  // Searching should send users to the search page
  const history = useHistory();
  const onSearch = useCallback((username) => {
    history.push(`/search/${username}`);
  }, [history]);

  return (
    <div className="SearchInput">
      <Search
        defaultValue={username}
        placeholder="GitHub Username"
        allowClear
        enterButton="Find Gists"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
}
