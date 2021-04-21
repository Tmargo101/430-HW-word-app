const List = (props) => {
  return <ol>
     {props.items && props.items.map((item,index) => 
          <li key={index}>{item}</li>
     )}
  </ol>;
};

export default List;