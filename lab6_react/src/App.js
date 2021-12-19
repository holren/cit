import Button from "./components/Button";
import UsersList from "./components/UsersList";
import axios from 'axios';
import {useState} from 'react';
import Preloader from "./components/Preloader";
import img from "./loading.gif";

function App() {
  const [data, setData]=useState([]);
  const [Loader, setLoader]=useState(false);
  function SumbmitHandler(){
    setLoader(true);
    axios.get('https://randomuser.me/api/?results=10').then((resp) => {
      setLoader(false);
      setData(resp.data.results);
      //console.log(resp.data.results);
    });
  }
  //console.log(data);
  return (
    <div className="Persons">
      {Loader == true &&
      <Preloader/>
      }
      <h1>
        Вывод пользователей
      </h1>
      <Button label={"Запросить данные"} onClick={SumbmitHandler}/>
      {data.length!=0 &&
      <UsersList data={data}/>
      }
    </div>
    
  );
}

export default App;
