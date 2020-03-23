
import React from 'react'

import FormEdit from '../components/FormEdit'


import api from '../lib/api'

export default function Edit (props) {
  async function onSubmit (post) {
    const payload = await api.newPost(post)
    console.log(payload)

    window.alert(payload.data.post._id)

    props.history.push('/')
  }

  return (
    <FormEdit
    onSubmit={onSubmit} 
    />
  )

  }