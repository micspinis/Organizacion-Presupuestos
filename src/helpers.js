export const revisarPresupuesto = (presupuesto, restante) => {

    // Mostrar de forma dinamica el estado del presupuesto para tener un impacto visual, si gastamos mas del 75% del presupuesto muestra un danger en la clase de stilo del tag, si es mas del 50 un warning y si no un estado en verde (success)

    let clase;

    if ((presupuesto / 4) > restante) {
        clase = "alert alert-danger";
    } else if ( (presupuesto / 2) > restante) {
        clase = "alert alert-warning";
    } else {
        clase = "alert alert-success"
    }

    return clase;
}