import { NavLink } from "react-router";
import { format } from "date-fns";
import { Post } from "../../types/post.d";

export default function PostItem({
    id,
    thumbnail,
    category,
    title,
    username,
    regdate,
    desc,
}: Post) {
    return (
        <article className="posts-area__post">
            <NavLink to={`/read/${id}`} className="posts-area__post-link">
                <img
                    src={thumbnail}
                    alt={title}
                    className="posts-area__post-image"
                />
                <em className="posts-area__post-tag">{category}</em>
                <h2 className="posts-area__post-title">{title}</h2>
                <p className="posts-area__post-meta">
                    {username} • {format(new Date(regdate), "MMM dd, yyyy")}
                </p>
                <p className="posts-area__post-excerpt">{desc}</p>
            </NavLink>
        </article>
    );
}
