const sortBy = ({sortBy}, products)=>{
    const sortedProducts = [...products]
    switch(sortBy){
        case "HIGH-TO-LOW":
            return sortedProducts.sort((product1, product2)=>product2.price.discounted - product1.price.discounted)
        case "LOW-TO-HiGH":
            return sortedProducts.sort((product1,product2) => product1.price.discounted - product2.price.discounted)
        default:
            return sortedProducts
    }
}

const ratedProducts =({rating}, products)=>{
    return products.filter(product => product.rating >=rating)
}