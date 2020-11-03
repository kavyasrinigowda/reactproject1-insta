import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ShareIcon from '@material-ui/icons/Share';

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar />
            <h5>kavya_m_S</h5>
            <p>2 hours ago</p>
            </div>
            <div className="post__image">
            <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="image" />
            </div>
            <div className="post__footer">
<FavoriteBorderIcon />
<TextsmsIcon />
<ShareIcon />
            </div>
        </div>
    )
}

export default Post
