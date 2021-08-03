import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {

    // Definir State
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    };

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validación
        if (cantidad < 1 || isNaN (cantidad)) {
            guardarError(true);
            return;
        }
        // Si pasamos la validación
        guardarError(false);
    };

    return ( 
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;