import './Cards.css'
import SingleCard from './Components/SingleCard'
import img8 from './assets/images/img8.webp';
import img7 from './assets/images/img7.webp';
import img6 from './assets/images/img6.webp';
import img5 from './assets/images/img5.webp';
import img4 from './assets/images/img4.webp';
import img3 from './assets/images/img3.webp';
import img2 from './assets/images/img2.webp';
import img1 from './assets/images/img1.webp';


export default function Cards() {
  return (
    <div className="cards-ctn">
      <fieldset>
        <legend>TSHIRTS</legend>
        <div className='allcards'>
        <SingleCard
         imgsrc={img1} rating="4.5" likes="8.6k" brand="H&M" title="T-Shirts" price="Rs.1500" oldprice="Rs.3000" discount="50"
         />
        <SingleCard
         imgsrc={img2} rating="4.0" likes="7.5k" brand="Beer House" title="T-Shirts" price="Rs.999" oldprice="Rs.1500" discount="43"
         />
        <SingleCard
         imgsrc={img3} rating="3.8" likes="6.0k" brand="H&M" title="T-Shirts" price="Rs.989" oldprice="Rs.3000" discount="83"
         />
        <SingleCard
         imgsrc={img4} rating="4.9" likes="10.9k" brand="Gucci" title="T-Shirts" price="Rs.699" oldprice="Rs.2500" discount="76"
         />
        <SingleCard
         imgsrc={img5} rating="5.0" likes="12.k" brand="Zudio" title="T-Shirts" price="Rs.499" oldprice="Rs.999" discount="48"
         />
        <SingleCard
         imgsrc={img6} rating="3.5" likes="4.5k" brand="Levis" title="T-Shirts" price="Rs.699" oldprice="Rs.1299" discount="36"
         />
        <SingleCard
         imgsrc={img7} rating="4.9" likes="6.0k" brand="Peter England" title="T-Shirts" price="Rs.1200" oldprice="Rs.1500" discount="15"
         />
        <SingleCard
         imgsrc={img8} rating="4.8" likes="5.9k" brand="Zara" title="T-Shirts" price="Rs.799" oldprice="Rs.1599" discount="65"
         />
        </div>
      </fieldset>
    </div>
  )
}