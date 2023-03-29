import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { ChevronDown, PersonFill } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import ignacio from "../../assets/ignacio.jpg"
import "./ProfileButton.css"

function ProfileButton({handleOpenProfile}) {

    const {isLogged, userdata, handleSet} = useContext(UserContext)

    const nav = useNavigate()

    const handleGoLogin = () => {
        nav("/login")
    }

    return (
        <div className="profile-button-cont" onClick={() => {isLogged ? handleOpenProfile() : handleGoLogin() }} style={{backgroundColor: isLogged ? "#00Af3f" : "#0075b0"}}>
            {isLogged ?
                <>
                    <img className="profile-button-img" src={ignacio /* userdata.profileimage */}/>
                    <span className="profile-button-name">{"Ignacio Rubio" /* userdata.nombre */}</span>
                    <ChevronDown className="profile-button-downarrow" />
                </>
                :
                <>
                    <div className="top-nav-login-link" to="/login"><PersonFill style={{marginRight: "10px"}}/><span>Iniciar sesión</span></div>
                </>
            }
        </div>
    )
}

export default ProfileButton