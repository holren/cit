import react from "react";

function button({onClick, label}){

    return(
        <div className="button">
            <button onClick={onClick}>
                {label}
            </button>
        </div>
    );

}

export default button;