const API_URL = 'http://localhost:8080'

async function login(email, password) {
  const emptyResponse = { data: { token: '' } }

  try {
    const response = await window.fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (!response.ok) {
      if (response.status >= 500) window.alert('El servidor no responde :/')
      else window.alert('Las credenciales son incorrectas')

      return emptyResponse
    }

    const payload = await response.json()

    window.sessionStorage.setItem('authorization', payload.data.token)

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al iniciar sesión')

    return emptyResponse
  }
}

async function validateSession(token) {
  const emptyResponse = { data: { token: '' } }

  if (!token) return emptyResponse

  try {
    const response = await window.fetch(`${API_URL}/users/validate-session`, {
      headers: { authorization: token }
    })

    const payload = await response.json()

    window.sessionStorage.setItem('authorization', payload.data.token)

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al validar sesión')

    return emptyResponse
  }
}

async function getProducts() {
const emptyResponse = { data: { products: [] } }

  try {
    const token = window.sessionStorage.getItem('authorization')
    const response = await window.fetch(`${API_URL}/products`, {
      headers: { authorization: token }
    })

    const payload = await response.json()

    if (!response.ok) {
      if (response.status >= 500) window.alert('El server esta morido :c')
      else window.alert('Las credenciales son incorrectas')

      return emptyResponse
    }

    payload.data.products = payload.data.products.map((badProduct) => ({
      id: badProduct._id,
      codeBar: badProduct.codeBar,
      description: badProduct.description,
      pricePublic: badProduct.pricePublic,
      department: badProduct.department
    }))

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al obtener los productos')

    return emptyResponse
  }
}

async function newProduct(product) {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({
        codeBar: product.codeBar,
        description: product.description,
        pricePublic: product.pricePublic,
        priceStore: product.priceStore,
        department: product.department
      })
    })

    const payload = await response.json()

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al guardar el producto')

    return {
      data: {
        product: {
          _id: '',
          codeBar: '',
          description:''
        }
      }
    }
  }
}

async function getProduct(productId) {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch(`${API_URL}/products/${productId}`, {
      headers: {
        authorization: token
      }
    })

    const payload = await response.json()

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al buscar el producto')

    return {
      data: {
        product: {
          _id: '',
          codeBar: '',
          description: ''
        }
      }
    }
  }
}

const api = {
  login,
  validateSession,
  getProducts,
  newProduct,
  getProduct
}

export default api
