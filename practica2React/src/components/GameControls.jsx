/* Componente para controles adicionales 
del juego, como un botón para reiniciar */
function ResetBtn(reset) {
    return (<button
        className='botonReset'
        onClick={() => reset()}    >
        "Volver a jugar"
    </button>)

}
export default ResetBtn;