import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

// 로그인하지 않은 사용자만 접근 가능한 레이아웃 (Auth 페이지)
export default function UnauthenticatedLayout() {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        // 로그인 상태면 메인 페이지로 이동
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return <Outlet />;
}
