function Signup() {
  return (

    <div className='containerEmail'>

      <h1>Criar Minha conta</h1>
      <p>Seja mencionado na imprensa</p>

      <label>E-mail</label>
      <input
        placeholder='Insira seu E-mail'
      />
      <label>Senha</label>
      <input
        placeholder='Insira sua senha'
      />
      <button>Entrar</button>

      <span>Não tenho Cadastro ?<a href="q"> Inscreva-se</a></span>
    </div>
  )
}

export default Signup;