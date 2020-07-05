import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../Helpers/helper.js';

const Formulario = (props) => {

    const [error, guardarError] = useState(false);

    const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;

    const calcularPrestamo = (e) => {
        e.preventDefault();

        if (cantidad === 0 || plazo === '') {
            guardarError(true);

        } else {
            guardarError(false);
            guardarCargando(true);

            setTimeout(() => {
                guardarCargando(false);

                const total = calcularTotal(cantidad, plazo);
                guardarTotal(total);
                document.querySelector('form').reset();
            }, 3000);
        }
    }
    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={e => guardarCantidad(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select className="u-full-width" onChange={e => guardarPlazo(Number(e.target.value))}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
        </Fragment>
    );
};

export default Formulario;
