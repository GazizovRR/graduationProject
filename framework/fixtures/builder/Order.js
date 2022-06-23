const { faker } = require('@faker-js/faker')

const BuildOrder = function () {
  this.addPetId = function () {
    this.petId = faker.random.numeric(6)
    return this
  }
  this.addQuantity = function () {
    this.quantity = faker.helpers.arrayElement([0, 1])
    return this
  }
  this.addShipDate = function () {
    this.shipDate = faker.date.soon(2)
    return this
  }
  this.addStatus = function () {
    this.status = faker.helpers.arrayElement(['placed', 'approved', 'delivered'])
    return this
  }
  this.addCompleteStatus = function () {
    this.complete = faker.datatype.boolean()
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

export default BuildOrder
