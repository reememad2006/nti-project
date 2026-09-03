

    // 1. تحديد العناصر من الصفحة
    let cartSidebar = document.getElementById('cart-sidebar');
    let cartOverlay = document.getElementById('cart-overlay');
    let openCartBtn = document.getElementById('open-cart-btn');
    let closeCartBtn = document.getElementById('close-cart-btn');
    let cartItemsContainer = document.getElementById('cart-items');
    //////////////////////////////cart-btn//////////////////////
    let addToCartButtons = document.querySelectorAll('#products-parent .products-child .add-to .cart');
    let cartArray = JSON.parse(localStorage.getItem('myCart')) || [];


   /////////////////////////////-----------------------------///////////////////////////////

  function updateTotal() {
        let total = 0;
        
        cartArray.forEach(product => {

            let priceNoDollar = product.price.replace('$', '');
            
        
            let cleanPrice = priceNoDollar.replace(',', '');
            
            
            total += Number(cleanPrice);
        });

        
        let totalElement = document.getElementById('cart-total');
       
        totalElement.innerText = '$' + total;
    }
    
    /////////////////////////////----------------------------//////////////////////////////

    function reloadCart() {
        cartItemsContainer.innerHTML = '';

        cartArray.forEach((product, index) => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="cart-item-details">
                    <h4>${product.title}</h4>
                    <p>${product.price}</p>
                </div>
                <button class="remove-item"><i class="fa-solid fa-trash"></i></button>
            `;

            //////////////--delete--////////////////////////////
            let removeBtn = cartItem.querySelector('.remove-item');
            removeBtn.addEventListener('click', () => {
                cartArray.splice(index, 1); 
                localStorage.setItem('myCart', JSON.stringify(cartArray)); 
                reloadCart(); 
            });

            cartItemsContainer.appendChild(cartItem);
        });

        ///////////total-function////////////////////
        updateTotal();
    }

    reloadCart();

    // =========================////
    function openCart() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('show');
    }
   ///--------------------------------///
    function closeCart() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('show');
    }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);


    // ==========================================
    
    addToCartButtons.forEach(button => {

        button.addEventListener('click', () => {
            
            
            let productCard = button.closest('.products-child');

            let productTitle = productCard.querySelector('h3').innerText;
            let productImage = productCard.querySelector('.image1').src;
            
            
            let priceText = productCard.querySelector('p').innerText;
            let productPrice = priceText.split(' ')[0]; 

            
            addItemToCart(productTitle, productPrice, productImage);
            
            openCart();
        });
    });

  
    function addItemToCart(title, price, image) {
        let newItem = {
            title: title,
            price: price,
            image: image
        };

        cartArray.push(newItem); 
        localStorage.setItem('myCart', JSON.stringify(cartArray)); 
        
        reloadCart(); 
    }
