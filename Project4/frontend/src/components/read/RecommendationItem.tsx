import { Link } from "react-router";
import { dummyImage1 } from "../../assets/images/images";

interface RecommendationItemProps {
    id: number;
    image?: string;
    title: string;
    description: string;
}

export default function RecommendationItem({
    id,
    image = dummyImage1,
    title,
    description,
}: RecommendationItemProps) {
    return (
        <li>
            <Link to={`/read/${id}`}>
                <div className="page__recommend-list">
                    <img
                        src={image}
                        alt={title}
                        className="page__recommend-img"
                    />
                    <div>
                        <h4 className="page__recommend-subtitle">{title}</h4>
                        <p className="page__recommend-desc">{description}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}
