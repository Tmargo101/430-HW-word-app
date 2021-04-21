// props.items is an array of object literals
const AssociationsList = (props) => {
  return <ol>
   {props.items && props.items.map((obj,index) => 
        <li key={index}>{obj.item}</li>
   )}
  </ol>;
};

export default AssociationsList;