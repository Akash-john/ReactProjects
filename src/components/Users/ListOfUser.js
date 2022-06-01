import Card from "../UI/Card";
import classes from "./ListOfUser.module.css";
import ListOfUserItem from "./ListOfUserItem";

const ListOfUser = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <ListOfUserItem
              key={user.id}
              id={user.id}
              delete={props.deleteUser}
            >
              {user.name} {user.age} year's old
            </ListOfUserItem>
          );
        })}
      </ul>
    </Card>
  );
};

export default ListOfUser;
