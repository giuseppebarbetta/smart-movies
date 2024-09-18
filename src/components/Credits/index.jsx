import { getImages } from '../../utils/getImages'
import { Container, Title } from './styles'

function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((person) => (
            <div key={person.id}>
              <img src={getImages(person.profile_path)} />
              <p>{person.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  )
}

export default Credits
