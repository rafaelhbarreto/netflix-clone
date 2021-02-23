import React from 'react'; 
import './header.css'; 

const Header = ({ black }) => { 
    return (
        <>
            <header className={ black ? 'black' : ''} >
                <div className="header--logo">
                    <a href="#" >
                        <img src={`https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg`} alt="Netflix logo" />
                    </a>
                </div>
                <div className="header--avatar">
                    <a href="#" >
                        <img src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`} alt="user avatar" />
                    </a>
                </div>
            </header>
        </>
    ); 
}

export default Header;
