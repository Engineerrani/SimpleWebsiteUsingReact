import React from 'react'
import './profile.css';
import Sidebar from '../../components/sidbar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';




function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <img className='profileCoverImg' src="/assets/images/img_environment_01.jpg" alt="" />
                        <img className='profileUserImg' src="/assets/images/istockphoto-1344688156-170667a.jpg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Sakfak kocaoglu</h4>
                        <span className='profileInfoDesc'>Hello my friends!</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar Profile />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Profile