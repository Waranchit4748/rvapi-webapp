import { ProductProvider } from "./components/ProductContext";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <ProductProvider>
      <div>
        <h1>ร้านค้าสินค้าออนไลน์</h1>
        <AddProduct />
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;