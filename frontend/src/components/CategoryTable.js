import React, { useState, useEffect } from 'react'
import { Table, message, Button, Space } from 'antd'
import axios from 'axios'


const CategoryTable = () => {
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/category');
      setCategory(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])


  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        console.log(record, 'record'),
        <Space size="middle">
          <Button type="danger" onClick={() => deleteCategory(record.key)}>Delete</Button>
        </Space>
      ),
    }
  ]


  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/category/${id}`)
      message.success('Category deleted successfully')
      getCategory()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Category Table</h1>
      <Table columns={columns} dataSource={
        category.map(category => {
          return {
            key: category._id,
            type: category.type,
          }
        })
      } />
    </>
  )
}

export default CategoryTable