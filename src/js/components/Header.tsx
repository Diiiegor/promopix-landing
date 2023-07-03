import EarlyAccess from "./EarlyAccess";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <div className="header-item">
                        <h1 className="header-title">
                            <span>PROMO</span>
                            <span>PIX</span>
                        </h1>
                    </div>
                    <div className="header-item">
                        <EarlyAccess/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;