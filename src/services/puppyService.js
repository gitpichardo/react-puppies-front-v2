const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/puppies`

const index = async () => {
  const res = await fetch(BASE_URL)
  return res.json()
}

const create = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  return res.json()
}

const deletePuppy = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

export {
  index,
  create,
  deletePuppy as delete,

}