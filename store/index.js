export const state = () => ({
    count: 1,
    products: [
        {
          id: 1,
          name: "Monoculture Farming",
          price: "50000000",
          desc: "Naturally, the soil contains nutrients and other functions. Monoculture eliminates all such functions due to the practice of only planting or rearing one type of crop or animal breed, respectively. As a result, there is no range of insect and soil microorganism species due to the lack of crop diversity that promotes insect and soil microbe biodiversity."
        },
        {
          id: 2,
          name: "Road Roller",
          price: "465",
          desc: "Naturally, Pure destruction of land and soil."
        },
        {
          id: 3,
          name: "Solo Zombie",
          price: "3",
          desc: "Naturally, Our Survivor and Hero."
        },
        {
          id: 4,
          name: "Stack Of Zombies",
          price: "45400",
          desc: "Naturally, if you can`t win alone, fight with groups."
        },
        {
          id: 5,
          name: "Multistack Of Zombies",
          price: "754000",
          desc: "Naturally, start an apocalypse."
        },
        {
          id: 6,
          name: "Sunset End",
          price: "1",
          desc: "End of Humanity."
        },
      ]
  })
  export const getters = {
    getCount (state) {
      return state.count
    },
    getProducts (state) {
        return state.products
    },
  }
  export const mutations = {
    tambahCount (state) {
      state.count++
    },
    kurangCount(state){
      if (this.state.count > 1) {
        state.count--
      } else {}
    },
  }