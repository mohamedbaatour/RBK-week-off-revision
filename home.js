$(".logo").click(function () {
  window.location.href = "home.html";
});

var cars = [
  {
    name: "M5 Sedan",
    description:
      "The 2025 BMW M5 Sedan is powered by a 4.4L twin-turbo V8, producing 617 horsepower. It goes from 0-60 mph in just 3.1 seconds, blending power with luxury and advanced tech.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m5-limousine-light-2024-flyout.png?imwidth=1440",
    price: 104000,
    category: "Sedan",
  },
  {
    name: "M5 Touring",
    description:
      "The 2025 BMW M5 Touring features a 4.4L twin-turbo V8, generating 617 horsepower. With exceptional performance and versatile cargo space, it offers the perfect balance of power.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m5-touring-flyout.png?imwidth=1440",
    price: 111000,
    category: "Touring",
  },
  {
    name: "M4 Coupé",
    description:
      "The 2025 BMW M4 Coupe delivers 473 horsepower from its 3.0L twin-turbo inline-6 engine, combining dynamic performance with a sleek, aggressive design.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m4-coupe-lci-flyout1.png?imwidth=1440",
    price: 74000,
    category: "M4",
  },
  {
    name: "M4 CS",
    description:
      "The 2025 BMW M4 CS features a 3.0L twin-turbo inline-6, producing 543 horsepower. With enhanced performance and track-ready features, it's built for precision and speed.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m4-cs-flyout.png?imwidth=1440",
    price: 96000,
    category: "M4",
  },
  {
    name: "M3 Sedan",
    description:
      "The 2025 BMW M3 Sedan is powered by a 3.0L twin-turbo inline-6, delivering 473 horsepower. It combines exhilarating performance with refined luxury, offering an unmatched driving experience.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m3-competition-sedan-m-xdrive-lci-flyout.png?imwidth=1440",
    price: 72000,
    category: "M3",
  },
  {
    name: "M3 Touring",
    description:
      "The 2025 BMW M3 Touring features a 3.0L twin-turbo inline-6 with 503 horsepower. Combining high-performance capabilities with practical space, it's perfect for those seeking thrills and versatility.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m3-competition-touring-m-xdrive-lci-flyout.png?imwidth=1440",
    price: 75000,
    category: "M3",
  },
  {
    name: "M2",
    description:
      "The 2025 BMW M2 packs a 3.0L twin-turbo inline-6 engine producing 453 horsepower, offering agile handling and exciting performance in a compact, stylish package.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m2-lci-flyout.png?imwidth=1440",
    price: 72000,
    category: "M2",
  },
  {
    name: "XM Label Red",
    description:
      "The 2025 BMW XM Label Red features a 4.4L twin-turbo V8 paired with an electric motor, delivering a total of 738 horsepower. This high-performance SUV offering power and luxury.",
    image:
      "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/n-bmw-xm-label-red-flyout1.png?imwidth=1440",
    price: 185000,
    category: "XM",
  },
];

for (i = 0; i < cars.length; i++) {
  $(".cards").append(`<div class="card" style="animation-delay: ${i * 200}ms">
        
    <div class="card-content">
        <img class="carImg" src="${cars[i].image}">
        <div class="card-title">
        <h4 class="car-name">${cars[i].name}</h4>
             <p class="car-price">$${cars[i].price}</p>
        </div>  
        
        <p class="car-disc">${cars[i].description}</p>
   
        <div class="car-Buttons">
        <button type="button" class="car-toCart">Add To Cart</button>
    </div>
    </div>
    </div>`);
}

$(".sign").click(function () {
  window.location.href = "http://localhost:5173/";
});

$(".signup").click(function () {
  window.location.href = "http://localhost:5173/";
});

//please npm run dev to activate the sign up page. Thanks :)
