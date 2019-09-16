import ListItem from './ListItem';

export default props => (
  <div className="box content results__panel">
    <div className={props.spinnerStatus ? '' : 'hide'}>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
    {props.searchResults.map((item, index) => (
      <ListItem item={item} key={index} triggerModal={props.triggerModal} />
    ))}
  </div>
);
