import axios from 'axios'

const baseUrl = '/api'

export async function getPokemon() {
  return axios.get(`${baseUrl}/pokemon`)
}
