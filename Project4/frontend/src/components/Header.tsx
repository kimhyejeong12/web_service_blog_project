import { NavLink } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { axiosInstance } from "../api/axiosInstance";

export default function Header() {
    const user = useAuthStore((state) => state.user);
    const unsetAuth = useAuthStore((state) => state.unsetAuth);

    // 로그아웃 핸들러
    const handleLogout = async () => {
        try {
            const { status } = await axiosInstance.post("/logout");
            if (status === 200) {
                // 로그아웃 성공 → zustand 상태값 초기화
                unsetAuth();
            } else {
                throw new Error("로그아웃에 실패했습니다.");
            }
        } catch (error) {
            // 에러 발생 시 alert 로 에러 메시지만 출력
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    return (
        <header className="page__header">
            <h1 className="page__logo">
                <NavLink to="/" className="page__logo-link">
                    JBNU
                </NavLink>
            </h1>
            <nav className="page__navigation">
                <ul className="page__nav-list">
                    <li className="page__nav-item">
                        <NavLink to="/write" className="page__nav-link">
                            글쓰기
                        </NavLink>
                    </li>
                    <li className="page__nav-item">
                        {user ? (
                            <button className="page__nav-link" onClick={handleLogout}>
                                로그아웃
                            </button>
                        ) : (
                            <NavLink to="/auth" className="page__nav-link">
                                인증
                            </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
