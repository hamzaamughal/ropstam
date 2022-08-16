import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Space, Table, Tag, message } from 'antd';
import axios from 'axios'
import Header from '../components/Header';
import CategoryTable from '../components/CategoryTable';



const Home = () => {

  const [registerCars, setRegisterCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalCars, setTotalCars] = useState(0)


  useEffect(() => {
    getRegisterCars()
  }, [])

  const getRegisterCars = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('http://localhost:5000/api/car');
      setTotalCars(data.data.length)
      setRegisterCars(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Registration Number',
      dataIndex: 'registrationNumber',
      key: 'registrationNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => deleteCar(record.key)}>Delete</Button>
        </Space>
      ),
    }
  ];

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/car/${id}`)
      message.success('Car deleted successfully')
      getRegisterCars()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Total Number of Registered Cars {totalCars}</h1>
          </Col>
        </Row>
        <h1>Registered Cars Table</h1>
        <Row>
          <Col>
            <Table
              columns={columns}
              dataSource={
                registerCars.map(car => {
                  return {
                    key: car._id,
                    color: car.color,
                    model: car.model,
                    registrationNumber: car.registrationNumber
                  }
                }
                )
              }
            />
          </Col>
        </Row>
        <CategoryTable />
      </Container>
    </>
  )
}

export default Home