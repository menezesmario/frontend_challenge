const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

const req = fetch(url)
    .then(response => response.json())
    .then(jsonBody => {
        const items = jsonBody.products;

        shopProducts = () => {
            let productsContainer = document.getElementById('products');
            items.map((data) => {
                productsContainer.innerHTML+= `                
                <div class="product" key=`+data.id+` >
                    <img src="`+data.image+`" />
                    <p class="product-name">`+data.name+`</p>
                    <p class="product-description">`+data.description+`</p>
                    <p class="old-price">`+data.oldPrice+`</p>
                    <p class="price">`+data.price+`</p>
                    <p class="instalments">`+data.installments.count+` x `+data.installments.value+`</p>
                </div>
                
                `
            })
        }

        shopProducts();
        
    });

