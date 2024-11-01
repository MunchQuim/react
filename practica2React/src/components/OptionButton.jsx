/*  Componente para mostrar cada opción del 
juego (piedra, papel, etc.).
 */
function OptionBtn(id, state, name, emoji,handlePlay) {
    return (<button
        className='botonJugador'
        key={id}
        disabled={state}//estado
        onClick={() => handlePlay(id)}
        title={name}
    >
        {emoji}
    </button>)

}
export default OptionBtn;