import { useState, useEffect } from 'react';
import optionsJson from './data/options.json';
import OptionBtn from './components/OptionButton';
import MessageDisplay from './components/MessageDisplay';
import ResultDisplay from './components/ResultDisplay';
import ResetBtn from './components/GameControls';
import UseChoices from './hooks/useChoices';



function Game() {
  const options = optionsJson;
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = UseChoices();
  /*
  // inicio de la logica
  const getResult = (choice, randomNum) => {
    if (choice === randomNum) {
      //empate
      return 0;
    }
    else {
      if (options[choice].beats.includes(randomNum)) {
        //ganas
        return 1;
      }
      else {
        //pierdes
        return 2;
      }

    }
  }
  const [userChoice, setUserChoice] = useState(null);// eleccion jugador
  const [computerChoice, setComputerChoice] = useState(null);//eleccion random de la maquina
  const [userMessage, setUserMessage] = useState(null);//llama a messageDisplay
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null); // define el ganador
  const [disabled, setDisabled] = useState(false);

  const handlePlay = (choice) => {
    setUserChoice(choice);// le pasamos la eleccion a userChoice 
    setDisabled(true);//desactivamos el boton
    const randomNum = Math.floor(Math.random() * 5);//escogemos un numero aleatorio entre el 0 y el 4
    setTimeout(() => { //lo que hace el timeout no es esperar el tiempo luego de completar lo de dentro, sino despues de CADA accion de dentro.
      setComputerChoice(randomNum);
      setResult(getResult(choice, randomNum)); //no podemos usar los useStates porque son funciones asincronas, para cuando se ejecuta el codigo, no se ha actualizado.

    }, 1500);


    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
  }
  // fin de la logica

  //hooks
  useEffect(() => {
    if (userChoice != null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      )//cambiamos el estado de userMesage para que coincida con nuestra eleccion

    }
  }, [userChoice])// es como un timeout, en vez de cada x ms ejecuta el codigo cada vez que detecta un cambio en el userChoice

  useEffect(() => {
    if (computerChoice != null) {
      setComputerMessage(
        `La máquina ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      )//cambiamos el estado de userMesage para que coincida con nuestra eleccion

    }
  }, [computerChoice])// es como un timeout, en vez de cada x ms ejecuta el codigo cada vez que detecta un cambio en el userChoice

  // fin de hooks */
  return (

    <div className='main'>
      <div className='capsula'>
        <h1>A jugar</h1>
        <div className='opciones'>
          {options.map((opcion) => (
            OptionBtn(opcion.id, disabled, opcion.name, opcion.emoji, handlePlay)
          ))
          }

          {userChoice != null && (
            MessageDisplay(userMessage)
          )}
          {computerChoice != null && (
            MessageDisplay(computerMessage)
          )}

          {result != null && (
            ResultDisplay(result)
          )}
          {result != null && (
            ResetBtn(reset)
          )}

        </div>

      </div>
    </div>


  )
}
export default Game;
