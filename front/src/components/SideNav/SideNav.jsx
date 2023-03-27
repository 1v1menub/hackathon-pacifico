import pacificologo from "../../assets/pacificologo.svg"
import { Link, useLocation } from "react-router-dom"
import "./SideNav.css"


function SideNav({tabs, displays, changeDisplays}) {

    const location = useLocation()

    const tabsElems = tabs.map((item, index) => {
        return <Link className="side-nav-tabs-elems" key={item.name} to={`/${item.link}`} style={{backgroundColor: displays[index] ? "#EE2C70" : "#09c"}} onClick={() => {changeDisplays(index)}}><div style={{display: "flex", alignItems: "center"}}><div style={{fontSize: "1.5rem", display: "flex", alignItems: "center", marginLeft: "10px"}}>{item.icon}</div><span style={{marginLeft: "20px"}}>{item.name}</span></div></Link>
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