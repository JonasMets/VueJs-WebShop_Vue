// 
// modul för store funktioner för produkter
// 

// importera axios
import axios from '../../helpers/helperAxios';


// exporterar "store" funktioner för produkter
export default {

  state: {
    products:
      [
        { id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg' }
      ],
    product: [{ id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg' }]
  },

  mutations: {
    // här utförs ändring av data
    GET_PRODUCT_BY_ID(state, product) {
      // state.product = state.products.filter(p => p.id == id)[0]
      state.product = product
      sessionStorage.setItem('product', state.product)
    },

    GET_ALL_PRODUCTS(state, products) {
      state.products = products
      // console.log(state.products)
      // sessionStorage.setItem('products', state.products)
    }

  },

  actions: {
    // anropas från en component
    async getProductById({ commit }, id) {
      // api anrop här med axios tex.
      // console.log(id)

      let res = await axios.get('/products/' + id)

      // console.log(res)

      if (res !== null) {
        // commit('SET_STATE_PRODUCT', res.data)
        // anropar mutation
        // console.log(res.data)

        commit('GET_PRODUCT_BY_ID', res.data)
      }


    },

    async getAllProducts({ commit }) {
      let res = await axios.get('/products')

      // console.log(res)

      if (res !== null) {
        commit('GET_ALL_PRODUCTS', res.data)
      }
    }

  },

  getters: {
    products(state) {
      return state.products
    },
    product(state) {
      // console.log(state.product)
      // return state.product
      if(state.product == null && sessionStorage.getItem('product') !== null)
                state.product = sessionStorage.getItem('product')    
            
            return state.product

    }
  }


}