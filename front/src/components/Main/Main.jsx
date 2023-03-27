import { Outlet, Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Basket3Fill, MapFill, PersonFill, BagHeartFill, GearFill } from "react-bootstrap-icons"
import SideNav from "../SideNav/SideNav"
import TopNav from "../TopNav/TopNav"
import "./Main.css"

function Main() {

    const {isLogged} = useContext(UserContext)

    const [timer, setTimer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 10)
    },[])

    return (
        <div className="main-cont">
            {isLogged ?
                <>
                    <SideNav tabs={[{name: "Comunidad", link: "comunidad", icon: <PersonFill />}, {name: "Recompensas", link: "recompensas", icon: <BagHeartFill />}, {name: "Misiones", link: "misiones", icon: <MapFill />}, {name: "Tienda", link: "tienda", icon: <Basket3Fill />}, {name: "Ajustes", link: "ajustes", icon: <GearFill />}]} />
                    <div className="main-inisde-cont">
                        <TopNav />
                        <Outlet />
                    </div>
                </>
                :
                <>
                    {timer && <>
                        <Navigate to="/login" />
                    </>}
                </>
            }
        </div>
    )
}

export default Main