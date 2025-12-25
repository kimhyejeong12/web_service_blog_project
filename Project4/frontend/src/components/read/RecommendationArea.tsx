import RecommendationItem from "./RecommendationItem";
import { dummyImage1 } from "../../assets/images/images";

export default function RecommendationArea() {
    // 임시 데이터 (추후 API에서 가져올 예정)
    const recommendations = [
        {
            id: 1,
            image: dummyImage1,
            title: "Why you don't need more than 3 pieces of clothing",
            description:
                "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
        },
        {
            id: 2,
            image: dummyImage1,
            title: "Why you don't need more than 3 pieces of clothing",
            description:
                "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
        },
    ];

    return (
        <article className="page__recommend">
            <h3 className="page__recommend-title">Recommend Reading</h3>
            <ul className="page__recommend-lists">
                {recommendations.map((item) => (
                    <RecommendationItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </ul>
        </article>
    );
}
