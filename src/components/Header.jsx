import Jumbotron from "./Jumbotron";
// definisco l'header
const Header = () => {
    const links = [
        {
            id: 1,
            href: "#",
            label: "Characters",
            current: false,
        },
        {
            id: 2,
            href: "#",
            label: "Comics",
            current: true,
        },
        {
            id: 3,
            href: "#",
            label: "Movies",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "TV",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Games",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Collectibles",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Videos",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Fans",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "News",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Shop",
            current: false,
        }
    ]
    return (
        <header>
            <ul>
                <li><img src="./img/dc-logo.png" alt="logo" /></li>
                <li><ul>
                    <a><li>CHARACTERS</li></a>
                    <a><li>COMICS</li></a>
                    <a><li>MOVIES</li></a>
                    <a><li>TV</li></a>
                    <a><li>GAMES</li></a>
                    <a><li>COLLECTIBLES</li></a>
                    <a><li>VIDEOS</li></a>
                    <a><li>FANS</li></a>
                    <a><li>NEWS</li></a>
                    <a><li>SHOP</li></a>
                </ul>
                </li>
            </ul>
        </header>
    );
};

export default Header;
