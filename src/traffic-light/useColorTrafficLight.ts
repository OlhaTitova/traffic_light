import {useEffect, useState} from "react";

export const useColorTrafficLight = () => {
  const [activeColor, setActiveColor] = useState("red")
  const [yellow, setYellow] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let isVisible: boolean;
    let blinkingYellowIntervalId: ReturnType<typeof setInterval>;

    const lightCycle = () => {
      if (activeColor === "red" && !yellow) {
        timer = setTimeout(() => {
          setYellow(true)
        }, 3000)
      } else if (activeColor === "red" && yellow) {
        timer = setTimeout(() => {
          setActiveColor("green")
          setYellow(false)
        }, 3000)
      } else if (activeColor === "green" && !yellow) {
        timer = setTimeout(() => {
          setYellow(true)
        }, 3000)
      } else if (activeColor === "green" && yellow) {
        timer = setTimeout(() => {
          blinkingYellowIntervalId = setInterval(() => {
            if(isVisible){
              setYellow(true)
            } else {
              setYellow(false)
            }
            isVisible = !isVisible
          },500)
        }, 3000)

        setTimeout(() => {
          setActiveColor("red")
          clearInterval(blinkingYellowIntervalId)
        }, 7000)
      }
    }

    lightCycle()
    return () => clearTimeout(timer)
  }, [activeColor, yellow])

  return ({activeColor, yellow})
}
