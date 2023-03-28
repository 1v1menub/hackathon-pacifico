import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import "./ProfileDropdown.css"


function ProfileDropdown({notis}) {

    const { handleSet } = useContext(UserContext)
    const nav = useNavigate()

    const logout = () => {
        handleSet({})
        nav("/login")
    }

    return (
        <div className="profile-dropdown-cont">
            <div className="profile-dropdown-title-cont">
                Perfil
            </div>
            <button className="profile-dropdown-logout-button" onClick={logout}>Cerrar sesión</button>
        </div>
    )
}

export default ProfileDropdown