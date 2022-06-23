import header from '../framework/config/header'
import { BuildPet, BuildOrder, BuildUser, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let id = 10
  test.only('Добавить(зарегистрировать) питомца post api/pet 200', async () => {
    // const pet = new BuildPet().addCategory().addNickname().addPhoto().addTags().addStatus().generate()
    // console.log(pet)
    const pet = new URLSearchParams({
      "id": 10,
      "category": {
        "id": 31,
        "name": "Pokemon"
      },
      "name": "Pikachu",
      "photoUrls": [
        "http://loremflickr.com/640/480/animals"
      ],
      "tags": [
        {
          "id": 7,
          "name": "Pokemon"
        }
      ],
      "status": "available"
    })
    const response = await api().Pet().add(header, pet)
    console.log(response)
    console.log(response.headers)
    const data = await response.json()
    id = data.body.id
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по ID get api/pet 200', async () => {
    const response = await api().Pet().findById(header, id)
    expect(response.status).toEqual(200)
  })

  test('Изменить запись о питомце post api/pet 200', async () => {
    const params = new URLSearchParams({
        name: 'Pikachu',
        status: 'sold'
    })
    const response = await api().Pet().updateById(header, id, params)
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по статусу get api/pet 200', async () => {
    const status ='sold'
    const response = await api().Pet().findByStatus(header, status)
    console.log(response)
    expect(response.status).toEqual(200)
  })

  test('Удалить питомца delete api/pet 200', async () => {
    const response = await api().Pet().delete(header, id)
    expect(response.status).toEqual(200)
  })

  test.skip('Разместить заказ на продажу post api/store/order 200', async () => {
    const order = new BuildOrder().addQuantity().addShipDate().addStatus().addCompleteStatus().generate()
    order.petId = id
    console.log(order)
    /* const order = new URLSearchParams({id: 310596, petId: 4, quantity: 1, shipDate: '2022-06-20T04:32:19.141Z', status: 'places', complete: true}) */
    const response = await api().Store().placeOrder(header, order)
    const data = await response.json()
    // console.log(data)
    expect(response.status).toEqual(200)
  })

  test('Найти заказ на покупку питомца get api/store/order 200', async () => {
    const response = await api().Store().getOrder(header, 3)
    expect(response.status).toEqual(200)
  })

  test('Удалить заказ delete api/store/order 200', async () => {
    const response = await api().Store().deleteOrder(header, 3)
    expect(response.status).toEqual(200)
  })

  test.skip('Создать пользователя post api/pet 200', async () => {
    const user = new BuildUser().addEmail().addLogin().addFirstName().addLastName().addPassword().addPhone().addStatus().generate()
    console.log(user)
    const response = await api().User().createUser(header, JSON.stringify(user))
    // console.log(response)
    const data = await response.json()
    expect(response.status).toEqual(200)
  })
})
