import { dummyImage1 } from "../../assets/images/images";

interface ReadAreaProps {
    tag: string;
    title: string;
    author: string;
    date: string;
    image?: string;
    content: string[];
    onDelete?: () => void;
}

export default function ReadArea({
    tag,
    title,
    author,
    date,
    image = dummyImage1,
    content,
    onDelete,
}: ReadAreaProps) {
    return (
        <article className="page__read">
            <section>
                <strong className="page__read-tag">{tag}</strong>
                <h2 className="page__read-title">{title}</h2>
                <div className="page__read-meta-group">
                    <p className="page__read-profile">
                        {author} • {date}
                    </p>
                    <button className="page__read-btn" onClick={onDelete}>
                        삭제
                    </button>
                </div>
                <img src={image} alt={title} className="page__read-image" />
            </section>
            <section className="page__read-desc">
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </section>
        </article>
    );
}
