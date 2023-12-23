import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import axios from 'axios';

// build a react component that renders pokemon cards based on user input



function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemonInfo = async () => {
      let res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonList(res.data.results);
    }
    getPokemonInfo();
  }, []);



  return (
    <div className="App">
      <Input setPokemon={setPokemon}/>
      <Card pokemon={pokemon} pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
