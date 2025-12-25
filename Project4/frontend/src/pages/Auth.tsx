import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axiosInstance";
import { useAuthStore } from "../stores/useAuthStore";

export default function Auth() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);
    const [pageType, setPageType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [username, setUsername] = useState("");

    const handlePageChange = (type: string) => {
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setUsername("");
        setPageType(type);
    };

    // 로그인 핸들러
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await axiosInstance.post("/login", {
                email,
                password,
            });
            console.log(data);
            // 받은 data (JWT) 정보를 전역 상태(zustand)에 저장
            setAuth(data.user, data.accessToken);
            navigate("/"); // 로그인 후 메인 페이지 이동
        } catch (error) {
            // 에러 발생 시 alert 로 에러 메시지만 출력
            if (error instanceof Error) {
                alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
            }
        }
    };

    // 회원가입 핸들러
    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (email === "" || password === "" || username === "") {
                alert("모든 항목을 입력해 주세요.");
                return;
            }
            if (password !== passwordConfirm) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
            const { data } = await axiosInstance.post("/register", {
                email,
                password,
                username,
            });
            if (data) {
                alert("회원가입을 완료했습니다.\n로그인 후 이용해 주세요.");
                // 상태값 초기화 및 로그인 탭으로 화면 전환
                setPassword("");
                setPasswordConfirm("");
                setUsername("");
                setPageType("login");
            }
        } catch (error) {
            // 에러 발생 시 alert 로 에러 메시지만 출력
            if (error instanceof Error) {
                alert("회원가입에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <main className="page__main">
            <article className="page-auth">
                <section className="page-auth__container">
                    <nav className="page-auth__toggle">
                        <button
                            id="login-tab"
                            className={`page-auth__toggle-button ${pageType === "login" ? "page-auth__toggle-button--active" : ""
                                }`}
                            onClick={() => handlePageChange("login")}
                        >
                            로그인
                        </button>
                        <button
                            id="signup-tab"
                            className={`page-auth__toggle-button ${pageType === "signup" ? "page-auth__toggle-button--active" : ""
                                }`}
                            onClick={() => handlePageChange("signup")}
                        >
                            회원가입
                        </button>
                    </nav>

                    <div className="page-auth__form-section">
                        {pageType === "login" ? (
                            <form
                                className="auth-form auth-form--active"
                                id="login-form"
                                onSubmit={handleLogin}
                            >
                                <label htmlFor="login-email">이메일</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    className="auth-form__input"
                                    placeholder="이메일"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label htmlFor="login-password">비밀번호</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button type="submit" className="auth-form__submit">
                                    로그인
                                </button>
                            </form>
                        ) : (
                            <form
                                className="auth-form auth-form--active"
                                id="signup-form"
                                onSubmit={handleSignup}
                            >
                                <label htmlFor="signup-email">이메일</label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    className="auth-form__input"
                                    placeholder="이메일"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label htmlFor="signup-name">이름</label>
                                <input
                                    type="text"
                                    id="signup-name"
                                    className="auth-form__input"
                                    placeholder="이름"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />

                                <label htmlFor="signup-password">비밀번호</label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <label htmlFor="signup-confirm-password">비밀번호 확인</label>
                                <input
                                    type="password"
                                    id="signup-confirm-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호 확인"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    required
                                />

                                <button type="submit" className="auth-form__submit">
                                    회원가입
                                </button>
                            </form>
                        )}
                    </div>
                </section>
            </article>
        </main>
    );
}
