import axios from 'axios'
import { baseUrl } from '../config'

export async function getPokemon() {
  return axios.get(`${baseUrl}/pokemon`)
}
