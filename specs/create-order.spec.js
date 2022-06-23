
import faker from '@faker-js/faker'
import header from '../framework/config/header'
import { BuildPet, BuildOrder, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let petId = faker.random.numeric(6)
  let orderId
  beforeAll(async () => {
    const pet = new BuildPet().addCategory().addNickname().addPhoto().addTags().addStatus().generate()
    pet.id = petId
    const response = await api().Pet().add(header, JSON.stringify(pet))
  })
  test('Разместить заказ на продажу post api/store/order 200', async () => {
    const order = new BuildOrder().addQuantity().addShipDate().addStatus().addCompleteStatus().generate()
    order.petId = petId
    const response = await api().Store().placeOrder(header, JSON.stringify(order))
    const data = await response.json()
    orderId = data.id
    expect(response.status).toEqual(200)
  })

  test('Найти заказ на покупку питомца get api/store/order 200', async () => {
    const response = await api().Store().getOrder(header, orderId)
    expect(response.status).toEqual(200)
  })

  test('Удалить заказ delete api/store/order 200', async () => {
    const response = await api().Store().deleteOrder(header, orderId)
    expect(response.status).toEqual(200)
  })
})
