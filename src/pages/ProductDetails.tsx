import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";
import { Rating } from "../components/Rating";

export const ProductDetails = () => {
  const { id } = useParams();
  const { selectedProduct, loading } = useProductDetails(id);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!selectedProduct) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className=" lg:flex">
          <div className="">
            <img
              src={selectedProduct.images[1]}
              alt={selectedProduct.title}
              className="w-full h-full"
            />
          </div>
          <div className="p-4 lg:w-1/2">
            <h1 className="text-2xl font-bold ">{selectedProduct.title}</h1>
            <small className="text-gray-600 mr-4">
              Marca: {selectedProduct.brand}
            </small>
            <small className="text-gray-600 ">
              Categoria: {selectedProduct.category}
            </small>
            <p className="text-gray-600 mt-4 ">{selectedProduct.description}</p>
            <div className="text-gray-600 flex items-center">
              <Rating rating={selectedProduct.rating} />(
              {selectedProduct.rating})
            </div>
            <small className="text-gray-600">
              Estoque: {selectedProduct.stock} unidades
            </small>
            <div className="flex mt-4 gap-2 items-center">
              <p className="text-2xl font-bold">
                R${selectedProduct.price.toFixed(2)}
              </p>
              <p className="bg-blue-500 w-fit font-bold text-white px-2 rounded">
                {selectedProduct.discountPercentage}% OFF
              </p>
            </div>

            <div className="space-x-4 mt-12">
              <Link
                to={`/product/${id}/edit`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Alterar
              </Link>
              <button
                onClick={() => ""}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
