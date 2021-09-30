import sponsored from './../../img/sponsored.jpg';
const Footer = () => {
    return (
        <div
            className="container mb-2 fixed-bottom d-flex madeby shadow"
            style={{ padding: '0.5rem 1rem', justifyContent: 'space-between' }}
        >
            <div className="my-auto">
                <span>Coded by </span>
                <a href="https://forum.vimeworld.ru/profile/208829-charkos0ff/">
                    CharkosOff
                </a>
                <span> & </span>
                <a href="https://forum.vimeworld.ru/profile/128763-sqwe/">
                    SQWE
                </a>
                <br />
                <span>Website'd by </span>
                <a href="https://forum.vimeworld.ru/profile/14671-cocu_cocucka/">
                    pito
                </a>
                <span> aka COCU_COCUCKA</span>
            </div>
            <div className="my-auto">
                <span>Sponsored:</span>
                <a href="https://forum.vimeworld.ru/topic/735687-">
                    <img className="vtstyles" alt="vtstyles" src={sponsored} />
                </a>
            </div>
        </div>
    );
};
export default Footer;
