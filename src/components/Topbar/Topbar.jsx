import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Topbar = () => {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className='logo'>TechSocial</span>
                </div>
                <div className="topbarCentre">
                    <div className="searchbar">
                        <SearchIcon className='searches' />
                        <input placeholder='search for friends, post or vedio' className='searchInput' />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <PersonIcon />
                            <span className='topbarIconBadge'>1</span>
                        </div>
                        <div className="topbarIconItem">
                            <ChatIcon />
                            <span className='topbarIconBadge'>2</span>
                        </div>
                        <div className="topbarIconItem">
                            <CircleNotificationsIcon />
                            <span className='topbarIconBadge'>1</span>
                        </div>
                    </div>
                    <img src="/assets/images/istockphoto-1344688156-170667a.jpg" alt="" className="topbarImg" />
                </div>
            </div>
        </>
    )
}

export default Topbar;