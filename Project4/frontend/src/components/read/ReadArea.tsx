import { useParams, useNavigate } from "react-router";
import { format } from "date-fns";
import { useAxios } from "../../hooks/useAxios";
import { axiosInstance } from "../../api/axiosInstance";
import { useAuthStore } from "../../stores/useAuthStore";
import { Post } from "../../types/post.d";

export default function ReadArea() {
    const params = useParams(); // 동적 세그먼트 (:id)
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const {
        data: { category, title, username, thumbnail, desc, author, regdate },
        isLoading,
        error,
    } = useAxios<Post>(`/posts/${params.id}`, {} as Post);

    // 게시글 삭제 핸들러
    const handleDelete = async () => {
        try {
            const { status } = await axiosInstance.delete(`/posts/${params.id}`);
            if (status === 204) {
                alert("삭제되었습니다.");
                navigate("/");
            } else {
                throw new Error("삭제에 실패했습니다.");
            }
        } catch (error) {
            // 에러 발생 시 alert 로 에러 메시지만 출력
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    if (isLoading) {
        return (
            <article className="page__read">
                <p>로딩 중...</p>
            </article>
        );
    }

    if (error) {
        return (
            <article className="page__read">
                <p>에러가 발생했습니다: {error}</p>
            </article>
        );
    }

    return (
        <article className="page__read">
            <em className="page__read-category">{category}</em>
            <h2 className="page__read-title">{title}</h2>
            <p className="page__read-profile">
                {username} • {regdate && format(new Date(regdate), "MMM dd, yyyy")}
            </p>
            {user?.email === author && (
                <button className="page__read-btn" onClick={handleDelete}>
                    삭제
                </button>
            )}
            <figure className="page__read-thumbnail">
                <img src={thumbnail} alt={title} className="page__read-image" />
            </figure>
            <p className="page__read-desc">{desc}</p>
        </article>
    );
}
