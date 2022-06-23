const { faker } = require('@faker-js/faker')

const BuildPet = function () {
  this.addCategory = function () {
    this.category = [
        {
            id: faker.random.numeric(),
            name: faker.animal.type()
        }
    ]
    return this
  }
  this.addNickname = function () {
    this.nickname = faker.name.lastName()
    return this
  }
  this.addPhoto = function () {
    this.photo = [
        faker.image.animals()
    ]
    return this
  }
  this.addTags = function () {
    this.tags = [
        {
            id: faker.random.numeric(),
            name: faker.word.adjective(4)
        }
    ]
    return this
  }
  this.addStatus = function () {
    this.status = faker.helpers.arrayElement(['available', 'pending', 'sold'])
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

export default BuildPet
