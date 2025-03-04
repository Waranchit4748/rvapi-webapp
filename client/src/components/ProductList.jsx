import { useState, useEffect } from "react";

function ProductList({ apiUrl }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${apiUrl}/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [apiUrl]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input placeholder="ค้นหาสินค้า" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredProducts.map((p) => (
          <li key={p._id}>{p.name} - {p.price} บาท</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;