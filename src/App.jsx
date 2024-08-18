import Router from "./routing/router";

//Wrapping the provider so I can use them globally
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </div>
  );
}

export default App;
