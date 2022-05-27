import React, { useEffect, useState } from 'react'

import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { apiCodeBurgue } from '../../../services/api'
import { formatCurrency } from '../../../utils/formatCurrency'
import { Container, EditIconStyled, Img } from './styled'

export function ListProducts() {
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    const { data } = await apiCodeBurgue.get('products')

    setProducts(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Peoduto em Oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell>Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align="center">
                  {product.offer ? (
                    <CheckBoxRoundedIcon color="success" />
                  ) : (
                    <CancelPresentationRoundedIcon sx={{ color: 'red' }} />
                  )}
                </TableCell>
                <TableCell align="center">
                  <Img src={product.url} alt="imagem-produto" />
                </TableCell>
                <TableCell>
                  <EditIconStyled />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
