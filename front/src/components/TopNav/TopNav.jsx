import { useState } from "react"
import ProfileButton from "../ProfileButton/ProfileButton"
import NotisDropdown from "../NotisDropdown/NotisDropdown"
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown"
import { Bell, BellFill } from "react-bootstrap-icons"
import "./TopNav.css"


function TopNav({ title }) {

    const [openNotis, setOpenNotis] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenNotis = () => {
        if(openProfile) {
            setOpenProfile(false)
        }
        setOpenNotis((prev) => {
            return !prev
        }) 
    }

    const handleOpenProfile = () => {
        if(openNotis) {
            setOpenNotis(false)
        }
        setOpenProfile((prev) => {
            return !prev
        })  
    }

    return (
        <div className="topnav-cont">
            <span className="top-nav-title">{title}</span>
            <div className="topnav-bell-cont">
                {openNotis ? <BellFill className="top-nav-bell" onClick={handleOpenNotis}/> : <Bell className="top-nav-bell" onClick={handleOpenNotis}/>}
                {openNotis && <NotisDropdown notis={[]}/>}
            </div>
            <div className="profile-container-for-dropdown">
                <ProfileButton handleOpenProfile={handleOpenProfile}/>
                {openProfile && <ProfileDropdown />}
            </div>
        </div>
    )
}

export default TopNav