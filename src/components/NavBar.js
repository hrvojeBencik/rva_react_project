const NavBar = ({ onClick }) => {
  return (
    <div className="nav">
        <h3>RVA News</h3>
        <ul>
            <li onClick={() => onClick('Sports')}>Sports</li>
            <li onClick={() => onClick('Business')}>Business</li>
            <li onClick={() => onClick('Health')}>Health</li>
            <li onClick={() => onClick('Politics')}>Politics</li>
        </ul>
    </div>
  )
}

export default NavBar