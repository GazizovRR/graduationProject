
import faker from '@faker-js/faker'
import header from '../framework/config/header'
import { BuildPet, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let id
  beforeEach(async () => {
    id = faker.random.numeric()
  })
  test('Добавить(зарегистрировать) питомца post api/pet 200', async () => {
    const pet = new BuildPet().addCategory().addNickname().addPhoto().addTags().addStatus().generate()
    pet.id = id
    const response = await api().Pet().add(JSON.stringify(pet))
    console.log(id)
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по ID get api/pet 200', async () => {
    console.log(id)
    const response = await api().Pet().findById(id)
    console.log(response)
    expect(response.status).toEqual(200)
  })

  test('Изменить запись о питомце post api/pet 200', async () => {
    header['Content-Type'] = 'application/x-www-form-urlencoded'
    console.log(id)
    const params = new BuildPet().addNickname().addStatus().generate()
    const response = await api().Pet().updateById(id, JSON.stringify(params))
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по статусу get api/pet 200', async () => {
    header['Content-Type'] = 'application/json'
    console.log(id)
    const status = new BuildPet().addStatus().generate()
    const response = await api().Pet().findByStatus(status)
    expect(response.status).toEqual(200)
  })

  test('Удалить питомца delete api/pet 200', async () => {
    console.log(id)
    const response = await api().Pet().delete(id)
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по несуществующему ID get api/pet 200', async () => {
    console.log(id)
    const response = await api().Pet().findById(0)
    expect(response.status).toEqual(404)
  })

  test('Найти питомца по несуществующему статусу get api/pet 200', async () => {
    console.log(id)
    const status = faker.random.word()
    const response = await api().Pet().findByStatus(status)
    expect(response.status).not.toEqual(200)
  })

})
