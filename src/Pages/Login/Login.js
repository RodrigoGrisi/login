import SocialLogin from "../Login/components/socialLogin/SocialLogin";
import LoginEmail from '../Login/components/LoginWithEmailandPassword/LoginEmail';
import './login.css'

function Login() {
  return (
    <div className="container">

      <h1>Entrar em minha conta</h1>
      <p>Seja mencionado na imprensa</p>

      <SocialLogin />

      <div className='interval'>
        <div className='line'> </div>
        <h2>Ou com e-mail</h2>
        <div className='line'> </div>
      </div>

      <LoginEmail />
    </div>
  )
}

export default Login;