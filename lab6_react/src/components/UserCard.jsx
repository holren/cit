import react from "react";
import "./style.css";
import UserAvatar from "./UserAvatar";

function UserCard({data}){
    let genders = {
        female: "Женский",
        male: "Мужской"
    }
    let current_gender;
    if (data.gender == 'male') {
        current_gender = genders.male;
    } else {
        current_gender = genders.female;
    }

    let date = new Date(data.dob.date) 
    let date_parse = ('0'+(date.getDate())).slice(-2) + "." + ('0'+(date.getMonth()+1)).slice(-2) + "." + date.getFullYear();
    return(
           <div className="card-item">
               <UserAvatar src={data.picture.large}/>
               <div className="card-item__fio">
                <div><span>Фамилия:</span> {data.name.title + " " + data.name.last} </div> 
                <div><span>Имя: </span>{data.name.first}</div>                
               </div>
               
               <div className="gender">
                <span>Пол: </span>{current_gender}
               </div>

               <div className="card-item_address">
                <span>Адрес: </span>{data.location.country + ", " + data.location.street.name + ", " + data.location.street.number}
                </div>  
               <div className="card-item__email">
                <span>e-mail: </span>{data.email}
               </div>
               <div className="card-item__birthday">
                <span>День Рождения: </span>{date_parse}
               </div>
               <div className="card-item__age">
                   <span>Возраст: </span>{data.dob.age}
               </div>
               <div className="card-item__cell">
                <span>Моб.телефон: </span>{data.phone}
               </div>
           </div>
    );

}

export default UserCard;