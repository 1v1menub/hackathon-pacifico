import { useState, useContext } from "react"
import ProfileButton from "../ProfileButton/ProfileButton"
import { UserContext } from "../../context/UserContext"
import NotisDropdown from "../NotisDropdown/NotisDropdown"
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown"
import { Bell, BellFill } from "react-bootstrap-icons"
import "./TopNav.css"


function TopNav({ title }) {


    const notis = [{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"},{title: "10 personas likearon tu post 'Instale camaras inteligentes en Bodegon3000'"}]

    const [openNotis, setOpenNotis] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)

    const { isLogged } = useContext(UserContext)

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
                {isLogged ? (openNotis ? <BellFill className="top-nav-bell" onClick={handleOpenNotis}/> : <Bell className="top-nav-bell" onClick={handleOpenNotis}/>) : console.log()}
                {openNotis && <NotisDropdown notis={notis}/>}
            </div>
            <div className="profile-container-for-dropdown">
                <ProfileButton handleOpenProfile={handleOpenProfile}/>
                {openProfile && <ProfileDropdown />}
            </div>
        </div>
    )
}

export default TopNav