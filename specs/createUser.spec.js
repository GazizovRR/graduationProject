
import { BuildUser, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let username
  test('Создать пользователя post api/user 200', async () => {
    const user = new BuildUser().addEmail().addLogin().addFirstName().addLastName().addPassword().addPhone().addStatus().generate()
    const response = await api().User().createUser(JSON.stringify(user))
    const data = await response.json()
    username = user.username
    expect(response.status).toEqual(200)
  })

  test('Найти пользователя по логину get api/user 200', async () => {
    const response = await api().User().getUser(username)
    const data = await response.json()
    expect(response.status).toEqual(200)
  })

  test('Удалить пользователя get api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const response = await api().User().deleteUser(username)
    const data = await response.json()
    expect(response.status).toEqual(200)
  })

  test('Найти пользователя по несуществующему логину get api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const response = await api().User().getUser(123)
    const data = await response.json()
    expect(response.status).toEqual(404)
  })

  test('Удалить пользователя по несуществующему логину get api/user 200', async () => {
    header['Content-Type'] = 'application/json'
    const response = await api().User().deleteUser('!@#$$%')
    expect(response.status).toEqual(404)
  })
})
