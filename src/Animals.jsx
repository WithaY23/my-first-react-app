
//testing props with a list filter
function List(props) 
{
    return (
      <ul>
        {props.animals.filter((animal) => animal.startsWith("L")).map((animal) => 
        {
            return <li key={animal}>{animal}</li> //used animal name as the unique key identifier, assumes no repeats
        })}
      </ul>
    );
}
  
  export default function App() 
  {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }

export {List};