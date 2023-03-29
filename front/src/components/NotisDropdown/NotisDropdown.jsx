import { Link } from "react-router-dom"
import "./NotisDropdown.css"


function NotisDropdown({notis}) {
    
    console.log(notis.length)

    return (
        <div className="notis-dropdown-cont">
            <div className="notis-dropdown-title-cont">
                Notificaciones
            </div>
            {notis.map((noti, index) => {
                return (<Link to={`/`} key={index} className="noti-link-cont">
                    <span className="noti-link-title">{noti.title}</span>
                </Link>)
            })}
        </div>
    )
}

export default NotisDropdown