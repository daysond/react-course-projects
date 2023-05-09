
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './style.css'

function App() {

  let cardData = [{
                id:1,
                rating:"5.0",
                numRating:6,
                price:136,
                title:"Life lesson with KZ" ,
                img:"src/assets/katie-zaferes.png",
                openSpot:0,
              },

                {rating:"5.0",
                id:2,
                numRating:66,
                price:186,
                title:"Learning wedding photography" ,
                img:"src/assets/wedding-photography.png",
                openSpot:10},
              
                {rating:"4.8",
                id:3,
                numRating:2,
                price:50,
                title:"Group mountain biking" ,
                img:"src/assets/mountain-bike.png",
                openSpot:0}
              ]

  cardData = cardData.map(data => <Card 
                          key={data.id} 
                          {...data}/>) 

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cards-div'>
      {cardData}
      </div>
      
    </div>
    
  )
}

export default App
