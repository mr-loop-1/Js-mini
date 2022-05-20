class Product {
    title; imageUrl; price; description;
    some;

    constructor(t, i, p, d, e) {
      this.title = t;
      this.imageUrl = i;
      this.price = p;
      this.description = d;
      this.eee = e;
    }
}
// console.dir(new Product());

class Cart {
  item = [];
  total = 0;
  // priceEle;

  updatePrice(price) {
    this.total += price;
    this.priceEle.innerHTML = `${this.total}`;
  }

  renderCart() {
    const cartEle = document.createElement('div');
    cartEle.className = 'cart';
    
    cartEle.innerHTML =`
      <h2>${this.total}</h2>
      <button>Sample</button>
    `

    this.priceEle = cartEle.querySelector('h2');

    return cartEle;
  }
}

class renderProduct {
  //currentProduct;

  constructor(item) {
    this.currentProduct = item;
  }

  addToCart() {
    console.log('adding product...');
    console.log(this.currentProduct);

    handler.addPrice(this.currentProduct);
    
    // const cartEle = document.querySelector('cart');
    
    // updateCart(this.currentProduct.price);
  }

  render() {
    const newLi = document.createElement("li");
    newLi.className = "product-item";

    newLi.innerHTML = `
              <img src = ${this.currentProduct.imageUrl}>
              <div class = "product-item__content">
                  <h2>${this.currentProduct.title}</h2>
                  <h3>\$${this.currentProduct.price}</h3>
                  <p>${this.currentProduct.description}</p>
                  <button>Add to Cart</button>
              </div>
          `;

    const button = newLi.querySelector('button');
    button.addEventListener('click', this.addToCart.bind(this));
      
    return newLi;
  }
}

class productList {
    products = [
        new Product(
            "some1",
            "https://www.imagescanada.ca/wp-content/uploads/2018/09/Best-nature-spots-to-take-photos-in-Canada.jpg",
            12,
            'a good place'
        ),
        new Product(
            "some2",
            "https://cdn.mos.cms.futurecdn.net/aa3PRCFs7oMREc8J3JgShZ.jpg",
            20,
            "good picture",
        )
    ];

    render() {
        
        const newUl = document.createElement("ul");
        newUl.className = "product-list";

        for (const item of this.products) {
            const newItem = new renderProduct(item);
            const newLi = newItem.render();
            newUl.append(newLi);
        }

        return newUl;
    }
};

class App {
  static cart;

  render() {
    const renderElement = document.getElementById("app");

    this.cart = new Cart();
    const cartEle = this.cart.renderCart();

    const productList1 = new productList();

    renderElement.append(cartEle);
    renderElement.append(productList1.render());
  }
}

class handler {
  static cart;

  static init() {
    const newApp = new App();
    newApp.render();

    this.cart = newApp.cart;
  }

  static addPrice(product) {
    this.cart.updatePrice(product.price);
  }
}

// const newApp = new App();
// newApp.render();

handler.init()






































// class Product {
//   // title = 'DEFAULT';
//   // imageUrl;
//   // description;
//   // price;

//   constructor(title, image, desc, price) {
//     this.title = title;
//     this.imageUrl = image;
//     this.description = desc;
//     this.price = price;
//   }
// }

// const productList = {
//   products: [
//     new Product(
//       'A Pillow',
//       'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
//       'A soft pillow!',
//       19.99
//     ),
//     new Product(
//       'A Carpet',
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
//       'A carpet which you might like - or not.',
//       89.99
//     )
//   ],
//   render() {
//     const renderHook = document.getElementById('app');
//     const prodList = document.createElement('ul');
//     prodList.className = 'product-list';
//     for (const prod of this.products) {
//       const prodEl = document.createElement('li');
//       prodEl.className = 'product-item';
//       prodEl.innerHTML = `
//         <div>
//           <img src="${prod.imageUrl}" alt="${prod.title}" >
//           <div class="product-item__content">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.description}</p>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   }
// };

// productList.render();
