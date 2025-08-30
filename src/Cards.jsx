import './Cards.css'
import SingleCard from './Components/SingleCard'
import Data  from './Components/Data.js'


export default function Cards() {
  return (
    <div className="cards-ctn">
      <fieldset>
        <legend>TSHIRTS</legend>
        <div className='allcards'>
           {
            Data.map((item) => (
             <SingleCard
             imgsrc={item.imgsrc}
             rating={item.rating}
             likes={item.likes}
             brand={item.brand}
             title={item.title}
             price={item.price}
             oldprice={item.oldprice}
             discount={item.discount} />
            ))
          }
        </div>
      </fieldset>
    </div>
  )
}