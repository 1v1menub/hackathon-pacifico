import { useState } from "react"
import ProfileButton from "../ProfileButton/ProfileButton"
import NotisDropdown from "../NotisDropdown/NotisDropdown"
import { Bell, BellFill } from "react-bootstrap-icons"
import "./TopNav.css"


function TopNav({ title }) {

    const [openNotis, setOpenNotis] = useState(false)

    const handleOpenNotis = () => {
        setOpenNotis((prev) => {
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
            <ProfileButton />
        </div>
    )
}

export default TopNav