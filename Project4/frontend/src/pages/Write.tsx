import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axiosInstance";
import { useAuthStore } from "../stores/useAuthStore";

// 이미지 파일을 Base64 문자열로 변환하는 함수
const encodeFileToBase64 = (image: File) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        // FileReader에게 이 파일을 Base64 형식으로 읽도록
        reader.readAsDataURL(image);

        // 파일 읽기가 성공적으로 끝났을 때 호출되는 콜백
        reader.onload = (event) => {
            const target = event.target as FileReader | null;
            if (target && target.result) {
                // Promise를 성공(resolve)시키면서 base64 데이터(URL 문자열)를 넘겨줌
                resolve(target.result as string);
            } else {
                reject(new Error("File reading failed"));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};

export default function Write() {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [desc, setDesc] = useState("");

    // 썸네일 이미지 업로드 핸들러
    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = (event.target.files && event.target.files[0]) || null;
        if (!file) return;
        const convertedFile = await encodeFileToBase64(file);
        setThumbnail(convertedFile as string);
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 페이지 새로 고침 방지
        try {
            if (!title || !category || !thumbnail || !desc || !user?.username) {
                alert("입력 값이 누락되었습니다.");
                return;
            }
            const { status } = await axiosInstance.post("/posts", {
                title,
                category,
                thumbnail,
                desc,
                username: user.username,
            });
            if (status === 201) {
                alert("글이 등록되었습니다.");
                navigate("/");
            }
        } catch (error) {
            // 에러 발생 시 alert 로 에러 메시지만 출력
            if (error instanceof Error) {
                alert("글 등록에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <main className="page__main">
            <div className="page__write">
                <h2 className="page__write-text">새로운 글 작성</h2>
                <form onSubmit={handleSubmit}>
                    <div className="page__write-form">
                        <div className="page__write-group">
                            <label htmlFor="title" className="page__write-label">
                                제목
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="page__write-input"
                                placeholder="제목을 입력하세요"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="page__write-label">
                                카테고리
                            </label>
                            <select
                                id="category"
                                className="page__write-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select category</option>
                                <option value="Travel">Travel</option>
                                <option value="Food">Food</option>
                                <option value="Life">Life</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="writer" className="page__write-label">
                                작성자
                            </label>
                            <input
                                type="text"
                                name="writer"
                                id="writer"
                                className="page__write-input"
                                value={user?.username || ""}
                                readOnly
                            />
                        </div>
                        <div className="page__write-group">
                            <div>
                                <label htmlFor="user_avatar" className="page__write-label">
                                    썸네일
                                </label>
                                <label className="page__write-file--hidden" htmlFor="user_avatar">
                                    Upload file
                                </label>
                                <input
                                    className="page__write-file"
                                    aria-describedby="user_avatar_help"
                                    id="user_avatar"
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    required
                                />
                            </div>
                        </div>
                        <div className="page__write-group">
                            <label htmlFor="description" className="page__write-label">
                                내용
                            </label>
                            <textarea
                                id="description"
                                className="page__write-textarea"
                                placeholder="내용을 입력하세요"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="page--btn">
                        글등록
                    </button>
                </form>
            </div>
        </main>
    );
}
