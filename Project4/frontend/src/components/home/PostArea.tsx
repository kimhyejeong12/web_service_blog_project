import PostItem from "./PostItem";
import { dummyImage1, dummyImage2 } from "../../assets/images/images";

export default function PostArea() {
    // 임시 데이터 (추후 API에서 가져올 예정)
    const posts = [
        {
            id: 1,
            image: dummyImage1,
            tag: "Travel",
            title: "My Travel Stories from the Past Year",
            author: "George Costanazv",
            date: "Aug 16, 2025",
            excerpt:
                "Over the past year, I had the opportunity to explore new places and immerse myself in different cultures. From the vibrant streets of Europe to the serene beaches of Asia, each journey taught me something unique. The experience of stepping out of my comfort zone helped me grow as a person, providing new perspectives on life.",
        },
        {
            id: 2,
            image: dummyImage2,
            tag: "Food",
            title: "Delicious Chicken Dishes & Tips",
            author: "George Costanazv",
            date: "Aug 16, 2025",
            excerpt:
                "Chicken is one of the most versatile and beloved foods around the world. Whether it's roasted, fried, grilled, or baked, chicken has a unique way of fitting into every culture and cuisine. In this post, we'll explore everything you need to know about chicken, including delicious recipes, helpful cooking tips, and some fun facts you might not know!",
        },
        {
            id: 3,
            image: dummyImage1,
            tag: "Travel",
            title: "My Travel Stories from the Past Year",
            author: "George Costanazv",
            date: "Aug 16, 2025",
            excerpt:
                "Over the past year, I had the opportunity to explore new places and immerse myself in different cultures. From the vibrant streets of Europe to the serene beaches of Asia, each journey taught me something unique. The experience of stepping out of my comfort zone helped me grow as a person, providing new perspectives on life.",
        },
        {
            id: 4,
            image: dummyImage2,
            tag: "Food",
            title: "Delicious Chicken Dishes & Tips",
            author: "George Costanazv",
            date: "Aug 16, 2025",
            excerpt:
                "Chicken is one of the most versatile and beloved foods around the world. Whether it's roasted, fried, grilled, or baked, chicken has a unique way of fitting into every culture and cuisine. In this post, we'll explore everything you need to know about chicken, including delicious recipes, helpful cooking tips, and some fun facts you might not know!",
        },
    ];

    return (
        <section className="posts-area">
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    tag={post.tag}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    excerpt={post.excerpt}
                />
            ))}
        </section>
    );
}
