import { useState } from "react"
import { Link } from "react-router-dom"
import pacificologo from "../../assets/pacificologo.svg"
import { Arrow90degLeft } from "react-bootstrap-icons"
import "./Login.css"


function Login() {

    const [formData, setFormData] = useState({nroDocumento: "", tipoDocumento: "dni", password: ""})

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }


    return (
        <div className="login-cont">
            <Link to="/" className="login-goback">
                <Arrow90degLeft />
                <span style={{fontSize: "20px", marginLeft: "20px"}}>Ir a la comunidad</span>
            </Link>
            <div className="login-middle-cont">
                <img className="login-img" src={pacificologo} />
                <form className="login-form">
                    <div className="display-flex-row-div" style={{marginBottom: "10px", padding: "15px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 4px -2px rgba(24,39,75,.12), 0 4px 4px -2px rgba(24,39,75,.08)"}}>
                        <select value={formData.tipoDocumento} name="tipoDocumento" onChange={handleChange} className="login-select">
                            <option value="dni">DNI</option>
                            <option value="ce">CE</option>
                        </select>
                        <input value={formData.nroDocumento} name="nroDocumento" onChange={handleChange} className="login-doc-input" type="text" placeholder="Nro. de documento" style={{flex: "1"}}></input>
                    </div>
                    <input type="password" value={formData.password} name="password" onChange={handleChange} className="login-password-input" placeholder="Ingresa tu contraseña"></input>
                    <button className="login-login-button">Iniciar sesión</button>
                </form>
                <a href="https://login.ciam.pacifico.com.pe/pacificociab2cprd01.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signup&client_id=e46492e1-dd01-4824-b537-e97976d6dd7f&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fmiespacio.pacifico.com.pe&scope=openid&response_type=id_token&prompt=login" className="login-register-button">Quiero registrarme</a>
                <a href="https://login.ciam.pacifico.com.pe/pacificociab2cprd01.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_PasswordReset&client_id=e46492e1-dd01-4824-b537-e97976d6dd7f&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fmiespacio.pacifico.com.pe&scope=openid&response_type=id_token&prompt=login" className="login-forgot-password-a">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    )
}

export default Login