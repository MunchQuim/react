/* lógica del juego, 
incluyendo la selección del jugador, la elección aleatoria del 
computador y la determinación del ganador*/

import { useState, useEffect } from 'react';
import optionsJson from '../data/options.json';
const options = optionsJson;
const UseChoices = () => {
  // Estado del juego
  const [userChoice, setUserChoice] = useState(null); // Elección del jugador
  const [computerChoice, setComputerChoice] = useState(null); // Elección de la máquina
  const [userMessage, setUserMessage] = useState(null); // Mensaje para el jugador
  const [computerMessage, setComputerMessage] = useState(null); // Mensaje para la máquina
  const [result, setResult] = useState(null); // Resultado del juego
  const [disabled, setDisabled] = useState(false); // Deshabilita los botones mientras se juega

  // Lógica de resultado del juego
  const getResult = (choice, randomNum) => {
    if (choice === randomNum) {
      return 0; // Empate
    } else if (options[choice].beats.includes(randomNum)) {
      return 1; // Jugador gana
    } else {
      return 2; // Computadora gana
    }
  };

  // Función para manejar el inicio del juego
  const handlePlay = (choice) => {
    setUserChoice(choice); // Establece la elección del usuario
    setDisabled(true); // Desactiva el botón
    const randomNum = Math.floor(Math.random() *5); 
    setTimeout(() => {
      setComputerChoice(randomNum);
      setResult(getResult(choice, randomNum)); // Calcula el resultado del juego
    }, 1500);
  };

  // Función para reiniciar el juego
  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
  };

  // Efecto para actualizar el mensaje del jugador
  useEffect(() => {
    if (userChoice != null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice, options]);

  // Efecto para actualizar el mensaje de la computadora
  useEffect(() => {
    if (computerChoice != null) {
      setComputerMessage(
        `La máquina ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice, options]);

  return {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  };
};

export default UseChoices;