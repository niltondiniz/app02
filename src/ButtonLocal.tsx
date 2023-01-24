import {Button} from 'react-bootstrap'

export default function ButtonLocal(props){
  return <Button variant="primary" type="submit">
        {props.name}
      </Button>
}