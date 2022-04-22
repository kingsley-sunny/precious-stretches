const products = [
  {
    img: "img1.jpg",
    des: "A streches for a very beautiful girl",
    price: 12000,
  },
  {
    img: "img2.jpg",
    des: "A streches for a very beautiful girl",
    price: 3000,
  },
  {
    img: "img3.jpg",
    des: "A streches for a very beautiful girl",
    price: 8900,
  },
  {
    img: "img4.jpg",
    des: "A streches for a very beautiful girl",
    price: 2300,
  },
  {
    img: "img5.jpg",
    des: "A streches for a very beautiful girl",
    price: 5000,
  },
  {
    img: "img6.jpg",
    des: "A streches for a very beautiful girl",
    price: 7500,
  },
  {
    img: "img7.jpg",
    des: "A streches for a very beautiful girl",
    price: 4500,
  },
  {
    img: "img8.jpg",
    des: "A streches for a very beautiful girl",
    price: 2500,
  },
  {
    img: "img9.jpg",
    des: "A streches for a very beautiful girl",
    price: 14000,
  },
  {
    img: "img10.jpg",
    des: "A streches for a very beautiful girl",
    price: 6000,
  },
  {
    img: "img11.jpg",
    des: "A streches for a very beautiful girl",
    price: 6700,
  },
  {
    img: "img12.jpg",
    des: "A streches for a very beautiful girl",
    price: 3450,
  },
];
window.onload = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-container");
  const container = document.querySelector(".product-container");

  burger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  products.forEach((product) => {
    container.innerHTML += `
      <div class="product-item">
      <div class="product-image">
          <img src="./img/${product.img}" alt="">
      </div>
      <div class="product-description">
          <p>${product.des}</p>
          <h2>&#8358;${product.price}</h2>
          <div class="">
              <a href="tel:08121591751" class="">call us</a>
              <a href="mailto:precious@gmail.com" class="">email us</a>
          </div>
      </div>
  </div>
      `;
  });
};
