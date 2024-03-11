import { useContext } from "react"
import Pricelist from "../../components/card/Pricelist"
import Card from "./components/cards/card"
import Popularity from "./components/popularity/Popularity"
import GlobalContext from "../../GlobalContext"


function Home() {
  const contextValues = useContext(GlobalContext);
console.log(contextValues)

  return (
    <div>
        <Card/>
        <Popularity/>
        <Pricelist/>

        <div>
          <h2>Cenematic shot</h2>
            <iframe src="/mer.webm" width="750" height="415"  allow="autoplay; fullscreen" allowfullscreen></iframe>
       </div>
    </div>
  )
}

export default Home