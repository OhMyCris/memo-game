import './Card.css'

export default function Card({id, img, isFlipped, onClick, solved}) {

    return <span
            className={`card ${isFlipped ? 'flipped' : ''}`} 
            onClick={() => onClick(id)}>
                {solved ? (
                    <img src='tick.svg' alt='Tick'/>
                ): <img src={isFlipped ? img : 'universe.svg'} alt='Card'/>}
                
            </span>
}