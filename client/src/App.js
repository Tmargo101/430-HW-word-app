import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
{/* import List from './components/List.js';
import AssociationsList from './components/AssociationsList.js';
import Counter from './components/Counter.js'; */}


function App() {
  const [word, setWord] = React.useState('software');
  const [associations, setAssociations] = React.useState(null);
  
  const getAssociations = () => {
    fetch('/api/associations/' + word)
    .then(result => result.json())
    .then(body => setAssociations(body))
    .catch(error => console.log(error))
  };

  return (
    <div className="app">
      <Header title="Word Associations" />
      <input value={word} onChange={e => setWord(e.target.value)} />
      <button onClick={getAssociations}>Search</button>
      
      {/* <List items={['red', 'green', 'blue']} /> */}
      
      {/* <AssociationsList items={ associations || [] } /> */}

      {associations && (
        associations.length === 0
          ? <p>No results</p>
          : <div>
             <p>Results! length = {associations.length}</p>
             {associations.map((association,index) => (
              <span key={index} style={{ fontSize: Math.pow(association.weight, 2) / 100 }}>
                {association.item}
                {' '}
              </span>
            ))}
          </div>
      )}
      
      {/* <Counter />
      <Counter />
      <Counter /> */}
      <Footer />
    </div>
  );
}

export default App;
