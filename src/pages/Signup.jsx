import signupImg from "../assets/Images/signup.webp"
import Template from "../components/cores/Auth/Template"

function Signup() {
  return (
    <Template
      title="Lets join with us"
      description1=""
      description2=""
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup