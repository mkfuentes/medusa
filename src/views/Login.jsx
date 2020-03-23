import React, { useState, useEffect } from 'react'

import FormLogin from '../components/FormLogin'

import api from '../lib/api'


function Login (props) {
  const [authorization, setAuthorization] = useState('')
  const { replace } = props.history

  useEffect(() => {
    const token = window.sessionStorage.getItem('authorization')

    if (token) replace('/')
  }, [replace, authorization])

  async function onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)

    setAuthorization(payload.data.token)

    replace('/')
  }

  return (
    <div >
      <FormLogin onSubmit={onLogin} />
    </div>
  )
}

export default Login
