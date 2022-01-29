import { useState } from "react";

const Home = () => {
const handleClick = (e) => {
    console.log('Hello my nigga', e);
}
const handleCliCkAgain = (name, e) => {
    console.log('Hello ' + name, e.target, e.shiftKey)
}
const nameButton = () => {
    //name = 'Inverted Triangle';
    setName('Inverted Triangle');
    setStatus('Not yet used');
}
//let name = 'Kimura';
const [name, setName ] = useState('Kimura');
const [status, setStatus] = useState('Completed');

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) =>handleCliCkAgain('King of the bongo', e)
            }>Click me now</button>
            <p>{name} has been {status} </p>
            <button onClick={nameButton}>Name Button</button>
        </div>
     );
}
 
export default Home;