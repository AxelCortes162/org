import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campo-texto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const[equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo ({titulo, colorPrimario: color})

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
            Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}  
            />
            <CampoTexto 
                title="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
            Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto 
                title="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                title="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor} 
                type="color" 
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario