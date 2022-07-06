import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './style.css';

export default function App() {
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

/*const gFetchApi = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    gFetchApi(url);
  }, []);
*/

//ASYNC AWAIT
/* const getFetchApi = async (url) => {
    try {
      const query = await fetch(url);
      const queryParse = await query.json();
      console.log(queryParse.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    getFetchApi(url);
  }, []);
  */

//para intentar mapearlo

/*const [pokemones, setPokemones] = useState([]);
  const gFetchApi = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPokemones(data.results))
      
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    gFetchApi(url);
  }, []);

  return (
    <div>
      {
        pokemones.map((pokemon=>{
          return <p>{pokemon.name}</p>
        }))
      }
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
*/
