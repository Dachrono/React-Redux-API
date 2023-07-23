import { useSelector } from "react-redux";
import UserCard from "../redux/users/userCard";

const { userList, isLoading, error } = useSelector((state) => state.users)

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