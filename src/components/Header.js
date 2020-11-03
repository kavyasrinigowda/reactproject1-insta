import React from 'react'
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
        <div className="instagramlogo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe1mXowQOoDhnVexElVo_B017a1E__nKe8Yw&usqp=CAU" alt="instagram"/></div>
            <div className="search">
           <SearchIcon/>
           <input type="text" placeholder="search"></input></div>
           <div className="icon">
           <HomeIcon/>
           <TelegramIcon/>
           <PhotoCameraIcon/>
        </div></div>
    )
}
export default Header
