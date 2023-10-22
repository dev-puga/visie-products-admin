import { useProductList } from "../hooks/useProductList";

export const Home = () => {
  const { products, loading } = useProductList();

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleDeleteProduct = (productId: number) => {
    alert(productId);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md">
        {products.map((product) => (
          <li key={product.id} className="border-t border-gray-200">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {product.title}
                    </p>
                  </div>
                  <div className="mt-2 flex justify-center space-x-2">
                    <a
                      href={`/product/${product.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Ver Dados
                    </a>
                    <a
                      href={`/product/${product.id}/edit`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Alterar
                    </a>
                    <button
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
