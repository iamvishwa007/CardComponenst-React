import './SingleCard.css'
export default function SingleCard(data){
    return(
         <a href="https://example.com/product" className="Single-ctn">
           <div className='img-container'> 
            <img src={data.imgsrc} alt=''/>
            <div className='rating'>
               <span>{data.rating}</span>
               <span>{data.likes}</span>
            </div>
           </div>

           <div className='card-content'>
            <h3 className='brand'>{data.brand}</h3>
            <p className='title'>{data.title}</p>
            <div className='price-section'>
                <span class="price">{data.price}</span>
                <span class="old-price">{data.oldprice}</span>
               <span class="discount">({data.discount}%)</span>
            </div>

           </div>
        </a>
    )
}