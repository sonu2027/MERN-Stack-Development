
import List from './List'; // Import the List component

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>List Component Example</h1>
      <List items={items} /> {/* Render the List component with items prop */}
    </div>
  );
}

export default App;
