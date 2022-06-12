import { useProduct } from "../../contexts/product-context"

const getSortedProducts = ({sortBy}, products)=>{
    const sortedProducts = [...products]
    switch(sortBy){

        case "HIGH_TO_LOW":
            return sortedProducts.sort((product1, product2)=>product2.price.discounted - product1.price.discounted)
        case "LOW_TO_HIGH":
            return sortedProducts.sort((product1, product2) => product1.price.discounted - product2.price.discounted)
        default:
            return sortedProducts
    }
}

const getRatedProducts =({rating}, products)=>{
    return products.filter(product => product.rating >=rating)
}

const getCategorisedProduct = ({category}, products)=>{
    
    let finalcategory = []
    if(category["fiction"] && category["horror"] && category["romantic"]){
        console.log("all three yes")
        return products
    }
    
    if(category["fiction"]){
        finalcategory =  products.filter(product => product.categoryName === "fiction")
    }
    if(category["horror"]){
        finalcategory = [...finalcategory, ...products.filter(product => product.categoryName === "horror")]
    }
    if (category["romantic"]) {
        finalcategory = [...finalcategory, ...products.filter(product => product.categoryName === "romantic")]
       
    }
    
    if(finalcategory.length >0){
        return finalcategory
    }else{
        return products
    }

    
}

const getProductsInRange = ({range}, products)=>{
    let test = products.filter(product => product.price.discounted <= range)
    return test
}

const applyFilters = (state, ...args)=>(products)=>{
    return args.reduce((acc,curr)=>{
        
        return curr(state, acc)
    },products)
}

export const getFilteredProducts =(state, products)=> applyFilters(
    state,
    getSortedProducts,
    getRatedProducts,
    getCategorisedProduct,
    getProductsInRange
)(products)