import { Outlet, Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
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
                    <SideNav tabs={[{name: "Comunidad", link: "comunidad"}, {name: "Recompensas", link: "recompensas"}, {name: "Misiones", link: "misiones"}, {name: "Tienda", link: "tienda"}]} />
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