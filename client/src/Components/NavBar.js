function NavBar( {currentUser, authenticated}){

  // console.log('Current User',currentUser)
// let dollars = {currentUser.cash}
  // const userFunds = (dollars).toFixed(2)
  // if(let userFunds = Math.round(currentUser.cash))

  return(
    <nav>
    <ul className="NavBar">
    <li> <a href="/">Home</a></li>
    <li> <a href="/ExplanationPage"> Basics of the Stock Market</a></li>
    <li> <a href="/stocks">Stock Game</a></li>
    <li> <a href="/news">News</a></li>
    <li> <a href="/quiz">Daily Quiz</a></li>
    {/* <li><a>{currentUser.cash}</a></li> */}
    {/* <li> <a>Welcome { currentUser ? currentUser.username : null}</a></li> */}
    {authenticated ?<li className="right"> <a> Welcome {currentUser.name}! </a></li> : <li className="right"> <a href="/login">Log In </a></li> }
    
    </ul>
    </nav>
  )
}

export default NavBar;