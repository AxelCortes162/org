import Colaborador from "../colaborador"
import "./equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //DESTRUCTURACION
    const {colaboradores, eliminarColaborador, actualizaColor, like} = props
    const {colorPrimario, colorSecundario, titulo, id} = props.datos

    const background = {
        backgroundColor: hexToRgba (colorPrimario, 0.6)
    }

    return <>
    {
        colaboradores.length > 0 &&
            <section className="equipo" style={background}>
                <input
                    value={colorPrimario} 
                    className="inputColor" 
                    type="color" 
                    onChange={(e)=>{
                        actualizaColor(e.target.value, id)
                    }}  
                />
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index)=> <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario = {colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                            like= {like}
                            />
                        )
                    }
                    
                </div>
            </section>
    } 
    </>
}

export default Equipo