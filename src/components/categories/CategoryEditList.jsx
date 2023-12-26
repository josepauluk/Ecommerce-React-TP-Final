/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Table, Row, Col, Form, InputGroup, Button, Alert} from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const getCategories = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories/');
    const json = await res.json();
  
    if (json.error) {
      throw new Error(json.error);
    }
  
    return json;
  };
  
  const deleteCategoryMutation = async (id) => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  
    return response.json();
  };

function CategoryStatus({status}) {
    console.log(status);
  
    if (status === true) {
      return (
        <Alert variant="success">
          Categoría eliminada!{' '}
          {status.message}
        </Alert>
      );
    }
  
    return <Alert variant="danger">{status.message}</Alert>;
  }

function CategoryEditList() {
    const [status, setStatus] = useState(false);
    const [search, setSearch] = useState('');

    const mutationDelete = useMutation({
      mutationFn: deleteCategoryMutation,
      onSuccess: (data) => {
        setStatus(data);
        categories.refetch();
        console.log('delete successful', data);
      },
      onError: (data) => {
        console.log(data);
        setStatus(data);
      },
    });
    const categories = useQuery({
      queryKey: ['products'],
      queryFn: getCategories,
    });
  
    if (categories.status === 'pending') {
      return  <p className="fs-1 text-center"> 
      Cargando ...
      </p>;
    }

    if (mutationDelete.status === 'pending'){
        return <p className="fs-1 text-center"> 
        Cargando ...
        </p>;
    }
  
    function handleDelete(id) {
      mutationDelete.mutate(id);
    }
  return (
    <Row className="justify-content-center">
      <p className="fs-1 text-center">
        Categorías: Editar/Eliminar
      </p>
      <Row className="justify-content-center">
      <Col className="col-lg-4">
      <Form>
          <InputGroup className="my-3" size="lg">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar categorias"
            />
          </InputGroup>
        </Form>
        </Col>
      </Row>
      {status && <CategoryStatus status={status} />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Img</th>
            <th>Nombre de la categoría</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {categories.data?.filter((category) => {
                return search.toLowerCase() === ''
                  ? category
                  : category.name.toLowerCase().includes(search);
              }).map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>
                <img src={category.image} height="75" width="75"></img>
              </td>
              <td>{category.name}</td>
              <td className="text-center">
                <Button
                  size="sm"
                  className="pt-0"
                  as={Link}
                  to={`/categories/edit/${category.id}`}
                >
                  <Pencil color="white" size={16} />
                </Button>
              </td>
              <td className="text-center">
                <Button
                  size="sm"
                  variant="danger"
                  className="pt-0"
                  onClick={() => {
                    handleDelete(category.id);
                  }}
                >
                  <Trash color="white" size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
}

export default CategoryEditList;
