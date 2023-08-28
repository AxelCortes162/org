import "./campo-texto.css"

const CampoTexto = (props) =>{

    const manejarCambio = (e) =>{
        props.actualizarValor (e.target.value)
    }

    const {type = "text"} = props

    const placeholdeModificado = `${props.placeholder}...`

        return <div className={`campo campo-${type}`}>
            <label>{props.title}</label>
            <input 
                placeholder={placeholdeModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type ={type}
            />
        </div>
}

export default CampoTexto