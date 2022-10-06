import '../styles/nav.css';

function Navy() {
  return (
    <nav>
    <div class="nav_logo">
        <div>mylogo</div>
    </div>
    <ul class="nav_menu">
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
    <ul class="nav_icon">
        <li>
            <i class="fa-brands fa-facebook"></i>
        </li>
        <li>
            <i class="fa-brands fa-instagram"></i>
        </li>
    </ul>
</nav>
  );
}

export default Navy;
