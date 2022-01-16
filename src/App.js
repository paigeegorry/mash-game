import { useState } from 'react';
import './App.css';

function App() {
  const [choices, setChoices] = useState('');
  const [category, setCategory] = useState('Choose a category');
  const [categoryWithChoices, setCategoryWithChoices] = useState({});
  const [categoryChoices, setCategoryChoices] = useState(['Spouse/Partner', 'Career', 'Salary', 'Pet', 'Car']);
  const [number, setNumber] = useState(2);

  const handleCategoryChange = ({ target }) => {
    setCategory(target.value);
  };
  
  const handleClick = () => {
    const formattedChoices = choices.split(',').filter(c => c.length > 0);
    setCategoryWithChoices({...categoryWithChoices, [`${category}`]: formattedChoices })
    setCategoryChoices(categoryChoices.filter(cat => cat !== category))
    setChoices('')
    setCategory('Choose a category')
  }

  const renderChosenContent = () => (
    <>
      {Object.keys(categoryWithChoices).map((cat, idx) => (
        <>
          <p key={idx}>{cat}</p>
          <ul key={idx}>
            {categoryWithChoices[cat].map((choice, idx) => (
              <li key={idx}>{choice}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>MASH Game</h1>
        <p>MASH (Mansion, Apartment, Shack, House) is a fortune telling game.</p>
        <select onChange={handleCategoryChange} value={category}>
          <option disabled hidden>Choose a category</option>
          {categoryChoices.map((choice, idx) => (
            <option key={idx} value={choice}>{choice}</option>
          ))}
        </select>
        <input type="text" placeholder="input" value={choices} onChange={({target}) => setChoices(target.value)} />
        <p>Please separate choices with a comma. (example: French Bulldog, Beagle, Toad, Owl)</p>
        <button onClick={handleClick}>Add category with choices</button>
        {Object.keys(categoryWithChoices).length > 0 &&
          <>
            <h2>Choices so far:</h2>
            {renderChosenContent()}
          </>
        }
        {categoryWithChoices.length > 2 && <button>Ready to Play</button>}
      </header>
      <p>Pick a number:</p>
      <input type="number" value={number} onChange={(({target}) => setNumber(target.value))}/>
      <button>Start Game</button>
    </div>
  );
}

export default App;
