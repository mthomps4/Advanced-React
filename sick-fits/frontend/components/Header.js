import Nav from '../components/Nav';
const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="subbar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
