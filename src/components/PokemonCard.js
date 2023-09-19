import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div onClick={(e) => setShowFront(!showFront)}>
        <div className="image">
          <img src={showFront ? props.sprites.front : props.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;





























// import React, {useState} from "react";
// import { Card } from "semantic-ui-react";



// function PokemonCard(props) {

//   //Front/back toggle event listener applies to each PokemonCard, therefore it should live on PokemonCard.
//   //Write toggle event listener function (showFront true/false boolean) (Code Challenge HINT!!: Show quote or bio toggle event)
//   const [showFront, setShowFront] = useState(true)



//   return (
//     <Card>
//       <div onClick={(e) => setShowFront(!showFront)}> {/*call event listener function in div*/}
//         <div className="image">
//           <img src={showFront ? props.sprites.front : props.sprites.back} alt="oh no!" />
//         </div>
//         <div className="content">
//           <div className="header">{props.name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {props.hp} hp
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;
