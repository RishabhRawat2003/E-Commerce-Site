const allProducts = async () => {

  const response = await fetch('https://dummyjson.com/products?limit=100')
  const result = await response.json()
  return result

}

const singleProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const result = await response.json()
  return result
}

const searchProducts = async (search) => {

  const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
  const result = await response.json()
  return result
}

const allProductsCategories = async () => {

  const response = await fetch('https://dummyjson.com/products/categories')
  const result = await response.json()
  return result
}

const productsOfCategories = async (category) => {

  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const result = await response.json()
  return result
}


let all_Products = allProducts()

let single_Product = singleProductById()
//console.log(single_Product)

let search_products = searchProducts('tops')
//console.log(search_products)

let all_Categories = allProductsCategories()
console.log(all_Categories)

let products_Categories = productsOfCategories('sunglasses')
console.log(products_Categories)




// Header Functionality

const category_li = document.querySelector('.category')
const category_Icon = document.querySelector('.categoryIcon')
const category_Dropdown = document.querySelector('.dropdown')
const icon = document.querySelector('.icon')
const sidebar = document.querySelector('.sidebar')



icon.addEventListener('click', function (e) {
  e.preventDefault()
  if (icon.classList.contains('fa-bars')) {
    icon.classList.toggle('fa-xmark')
    sidebar.classList.toggle('hidden')
  }
})

category_li.addEventListener('click', function (e) {
  e.preventDefault()
  category_li.classList.toggle('text-black')
  category_Icon.classList.toggle('fa-rotate-180')
  category_Dropdown.classList.toggle('md:top-16')
  category_Dropdown.classList.toggle('xl:top-[8vh]')
  category_Dropdown.classList.toggle('2xl:top-16')

})



all_Categories.then((val) => {
  const all_Catg = val
  all_Catg.map((items) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const all_items = capitalizeFirstLetter(items)
    categories_Items(all_items)
  })
})

function categories_Items(items) {
  const span = document.createElement('span')
  span.innerHTML = items
  span.setAttribute('class', 'text-white select-none cursor-pointer font-semibold hover:text-black hover:underline underline-offset-2')
  category_Dropdown.appendChild(span)
}



//body Functionality

function autoSliderSmallDevices() {
  const slides = document.querySelector('.slides');
  const bulletTracer = document.querySelector('.bullet-tracer');
  const images = document.querySelectorAll('.slides img');


  let index = 0;

  images.forEach((_, i) => {
    const bullet = document.createElement('div');
    bullet.setAttribute('class', 'bullet w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
    bulletTracer.appendChild(bullet);
    bullet.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
  });


  function updateSlider() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, i) => {
      if (i === index) {
        bullet.setAttribute('class', 'bullet w-2 h-2 bg-gray-700 rounded-full cursor-pointer mx-1')
      } else {
        bullet.setAttribute('class', 'bullet w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
      }
    });
  }

  function nextSlide() {
    index++;
    if (index === images.length) index = 0;
    updateSlider();
  }

  setInterval(nextSlide, 3000);

}

function autoSliderMediumDevices() {
  const slides2 = document.querySelector('.slides2');
  const bulletTracer2 = document.querySelector('.bullet-tracer2');
  const images2 = document.querySelectorAll('.slides2 img');


  let index1 = 0;

  images2.forEach((_, i) => {
    const bullet2 = document.createElement('div');
    bullet2.setAttribute('class', 'bullet2 w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
    bulletTracer2.appendChild(bullet2);
    bullet2.addEventListener('click', () => {
      index1 = i;
      updateSlider2();
    });
  });


  function updateSlider2() {
    slides2.style.transform = `translateX(${-index1 * 100}%)`;
    const bullets = document.querySelectorAll('.bullet2');
    bullets.forEach((bullet, i) => {
      if (i === index1) {
        bullet.setAttribute('class', 'bullet2 w-2 h-2 bg-gray-700 rounded-full cursor-pointer mx-1')
      } else {
        bullet.setAttribute('class', 'bullet2 w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
      }
    });
  }

  function nextSlide2() {
    index1++;
    if (index1 === images2.length) index1 = 0;
    updateSlider2();
  }

  setInterval(nextSlide2, 3000);

}

autoSliderSmallDevices()
autoSliderMediumDevices() 



//All Products Slider Functionality Starts

const mainAllProducts = document.querySelector('.mainAllProducts')

all_Products.then((val)=>{
  const allProductsDetails = val.products
  const SomeProducts = allProductsDetails.slice(0,10)
  SomeProducts.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
   allProductShowcase(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

function allProductShowcase(id,price,discountPercentage,brand,categoryOfProduct,image){
  const div = document.createElement('div') //main div
  const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
  const div3 = document.createElement('div') //This div is for price and discount only
  const img = document.createElement('img') //img of product
  const p = document.createElement('p') //brand name
  const span = document.createElement('span') //category of product
  const span2 = document.createElement('span')//price
  const span3 = document.createElement('span')//discount

  div.setAttribute('class','group h-52 p-1 min-w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[15vw]')
  div.id = id
  img.setAttribute('class','h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
  p.setAttribute('class','w-auto text-lg font-bold text-black')
  div2.setAttribute('class','h-auto w-auto flex justify-center items-center')
  span.setAttribute('class','text-sm font-semibold text-gray-700')
  span2.setAttribute('class','text-lg mx-2 font-bold text-black ')
  span3.setAttribute('class','text-sm mx-1 font-semibold text-gray-700 line-through')
  div3.setAttribute('class','h-auto w-auto')
  img.src = image
  p.innerHTML = brand
  span.innerHTML = categoryOfProduct
  span2.innerHTML += `$` + price
  span3.innerHTML += `$` + discountPercentage
  div3.appendChild(span2)
  div3.appendChild(span3)
  //div2.appendChild(span)
  //div2.appendChild(div3)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(div2)
  div.appendChild(div3)
  mainAllProducts.appendChild(div)
}


const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')

leftArrow.addEventListener('click',function(e){
  e.preventDefault()
  mainAllProducts.scrollLeft -=380
})

rightArrow.addEventListener('click',function(e){
  e.preventDefault()
  mainAllProducts.scrollLeft +=380
})

//All Products Slider Functionality Ends


//Shoes Products Slider Functionality Starts

const shoesProducts = document.querySelector('.allShoesProducts')
let searchShoesProducts = searchProducts('shoes')

searchShoesProducts.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allShoesProducts(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})


function allShoesProducts(id,price,discountPercentage,brand,categoryOfProduct,image){
  const div = document.createElement('div') //main div
  const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
  const div3 = document.createElement('div') //This div is for price and discount only
  const img = document.createElement('img') //img of product
  const p = document.createElement('p') //brand name
  const span = document.createElement('span') //category of product
  const span2 = document.createElement('span')//price
  const span3 = document.createElement('span')//discount

  div.setAttribute('class','group h-52 p-1 min-w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[15vw]')
  div.id = id
  img.setAttribute('class','h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
  p.setAttribute('class','w-auto text-lg font-bold text-black')
  div2.setAttribute('class','h-auto w-auto flex justify-center items-center')
  span.setAttribute('class','text-sm font-semibold text-gray-700')
  span2.setAttribute('class','text-lg mx-2 font-bold text-black ')
  span3.setAttribute('class','text-sm mx-1 font-semibold text-gray-700 line-through')
  div3.setAttribute('class','h-auto w-auto')
  img.src = image
  p.innerHTML = brand
  span.innerHTML = categoryOfProduct
  span2.innerHTML += `$` + price
  span3.innerHTML += `$` + discountPercentage
  div3.appendChild(span2)
  div3.appendChild(span3)
  //div2.appendChild(span)
  //div2.appendChild(div3)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(div2)
  div.appendChild(div3)
  shoesProducts.appendChild(div)
}

const leftArrow1 = document.querySelector('.leftArrow1')
const rightArrow1 = document.querySelector('.rightArrow1')


leftArrow1.addEventListener('click',function(e){
  e.preventDefault()
  shoesProducts.scrollLeft -=380
})

rightArrow1.addEventListener('click',function(e){
  e.preventDefault()
  shoesProducts.scrollLeft +=380
})

//Shoes Products Slider Functionality Ends



//Watches Products Slider Functionality Starts

const watchesProducts = document.querySelector('.allWatchesProducts')
let mens_watches = productsOfCategories('mens-watches')
let womens_watches = productsOfCategories('womens-watches')


mens_watches.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allWatchesProducts(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

womens_watches.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allWatchesProducts(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

function allWatchesProducts(id,price,discountPercentage,brand,categoryOfProduct,image){
  const div = document.createElement('div') //main div
  const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
  const div3 = document.createElement('div') //This div is for price and discount only
  const img = document.createElement('img') //img of product
  const p = document.createElement('p') //brand name
  const span = document.createElement('span') //category of product
  const span2 = document.createElement('span')//price
  const span3 = document.createElement('span')//discount

  div.setAttribute('class','group h-52 p-1 min-w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[15vw]')
  div.id = id
  img.setAttribute('class','h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
  p.setAttribute('class','w-auto text-lg font-bold text-black')
  div2.setAttribute('class','h-auto w-auto flex justify-center items-center')
  span.setAttribute('class','text-sm font-semibold text-gray-700')
  span2.setAttribute('class','text-lg mx-2 font-bold text-black ')
  span3.setAttribute('class','text-sm mx-1 font-semibold text-gray-700 line-through')
  div3.setAttribute('class','h-auto w-auto')
  img.src = image
  p.innerHTML = brand
  span.innerHTML = categoryOfProduct
  span2.innerHTML += `$` + price
  span3.innerHTML += `$` + discountPercentage
  div3.appendChild(span2)
  div3.appendChild(span3)
  //div2.appendChild(span)
  //div2.appendChild(div3)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(div2)
  div.appendChild(div3)
  watchesProducts.appendChild(div)
}

const leftArrow2 = document.querySelector('.leftArrow2')
const rightArrow2 = document.querySelector('.rightArrow2')


leftArrow2.addEventListener('click',function(e){
  e.preventDefault()
  watchesProducts.scrollLeft -=380
})

rightArrow2.addEventListener('click',function(e){
  e.preventDefault()
  watchesProducts.scrollLeft +=380
})

//Watches Products Slider Functionality Ends


//All Men's Accessories Products Slider Functionality Starts

const mensAccessories = document.querySelector('.allMenAccessories')
let mens_Shirt = productsOfCategories('mens-shirts')
let mens_fragrence = productsOfCategories('fragrances')


mens_Shirt.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allMensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

mens_fragrence.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allMensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

function allMensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image){
  const div = document.createElement('div') //main div
  const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
  const div3 = document.createElement('div') //This div is for price and discount only
  const img = document.createElement('img') //img of product
  const p = document.createElement('p') //brand name
  const span = document.createElement('span') //category of product
  const span2 = document.createElement('span')//price
  const span3 = document.createElement('span')//discount

  div.setAttribute('class','group h-52 p-1 min-w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[15vw]')
  div.id = id
  img.setAttribute('class','h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
  p.setAttribute('class','w-auto text-lg font-bold text-black')
  div2.setAttribute('class','h-auto w-auto flex justify-center items-center')
  span.setAttribute('class','text-sm font-semibold text-gray-700')
  span2.setAttribute('class','text-lg mx-2 font-bold text-black ')
  span3.setAttribute('class','text-sm mx-1 font-semibold text-gray-700 line-through')
  div3.setAttribute('class','h-auto w-auto')
  img.src = image
  p.innerHTML = brand
  span.innerHTML = categoryOfProduct
  span2.innerHTML += `$` + price
  span3.innerHTML += `$` + discountPercentage
  div3.appendChild(span2)
  div3.appendChild(span3)
  //div2.appendChild(span)
  //div2.appendChild(div3)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(div2)
  div.appendChild(div3)
  mensAccessories.appendChild(div)
}

const leftArrow3 = document.querySelector('.leftArrow3')
const rightArrow3 = document.querySelector('.rightArrow3')


leftArrow3.addEventListener('click',function(e){
  e.preventDefault()
  mensAccessories.scrollLeft -=380
})

rightArrow3.addEventListener('click',function(e){
  e.preventDefault()
  mensAccessories.scrollLeft +=380
})

//All Men's Accessories Products Slider Functionality Ends


//All Women's Accessories Products Slider Functionality Starts

const womensAccessories = document.querySelector('.allWomenAccessories')
let women_dresses = productsOfCategories('womens-dresses')
let womens_tops = productsOfCategories('tops')
let women_bags = productsOfCategories('womens-bags')



women_dresses.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allWomensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

womens_tops.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allWomensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

women_bags.then((val)=>{
  const allProductsDetails = val.products
  allProductsDetails.map((items)=>{
    //console.log(items)
    const id = items.id
    const price = items.price
    const discountPercentage = items.discountPercentage
    const brand = items.brand
    const categoryOfProduct = items.category 
    const image = items.thumbnail
    allWomensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image)
  })
})

function allWomensAccessories(id,price,discountPercentage,brand,categoryOfProduct,image){
  const div = document.createElement('div') //main div
  const div2 = document.createElement('div') //In this div brand and price and discount will be shown 
  const div3 = document.createElement('div') //This div is for price and discount only
  const img = document.createElement('img') //img of product
  const p = document.createElement('p') //brand name
  const span = document.createElement('span') //category of product
  const span2 = document.createElement('span')//price
  const span3 = document.createElement('span')//discount

  div.setAttribute('class','group h-52 p-1 min-w-[40vw] flex flex-col justify-center items-center border-2 border-gray-400 lg:hover:bg-slate-200 hover:cursor-pointer overflow-hidden sm:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[15vw]')
  div.id = id
  img.setAttribute('class','h-32 w-full object-contain lg:group-hover:scale-105 hover:object-contain duration-200')
  p.setAttribute('class','w-auto text-lg font-bold text-black')
  div2.setAttribute('class','h-auto w-auto flex justify-center items-center')
  span.setAttribute('class','text-sm font-semibold text-gray-700')
  span2.setAttribute('class','text-lg mx-2 font-bold text-black ')
  span3.setAttribute('class','text-sm mx-1 font-semibold text-gray-700 line-through')
  div3.setAttribute('class','h-auto w-auto')
  img.src = image
  p.innerHTML = brand
  span.innerHTML = categoryOfProduct
  span2.innerHTML += `$` + price
  span3.innerHTML += `$` + discountPercentage
  div3.appendChild(span2)
  div3.appendChild(span3)
  //div2.appendChild(span)
  //div2.appendChild(div3)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(span)
  div.appendChild(div2)
  div.appendChild(div3)
  womensAccessories.appendChild(div)
}

const leftArrow4 = document.querySelector('.leftArrow4')
const rightArrow4 = document.querySelector('.rightArrow4')


leftArrow4.addEventListener('click',function(e){
  e.preventDefault()
  womensAccessories.scrollLeft -=380
})

rightArrow4.addEventListener('click',function(e){
  e.preventDefault()
  womensAccessories.scrollLeft +=380
})

//Watches Products Slider Functionality Ends

