import react from "react";

function UserAvatar({src}){

    return(
        <div className="card-item__image">
            <img src={src} alt="" />
        </div>
    );

}

export default UserAvatar;