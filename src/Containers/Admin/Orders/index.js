import React, { useEffect, useState } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { apiCodeBurgue } from '../../../services/api'
import { formatDate } from '../../../utils/formatDate'
import { status } from './order-status'
import { Row } from './row'
import { Container, LinkMenu, Menu } from './styles'

export function Orders() {
  const [orders, setOrders] = useState([])
  const [filterOrders, setFilterOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  async function loadCategories() {
    const { data } = await apiCodeBurgue.get('orders')

    setOrders(data)
    setFilterOrders(data)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filterOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilterOrders(newFilteredOrders)
    }
  }, [orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status?.map(status => (
          <LinkMenu
            key={status.id}
            onClick={() => handleStatus(status)}
            isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
