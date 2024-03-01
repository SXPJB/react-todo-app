const baseURL = 'http://localhost:8080/api'
const apiVersion = {
    V1:'v1'
}
export const urls = {
    todo:{
        findAll: `${baseURL}/${apiVersion.V1}/todo`,
        create: `${baseURL}/${apiVersion.V1}/todo`,
        update: `${baseURL}/${apiVersion.V1}/todo`,
        delete: `${baseURL}/${apiVersion.V1}/todo`,
        findByID: `${baseURL}/${apiVersion.V1}/todo`
    }
}