import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { ChevronDown, PersonFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import pacificologo from "../../assets/pacificologo.svg"
import "./ProfileButton.css"

function ProfileButton({handleOpenProfile}) {

    const {isLogged, userdata, handleSet} = useContext(UserContext)

    return (
        <div className="profile-button-cont" onClick={handleOpenProfile} style={{backgroundColor: isLogged ? "#00Af3f" : "#0075b0"}}>
            {isLogged ?
                <>
                    <img className="profile-button-img" src={pacificologo /* userdata.profileimage */}/>
                    <span className="profile-button-name">{"Juanita Paredes" /* userdata.nombre */}</span>
                    <ChevronDown className="profile-button-downarrow" />
                </>
                :
                <>
                    <Link className="top-nav-login-link" to="/login"><PersonFill style={{marginRight: "10px"}}/><span>Iniciar sesión</span></Link>
                </>
            }
        </div>
    )
}

export default ProfileButton