
import starImg from '../assets/star.png'

export default function Card(props) {
    return (
        <div className='card-div'>
            {props.openSpot === 0 && <div className='card-badge'>Sold out</div>}
            <img src={props.img} alt="" className='card-img' />
            <div className='rating-div'>
                <img src={starImg} alt="" className='star-img' />
                <span>{props.rating}</span>
                <span className='gray'>({props.numRating}) • </span>
                <span className='gray'>USA</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p> <span className='bold'>From ${props.price}</span>  / person</p>
        </div>
    )
}