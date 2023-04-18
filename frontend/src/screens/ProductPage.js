import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { getProductDetails } from '../actions/getProductDetails';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { productDetails, isLoading, error } = useSelector(
    (store) => store.productDetails
  );

  // const [product, setProduct] = useState({});

  // const product = products.find((product) => product._id === params.productid);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await axios.get(`/api/products/${params.productid}`);
  //     setProduct(res.data);
  //   };

  //   fetchProduct();
  // });

  useEffect(() => {
    dispatch(getProductDetails(params.productid));
  }, [dispatch, params.productid]);

  const product = productDetails;

  const productDetailComponent = (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              rating={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='d-grid'>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );

  return (
    <>
      <Button as={Link} to='/' variant='Link'>
        Go Back
      </Button>
      {isLoading && error === null && <Loader />}
      {error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        productDetailComponent
      )}
    </>
  );
}

export default ProductPage;
