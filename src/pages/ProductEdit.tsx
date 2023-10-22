import { useParams, useNavigate } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";

export const ProductEdit = () => {
  const { id } = useParams();
  const { selectedProduct } = useProductDetails(id);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  if (!selectedProduct) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-12">
          <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600">
                Produto
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={selectedProduct.title}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="description" className="block text-gray-600">
                Descrição
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={selectedProduct.description}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="brand" className="block text-gray-600">
                Marca
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={selectedProduct.brand}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="price" className="block text-gray-600">
                Preço
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={selectedProduct.price}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="discount" className="block text-gray-600">
                Desconto %
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                value={selectedProduct.discountPercentage}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="category" className="block text-gray-600">
                Categoria
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={selectedProduct.category}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
              <label htmlFor="stock" className="block text-gray-600">
                Estoque
              </label>
              <input
                type="text"
                id="stock"
                name="stock"
                value={selectedProduct.stock}
                className="w-1/2 px-4 py-2 border rounded"
                readOnly
              />
            </div>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
