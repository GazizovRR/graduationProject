const { faker } = require('@faker-js/faker')

const BuildUser = function () {
  this.addEmail = function () {
    this.email = faker.internet.email()
    return this
  }
  this.addLogin = function () {
    this.username = faker.internet.userName()
    return this
  }
  this.addFirstName = function () {
    this.firstName = faker.name.firstName()
    return this
  }
  this.addLastName = function () {
    this.lastName = faker.name.lastName()
    return this
  }
  this.addPassword = function () {
    this.password = faker.internet.password()
    return this
  }
  this.addPhone = function () {
    this.phone = faker.phone.phoneNumber('+7 ### ### ## ##')
    return this
  }
  this.addStatus = function () {
    this.userStatus = faker.random.numeric()
    return this
  }
  this.generate = function () {
    const fields = Object.getOwnPropertyNames(this)
    const data = {}

    fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName]
      }
    })
    return data
  }
}

export default BuildUser
