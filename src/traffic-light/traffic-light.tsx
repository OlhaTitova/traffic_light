import Light from "./light/light";
import './traffic-light.css'
import {useColorTrafficLight} from "./useColorTrafficLight";

const TrafficLight = () => {
  const {activeColor, yellow} = useColorTrafficLight()

  return (
    <div className='traffic-light'>
      <Light style={`red ${activeColor === "red" ? "on" : ''}`} />
      <Light style={`yellow ${yellow ? "on" : ''}`} />
      <Light style={`green ${activeColor === "green" ? "on" : ''}`} />
    </div>
  )
}

export default TrafficLight
