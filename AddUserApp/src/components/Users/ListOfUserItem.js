import React from "react";

const ListOfUserItem = (props) => {
  const onDelete = () => {
    props.delete(props.id);
  };

  return <li onClick={onDelete}>{props.children}</li>;
};

export default ListOfUserItem;
