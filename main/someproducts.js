const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('param');
//console.log(paramValue);

const productsOfCategories = async (category) => {

    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const result = await response.json()
    return result
}

const allProducts = async () => {

    const response = await fetch('https://dummyjson.com/products?limit=100')
    const result = await response.json()
    return result

}

const header = document.querySelector('.header')
const header2 = document.querySelector('.header2')
const footer = document.querySelector('.footer')
const mainProductsDiv = document.querySelector('.mainProducts')
const otherProductsDiv = document.querySelector('.otherProducts')

if (paramValue === 'Laptops') {
    const laptops = 'Laptops'
    const smartphones = 'smartphones' //Included in other similar products
    const automative = 'automotive' //Included in other similar products
    let laptopsProducts = productsOfCategories(laptops)
    let smartphonesProducts = productsOfCategories(smartphones)
    let automativeProducts = productsOfCategories(automative)
    console.log(laptops)
    laptopsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = laptops + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    smartphonesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    automativeProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Smartphones') {
    const smartphones = 'Smartphones'
    const laptops = 'laptops' //Included in other similar products
    const automative = 'automotive' //Included in other similar products
    console.log(smartphones)
    let smartphonesProducts = productsOfCategories(smartphones)
    let laptopsProducts = productsOfCategories(laptops)
    let automativeProducts = productsOfCategories(automative)
    smartphonesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = smartphones + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    laptopsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    automativeProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })

}
else if (paramValue === 'Mens-watches') {
    const watchesMen = 'Mens-watches'
    const watchesWomen = 'womens-watches'
    const sunglasses = 'sunglasses' //Included in other similar products
    console.log(watchesMen)
    let mensWatchesProducts = productsOfCategories(watchesMen)
    let womensWatchesProducts = productsOfCategories(watchesWomen)
    let sunglassesProducts = productsOfCategories(sunglasses)
    mensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = watchesMen + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    sunglassesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })

}
else if (paramValue === 'Womens-dresses') {
    const womensDresses = 'Womens-dresses'
    const tops = 'tops' //Included in other similar products
    const skinCare = 'skincare' //Included in other similar products
    console.log(womensDresses)
    let womensDressesProducts = productsOfCategories(womensDresses)
    let topsProducts = productsOfCategories(tops)
    let skinCareProducts = productsOfCategories(skinCare)
    womensDressesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = womensDresses + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    topsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    skinCareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })


}
else if (paramValue === 'Mens-shoes') {
    const mensShoes = 'Mens-shoes'
    const womensShoes = 'womens-shoes' //Included in other similar products
    const mensShirts = 'mens-shirts' //Included in other similar products
    console.log(mensShoes)
    let mensShoesProducts = productsOfCategories(mensShoes)
    let womensShoesProducts = productsOfCategories(womensShoes)
    let mensShirtsProducts = productsOfCategories(mensShirts)
    mensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = mensShoes + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    mensShirtsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })

}
else if (paramValue === 'Furniture') {
    const furniture = 'Furniture'
    const homeDecorations = 'home-decoration' //Included in other similar products
    const lighting = 'lighting' //Included in other similar products
    console.log(furniture)
    let furnitureProducts = productsOfCategories(furniture)
    let homeDecorationsProducts = productsOfCategories(homeDecorations)
    let lightingProducts = productsOfCategories(lighting)
    furnitureProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = furniture + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    homeDecorationsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    lightingProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })

}
else if (paramValue === 'Sunglasses') {
    const sunglasses = 'sunglasses'
    const fragrance = 'fragrances' //Included in other similar products
    const mensShirts = 'mens-shirts' //Included in other similar products
    console.log(sunglasses)
    let sunglassesProdcuts = productsOfCategories(sunglasses)
    let fragranceProdcuts = productsOfCategories(fragrance)
    let mensShirtsProdcuts = productsOfCategories(mensShirts)
    sunglassesProdcuts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = sunglasses + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    fragranceProdcuts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    mensShirtsProdcuts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })

}
else if (paramValue === 'Womens-jewellery') {
    const womensJewellery = 'Womens-jewellery'
    const womensBags = 'womens-bags' //Included in other similar products
    const skinCare = 'skincare' //Included in other similar products
    console.log(womensJewellery)
    let womensJewelleryProducts = productsOfCategories(womensJewellery)
    let womensBagsProducts = productsOfCategories(womensBags)
    let skinCareProducts = productsOfCategories(skinCare)
    womensJewelleryProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = womensJewellery + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensBagsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    skinCareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Fragrances') {
    const fragrance = 'Fragrances'
    const skinCare = 'skincare' //Included in other similar products
    const top = 'tops' //Included in other similar products
    console.log(fragrance)
    let fragranceProducts = productsOfCategories(fragrance)
    let skinCareProducts = productsOfCategories(skinCare)
    let topProducts = productsOfCategories(top)
    fragranceProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = fragrance + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    skinCareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    topProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Skincare') {
    const skincare = 'Skincare'
    const fragrance = 'fragrances' //Included in other similar products
    const womensWatches = 'womens-watches' //Included in other similar products
    console.log(skincare)
    let skincareProducts = productsOfCategories(skincare)
    let fragranceProducts = productsOfCategories(fragrance)
    let womensWatchesProducts = productsOfCategories(womensWatches)
    skincareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = skincare + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    fragranceProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    womensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Groceries') {
    const groceries = 'Groceries'
    const homeDecoration = 'home-decoration' //Included in other similar products
    const furniture = 'furniture' //Included in other similar products
    console.log(groceries)
    let groceriesProducts = productsOfCategories(groceries)
    let homeDecorationProducts = productsOfCategories(homeDecoration)
    let furnitureProducts = productsOfCategories(furniture)
    groceriesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = groceries + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    homeDecorationProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    furnitureProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Home-decoration') {
    const homeDecoration = 'Home-decoration'
    const furniture = 'furniture' //Included in other similar products
    const lighting = 'lighting' //Included in other similar products
    console.log(homeDecoration)
    let homeDecorationProducts = productsOfCategories(homeDecoration)
    let furnitureProducts = productsOfCategories(furniture)
    let lightingProducts = productsOfCategories(lighting)
    homeDecorationProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = homeDecoration + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    furnitureProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    lightingProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Tops') {
    const tops = 'Tops'
    const womensDresses = 'womens-dresses' //Included in other similar products
    const skinCare = 'skincare' //Included in other similar products
    console.log(tops)
    let topsProducts = productsOfCategories(tops)
    let womensDressesProducts = productsOfCategories(womensDresses)
    let skinCareProducts = productsOfCategories(skinCare)
    topsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = tops + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensDressesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    skinCareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Womens-shoes') {
    const womensShoes = 'Womens-shoes'
    const womensBags = 'womens-bags' //Included in other similar products
    const sunglasses = 'sunglasses' //Included in other similar products
    console.log(womensShoes)
    let womensShoesProducts = productsOfCategories(womensShoes)
    let womensBagsProducts = productsOfCategories(womensBags)
    let sunglassesProducts = productsOfCategories(sunglasses)
    womensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = womensShoes + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensBagsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    sunglassesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Mens-shirts') {
    const MensShirts = 'Mens-shirts'
    const mensShoes = 'mens-shoes' //Included in other similar products
    const mensWatches = 'mens-watches' //Included in other similar products
    console.log(MensShirts)
    let MensShirtsProducts = productsOfCategories(MensShirts)
    let mensShoesProducts = productsOfCategories(mensShoes)
    let mensWatchesProducts = productsOfCategories(mensWatches)
    MensShirtsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = MensShirts + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    mensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    mensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Womens-watches') {
    const womensWatches = 'Womens-watches'
    const mensWatches = 'mens-watches' //Included in other similar products
    const womensBags = 'womens-bags' //Included in other similar products
    console.log(womensWatches)
    let womensWatchesProducts = productsOfCategories(womensWatches)
    let mensWatchesProducts = productsOfCategories(mensWatches)
    let womensBagsProducts = productsOfCategories(womensBags)
    womensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = womensWatches + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    mensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    womensBagsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Womens-bags') {
    const womensBags = 'Womens-bags'
    const womensJewellery = 'womens-jewellery' //Included in other similar products
    const fragrances = 'fragrances' //Included in other similar products
    console.log(womensBags)
    let womensBagsProducts = productsOfCategories(womensBags)
    let womensJewelleryProducts = productsOfCategories(womensJewellery)
    let fragrancesProducts = productsOfCategories(fragrances)
    womensBagsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = womensBags + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensJewelleryProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    fragrancesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Automotive') {
    const automotive = 'Automotive'
    const laptops = 'laptops' //Included in other similar products
    const smartphones = 'smartphones' //Included in other similar products
    console.log(automotive)
    let automotiveProducts = productsOfCategories(automotive)
    let laptopsProducts = productsOfCategories(laptops)
    let smartphonesProducts = productsOfCategories(smartphones)
    automotiveProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = automotive + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    laptopsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    smartphonesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Motorcycle') {
    const motorcycle = 'Motorcycle'
    const sunglasses = 'sunglasses' //Included in other similar products
    const automotive = 'automotive' //Included in other similar products
    console.log(motorcycle)
    let motorcycleProducts = productsOfCategories(motorcycle)
    let sunglassesProducts = productsOfCategories(sunglasses)
    let automotiveProducts = productsOfCategories(automotive)
    motorcycleProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = motorcycle + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    sunglassesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    automotiveProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Lighting') {
    const lighting = 'Lighting'
    const homeDecoration = 'home-decoration' //Included in other similar products
    const furniture = 'furniture' //Included in other similar products
    console.log(lighting)
    let lightingProducts = productsOfCategories(lighting)
    let homeDecorationProducts = productsOfCategories(homeDecoration)
    let furnitureProducts = productsOfCategories(furniture)
    header.innerHTML = lighting + ':'
    lightingProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = lighting + ':'
            header2.innerHTML = 'Others Similar Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    homeDecorationProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc1(id, price, discountPercentage, title, category, image)
        })
    })
    furnitureProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            otherProductsFunc2(id, price, discountPercentage, title, category, image)
        })
    })
}
else if (paramValue === 'Allproducts') {
    console.log('Allproducts')
    let all_Products = allProducts()
    all_Products.then((items)=>{
        let allProductsItems = items.products
        allProductsItems.map((items)=>{
            header.innerHTML = 'All Products :'
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
            footer.classList.toggle('hidden')
        })
    })
}
else if (paramValue === 'MensAccessories') {
    const mensShirts = 'mens-shirts'
    const mensShoes = 'mens-shoes' 
    const mensWatches = 'mens-watches' 
    const sunglasses = 'sunglasses' 
    const fragrances = 'fragrances' 
    const motorcycle = 'motorcycle' 
    let mensShirtsProducts = productsOfCategories(mensShirts)
    let mensShoesProducts = productsOfCategories(mensShoes)
    let mensWatchesProducts = productsOfCategories(mensWatches)
    let sunglassesProducts = productsOfCategories(sunglasses)
    let fragrancesProducts = productsOfCategories(fragrances)
    let motorcycleProducts = productsOfCategories(motorcycle)
    console.log('MensAccessories')
    mensShirtsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = "Men's Accessories :"
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    mensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    mensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    sunglassesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    fragrancesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    motorcycleProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
            footer.classList.toggle('hidden')
        })
    })
}
else if (paramValue === 'WomensAccessories') {
    const tops = 'tops'
    const womensDresses = 'womens-dresses' 
    const womensShoes = 'womens-shoes' 
    const womensWatches = 'womens-watches' 
    const womensBags = 'womens-bags' 
    const womensJewellery = 'womens-jewellery' 
    const skincare = 'skincare'
    let topsProducts = productsOfCategories(tops)
    let womensDressesProducts = productsOfCategories(womensDresses)
    let womensShoesProducts = productsOfCategories(womensShoes)
    let womensWatchesProducts = productsOfCategories(womensWatches)
    let womensBagsProducts = productsOfCategories(womensBags)
    let womensJewelleryProducts = productsOfCategories(womensJewellery)
    let skincareProducts = productsOfCategories(skincare)
    console.log('WomensAccessories')
    topsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            header.innerHTML = "Women's Accessories :"
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensDressesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensShoesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensWatchesProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensBagsProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    womensJewelleryProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
        })
    })
    skincareProducts.then((items) => {
        const itemsProducts = items.products
        itemsProducts.map((items) => {
            //console.log(items)
            let id = items.id
            let title = items.title.slice(0,22)
            let category = items.category
            let price = items.price
            let discountPercentage = items.discountPercentage
            let image = items.thumbnail
            mainProductsFunc(id, price, discountPercentage, title, category, image)
            footer.classList.toggle('hidden')
        })
    })
}


function mainProductsFunc(id, price, discountPercentage, title, categoryOfProduct, image) {
    const anchor = document.createElement('a') //main 
    const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
    const div3 = document.createElement('div') //This div is for price and discount only
    const img = document.createElement('img') //img of product
    const p = document.createElement('p') //brand name
    const span = document.createElement('span') //category of product
    const span2 = document.createElement('span')//price
    const span3 = document.createElement('span')//discount

    anchor.setAttribute('class', 'group h-52 p-1 w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 active:bg-slate-200 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:w-[30vw] lg:w-[20vw] xl:w-[15vw]')
    anchor.href =`./singleproduct.html?param=${id}`
    img.setAttribute('class', 'h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
    p.setAttribute('class', 'w-auto text-sm font-bold text-black md:text-lg')
    div2.setAttribute('class', 'h-auto w-auto flex justify-center items-center')
    span.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    span2.setAttribute('class', 'text-sm mx-2 font-bold text-black md:text-lg')
    span3.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    div3.setAttribute('class', 'h-auto w-auto')
    img.src = image
    p.innerHTML = title
    span.innerHTML = categoryOfProduct
    span2.innerHTML += `$` + price
    span3.innerHTML += discountPercentage + '% Off'
    div3.appendChild(span2)
    div3.appendChild(span3)
    //div2.appendChild(span)
    //div2.appendChild(div3)
    anchor.appendChild(img)
    anchor.appendChild(p)
    anchor.appendChild(span)
    anchor.appendChild(div2)
    anchor.appendChild(div3)
    mainProductsDiv.appendChild(anchor)
}


function otherProductsFunc1(id, price, discountPercentage, title, categoryOfProduct, image) {
    const anchor = document.createElement('a') //main div
    const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
    const div3 = document.createElement('div') //This div is for price and discount only
    const img = document.createElement('img') //img of product
    const p = document.createElement('p') //brand name
    const span = document.createElement('span') //category of product
    const span2 = document.createElement('span')//price
    const span3 = document.createElement('span')//discount

    anchor.setAttribute('class', 'group h-52 p-1 w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 active:bg-slate-200 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:w-[30vw] lg:w-[20vw] xl:w-[15vw]')
    anchor.href =`./singleproduct.html?param=${id}`
    img.setAttribute('class', 'h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
    p.setAttribute('class', 'w-auto text-sm font-bold text-black md:text-lg')
    div2.setAttribute('class', 'h-auto w-auto flex justify-center items-center')
    span.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    span2.setAttribute('class', 'text-sm mx-2 font-bold text-black md:text-lg')
    span3.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    div3.setAttribute('class', 'h-auto w-auto')
    img.src = image
    p.innerHTML = title
    span.innerHTML = categoryOfProduct
    span2.innerHTML += `$` + price
    span3.innerHTML += discountPercentage + '% Off'
    div3.appendChild(span2)
    div3.appendChild(span3)
    //div2.appendChild(span)
    //div2.appendChild(div3)
    anchor.appendChild(img)
    anchor.appendChild(p)
    anchor.appendChild(span)
    anchor.appendChild(div2)
    anchor.appendChild(div3)
    otherProductsDiv.appendChild(anchor)
    //footer.classList.toggle('hidden')
}


function otherProductsFunc2(id, price, discountPercentage, title, categoryOfProduct, image) {
    const anchor = document.createElement('a') //main div
    const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
    const div3 = document.createElement('div') //This div is for price and discount only
    const img = document.createElement('img') //img of product
    const p = document.createElement('p') //brand name
    const span = document.createElement('span') //category of product
    const span2 = document.createElement('span')//price
    const span3 = document.createElement('span')//discount

    anchor.setAttribute('class', 'group h-52 p-1 w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 active:bg-slate-200 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:w-[30vw] lg:w-[20vw] xl:w-[15vw]')
    anchor.href =`./singleproduct.html?param=${id}`
    img.setAttribute('class', 'h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
    p.setAttribute('class', 'w-auto text-sm font-bold text-black md:text-lg')
    div2.setAttribute('class', 'h-auto w-auto flex justify-center items-center')
    span.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    span2.setAttribute('class', 'text-sm mx-2 font-bold text-black md:text-lg')
    span3.setAttribute('class', 'text-xs font-semibold text-gray-700 md:text-sm')
    div3.setAttribute('class', 'h-auto w-auto')
    img.src = image
    p.innerHTML = title
    span.innerHTML = categoryOfProduct
    span2.innerHTML += `$` + price
    span3.innerHTML += discountPercentage + '% Off'
    div3.appendChild(span2)
    div3.appendChild(span3)
    //div2.appendChild(span)
    //div2.appendChild(div3)
    anchor.appendChild(img)
    anchor.appendChild(p)
    anchor.appendChild(span)
    anchor.appendChild(div2)
    anchor.appendChild(div3)
    otherProductsDiv.appendChild(anchor)
    footer.classList.toggle('hidden')
}
