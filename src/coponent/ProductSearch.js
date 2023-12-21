import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import unidecode from 'unidecode'; // Import thư viện unidecode
import '../App.css';

const products = [
  { id: 1, name: 'Máy đo áp suất', category: 'Vật lý' },
  { id: 2, name: 'Dụng cụ nhiệt độ', category: 'Vật lý' },
  { id: 3, name: 'Đồng hồ đo thời gian', category: 'Vật lý' },
  // Thêm các sản phẩm khác nếu cần
];

const Header = () => (
  <header className="app-header">
    <h1>Physics Shop</h1>
  </header>
);

const Footer = () => (
  <footer className="app-footer">
    <p>&copy; 2023 Physics Shop. All rights reserved.</p>
  </footer>
);

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const normalizedSearchTerm = unidecode(searchTerm.toLowerCase()); // Chuyển đổi thành chữ không dấu
    const results = products.filter(product =>
      unidecode(product.name.toLowerCase()).includes(normalizedSearchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="app">
      <Header />
      <Container className="app-container">
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }} className="app-card">
            <h2 className="text-center mb-4">Physics Product Search</h2>
            <Form>
              <Form.Group controlId="formSearch">
                <Form.Control
                  type="text"
                  placeholder="Nhập tên sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
            </Form>
            <ListGroup>
              {searchResults.map(product => (
                <ListGroup.Item key={product.id}>{product.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductSearch;
