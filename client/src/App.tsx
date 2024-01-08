import './App.css';
import { NewEntry } from './NewEntry';
import { EntriesList } from './EntriesList';
import { Navigation } from './Navigation';

function App() {
  return (
    <>
      <Navigation />
      <NewEntry />
      <EntriesList />
    </>
  );
}

export default App;
