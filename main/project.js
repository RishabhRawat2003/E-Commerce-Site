const allProducts  = async()=>{

    const response = await fetch('https://dummyjson.com/products?limit=100')
    const result = await response.json()
    return result

}

const singleProductById  = async(id)=>{
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await response.json()
    return result
}

const searchProducts  = async(search)=>{

    const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const result = await response.json()
    return result
}

const allProductsCategories  = async()=>{

    const response = await fetch('https://dummyjson.com/products/categories')
    const result = await response.json()
    return result
}

const productsOfCategories  = async(category)=>{

    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const result = await response.json()
    return result
}


let all_Products = allProducts()
//console.log(all_Products)

let single_Product = singleProductById()
//console.log(single_Product)
let search_products = searchProducts()
//console.log(search_products)
let all_Categories = allProductsCategories()
//console.log(all_Categories)

let products_Categories = productsOfCategories('tops')
//console.log(products_Categories)

