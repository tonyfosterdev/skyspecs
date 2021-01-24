import { useGistsByUser } from './useGistsByUser';
import {
  PageHeader,
  List,
  Avatar,
  Skeleton,
  Empty,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import {
  useHistory,
  useParams
} from 'react-router-dom';
import moment from 'moment';
import './SearchResults.css';

const FavoriteIcon = () => <StarOutlined className="FavoriteIcon" />;

export function SearchResults() {

  const history = useHistory();
  const onBack = () => history.goBack();

  const onClickDescription = (item) => {
    history.push(`/gist/${item.createdBy}/${item.id}`);
  };

  const { username } = useParams();
  const { loading, data: results } = useGistsByUser(username);

  return (
    <div className="SearchResults">
      <PageHeader
        onBack={onBack}
        title={`Showing Gists for @${username}`}
      />
      {!loading && !results && (<Empty />)}
      <List
        itemLayout="horizontal"
        loading={loading}
        dataSource={results?.gistsByUser}
        renderItem={item => (
          <List.Item
            actions={[
              <button className="action-button" onClick={() => null}><FavoriteIcon /></button>
            ]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.avatarUrl} />
                }
                title={<button className="action-button description" onClick={() => onClickDescription(item)}>{item.description}</button>}
                description={`By @${item.createdBy} at ${moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}