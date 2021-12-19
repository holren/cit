import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <div className="navigation">      
            <NavLink to="/">
                <div>MainPage</div>
            </NavLink>
            <NavLink to="/sign-in">
                <div>SignInPage</div>
            </NavLink>
            <NavLink to="/profile">
                <div>ProfilePage</div>
            </NavLink>
        </div>
    )
}

export default Header;