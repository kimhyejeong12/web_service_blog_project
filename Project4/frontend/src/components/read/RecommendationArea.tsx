import { useParams } from "react-router";
import { useAxios } from "../../hooks/useAxios";
import { Post } from "../../types/post.d";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationArea() {
    const params = useParams();
    const { data, isLoading, error } = useAxios<Post[]>(
        `/posts/${params.id}/related`,
        []
    );

    // 받아온 배열 길이가 0인 경우 null 리턴
    if (data.length === 0) return null;

    if (isLoading) {
        return (
            <article className="page__recommend">
                <p>로딩 중...</p>
            </article>
        );
    }

    if (error) {
        return (
            <article className="page__recommend">
                <p>에러가 발생했습니다: {error}</p>
            </article>
        );
    }

    return (
        <article className="page__recommend">
            <h3 className="page__recommend-heading">Recommend Reading</h3>
            <ul className="page__recommend-lists">
                {data &&
                    data.map((post) => (
                        <RecommendationItem key={post.id} {...post} />
                    ))}
            </ul>
        </article>
    );
}
