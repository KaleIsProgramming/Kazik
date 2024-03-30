import { Route, Routes } from "react-router-dom";
import { MainPage, PrivacyPolicyPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="privacy_policy" element={<PrivacyPolicyPage />}/>
      </Routes>
    </div>
  );
}

export default App;
