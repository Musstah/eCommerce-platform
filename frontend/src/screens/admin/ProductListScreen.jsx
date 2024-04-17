import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGeProductsQuery,
  useGetProductsQuery,
} from "../../slices/productsApiSlice";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Row className="align-items-center"></Row>
    </>
  );
};

export default ProductListScreen;
