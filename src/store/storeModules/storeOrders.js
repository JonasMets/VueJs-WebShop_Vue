// 
// modul för store funktioner för order
// 

// importera axios
import axios from '../../helpers/helperAxios';

// exporterar "store" funktioner för ordrar
export default {

  // data för ordrar  orders: []
  state: {
    newOrder: {},
    order:[],
    orders: null
  },

  mutations: {

    SET_ORDERS_BY_CUSTOMER(state, ordersbycustomer) {
      state.orders = ordersbycustomer
    }

  },

  actions: {

    // registrera en ny order
    async createNewOrder({ commit }, newOrder) {

      try {
        const response = await axios.post('/orders', newOrder)
        // skicka user till mongodb med axios http://localhost:9999/api/v1/orders
        // console.log(response.data)
        return response;

      } catch (error) {
        console.log(error)
        return error;
      }

      // return {data:"order created" , newOrder}

    },

    // hämta alla ordrar för en kund med id med axios http://localhost:9999/api/v1/orders/customer/
    async getOrdersByCustomer({ commit }, customerId) {
      // const data = {}
      const response = await axios.get('/orders/customer/' + customerId)

      if (response !== null) {
        commit('SET_ORDERS_BY_CUSTOMER', response)
      }

      // return "orders by customer"

    }

  },

  getters: {
    // hämtar och skickar tillbaka data
    order(state) {
      return state.order
    },

    orders(state) {
      return state.orders
    }


  }

}
// slut på export







