import React, { useState } from 'react'
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';


function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }



    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/images/istockphoto-1336011452-170667a.jpg" alt="" />
                        <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCentre">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/images/4102964.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/images/heart-5614865_1280.png" onClick={likeHandler} alt="" />
                        <span className='postLikeCounter'>{post.like}32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post.comment}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post