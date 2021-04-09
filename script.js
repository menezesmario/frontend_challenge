const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

const req = fetch(url)
    .then(response => response.json())
    .then(jsonBody => {
        const items = jsonBody.products;

        shopProducts = () => {
            document.getElementById('products');
            items.map((data) => {
                console.log(data.name)

            })
        }

        shopProducts();
        
    });

