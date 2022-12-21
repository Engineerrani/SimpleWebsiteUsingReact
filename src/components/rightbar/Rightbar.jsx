import React from 'react'
import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';
import Profile from '../../pages/Profile/Profile';



const Rightbar = ({ profile }) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/images/4213958.png" alt="" />
                    <span className='birhtdayText'>
                        <b>Pola Faster</b> and <b> 3 others friends</b> have a birthday today
                    </span>
                </div>
                <img className='rightbarAd' src="/assets/images/maxresdefault.jpg" alt="" />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => {
                        <Online key={u.id} user={u} />
                    })}

                </ul>

            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>

                <h4 className='rightbarTitle'>User Informaion</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Marid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/images/Amy-Mainzer-300x225.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John carter</span>
                    </div>

                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <HomeRightbar />
            </div>
        </div>
    )
}

export default Rightbar