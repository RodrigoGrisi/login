import './style.css'

function LoginEmail() {
  return (
    <div>
      <div className='containerEmail'>
        <label>E-mail</label>
        <input
          placeholder='Insira seu E-mail'
        />
        <label>Senha</label>
        <input
          placeholder='Insira sua senha'
        />
        <a href='q'>Esqueci minha senha?</a>
        <button>Entrar</button>

      <span>Não tenho Cadastro ?<a href="q"> Inscreva-se</a></span>
      </div>

    </div>
  )
}


export default LoginEmail;