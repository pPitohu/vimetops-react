import { Link, useHistory } from 'react-router-dom';
const Header = () => {
    let history = useHistory();
    return (
        <div className="container shadow first">
            <div className="navbar">
                <div className="col-md-3 logo">
                    <Link to="/">
                        <h1 className="mt-1">
                            <span>Vime</span>
                            <span className="badge badge-info">Tops</span>
                        </h1>
                    </Link>
                </div>
                <div className="col-md-6 mr-10">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Введите никнейм"
                            aria-label="Введите никнейм"
                            style={{ userSelect: 'none' }}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-info search"
                                type="button"
                                onClick={() => {
                                    history.push(
                                        document.querySelector('.form-control')
                                            .value
                                    );
                                }}
                            >
                                Поиск
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                    <button
                        className="change-theme btn btn-outline-info"
                        type="button"
                        title="Сменить тему"
                    >
                        <i className="ri-moon-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;
