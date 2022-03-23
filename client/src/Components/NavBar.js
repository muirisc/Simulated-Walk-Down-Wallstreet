function NavBar( {setCurrentUser, currentUser, authenticated}){

  // console.log('Current User',currentUser)
// let dollars = {currentUser.cash}
  // const userFunds = (dollars).toFixed(2)
  // if(let userFunds = Math.round(currentUser.cash))
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
    <li> <a href="/news">The Business</a></li>
    <li> <a href="/quiz">Daily Quiz</a></li>
    {/* <li><a>{currentUser.cash}</a></li> */}
    {/* <li> <a>Welcome { currentUser ? currentUser.username : null}</a></li> */}
    {currentUser ? <><li className="right"> <a> Welcome!  <button onClick={handleLogout}>Logout</button> </a></li></> : <li className="right"> <a href="/login">Log In </a></li> }
    
    </ul>
    </nav>
  )
}

export default NavBar;