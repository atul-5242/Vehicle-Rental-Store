import loginImg from "../assets/Images/login.webp"
import Template from "../components/cores/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1=""
      description2=""
      image={loginImg}
      formType="login"
    />
  )
}

export default Login