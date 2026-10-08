import { useState } from "react";


// React State kya hota hai?

// State = component ke andar aisa data jo change ho sakta hai.
function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default App;