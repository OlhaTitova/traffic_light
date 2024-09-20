import './light.css'

interface Props {
  style?: string
}

const Light = ({style} : Props) => {
  return (
    <div className={`light ${style}`} />
  )
}
export default Light
