import { useState, useEffect } from "react"
import pacificologo from "../../assets/pacificologo.svg"
import { Link, useLocation } from "react-router-dom"
import "./SideNav.css"


function SideNav({tabs}) {

    const [displays, setDisplays] = useState([])

    const location = useLocation()

    useEffect(() => {
        setDisplays(() => {
            const result = tabs.map((tab) => {
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

    const tabsElems = tabs.map((item, index) => {
        return <Link className="side-nav-tabs-elems" key={item.name} to={`/${item.link}`} style={{backgroundColor: displays[index] ? "#2d2d2e" : "#09c"}} onClick={() => {changeDisplays(index)}}><div style={{display: "flex", alignItems: "center"}}><div style={{fontSize: "1.5rem", display: "flex", alignItems: "center"}}>{item.icon}</div><span style={{marginLeft: "20px"}}>{item.name}</span></div></Link>
    })


    return (
        <nav className="sidenav-cont">
            <Link className="side-nav-img" to="/"><img src={pacificologo} /></Link>
            <div className="tabs-cont">
                {tabsElems.slice(0,4)}
            </div>
            <hr className="side-nav-hr"></hr>
            {tabsElems.slice(4,5)}
        </nav>
    )
}

export default SideNav