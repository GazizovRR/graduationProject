import Pet from './pet.service'
import Store from './store.service'
import User from './user.service'

const api = () => ({
  Pet: () => ({ ...Pet }),
  Store: () => ({ ...Store }),
  User: () => ({ ...User })
});

export default api;
