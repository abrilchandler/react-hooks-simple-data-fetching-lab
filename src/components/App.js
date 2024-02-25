// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [randomDog, setRandomDog] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setRandomDog(data.message);
                setIsLoaded(true);
                console.log(data);
    });
    }, [])
    if (!isLoaded) { return <p>Loading...</p>
    }
return (<div><img alt="A Random Dog" src={randomDog}/></div>
)}
console.log(useEffect)


export default App