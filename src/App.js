import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import HomePage from "./Components/HomePage";
import BankInfo from "./Components/BankInfo";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Bank_Info" element={<BankInfo/>}/>
            </Route>
        </Routes>

    );
}

export default App;
