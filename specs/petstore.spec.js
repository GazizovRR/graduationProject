import api from '../framework/services/index'

describe('Отправляем http запросы', () => {
  test('Найти питомца по ID get api/airports 200', async () => {
    const response = await api().Pet().findById(3)
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по ID get api/airports 200', async () => {
    const params = new URLSearchParams({
        name: 'Pikachu',
        status: 'available'
    })
    const response = await api().Pet().updateById(3, params)
    expect(response.status).toEqual(200)
  })

  test('Найти питомца по ID get api/airports 200', async () => {
    const params = new URLSearchParams({
        id: 313131,
        name: 'Pikachu',
        status: 'available'
    })
    const response = await api().Pet().add(params)
    console.log(response)
    const data = await response.json()
    console.log(data)
    expect(response.status).toEqual(200)
  })
})
