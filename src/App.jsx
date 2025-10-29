import { BrowserRouter, Routes, Route } from "react-router";
import { Home} from "./Pages/Home.jsx";
import { NotFound} from "./Pages/NotFound.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default App
