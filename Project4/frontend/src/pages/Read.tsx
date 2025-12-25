import { Link, useParams } from "react-router";
import dummyImage1 from "../assets/images/dummy-image-1.png";

export default function Read() {
    const { id } = useParams();

    return (
        <main className="page__main">
            {/* ReadArea */}
            <article className="page__read">
                <section>
                    <strong className="page__read-tag">Travel</strong>
                    <h2 className="page__read-title">
                        My Travel Stories from the Past Year
                    </h2>
                    <div className="page__read-meta-group">
                        <p className="page__read-profile">George Costanazv • Dec 16, 2024</p>
                        <button className="page__read-btn">삭제</button>
                    </div>
                    <img
                        src={dummyImage1}
                        alt=""
                        className="page__read-image"
                    />
                </section>
                <section className="page__read-desc">
                    <p>
                        Over the past year, I had the opportunity to explore new places
                        and immerse myself in different cultures. From the vibrant streets
                        of Europe to the serene beaches of Asia, each journey taught me
                        something unique. The experience of stepping out of my comfort
                        zone helped me grow as a person, providing new perspectives on
                        life. Traveling also allowed me to reconnect with myself, as I
                        embraced moments of solitude while navigating unfamiliar
                        environments.
                    </p>
                    <p>
                        One of the most memorable trips was to Greece, where I spent time
                        wandering through ancient ruins and soaking in the breathtaking
                        landscapes. The historical sites told stories of civilizations
                        long gone, while the beauty of nature left me in awe. Each day
                        felt like an adventure, whether it was hiking up a mountain,
                        enjoying fresh seafood by the coast, or simply watching the sunset
                        over the Mediterranean Sea. It was a reminder of the importance of
                        appreciating the simple, beautiful things in life.
                    </p>
                    <p>
                        This past year has been a testament to the power of travel in
                        shaping who we are. The connections I made with locals, the
                        friendships that blossomed during shared experiences, and the
                        lessons learned through challenges all contributed to my personal
                        growth. Every trip, whether near or far, reminded me that there is
                        so much more to life beyond what we know. Travel has taught me to
                        be more present, to embrace the unknown, and to appreciate the
                        diversity of the world around us.
                    </p>
                    <p>
                        Throughout my travels, I also learned the importance of
                        flexibility and embracing spontaneity. Sometimes, plans didn't go
                        as expected—flights were delayed, weather wasn't ideal, or I got
                        lost in a new city. But rather than feeling frustrated, I learned
                        to adapt and enjoy the unplanned moments. These detours often led
                        me to hidden gems or unexpected adventures that I wouldn't have
                        experienced otherwise. It reminded me that life, much like travel,
                        is full of surprises, and the best moments often come when you
                        least expect them.
                    </p>
                </section>
            </article>
            {/* RecommendationArea */}
            <article className="page__recommend">
                <h3 className="page__recommend-title">Recommend Reading</h3>
                <ul className="page__recommend-lists">
                    {/* RecommendationItem */}
                    <li>
                        <Link to="/read/1">
                            <div className="page__recommend-list">
                                <img
                                    src={dummyImage1}
                                    alt=""
                                    className="page__recommend-img"
                                />
                                <div>
                                    <h4 className="page__recommend-subtitle">
                                        Why you don't need more than 3 pieces of clothing
                                    </h4>
                                    <p className="page__recommend-desc">
                                        Et vitae, mollis euismod lobortis blandit amet sed amet.
                                        Amet ut amet nisl tortor arcu non id nulla mauris neque
                                        nisl magna.Et vitae, mollis euismod lobortis blandit amet
                                        sed amet. Amet ut amet nisl tortor arcu non id nulla
                                        mauris neque nisl magna.Et vitae, mollis euismod lobortis
                                        blandit amet sed amet. Amet ut amet nisl tortor arcu non
                                        id nulla mauris neque nisl magna.Et vitae, mollis euismod
                                        lobortis blandit amet sed amet. Amet ut amet nisl tortor
                                        arcu non id nulla mauris neque nisl magna.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/read/2">
                            <div className="page__recommend-list">
                                <img
                                    src={dummyImage1}
                                    alt=""
                                    className="page__recommend-img"
                                />
                                <div>
                                    <h4 className="page__recommend-subtitle">
                                        Why you don't need more than 3 pieces of clothing
                                    </h4>
                                    <p className="page__recommend-desc">
                                        Et vitae, mollis euismod lobortis blandit amet sed amet.
                                        Amet ut amet nisl tortor arcu non id nulla mauris neque
                                        nisl magna.Et vitae, mollis euismod lobortis blandit amet
                                        sed amet. Amet ut amet nisl tortor arcu non id nulla
                                        mauris neque nisl magna.Et vitae, mollis euismod lobortis
                                        blandit amet sed amet. Amet ut amet nisl tortor arcu non
                                        id nulla mauris neque nisl magna.Et vitae, mollis euismod
                                        lobortis blandit amet sed amet. Amet ut amet nisl tortor
                                        arcu non id nulla mauris neque nisl magna.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </article>
        </main>
    );
}
