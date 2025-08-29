import './Cards.css'
import SingleCard from './Components/SingleCard'
import img8 from '../assets/images/img8.webp';

export default function Cards() {
  return (
    <div className="cards-ctn">
      <fieldset>
        <legend>TSHIRTS</legend>
        <div className='allcards'>
        <SingleCard
         imgsrc="\src\assets\images\img1.webp" rating="4.5" likes="8.6k" brand="H&M" title="T-Shirts" price="Rs.1500" oldprice="Rs.3000" discount="50"
         />
        <SingleCard
         imgsrc="\src\assets\images\img2.webp" rating="4.0" likes="7.5k" brand="Beer House" title="T-Shirts" price="Rs.999" oldprice="Rs.1500" discount="43"
         />
        <SingleCard
         imgsrc="\src\assets\images\img3.webp" rating="3.8" likes="6.0k" brand="H&M" title="T-Shirts" price="Rs.989" oldprice="Rs.3000" discount="83"
         />
        <SingleCard
         imgsrc="\src\assets\images\img4.webp" rating="4.9" likes="10.9k" brand="Gucci" title="T-Shirts" price="Rs.699" oldprice="Rs.2500" discount="76"
         />
        <SingleCard
         imgsrc="\src\assets\images\img5.webp" rating="5.0" likes="12.k" brand="Zudio" title="T-Shirts" price="Rs.499" oldprice="Rs.999" discount="48"
         />
        <SingleCard
         imgsrc="\src\assets\images\img6.webp" rating="3.5" likes="4.5k" brand="Levis" title="T-Shirts" price="Rs.699" oldprice="Rs.1299" discount="36"
         />
        <SingleCard
         imgsrc="\src\assets\images\img7.webp" rating="4.9" likes="6.0k" brand="Peter England" title="T-Shirts" price="Rs.1200" oldprice="Rs.1500" discount="15"
         />
        <SingleCard
         imgsrc={img8} rating="4.8" likes="5.9k" brand="Zara" title="T-Shirts" price="Rs.799" oldprice="Rs.1599" discount="65"
         />
        </div>
      </fieldset>
    </div>
  )
}