import "./CSS/NavBar.css"

function NavBar( {setCurrentUser, currentUser, authenticated}){


  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(null)
          }
        })
  }

  return(
    <nav>
    <ul className="NavBar">
    <li> <a href="/">Home</a></li>
    <li> <a href="/ExplanationPage"> Basics of the Stock Market</a></li>
    <li> <a href="/stocks">Stock Game</a></li>
    <li> <a href="/quiz">Daily Quiz</a></li>
    {currentUser ? <div className="NavBarLoggedIn"><li className="right"> <a> Welcome {currentUser.username}!</a></li> <li className="rightButton"><a className="NavLogOut"><button onClick={handleLogout}>Logout</button> </a></li></div> : <div className="NavBarLogin"><li> <a href="/login">Log In </a></li></div> }
    
    </ul>
    </nav>
  )
}

export default NavBar;