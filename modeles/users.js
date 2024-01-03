const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function getAllUsers() {
    return prisma.user.findMany()
}
function getUser(id) {
    return prisma.user.findUnique({ where: { id } })


}
function getUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } })
}
function addUser(user){
    return prisma.user.create({data: user})
}
function deleteUser(id){
    return prisma.user.delete({where: { id }});
}
function updateUser(id, name, email, password) {
    return prisma.user.update({
      where: { id },
      data: { name, email, password }
    });
  }
  


module.exports = {
    getAllUsers,
    getUser,
    getUserByEmail,
    addUser,
    deleteUser,
    updateUser
}
