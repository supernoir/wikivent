import axios from 'axios'

const protocol = "http"
const host = "localhost"
const port = "8081"

export const getBaseUri = () => `${protocol}://${host}:${port}`


export const getApprovedItems = (path: string) => {
  axios.get(getBaseUri() + "path").then(async res => await res.data)
}