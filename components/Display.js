import ListItem from '../components/ListItem';

export default props => (
  <div className="box content results__panel">
    {props.searchResults.map((item, index) => (
      <ListItem item={item} key={index} />
    ))}
  </div>
);
