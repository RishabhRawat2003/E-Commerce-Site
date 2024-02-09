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




// Header Functionality

const category_li = document.querySelector('.category')
const category_Icon = document.querySelector('.categoryIcon')
const category_Dropdown = document.querySelector('.dropdown')



category_li.addEventListener('click',function(e){
    e.preventDefault()
    category_li.classList.toggle('text-black')
    category_Icon.classList.toggle('fa-rotate-180')
    category_Dropdown.classList.toggle('md:top-16')
    category_Dropdown.classList.toggle('xl:top-[8vh]')
    category_Dropdown.classList.toggle('2xl:top-16')
    
})



all_Categories.then((val)=>{
    const all_Catg = val
    all_Catg.map((items)=>{
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const all_items = capitalizeFirstLetter(items)
        categories_Items(all_items)
    })
})

function categories_Items(items){
    const span = document.createElement('span')
    span.innerHTML = items 
    span.setAttribute('class','text-white cursor-pointer font-semibold hover:text-black hover:underline underline-offset-2')
    category_Dropdown.appendChild(span)
}



//body Functionality
const thumbnail_Div = document.querySelector('.thumbnail')


all_Products.then((item)=>{
    const all_item_product = item.products
    all_item_product.map((items)=>{
        //console.log(items.thumbnail)
    })
})


const slides = document.querySelector('.slides');
const bulletTracer = document.querySelector('.bullet-tracer');
const images = document.querySelectorAll('.thumbnail img');

let index = 0;

images.forEach((_, i) => {
  const bullet = document.createElement('div');
  bullet.setAttribute('class','bullet w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
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
      bullet.setAttribute('class' ,'bullet w-2 h-2 bg-gray-700 rounded-full cursor-pointer mx-1')
    } else {
      bullet.setAttribute('class' ,'bullet w-2 h-2 bg-white rounded-full cursor-pointer mx-1')
    }
  });
}

// Automatic slideshow
function nextSlide() {
  index++;
  if (index === images.length) index = 0;
  updateSlider();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
