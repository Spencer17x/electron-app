import { useNavigate } from 'react-router-dom'

function PageB(): JSX.Element {
  const navigate = useNavigate()
  const onClick = (): void => {
    navigate('/page-a')
  }
  return <div onClick={onClick}>PageB</div>
}

export default PageB
