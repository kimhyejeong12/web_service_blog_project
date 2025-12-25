import { search } from "../../assets/images/images";

export default function SearchArea() {
    return (
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
                            src={search}
                            alt="search-icon"
                            className="search-area__icon"
                        />
                    </button>
                </form>
            </article>
        </section>
    );
}
