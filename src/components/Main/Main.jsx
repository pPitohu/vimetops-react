import { useParams } from 'react-router-dom';
const Main = () => {
    let { nickname } = useParams();
    console.log(nickname);
    if (nickname) {
        return (
            <div className="container mt-3 shadow second">
                <div className="main">
                    <div className="row user-info">
                        <div className="col-md-3 pt-3 pb-3">
                            <div className="container p-3 text-center user-info__main">
                                <div>
                                    here is the nickname {nickname}
                                    {typeof nickname}
                                </div>
                                <img
                                    id="skin"
                                    className="border-6 mb-1"
                                    src=""
                                    alt="head"
                                />
                                <h4 id="nick">Никнейм</h4>
                                <h5>
                                    Привилегия - <span id="rank"></span>
                                </h5>
                                <h5>
                                    Уровень
                                    <span id="lvl" className="text-info"></span>
                                </h5>
                                <div
                                    className="progress m-1"
                                    style={{
                                        height: '35px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <div
                                        className="progress-bar bg-info"
                                        id="barr"
                                        role="progressbar"
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        <span id="progress"></span>
                                    </div>
                                </div>

                                <h5>
                                    ID
                                    <span id="id" className="text-info"></span>
                                </h5>
                                <h5
                                    className="guild"
                                    style={{
                                        visibility: 'visible',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        id="avatar_url"
                                        className="border-6"
                                        src="https://vimeworld.ru/images/guild.png"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                        }}
                                        alt="noguild"
                                    />
                                    <a
                                        id="name"
                                        className="text-info"
                                        style={{ paddingLeft: '10px' }}
                                        target="_blank"
                                    ></a>
                                </h5>

                                <div
                                    className="container"
                                    style={{ paddingBottom: '1.3rem' }}
                                >
                                    <div
                                        id="skin-viewer"
                                        className="mc-skin-viewer-9x legacy cape spin"
                                        style={{ padding: '30px 0' }}
                                    >
                                        <div className="player">
                                            <div className="head">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom st3d"></div>
                                                </div>
                                            </div>
                                            <div className="body">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom st3d"></div>
                                                </div>
                                            </div>
                                            <div className="left-arm">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom st3d"></div>
                                                </div>
                                            </div>
                                            <div className="right-arm">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </div>
                                            <div className="left-leg">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom st3d"></div>
                                                </div>
                                            </div>
                                            <div className="right-leg">
                                                <div className="top st3d"></div>
                                                <div className="left st3d"></div>
                                                <div className="front st3d"></div>
                                                <div className="right st3d"></div>
                                                <div className="back st3d"></div>
                                                <div className="bottom st3d"></div>
                                                <div className="accessory">
                                                    <div className="top st3d"></div>
                                                    <div className="left st3d"></div>
                                                    <div className="front st3d"></div>
                                                    <div className="right st3d"></div>
                                                    <div className="back st3d"></div>
                                                    <div className="bottom st3d"></div>
                                                </div>
                                            </div>
                                            <div className="cape ct3d">
                                                <div className="top ct3d"></div>
                                                <div className="left ct3d"></div>
                                                <div className="front ct3d"></div>
                                                <div className="right ct3d"></div>
                                                <div className="back ct3d"></div>
                                                <div className="bottom ct3d"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 pt-3 pb-3">
                            <div className="container p-3 h-100 tops-container">
                                <div
                                    className="notExist"
                                    style={{ display: 'block' }}
                                >
                                    <i className="ri-emotion-unhappy-line"></i>
                                    <div>
                                        Игрок не состоит ни в одном из топов
                                    </div>
                                </div>
                                <div
                                    className="exist"
                                    style={{ display: 'none' }}
                                >
                                    <div className="topsExist">
                                        <h3>
                                            Игрок состоит в следующих топах:
                                        </h3>
                                    </div>
                                    <div className="top-list">
                                        <ul className="tops"></ul>
                                    </div>
                                    <div className="total">
                                        <h5></h5>
                                        <div className="more">
                                            <a
                                                href="https://vimetop.ru"
                                                target="_blank"
                                            >
                                                Подробнее на vimetop.ru
                                            </a>
                                        </div>
                                    </div>
                                    <div className="madewith mt-2">
                                        <h5
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Made with
                                            <i className="ri-heart-fill"></i>
                                        </h5>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>there is nothing</div>;
    }
};
export default Main;
