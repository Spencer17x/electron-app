import { useNavigate } from 'react-router-dom'

function PageA(): JSX.Element {
  const navigate = useNavigate()
  const onClick = (): void => {
    navigate('/page-b')
  }
  return <div onClick={onClick}>PageA</div>
}

export default PageA
