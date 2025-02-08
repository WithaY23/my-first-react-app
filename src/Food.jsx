
//testing default imports as well as imports between .jsx files
import V from './Vegetable.jsx';
export {V}; //can "carry through" imports through .jsx files
export {default as F} from './Fruit.jsx'; 
//seemingly has 2 defaults, is this allowed?

function Food()
{   
    const content = 'I like the gyal the most!'
    return <p>{content}</p> //testing js in html structure
}
export default Food;
/*
import V from './Vegetable.jsx';
export {V};
*/

