import React from 'react';

const Resultado = (props) => {

    const { cantidad, plazo, total } = props;

    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: {(total / plazo).toFixed(2)}</p>
            <p><b>Total a pagar: {(total).toFixed(2)}</b></p>
        </div>
    );
}

export default Resultado;