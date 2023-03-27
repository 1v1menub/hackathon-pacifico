import { useState } from "react"
import pacificologo from "../../assets/pacificologo.svg"
import { Link } from "react-router-dom"
import "./SideNav.css"


function SideNav({tabs}) {

    const [displays, setDisplays] = useState(tabs.map(() => {
        return false
    }))
    

    console.log(displays)

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
        return <Link className="side-nav-tabs-elems" key={item.name} to={`/${item.link}`} style={{backgroundColor: displays[index] ? "#2d2d2e" : "#09c"}} onClick={() => {changeDisplays(index)}}>{item.name}</Link>
    })


    return (
        <nav className="sidenav-cont">
            <Link to="/"><img src={pacificologo} className="side-nav-img" /></Link>
            <span className="side-nav-welcome">Bienvenido</span>
            <div className="tabs-cont">
                {tabsElems}
            </div>
        </nav>
    )
}

export default SideNav