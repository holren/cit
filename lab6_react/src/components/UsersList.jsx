import react from "react";
import UserCard from "./UserCard";

function UsersList({data}){

    return(
        <div className="users-list">
            <div className="cards-block">
            {data.map((person, i) => ( 
            <UserCard data={person}  Key = {i}/>
            ))}
            </div>
        </div>

    );

}

export default UsersList;