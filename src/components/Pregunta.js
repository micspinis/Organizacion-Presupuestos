import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Creando el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);



    // Función para leer el presupuesto
    // colocamos e para acceder a los valores, como e.target, etc.
    const definirPresupuesto = e => {
        // Para que no me arroje los valores de entrada como strings, hacemos el parse
        //console.log(parseInt(e.target.value)); el sugundo argumento declara la base numerica
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Submit para definir presupuesto
    // para prevenir que se envie el query a la caja de urls en el navegador
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        // Paso de validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
            <form
                // Evento para el submit
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    // Evento
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}


Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;