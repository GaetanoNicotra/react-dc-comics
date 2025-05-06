import BlueSection from "./BlueSection";

import ListComics from "./ListComics";

// definisco il Main
const Main = () => {
    return (
        <div className="container">
            <div className="main-top">
                <ListComics />
                <button className="button-cards">LOAD MORE</button>
            </div>

            <BlueSection />
        </div>
    )
};

export default Main;
