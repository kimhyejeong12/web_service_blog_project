import { Link } from "react-router";
import { dummyImage1 } from "../../assets/images/images";

interface PostItemProps {
    id: number;
    image?: string;
    tag: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
}

export default function PostItem({
    id,
    image = dummyImage1,
    tag,
    title,
    author,
    date,
    excerpt,
}: PostItemProps) {
    return (
        <article className="posts-area__post">
            <Link to={`/read/${id}`} className="posts-area__post-link">
                <img
                    src={image}
                    alt={title}
                    className="posts-area__post-image"
                />
                <em className="posts-area__post-tag">{tag}</em>
                <h2 className="posts-area__post-title">{title}</h2>
                <p className="posts-area__post-meta">
                    {author} • {date}
                </p>
                <p className="posts-area__post-excerpt">{excerpt}</p>
            </Link>
        </article>
    );
}
