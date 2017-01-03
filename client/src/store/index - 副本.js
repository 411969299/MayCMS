
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  }
})
