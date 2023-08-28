import "./MiOrg.css"
const MiOrg =(props) =>{
    //Estado - hooks
    //useState (utiliza el estado)
    //useState()
    //const [nombreVariable, funcionActualiza] = useSatet(Valor inicial)
    //const [nombre, actalizarNombre] = useState("Axel")
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg