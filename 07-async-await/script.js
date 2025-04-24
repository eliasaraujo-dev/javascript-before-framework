// async function fetchProducts(url) {
//     const response = await fetch(url);
//     const jsonBody = await response.json();
//     return jsonBody;
// }

fetchProducts("https://ranekapi.origamid.dev/json/api/produto");

async function fetchProducts(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody.json();
}

const require = fetchProducts(
    "https://ranekapi.origamid.dev/json/api/produto"
);
