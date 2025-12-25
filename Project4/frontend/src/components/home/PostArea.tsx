import { useSearchParams } from "react-router";
import PostItem from "./PostItem";
import { useAxios } from "../../hooks/useAxios";
import { Post } from "../../types/post.d";

export default function PostArea() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const { data, error, isLoading } = useAxios<Post[]>(
        q ? "/posts/search?title=" + q : "/posts",
        []
    );

    if (isLoading) {
        return (
            <section className="posts-area">
                <p>로딩 중...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="posts-area">
                <p>에러가 발생했습니다: {error}</p>
            </section>
        );
    }

    return (
        <section className="posts-area">
            {data && data.map((post) => (
                <PostItem key={post.id} {...post} />
            ))}
        </section>
    );
}
