import { Link } from "react-router";
import searchIcon from "../assets/images/search.png";
import dummyImage1 from "../assets/images/dummy-image-1.png";
import dummyImage2 from "../assets/images/dummy-image-2.png";

export default function Home() {
    return (
        <main className="page__main">
            {/* Search */}
            <section className="search-area">
                <article className="search-area__search">
                    <h2 className="search-area__title">Blog Project</h2>
                    <p className="search-area__description">
                        A Blog About Food, Experience, and Recipes.
                    </p>
                    <form method="get" className="search-area__form">
                        <input
                            type="text"
                            name="q"
                            placeholder="Search"
                            className="search-area__input"
                            autoComplete="off"
                        />
                        <button type="submit" className="search-area__submit">
                            <img
                                src={searchIcon}
                                alt="search-icon"
                                className="search-area__icon"
                            />
                        </button>
                    </form>
                </article>
            </section>
            {/* PostArea */}
            <section className="posts-area">
                <article className="posts-area__post">
                    <Link to="/read/1" className="posts-area__post-link">
                        <img
                            src={dummyImage1}
                            alt="dummy-image-1"
                            className="posts-area__post-image"
                        />
                        <em className="posts-area__post-tag">Travel</em>
                        <h2 className="posts-area__post-title">
                            My Travel Stories from the Past Year
                        </h2>
                        <p className="posts-area__post-meta">
                            George Costanazv • Aug 16, 2025
                        </p>
                        <p className="posts-area__post-excerpt">
                            Over the past year, I had the opportunity to explore new places
                            and immerse myself in different cultures. From the vibrant
                            streets of Europe to the serene beaches of Asia, each journey
                            taught me something unique. The experience of stepping out of my
                            comfort zone helped me grow as a person, providing new
                            perspectives on life. Traveling also allowed me to reconnect
                            with myself, as I embraced moments of solitude while navigating
                            unfamiliar environments.
                        </p>
                    </Link>
                </article>
                <article className="posts-area__post">
                    <Link to="/read/2" className="posts-area__post-link">
                        <img
                            src={dummyImage2}
                            alt="dummy-image-2"
                            className="posts-area__post-image"
                        />
                        <em className="posts-area__post-tag">Food</em>
                        <h2 className="posts-area__post-title">
                            Delicious Chicken Dishes &amp; Tips
                        </h2>
                        <p className="posts-area__post-meta">
                            George Costanazv • Aug 16, 2025
                        </p>
                        <p className="posts-area__post-excerpt">
                            Chicken is one of the most versatile and beloved foods around
                            the world. Whether it's roasted, fried, grilled, or baked,
                            chicken has a unique way of fitting into every culture and
                            cuisine. In this post, we'll explore everything you need to know
                            about chicken, including delicious recipes, helpful cooking
                            tips, and some fun facts you might not know!
                        </p>
                    </Link>
                </article>
                <article className="posts-area__post">
                    <Link to="/read/3" className="posts-area__post-link">
                        <img
                            src={dummyImage1}
                            alt="dummy-image-1"
                            className="posts-area__post-image"
                        />
                        <em className="posts-area__post-tag">Travel</em>
                        <h2 className="posts-area__post-title">
                            My Travel Stories from the Past Year
                        </h2>
                        <p className="posts-area__post-meta">
                            George Costanazv • Aug 16, 2025
                        </p>
                        <p className="posts-area__post-excerpt">
                            Over the past year, I had the opportunity to explore new places
                            and immerse myself in different cultures. From the vibrant
                            streets of Europe to the serene beaches of Asia, each journey
                            taught me something unique. The experience of stepping out of my
                            comfort zone helped me grow as a person, providing new
                            perspectives on life. Traveling also allowed me to reconnect
                            with myself, as I embraced moments of solitude while navigating
                            unfamiliar environments.
                        </p>
                    </Link>
                </article>
                <article className="posts-area__post">
                    <Link to="/read/4" className="posts-area__post-link">
                        <img
                            src={dummyImage2}
                            alt="dummy-image-2"
                            className="posts-area__post-image"
                        />
                        <em className="posts-area__post-tag">Food</em>
                        <h2 className="posts-area__post-title">
                            Delicious Chicken Dishes &amp; Tips
                        </h2>
                        <p className="posts-area__post-meta">
                            George Costanazv • Aug 16, 2025
                        </p>
                        <p className="posts-area__post-excerpt">
                            Chicken is one of the most versatile and beloved foods around
                            the world. Whether it's roasted, fried, grilled, or baked,
                            chicken has a unique way of fitting into every culture and
                            cuisine. In this post, we'll explore everything you need to know
                            about chicken, including delicious recipes, helpful cooking
                            tips, and some fun facts you might not know!
                        </p>
                    </Link>
                </article>
            </section>
        </main>
    );
}
