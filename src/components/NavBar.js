const NavBar = ({ onClick }) => {

  const scrollToContact = () => {
    const section = document.querySelector( '.contact-form' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  return (
    <div className="nav">
        <h3>RVA News</h3>
        <ul>
            <li onClick={() => onClick('Sports')}>Sports</li>
            <li onClick={() => onClick('Business')}>Business</li>
            <li onClick={() => onClick('Health')}>Health</li>
            <li onClick={() => onClick('Politics')}>Politics</li>
            <li onClick={() => scrollToContact()} className="contactBtn">Contact Us</li>
        </ul>
    </div>
  )
}

export default NavBar