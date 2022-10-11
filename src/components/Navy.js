import '../styles/nav.css';

function Navy() {
  return (
    <nav>
    <div className="nav_logo">
        <div>mylogo</div>
    </div>
    <ul className="nav_menu">
        <li>
            <a href="#">LOGO</a>
        </li>
        <li>
            <a href="#">CSS</a>
        </li>
        <li>
            <a href="#">JavaScript</a>
        </li>
        <li>
            <a href="#">React</a>
        </li>
    </ul>
    <ul className="nav_icon">
        <li>
            <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
            <i className="fa-brands fa-instagram"></i>
        </li>
    </ul>
</nav>
  );
}

export default Navy;
