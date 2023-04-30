module.exports = {
    async gethello(request, response) {
     return response.json({ msg: true})
 },

 async createUser(request,response) {
     const {nome, idade} = request.body

     const payload = {
         nome,
         idade
     }

     return response.json(payload)
 }
}