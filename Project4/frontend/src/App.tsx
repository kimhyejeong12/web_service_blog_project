import { Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Write from "./pages/Write";
import Read from "./pages/Read";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/read/:id" element={<Read />} />
                </Route>
            </Routes>
        </>
    );
}
