import { useParams } from "react-router";
import ReadArea from "../components/read/ReadArea";
import RecommendationArea from "../components/read/RecommendationArea";
import { dummyImage1 } from "../assets/images/images";

export default function Read() {
    const { id } = useParams();

    // 임시 데이터 (추후 API에서 가져올 예정)
    const postData = {
        tag: "Travel",
        title: "My Travel Stories from the Past Year",
        author: "George Costanazv",
        date: "Dec 16, 2024",
        image: dummyImage1,
        content: [
            "Over the past year, I had the opportunity to explore new places and immerse myself in different cultures. From the vibrant streets of Europe to the serene beaches of Asia, each journey taught me something unique. The experience of stepping out of my comfort zone helped me grow as a person, providing new perspectives on life. Traveling also allowed me to reconnect with myself, as I embraced moments of solitude while navigating unfamiliar environments.",
            "One of the most memorable trips was to Greece, where I spent time wandering through ancient ruins and soaking in the breathtaking landscapes. The historical sites told stories of civilizations long gone, while the beauty of nature left me in awe. Each day felt like an adventure, whether it was hiking up a mountain, enjoying fresh seafood by the coast, or simply watching the sunset over the Mediterranean Sea. It was a reminder of the importance of appreciating the simple, beautiful things in life.",
            "This past year has been a testament to the power of travel in shaping who we are. The connections I made with locals, the friendships that blossomed during shared experiences, and the lessons learned through challenges all contributed to my personal growth. Every trip, whether near or far, reminded me that there is so much more to life beyond what we know. Travel has taught me to be more present, to embrace the unknown, and to appreciate the diversity of the world around us.",
            "Throughout my travels, I also learned the importance of flexibility and embracing spontaneity. Sometimes, plans didn't go as expected—flights were delayed, weather wasn't ideal, or I got lost in a new city. But rather than feeling frustrated, I learned to adapt and enjoy the unplanned moments. These detours often led me to hidden gems or unexpected adventures that I wouldn't have experienced otherwise. It reminded me that life, much like travel, is full of surprises, and the best moments often come when you least expect them.",
        ],
    };

    const handleDelete = () => {
        console.log(`Deleting post ${id}`);
        // 추후 삭제 API 호출
    };

    return (
        <main className="page__main">
            <ReadArea
                tag={postData.tag}
                title={postData.title}
                author={postData.author}
                date={postData.date}
                image={postData.image}
                content={postData.content}
                onDelete={handleDelete}
            />
            <RecommendationArea />
        </main>
    );
}
