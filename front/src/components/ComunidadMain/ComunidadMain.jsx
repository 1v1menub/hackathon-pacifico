import "./ComunidadMain.css"

function ComunidadMain({image}) {



    return (
        <div style={{display: "flex", flex: "1", alignItems: "center", justifyContent: "center"}}>
            <img src={image} style={{width: "90%"}} />
        </div>
    )
}

export default ComunidadMain