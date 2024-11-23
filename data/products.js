import {formatCurrency} from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `Ksh  ${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    // super.extraInfoHTML();
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}





export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/lapIMG/lap1.jpg",
    name: "HP G5 pro 8th Generation icore 5 touch screen 8gb ram 256SSD",
    rating: {
    stars: 4.5,
    count: 87
    },
    priceCents: 30000,
    keywords: [
    "laptop","electronics","hp","touchscreen","30000","256SDD",
    "8gb", "touchscreen","8th Generation"
    ]
    },
    {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/lapIMG/lap2.jpg",
    name: "Lenovo Ideapad 3 11th Gen iCore 7 16Gb ram 516SDD",
    rating: {
    stars: 4,
    count: 127
    },
    priceCents: 70000,
    keywords: [
    "laptop","electronics","lenovo","i7","11th Gen","16GB","516SD"
    ]
    },
    {
      "id": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      "image": "images/products/lapIMG/lap3.jpg",
      "name": "Dell Inspiron 15 5000 11th Gen iCore 5 16GB RAM 1TB SSD",
      "rating": {
          "stars": 4.5,
          "count": 56
      },
      "priceCents": 85000,
      "keywords": [
          "laptop",
          "electronics",
          "i5",
          "Dell",
          "16GB",
          "1TB SSD",
          "11th Gen",
          "icore5"
      ]
  },
  {
      "id": "54e0eccd-8f36-462b-b68a-8182611d9add",
      "image": "images/products/lapIMG/lap4.jpg",
      "name": "Acer Aspire 5 12th Gen iCore 7 8GB RAM 512GB SSD",
      "rating": {
          "stars": 5,
          "count": 2197
      },
      "priceCents": 50000,
      "keywords": [
          "laptop",
          "electronics",
          "acer",
          "i7",
          "8GB",
          "512GB SSD"
      ]
  },
  {
      "id": "3ebe75dc-64d2-4137-8860-1f5a963e534b",
      "image": "images/products/lapIMG/lap5.jpg",
      "name": "Asus VivoBook 15 11th Gen iCore 5 16GB RAM 256GB SSD",
      "rating": {
          "stars": 4,
          "count": 37
      },
      "priceCents": 60000,
      "keywords": [
          "laptop",
          "electronics",
          "asus",
          "i5",
          "16GB",
          "256GB SSD"
      ]
  },
  {
      "id": "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      "image": "images/products/lapIMG/lap6.jpg",
      "name": "MSI Katana GF76 12th Gen iCore 7 32GB RAM 1TB SSD",
      "rating": {
          "stars": 4.5,
          "count": 175
      },
      "priceCents": 95000,
      "keywords": [
          "laptop",
          "electronics",
          "msi",
          "i7",
          "32GB",
          "1TB SSD"
      ]
  },
  {
      "id": "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      "image": "images/products/lapIMG/lap7.jpg",
      "name": "Gigabyte G5 11th Gen iCore 5 8GB RAM 128GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 317
      },
      "priceCents": 25000,
      "keywords": [
          "laptop",
          "electronics",
          "gigabyte",
          "i5",
          "8GB",
          "128GB SSD"
      ]
  },
  {
      "id": "77919bbe-0e56-475b-adde-4f24dfed3a04",
      "image": "images/products/lapIMG/lap8.jpg",
      "name": "Razer Blade 15 11th Gen iCore 7 16GB RAM 512GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 144
      },
      "priceCents": 75000,
      "keywords": [
          "laptop",
          "electronics",
          "razer",
          "i7",
          "16GB",
          "512GB SSD"
      ]
  },
  {
      "id": "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
      "image": "images/products/lapIMG/lap9.jpg",
      "name": "Acer Swift 3 11th Gen iCore 5 16GB RAM 256GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 305
      },
      "priceCents": 60000,
      "keywords": [
          "laptop",
          "electronics",
          "acer",
          "i5",
          "16GB",
          "256GB SSD"
      ]
  },
  {
      "id": "58b4fc92-e98c-42aa-8c55-b6b79996769a",
      "image": "images/products/lapIMG/lap10.jpg",
      "name": "Asus ZenBook 14 12th Gen iCore 7 32GB RAM 1TB SSD",
      "rating": {
          "stars": 4,
          "count": 89
      },
      "priceCents": 95000,
      "keywords": [
          "laptop",
          "electronics",
          "asus",
          "i7",
          "32GB",
          "1TB SSD"
      ]
  },
  {
      "id": "5968897c-4d27-4872-89f6-5bcb052746d7",
      "image": "images/products/lapIMG/lap11.jpg",
      "name": "HP Spectre x360 11th Gen iCore 7 16GB RAM 512GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 235
      },
      "priceCents": 75000,
      "keywords": [
          "laptop",
          "electronics",
          "hp",
          "i7",
          "16GB",
          "512GB SSD"
      ]
  },
  {
      "id": "aad29d11-ea98-41ee-9285-b916638cac4a",
      "image": "images/products/lapIMG/lap12.jpg",
      "name": "Lenovo Yoga 9i 11th Gen iCore 7 32GB RAM 1TB SSD",
      "rating": {
          "stars": 4.5,
          "count": 30
      },
      "priceCents": 95000,
      "keywords": [
          "laptop",
          "electronics",
          "lenovo",
          "i7",
          "32GB",
          "1TB SSD"
      ]
  },
  {
      "id": "04701903-bc79-49c6-bc11-1af7e3651358",
      "image": "images/products/lapIMG/lap13.jpg",
      "name": "Dell XPS 13 11th Gen iCore 7 16GB RAM 512GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 562
      },
      "priceCents": 75000,
      "keywords": [
          "laptop",
          "electronics",
          "dell",
          "i7",
          "16GB",
          "512GB SSD"
      ]
  },
  {
      "id": "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
      "image": "images/products/lapIMG/lap14.jpg",
      "name": "Microsoft Surface Laptop 4 11th Gen iCore 5 8GB RAM 256GB SSD",
      "rating": {
          "stars": 4.5,
          "count": 232
      },
      "priceCents": 50000,
      "keywords": [
          "laptop",
          "electronics",
          "microsoft",
          "i5",
          "8GB",
          "256GB SSD"
      ]
  },
  {
      "id": "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
      "image": "images/products/lapIMG/lap15.jpg",
      "name": "Alienware x15 R1 11th Gen iCore 7 32GB RAM 1TB SSD",
      "rating": {
          "stars": 4,
          "count": 160
      },
      "priceCents": 95000,
      "keywords": [
          "laptop",
          "electronics",
          "alienware",
          "i7",
          "32GB",
          "1TB SSD"
      ]
  },
  {
      "id": "c2a82c5e-aff4-435f-9975-517cfaba2ece",
      "image": "images/products/lapIMG/lap16.jpg",
      "name": "Acer Predator Helios 300 11th Gen iCore 7 16GB RAM 512GB SSD",
      "rating": {
          "stars": 5,
          "count": 846
      },
      "priceCents": 80000,
      "keywords": [
          "laptop",
          "electronics",
          "acer",
          "i7",
          "16GB",
          "512GB SSD"
      ]
  },
  {
      "id": "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
      "image": "images/products/lapIMG/lap17.jpg",
      "name": "Asus ROG Zephyrus G14 11th Gen iCore 7 32GB RAM 1TB SSD",
      "rating": {
          "stars": 4,
          "count": 99
      },
      "priceCents": 95000,
      "keywords": [
          "laptop",
          "electronics",
          "asus",
          "i7",
          "32GB",
          "1TB SSD"
      ]
  },
  {
    "id": "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    "image": "images/products/lapIMG/lap18.jpg",
    "name": "HP Pavilion 15 11th Gen iCore 5 16GB RAM 512GB SSD Touchscreen",
    "rating": {
        "stars": 4,
        "count": 215
    },
    "priceCents": 65000,
    "keywords": [
        "laptop",
        "electronics",
        "hp",
        "i5",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "e4f64a65-1377-42bc-89a5-e572d19252e2",
    "image": "images/products/lapIMG/lap19.jpg",
    "name": "Dell XPS 13 12th Gen iCore 7 16GB RAM 512GB SSD",
    "rating": {
        "stars": 4.5,
        "count": 52
    },
    "priceCents": 75000,
    "keywords": [
        "laptop",
        "electronics",
        "dell",
        "i7",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    "image": "images/products/lapIMG/lap20.jpg",
    "name": "Lenovo ThinkPad X1 Carbon 11th Gen iCore 5 16GB RAM 256GB SSD",
    "rating": {
        "stars": 4.5,
        "count": 2465
    },
    "priceCents": 60000,
    "keywords": [
        "laptop",
        "electronics",
        "lenovo",
        "i5",
        "16GB",
        "256GB SSD"
    ]
},
{
    "id": "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    "image": "images/products/lapIMG/lap21.webp",
    "name": "Asus ZenBook 14 11th Gen iCore 7 16GB RAM 512GB SSD Touchscreen",
    "rating": {
        "stars": 4.5,
        "count": 119
    },
    "priceCents": 72000,
    "keywords": [
        "laptop",
        "electronics",
        "asus",
        "i7",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    "image": "images/products/lapIMG/lap22.webp",
    "name": "Acer Swift 3 11th Gen iCore 5 8GB RAM 256GB SSD",
    "rating": {
        "stars": 4,
        "count": 326
    },
    "priceCents": 50000,
    "keywords": [
        "laptop",
        "electronics",
        "acer",
        "i5",
        "8GB",
        "256GB SSD"
    ]
},
{
    "id": "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    "image": "images/products/lapIMG/lap23.webp",
    "name": "MSI GF65 Thin 11th Gen iCore 7 16GB RAM 512GB SSD",
    "rating": {
        "stars": 4.5,
        "count": 2556
    },
    "priceCents": 75000,
    "keywords": [
        "laptop",
        "electronics",
        "msi",
        "i7",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    "image": "images/products/lapIMG/lap24.webp",
    "name": "Razer Blade Stealth 13 11th Gen iCore 7 32GB RAM 1TB SSD",
    "rating": {
        "stars": 4.5,
        "count": 2286
    },
    "priceCents": 95000,
    "keywords": [
        "laptop",
        "electronics",
        "razer",
        "i7",
        "32GB",
        "1TB SSD"
    ]
},
{
    "id": "19c6a64a-5463-4d45-9af8-e41140a4100c",
    "image": "images/products/lapIMG/lap25.webp",
    "name": "Gigabyte AORUS 15G 11th Gen iCore 5 16GB RAM 512GB HDD",
    "rating": {
        "stars": 4,
        "count": 456
    },
    "priceCents": 65000,
    "keywords": [
        "laptop",
        "electronics",
        "gigabyte",
        "i5",
        "16GB",
        "512GB HDD"
    ]
},
{
    "id": "d2785924-743d-49b3-8f03-ec258e640503",
    "image": "images/products/lapIMG/lap26.webp",
    "name": "HP Envy x360 11th Gen iCore 7 16GB RAM 512GB SSD Touchscreen",
    "rating": {
        "stars": 5,
        "count": 83
    },
    "priceCents": 80000,
    "keywords": [
        "laptop",
        "electronics",
        "hp",
        "i7",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    "image": "images/products/lapIMG/lap27.webp",
    "name": "Lenovo Legion 5 11th Gen iCore 5 8GB RAM 256GB SSD",
    "rating": {
        "stars": 4.5,
        "count": 9017
    },
    "priceCents": 50000,
    "keywords": [
        "laptop",
        "electronics",
        "lenovo",
        "i5",
        "8GB",
        "256GB SSD"
    ]
},
{
    "id": "1c079479-8586-494f-ab53-219325432536",
    "image": "images/products/lapIMG/lap28.webp",
    "name": "Dell G5 15 11th Gen iCore 7 16GB RAM 1TB HDD",
    "rating": {
        "stars": 4,
        "count": 229
    },
    "priceCents": 70000,
    "keywords": [
        "laptop",
        "electronics",
        "dell",
        "i7",
        "16GB",
        "1TB HDD"
    ]
},
{
    "id": "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    "image": "images/products/lapIMG/lap29.webp",
    "name": "Acer Predator Helios 300 11th Gen iCore 5 16GB RAM 512GB SSD",
    "rating": {
        "stars": 3.5,
        "count": 42
    },
    "priceCents": 60000,
    "keywords": [
        "laptop",
        "electronics",
        "acer",
        "i5",
        "16GB",
        "512GB SSD"
    ]
},
{
    "id": "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    "image": "images/products/lapIMG/lap30.webp",
    "name": "Asus ROG Zephyrus G14 11th Gen iCore 7 32GB RAM 1TB SSD",
    "rating": {
        "stars": 4.5,
        "count": 511
    },
    "priceCents": 95000,
    "keywords": [
        "laptop",
        "electronics",
        "asus",
        "i7",
        "32GB",
        "1TB SSD"
    ]
}
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
  return new Product(productDetails);
});
