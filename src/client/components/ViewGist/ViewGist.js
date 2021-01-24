import { useGistsByUser } from '../../hooks/useGistsByUser';
import { useState, useEffect } from 'react';
import { PageHeader, List, Card } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { formatDate } from '../../util/dates';
import './ViewGist.css';

export function ViewGist() {
  const history = useHistory();
  const onBack = () => history.goBack();

  const { username, gistId } = useParams();
  const { loading, data: results } = useGistsByUser(username);

  const [gistData, setGistData] = useState({});
  useEffect(() => {
    if (results) {
      const result = results.gistsByUser.find(({ id }) => id === gistId);
      setGistData(result);
    }
  }, [results, gistId])

  return (
    <div className="ViewGist">
      <PageHeader
        onBack={onBack}
        title={`Viewing gist: ${gistId}`}
      />
      {!!gistData && (
        <div className="view-gist-data">
          <h2>{gistData.description}</h2>
          <h3>By @{gistData.createdBy} at {formatDate(gistData.createdAt)}</h3>
          <List
            loading={loading}
            grid={{ column: 1 }}
            dataSource={gistData.files}
            renderItem={item => (
              <List.Item>
                <Card title={`File: ${item.filename}`}>
                  <ul>
                    <li>Type: {item.type}</li>
                    <li>Language: {item.language}</li>
                    <li>Size: {item.size} bytes</li>
                    <li>URL: <a target="top" href={item.url}>{item.url}</a></li>
                  </ul>
                </Card>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
}