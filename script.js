const desktopEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuIconMobile = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const shopingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close")

desktopEmail.addEventListener("click", toggleDesktopMenu)
menuIconMobile.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu () {
    shopingCartContainer.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
    productDetail.classList.add("inactive")
}

function toggleMobileMenu () {
    shopingCartContainer.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
    productDetail.classList.add("inactive")
}

function toggleCarritoAside() {
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    shopingCartContainer.classList.toggle("inactive")
    productDetail.classList.add("inactive")
}

function openProductDetailAside() {
    productDetail.classList.remove("inactive")
    shopingCartContainer.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}

function closeProductDetailAside() {
    productDetail.classList.add("inactive")

}

const productList = []

productList.push(
    {
        name: "Bike",
        price: 12000,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Pantalla",
        price: 21000,
        image: "https://cdn1.coppel.com/images/catalog/pm/2989683-1.jpg"
    },
    {
        name: "Laptop",
        price: 15000,
        image: "https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg"
    },
    {
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    },
    {
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    },
    {
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    },
    {
        name:'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    },
    {
        name:'Tennis',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    },
    {
        name:'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    },
    {
        name:'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
    },
    {
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    }
)
function renderProducts(arr) {
    for (product of arr) {  
        //creando maquetacion de estructura de las tarjetas de productos
        const htmlCard = `<div class="product-card">
            <img class="product-image" src=${product.image} alt=${product.name}>
                <div class="product-info">
                    <div>
                    <p>$${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`

    cardsContainer.innerHTML += htmlCard
    }
    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach(image => image.addEventListener("click", openProductDetailAside ));
}



renderProducts(productList)