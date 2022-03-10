import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const List = Loadable(lazy(() => import('./List')))

const ListRoutes = [
    {
        path: '/operation/List',
        element: <List />,
        auth: authRoles.admin,
    },
]

export default ListRoutes
