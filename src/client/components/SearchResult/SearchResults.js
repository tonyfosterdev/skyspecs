import { useGistsByUser } from '../../hooks/useGistsByUser';
import {
  PageHeader,
  List,
  Avatar,
  Skeleton,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import {
  useHistory,
  useParams,
} from 'react-router-dom';
import { formatDate } from '../../util/dates';
import './SearchResults.css';

const FavoriteIcon = () => <StarOutlined className="FavoriteIcon" />;

export function SearchResults() {

  const history = useHistory();
  const onBack = () => history.goBack();

  const onClickDescription = (item) => {
    history.push(`/gist/${item.createdBy}/${item.id}`);
  };

  // Using params allows this page to bookmarked!
  const { username } = useParams();
  const { loading, data: results } = useGistsByUser(username);

  return (
    <div className="SearchResults">
      <PageHeader
        onBack={onBack}
        title={`Showing Gists for @${username}`}
      />
      <List
        itemLayout="horizontal"
        loading={loading}
        dataSource={results?.gistsByUser}
        renderItem={item => (
          <List.Item
            actions={[<button className="action-button" onClick={() =>
              alert('This is embarassing... This feature is not ready, but will be soon!')
            }><FavoriteIcon /></button>]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.avatarUrl} />}
                title={<button className="action-button description" onClick={() => onClickDescription(item)}>{item.description}</button>}
                description={`By @${item.createdBy} at ${formatDate(item.createdAt)}`}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}