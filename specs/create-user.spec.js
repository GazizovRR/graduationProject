
import header from '../framework/config/header'
import { BuildUser, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let username
  test('Создать пользователя post api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const user = new BuildUser().addEmail().addLogin().addFirstName().addLastName().addPassword().addPhone().addStatus().generate()
    const response = await api().User().createUser(header, JSON.stringify(user))
    const data = await response.json()
    username = user.username
    expect(response.status).toEqual(200)
  })

  test('Найти пользователя по логину get api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const response = await api().User().getUser(header, username)
    const data = await response.json()
    expect(response.status).toEqual(200)
  })

  test('Удалить пользователя get api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const response = await api().User().deleteUser(header, username)
    const data = await response.json()
    expect(response.status).toEqual(200)
  })
})
