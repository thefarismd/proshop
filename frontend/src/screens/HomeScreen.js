import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getProductItems } from '../features/async-actions/ProductsAction';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((store) => store.productList);

  const { isLoading, products, error } = productList;

  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);

  const productListComponent = (
    <Row>
      {products.map((product) => {
        return (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        );
      })}
    </Row>
  );

  return (
    <>
      <h1>Lastest Products</h1>
      {isLoading && error === null && <Loader />}
      {error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        productListComponent
      )}
    </>
  );
}

export default HomeScreen;
