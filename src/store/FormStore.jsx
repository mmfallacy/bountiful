import create from 'zustand'

export const useRequestFormStore = create(set => ({
    data:{
        productName: null,
        price: null,
        description: null,
        productImage: null,
    },
    update: (data) => set( state => ({...state, data:{...state.data, ...data}})),
    reset: () => set(state=>({...state,data:{
        productName: null,
        price: null,
        description: null,
        productImage: null,
    }}))

}))