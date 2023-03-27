import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Basket3Fill, MapFill, PersonFill, BagHeartFill, GearFill } from "react-bootstrap-icons"
import SideNav from "../SideNav/SideNav"
import TopNav from "../TopNav/TopNav"
import "./Main.css"

function Main() {
    
    const sidetabs = [{name: "Comunidad", link: "", icon: <PersonFill />, title: "Comunidad PYME"}, {name: "Recompensas", link: "recompensas", icon: <BagHeartFill />, title: "Progreso y Recompensas"}, {name: "Misiones", link: "misiones", icon: <MapFill />, title: "Misiones PYME"}, {name: "Tienda", link: "tienda", icon: <Basket3Fill />, title: "Tienda puntos PYME"}, {name: "Ajustes", link: "ajustes", icon: <GearFill />, title: "Ajustes"}]

    const [displays, setDisplays] = useState([])
    const [timer, setTimer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 10)
    },[])

    useEffect(() => {
        setDisplays(() => {
            const result = sidetabs.map((tab) => {
                return location.pathname === `/${tab.link}` ? true : false
            }) 
            return result
        })
    }, [])

    const changeDisplays = (index) => {
        setDisplays(() => {
            let newarr = displays.map(() => {
                return false
            })
            newarr[index] = true
            return newarr
        })
    }


    return (
        <div className="main-cont">
            {timer && 
                <>
                    <SideNav tabs={sidetabs} displays={displays} changeDisplays={changeDisplays}/>
                    <div className="main-inisde-cont">
                        <TopNav title={sidetabs[displays.findIndex(bool => bool === true)].title}/>
                        <Outlet />
                    </div>
                </>
            }
        </div>
    )
}

export default Main