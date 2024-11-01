/* Componente para mostrar el resultado de 
cada ronda */
function ResultDisplay(result) {
switch (result) {
    case 0:
        return(<p className='result'>"Empate"</p>);
    case 1:
        return(<p className='result'>"Has ganado"</p>);
    case 2:
        return(<p className='result'>"Has perdido"</p>);

    default:
        return(<p className='result'>"Upsi, parece que ha habido algun error"</p>);
}
    
}
export default ResultDisplay;