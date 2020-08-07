class DishApi {
  async create (store, parentId) {
    const rep = await fetch(`${store.serverUrl}/dish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dishParentId: parentId })
    })
    return await rep.json()
  }

  async delete (store, id) {
    const rep = await fetch(`${store.serverUrl}/dish/${id}`, {
      method: 'DELETE'
    })
    return await rep.json()
  }

  async update (store, id, values) {
    const rep = await fetch(`${store.serverUrl}/dish/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    return await rep.json()
  }

  async read (store, id) {
    const rep = await fetch(`${store.serverUrl}/dish/${id}`, {
      method: 'GET'
    })
    return await rep.json()
  }

  async readAll (store) {
    const rep = await fetch(`${store.serverUrl}/dish`, {
      method: 'GET'
    })
    console.log(rep)
    return await rep.json()
  }
}
class RoomApi {

}
class TableApi {

}
class OrderApi {

}
class OrderItemApi {

}

export default {
  Dish: new DishApi(),
  Room: new RoomApi(),
  Table: new TableApi(),
  Order: new OrderApi(),
  OrderItem: new OrderItemApi()
}
