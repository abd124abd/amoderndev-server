const bcrypt = require('bcryptjs')

const UsersService = {
  insertUser(knex, user) {
    return knex
      .insert(user)
      .into('users')
      .returning('*')
      .then(([user]) => user)
  },
  getUserById(knex, id) {
    return knex
      .from('users')
      .select('*')
      .where('id', id)
      .first()
  },
  getUserByUsername(knex, userName) {
    return knex
      .from('users')
      .where('username', userName)
      .first()
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12)
  }
}

module.exports = UsersService;
