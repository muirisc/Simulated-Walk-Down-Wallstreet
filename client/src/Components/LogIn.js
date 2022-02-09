import {useState} from "react";
function LogIn( {setCurrentUser}){
  const [formData,setFormData] = useState({
    username: "",
    password: ""
  })


function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

function handleSubmit(e){
  e.preventDefault();
  console.log(formData)
  let userSubmission = {...formData};
  let postObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userSubmission),
  }
  fetch("/login", postObj) 
  .then(r=>r.json())
  .then(user => {
    console.log(user)
    setCurrentUser(user)
    setFormData({
      username: "",
      password: "",
    })
  })

}

  return(
  <section className="loginSection">
  <h2 className="loginIntro"> Please enter your login information here!</h2>
  <form className="loginForm">
  <h3 className="loginIntro">Enter Your User Name & Password to Login </h3>
  <input className="loginBox" type="text" name="username" placeholder="User Name" onChange={handleChange} value={formData.userName}/>  
  <input className="loginBox" type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password}/>  
  <button className="loginButton" type="submit" onClick={handleSubmit}>Log In</button>
  </form>

  <button className="loginButton"><a href="/createAccount"> Create An Account</a></button>
  </section>
  )
}

export default LogIn;