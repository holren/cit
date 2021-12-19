import react from "react";
import img from "../loading.gif";

function Preloader(){
    return(      
        <div class="loading">
            <img src={img} alt=""></img>
        </div>
    );

}

export default Preloader;