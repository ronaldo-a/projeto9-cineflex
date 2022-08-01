import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/reset.css"
import MainPage from "./MainPage";
import Header from "./Header";
import MovieSessions from "./MovieSessions";
import SessionSits from "./SessionSits";
import Success from "./Success";


export default function App() {
    return (
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/sessoes/:filmeId" element={<MovieSessions/>}/>
                <Route path="/assentos/:sessaoId" element={<SessionSits/>}/>
                <Route path="/sucesso" element={<Success/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}