
import { BuildUser, api } from '../framework/index'

describe('Отправляем http запросы', () => {
  let username
  test('Создать пользователя post api/user 200', async () => {
    const user = new BuildUser().addEmail().addLogin().addFirstName().addLastName().addPassword().addPhone().addStatus().generate()
    const response = await api().User().createUser(JSON.stringify(user))
    username = user.username
    expect(response.status).toEqual(200)
  })

  test('Найти пользователя по логину get api/user 200', async () => {
    const response = await api().User().getUser(username)
    expect(response.status).toEqual(200)
  })

  test('Удалить пользователя get api/user 200', async () => {
    const response = await api().User().deleteUser(username)
    expect(response.status).toEqual(200)
  })
})
