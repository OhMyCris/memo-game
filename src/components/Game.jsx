import { useState, useEffect } from "react";
import Card from "./Card";
import './Game.css'

export default function Game({cardArray}) {


    //Esta funcion hace que las cartas se mezclen aleatoriamente
    function cardShuffle() {
        const arrayCards = [...cardArray];
        for (let i = arrayCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arrayCards[i], arrayCards[j]] = [arrayCards[j], arrayCards[i]];
        }
        return arrayCards;
    }

    //Si se pone el cardArray dentro del cardShuffle cada vez que se refreshea la pagina las posiciones de las cartas cambian, se pueden volver a cambiar con el boton de Mezclar pero ya no es tan necesario, y la funcion handShuffle ya no tiene proposito
    const [items, setItems] = useState(cardShuffle(cardArray));
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([]);

    // const handShuffle = () => {
    //     setItems(cardShuffle(items))
    // }

    // const [cambio, setSwitch] = useState("public/universe.svg")
    
    //Aqui está la logica para que solo puedas clickar maximo dos cartas a la vez
    const cardClick = (id) => {
        if(flipped.length < 2 && !flipped.includes(id) && !solved.includes(items[id].name)) {
            setFlipped((prev => [...prev, id]))
        }
    }

    //Y aqui la logica que mira las cartas y decide si son iguales o son distintas y espera 1seg para volverlas a girar
    useEffect(() => {
        const checkForMatch = () => {
            if(flipped.length === 2) {
                const [firstCard, secondCard] = flipped;

                if(items[firstCard].name === items[secondCard].name) {
                    setSolved((prev) => [...prev, items[firstCard].name]);
                }

                setTimeout(() => {
                    setFlipped([]);
                }, 1000);
            }
        };

        checkForMatch();
    }, [flipped, items]);

    //Mapea los items dentro de la carta para que se pueda llamar a la imagen dentro de la carta
    return <div>
            {items.map((item, index) =>(
                <Card
                    key={index}
                    id={index}
                    img={item.img}
                    isFlipped={flipped.includes(index) || solved.includes(item.name)}
                    onClick={cardClick}
                    solved={solved.includes(item.name)}
                />

              /* <span key={index} onClick={() => pruebaClick(index)}>
              
                    {/* <img src="public/universe.svg" className="planetas"/> 
                    <img src={item.img = "public/universe.svg"} className="planetas"/>
               </span> */
            ))}
            
     <button onClick={() => setItems(cardShuffle(cardArray))}>Mezclar</button>
    </div>
}