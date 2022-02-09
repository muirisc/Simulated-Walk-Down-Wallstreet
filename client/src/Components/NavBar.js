function NavBar( {currentUser, authenticated}){




  return(
    <nav>
    <ul className="NavBar">
    <li> <a href="/">Home</a></li>
    <li> <a href="/ExplanationPage"> Basics of the Stock Market</a></li>
    <li> <a href="/stocks">Stock Game</a></li>
    <li> <a href="/soon"> Coming Very Soon</a></li>
    {/* <li> <a>Welcome { currentUser ? currentUser.username : null}</a></li> */}
    {authenticated ?<li className="right"> <a> Welcome ! </a></li> : <li className="right"> <a href="/login">Log In </a></li> }
    
    </ul>
    </nav>
  )
}

export default NavBar;