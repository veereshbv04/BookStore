import { useProduct } from "../../contexts/product-context"

const getSortedProducts = ({sortBy}, products)=>{
    const sortedProducts = [...products]
    switch(sortBy){
        case "HIGH_TO_LOW":
            return sortedProducts.sort((product1, product2)=>product2.price.discounted - product1.price.discounted)
        case "LOW_TO_HiGH":
            return sortedProducts.sort((product1,product2) => product1.price.discounted - product2.price.discounted)
        default:
            return sortedProducts
    }
}

const getRatedProducts =({rating}, products)=>{
    return products.filter(product => product.rating >=rating)
}


const applyFilters = (state, ...args)=>(products)=>{
    return args.reduce((acc,curr)=>{
        return curr(state, acc)
    },products)
}
console.log("in productfilterutils.js")
export const getFilteredProducts =(state, products)=> applyFilters(
    state,
    getSortedProducts,
    getRatedProducts
)(products)