import Pricelist from "../../components/card/Pricelist"
import Sushan from "../../components/sushan/Sushan"
import Card from "./components/cards/card"
import Popularity from "./components/popularity/Popularity"

function Home() {
  return (
    <div>
        <Card/>
        <Popularity/>
        <Pricelist/>
        <div>
          <h2>Cenematic shot</h2>
            <iframe src="/mer.webm" width="750" height="415"  allow="autoplay; fullscreen" allowfullscreen></iframe>
       </div>
       <div>
        <Sushan/>
       </div>
    </div>
  )
}

export default Home