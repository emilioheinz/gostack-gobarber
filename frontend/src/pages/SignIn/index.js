import React from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.svg'

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt='GoBarber logo' />

      <form>
        <input type='email' placeholder='Seu e-mail' />
        <input type='passwrod' placeholder='Sua senha secreta' />

        <button type='submit'>Acessar</button>
        <Link to='/register'>Criar conta gratuita</Link>
      </form>
    </>
  )
}
