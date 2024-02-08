import React from "react";

import microsoft from '../assets/microsoft.png';
import google from '../assets/google.png';
import linkedin from '../assets/linkedin.png';

import './social.css'

function SocialLogin() {
  return (

    <div className='container-Social'>

    <button>
      <img src={microsoft} alt='logotipo Microsoft' />
      Entrar com microsoft
    </button>

    <button>
      <img src={google} alt='logotipo Google' />
      Entrar com google
    </button>

    <button>
      <img src={linkedin} alt='logotipo Google' />
      Entrar com google
    </button>

  </div>

  )
}


export default SocialLogin;