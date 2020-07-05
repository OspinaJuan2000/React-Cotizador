function calcularTotal(cantidad, plazo) {
    /* 
    Cantidades.
        0 - 1000: 25%
        1001 - 5000: 20%
        5001 - 10000: 15%
        +10000 - 10%
    */

    let totalCantidad = 0, totalPlazo = 0;

    if (cantidad <= 1000) {
        totalCantidad = cantidad * 0.25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * 0.20;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * 0.15;
    } else {
        totalCantidad = cantidad * 0.10;
    }

    /* 
    Calcular plazo
        3 meses - 5%.
        6 meses - 10%.
        12 meses - 15%.
        24 meses - 20%.
    */

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * 0.05;
            break;

        case 6:
            totalPlazo = cantidad * 0.10;
            break;

        case 12:
            totalPlazo = cantidad * 0.15;
            break;

        case 24:
            totalPlazo = cantidad * 0.20;
            break;

        default:
            break;
    }

    return (totalPlazo + totalCantidad + cantidad);
}


export {
    calcularTotal
}