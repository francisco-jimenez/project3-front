import TinderCard from 'react-tinder-card'
import Foods from './foods'

// ...

function Tinder (){
    
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      
      return (
        <div style={{border: "3px black solid", width: "40%", margin: "auto", overflow: "hidden"}}>
            <h1>holi</h1>
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['down']}><img src='https://www.goiko.com/wp-content/uploads/2021/07/KendallBacon_Ficha-de-producto-1200x600-1-340x340.jpg ' /></TinderCard>
        </div>
      ) 
}

export default Tinder

