import { Link } from "react-router-dom";
import { useProductList } from "../hooks/useProductList";
import { dummyApi } from "../services/api";

export const Home = () => {
  const { products, loading } = useProductList();

  const deleteProduct = async (productId: number) => {
    try {
      const response = await dummyApi.delete(`/products/${productId}`);
      console.log(response);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.log("Erro ao deletar o produto.");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleDelete = (productId: number) => {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja excluir este produto?"
    );
    if (confirmDelete) {
      deleteProduct(productId);
    }
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
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    <Link
                      to={`/product/${product.id}`}
                      className="hover:text-white"
                    >
                      Ver Dados
                    </Link>
                  </button>
                </td>
                <td className="p-2 sm:p-4">
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    <a
                      href={`/product/${product.id}/edit`}
                      className="hover:text-white"
                    >
                      Alterar
                    </a>
                  </button>
                </td>
                <td className="p-2 sm:p-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => handleDelete(product.id)}
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
