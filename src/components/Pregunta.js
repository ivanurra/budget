import React, {Fragment} from 'react';

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa presupuesto"
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