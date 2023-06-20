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
      <p>
        <span className="description-title">Discover promopix, your ultimate solution to obtain professional photos of your products!</span>
        <br/>
        <span className="description-body">Our platform provides you with the easiest and most affordable way to showcase your items with lifelike
          models generated
          through artificial intelligence. With promopix, you'll have access to high-quality images that enhance the
          appearance of your products and captivate your customers in a striking manner. Seize this opportunity to
          elevate the presentation of your products and make them stand out on your website!</span>
      </p>
    </>
  );
}

export default Header;