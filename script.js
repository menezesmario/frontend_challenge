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
                    <div class="img-container">
                        <img src="`+data.image+`" />
                    </div>
                        <p class="product-name">`+data.name+`</p>
                        <p class="product-description">`+data.description+`</p>
                        <p class="old-price">De: R$`+data.oldPrice+`,00</p>
                        <p class="price">Por: R$`+data.price+`,00</p>
                        <p class="instalments">ou `+data.installments.count+` x `+data.installments.value+`0</p>
                        <button class="btn-buy">Comprar</button>
                    </div>                
                
                `
            })
        }

        shopProducts();
        
    });

