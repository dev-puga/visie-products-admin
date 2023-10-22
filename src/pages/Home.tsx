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
      <h1 className="text-2xl text-center font-bold mb-4">Lista de Produtos</h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="text-start border-b">
            <tr>
              <th className="text-start p-2 sm:p-4">Nome do Produto</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="p-2 sm:p-4">{product.title}</td>
                <td className="p-2 sm:p-4">
                  <a
                    href={`/product/${product.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Ver Dados
                  </a>
                </td>
                <td className="p-2 sm:p-4">
                  <a
                    href={`/product/${product.id}/edit`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Alterar
                  </a>
                </td>
                <td className="p-2 sm:p-4">
                  <button
                    className="text-red-600 hover:text-red-900 cursor-pointer"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
