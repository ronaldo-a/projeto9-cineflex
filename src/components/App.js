import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/style.css"
import MainPage from "./MainPage";


export default function App() {
    return (
        <BrowserRouter >
            
            <Routes>
                <Route path="/" element={<MainPage/>} />
            </Routes>
        
        </BrowserRouter>
    )
}