import React from 'react'
import "./home.css";
import Sidebar from '../../components/sidbar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';




const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>

        </>
    )
}

export default Home