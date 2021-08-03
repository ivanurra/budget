import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    // Definir State
    const [ cantidad, guardarCantidad ] = useState(0);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    };

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validación

        // Paso siguiente a la validación
    };

    return ( 
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>
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