import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd'

const { Search } = Input;

export function SearchInput() {
  const history = useHistory();

  const onSearch = useCallback((username) => {
    history.push(`/search/${username}`);
  }, [history]);

  return (
    <div className="SearchInput">
      <Search
        placeholder="GitHub Username"
        allowClear
        enterButton="Find Gists"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
}
