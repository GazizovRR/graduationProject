
import faker from '@faker-js/faker'
import header from '../framework/config/header'
import { BuildPet, BuildOrder, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let orderId
  let petId = faker.random.numeric(6)
  beforeAll(async () => {
    const pet = new BuildPet().addCategory().addNickname().addPhoto().addTags().addStatus().generate()
    pet.id = petId
    const response = await api().Pet().add(JSON.stringify(pet))
  })
  beforeEach(async () => {
    orderId = faker.datatype.number({ min: 2, max: 7 })
  })
  test('Разместить заказ на продажу post api/store/order 200', async () => {
    const order = new BuildOrder().addQuantity().addShipDate().addStatus().addCompleteStatus().generate()
    order.petId = petId
    const response = await api().Store().placeOrder(JSON.stringify(order))
    expect(response.status).toEqual(200)
  })

  test('Найти заказ на покупку питомца get api/store/order 200', async () => {
    const response = await api().Store().getOrder(orderId)
    expect(response.status).toEqual(200)
  })

  test('Удалить заказ delete api/store/order 200', async () => {
    const response = await api().Store().deleteOrder(orderId)
    expect(response.status).toEqual(200)
  })

  test('Найти заказ на покупку питомца с несуществующим ID get api/store/order 200', async () => {
    const response = await api().Store().getOrder('-3')
    expect(response.status).toEqual(404)
  })

  test('Удалить заказ с несуществующим ID delete api/store/order 200', async () => {
    const response = await api().Store().deleteOrder(0)
    expect(response.status).toEqual(404)
  })
})
