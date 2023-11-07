import { people } from './data.js';
import { getImageUrl } from './utils.js';



const listItems = people.map(
  person => {
    return <li key={person.id}>
    <img
        src={getImageUrl(person)}
        alt={person.name}
        />
    <p>
        <b>{person.name} </b>
        {person.profession + ' known for ' + person.accomplishment + ' '}
    </p>
  </li>
  }
);

export default function List() {
  return <ul>{listItems}</ul>
}