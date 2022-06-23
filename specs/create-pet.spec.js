
import faker from '@faker-js/faker'
import header from '../framework/config/header'
import { BuildPet, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let id = faker.random.numeric(6)
  test('Добавить(зарегистрировать) питомца post api/pet 200', async () => {
    const pet = new BuildPet().addCategory().addNickname().addPhoto().addTags().addStatus().generate()
    pet.id = id
    const response = await api().Pet().add(header, JSON.stringify(pet))
    const data = await response.json()
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по ID get api/pet 200', async () => {
    const response = await api().Pet().findById(header, id)
    expect(response.status).toEqual(200)
  })

  test('Изменить запись о питомце post api/pet 200', async () => {
    header['Content-Type'] = 'application/x-www-form-urlencoded'
    const params = new BuildPet().addNickname().addStatus().generate()
    const response = await api().Pet().updateById(header, id, JSON.stringify(params))
    const data = await response.json()
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по статусу get api/pet 200', async () => {
    header['Content-Type'] = 'application/json'
    const status = new BuildPet().addStatus().generate()
    const response = await api().Pet().findByStatus(header, status)
    expect(response.status).toEqual(200)
  })

  test('Удалить питомца delete api/pet 200', async () => {
    const response = await api().Pet().delete(header, id)
    expect(response.status).toEqual(200)
  })
})
