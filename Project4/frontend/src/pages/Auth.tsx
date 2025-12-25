import { useState } from "react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className="page__main">
            <article className="page-auth">
                <section className="page-auth__container">
                    <nav className="page-auth__toggle">
                        <button
                            id="login-tab"
                            className={`page-auth__toggle-button ${isLogin ? "page-auth__toggle-button--active" : ""}`}
                            onClick={() => setIsLogin(true)}
                        >
                            로그인
                        </button>
                        <button
                            id="signup-tab"
                            className={`page-auth__toggle-button ${!isLogin ? "page-auth__toggle-button--active" : ""}`}
                            onClick={() => setIsLogin(false)}
                        >
                            회원가입
                        </button>
                    </nav>

                    <div className="page-auth__form-section">
                        {isLogin ? (
                            <form className="auth-form auth-form--active" id="login-form">
                                <label htmlFor="login-email" className="a11y-hidden">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="login-email"
                                    className="auth-form__input"
                                    placeholder="이메일"
                                    required
                                />

                                <label htmlFor="login-password" className="a11y-hidden">
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    id="login-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호"
                                    required
                                />

                                <button type="submit" className="auth-form__submit">
                                    로그인
                                </button>
                            </form>
                        ) : (
                            <form className="auth-form auth-form--active" id="signup-form">
                                <label htmlFor="signup-email" className="a11y-hidden">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    className="auth-form__input"
                                    placeholder="이메일"
                                    required
                                />

                                <label htmlFor="signup-name" className="a11y-hidden">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    id="signup-name"
                                    className="auth-form__input"
                                    placeholder="이름"
                                    required
                                />

                                <label htmlFor="signup-password" className="a11y-hidden">
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호"
                                    required
                                />

                                <label htmlFor="signup-confirm-password" className="a11y-hidden">
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    id="signup-confirm-password"
                                    className="auth-form__input"
                                    placeholder="비밀번호 확인"
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
