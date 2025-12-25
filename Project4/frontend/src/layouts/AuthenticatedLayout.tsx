import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

// 로그인한 사용자만 접근 가능한 레이아웃 (Write 페이지)
export default function AuthenticatedLayout() {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        // 로그인하지 않은 상태면 인증 페이지로 이동
        if (!user) {
            navigate("/auth");
        }
    }, [user, navigate]);

    return <Outlet />;
}
