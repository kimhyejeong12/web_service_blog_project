import { Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
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
                    <Route path="/read/:id" element={<Read />} />

                    {/* 로그인하지 않은 사용자만 접근 가능 */}
                    <Route element={<UnauthenticatedLayout />}>
                        <Route path="/auth" element={<Auth />} />
                    </Route>

                    {/* 로그인한 사용자만 접근 가능 */}
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="/write" element={<Write />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
