import AddBoxIcon from '@mui/icons-material/AddBox'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constantes/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Listproducts,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Adicionar Produtos',
    link: paths.NewProducts,
    icon: AddBoxIcon
  }
]

export default listLinks
