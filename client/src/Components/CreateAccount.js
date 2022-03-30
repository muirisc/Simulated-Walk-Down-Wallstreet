import {useState} from "react";

function CreateAccount(){
const [submitted, setSubmitted] = useState(false)
const[showPassword, setShowPassword] = useState(false)
const [formData, setFormData] = useState({
  username: "",
  password: "",
  cash: 10000,
  quiz_taken: false
});

function handleChange(e){
  setFormData({
    ...formData, [e.target.name]: e.target.value,
  });
  }

  function handleSubmit(e){
    e.preventDefault();
    let userEntry = { ...formData}
    console.log(userEntry)
    let fetchObj = {method: "POST", headers: { 
      "Content-Type": "application/json", },
      body: JSON.stringify(userEntry), }

    fetch("/users", fetchObj)
    .then(r=>r.json())
    .then((user) => {
      console.log(user)
      setFormData({
        username: "",
        password: ""})
        setSubmitted(!submitted)
      })}
  

  return(
    <>
    {submitted ? <h3 className="accountCreated">Account Created!</h3> :
    <div className="accountCreation">
    <h2> Create Your Account</h2>
    <form className="accountForm" onSubmit={handleSubmit}>
    <label> Username:</label>
    <input type="text" name="username" value={FormData.user_name} onChange={handleChange}/>
    <label> Password:</label>
    <input type="password" name="password" value={FormData.user_name} onChange={handleChange}/>
    <button className="signUpButton"type="submit"> Submit</button>
    </form>
    
    <button className="signUpButton"type="submit">Show Password</button>
  
    </div>
}


    </>
  )
}

export default CreateAccount;