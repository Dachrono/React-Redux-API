import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../redux/users/usersSlice";
import UserCard from "../redux/users/userCard";

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchUser());}, [dispatch]);
    
    const { userList, isLoading, error } = useSelector((state) => state.userList)

    console.log(useSelector((state) => state.userList))

    if (isLoading === true) {
        return (
          <section className="pending">
            <h2>Loading...</h2>
          </section>
        );
    }

    if (error !== undefined) {
        return (
          <section className="error">
            <h2>Sorry something went wrong</h2>
          </section>
        );
    }

    return (
      <>
        <h1>Users:</h1>
        <ul>
          {userList.map((item) => (
            <UserCard
              name={item.name.first}
              lastname={item.name.last}
              key={item.email}
            />
          ))}
        </ul>
      </>
    );
}; 

export default Users;