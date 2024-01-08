import { useState } from 'react';
import './App.css';
import {NewEntry} from './NewEntry';
import {EntriesList} from './EntriesList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewEntry />
      <EntriesList/>
    </>
  );
}

export default App;
