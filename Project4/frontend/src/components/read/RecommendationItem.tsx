import { NavLink } from "react-router";
import { Post } from "../../types/post.d";

export default function RecommendationItem({
    id,
    thumbnail,
    title,
    desc,
}: Post) {
    return (
        <li>
            <NavLink to={`/read/${id}`}>
                <div className="page__recommend-list">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="page__recommend-image"
                    />
                    <div className="page__recommend-content">
                        <h4 className="page__recommend-title">{title}</h4>
                        <p className="page__recommend-desc">{desc}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}
