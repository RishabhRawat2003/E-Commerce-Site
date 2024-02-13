const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('param');
console.log(paramValue);


const singleProductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await response.json()
    return result
}

const productsOfCategories = async (category) => {

    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const result = await response.json()
    return result
}


// 1 - 5 => Smartphones
// 6 - 10 => laptops
// 11 - 15 => fragrances
// 16 - 20 => skincare
// 21 - 25 => groceries
// 26 - 30 => home-decoration
// 31 - 35 => furniture
// 36 - 40 => tops
// 41 - 45 => womens-dresses
// 46 - 50 => womens-shoes
// 51 - 55 => mens-shirts
// 56 - 60 => mens-shoes
// 61 - 65 => mens-watches
// 66 - 70 => womens-watches
// 71 - 75 => womens-bags
// 76 - 80 => womens-jewellery
// 81 - 85 => sunglasses
// 86 - 90 => automative
// 91 - 95 => motorcycle
// 96 - 100 => lighting

const imageShowSlider = document.querySelector('.imagesDiv')
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const productInfo = document.querySelector('.productDetail')
setTimeout(() => {
    leftArrow.addEventListener('click', function (e) {
        e.preventDefault()
        imageShowSlider.scrollLeft -= imageShowSlider.firstElementChild.width
    })
    
    rightArrow.addEventListener('click', function (e) {
        e.preventDefault()
        imageShowSlider.scrollLeft += imageShowSlider.firstElementChild.width
    })
}, 400);


let single_Product = singleProductById(paramValue)
single_Product.then((val) => {
    //console.log(val)
    const title = val.title
    const description = val.description
    const price = val.price
    const discountPercentage = val.discountPercentage
    const rating = val.rating
    const inStock = val.stock
    const brand = val.brand
    const category = val.category
    const images = val.images
    images.map((items) => {
        const imageItems = items
        imageSlider(imageItems)
    })
    productDetail(title, brand, price, discountPercentage, category, inStock, description , rating )
})

function imageSlider(images) {
    const img = document.createElement('img')
    img.src = images
    img.setAttribute('class', 'images h-full min-w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
    imageShowSlider.appendChild(img)

}

function productDetail(title, brand, price, discountPercentage, category, inStock , description , rating) {
    const div1 = document.createElement('div') //In this div 2 more div one for title and brand and one for price and discount
    const div2 = document.createElement('div') //In thi div title and brand 
    const div3 = document.createElement('div') //In this div price and discount
    const div4 = document.createElement('div') //In this div category and stock 
    const div5 = document.createElement('div') //In this description and rating
    const span1 = document.createElement('span') //title
    const span2 = document.createElement('span') //brand
    const span3 = document.createElement('span') //price
    const span4 = document.createElement('span') //discount
    const span5 = document.createElement('span') //category
    const span6 = document.createElement('span') //stock
    const span7 = document.createElement('span') //stock
    const para = document.createElement('p') //description

    div1.setAttribute('class', 'h-auto w-[98%] mx-auto flex justify-between items-center')
    div2.setAttribute('class', 'h-auto w-auto flex justify-evenly items-center mx-3')
    div3.setAttribute('class', 'h-auto w-auto flex flex-col items-center mx-3 sm:flex-row sm:justify-evenly')
    span1.setAttribute('class', 'h-10 w-auto text-black font-bold text-sm flex items-start md:text-lg lg:text-xl 2xl:text-2xl')
    span2.setAttribute('class', 'h-7 hidden w-auto mx-2 text-gray-600 font-bold text-xs sm:flex sm:items-start md:text-sm lg:text-lg lg:h-8 2xl:text-xl')
    span3.setAttribute('class', 'h-auto w-auto text-black font-bold text-sm flex items-start sm:h-10 md:text-lg lg:text-xl 2xl:text-2xl')
    span4.setAttribute('class', 'h-7 w-auto mx-1 text-gray-600 font-bold text-xs flex items-start md:text-sm lg:text-lg lg:h-8 2xl:text-xl')
    div4.setAttribute('class', 'h-auto w-[98%] mx-auto flex flex-col')
    div5.setAttribute('class','h-auto w-auto flex flex-col')
    span5.setAttribute('class', 'h-auto w-auto ml-3 p-1 text-xs md:text-sm lg:text-base')
    span6.setAttribute('class', 'h-auto w-32 mx-3 text-center text-white bg-blue-500 p-1 text-xs md:text-sm md:w-40 lg:text-base lg:w-52')
    para.setAttribute('class','text-xs text-black ml-4 my-1 md:text-lg xl:text-xl xl:ml-7')
    span7.setAttribute('class', 'h-auto w-auto ml-4 mt-2 font-semibold md:text-2xl lg:font-bold xl:ml-7')
    span7.innerHTML = 'About Product: '
    span6.innerHTML = `Hurry up Only ${inStock} Left`
    span5.innerHTML = `Category: ${category}`
    span1.innerHTML = title
    span2.innerHTML = brand
    span3.innerHTML = `$${price}`
    span4.innerHTML = `${discountPercentage}% Off`
    para.innerHTML = description
    div5.appendChild(para)
    div4.appendChild(span5)
    div4.appendChild(span6)
    div3.appendChild(span3)
    div3.appendChild(span4)
    div2.appendChild(span1)
    div2.appendChild(span2)
    div1.appendChild(div2)
    div1.appendChild(div3)
    productInfo.appendChild(div1)
    productInfo.appendChild(div4)
    productInfo.appendChild(span7)
    productInfo.appendChild(div5)


}
