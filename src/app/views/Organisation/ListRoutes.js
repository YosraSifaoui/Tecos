import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const ListOrganisation = Loadable(lazy(() => import('./ListOrganisation')))

const organisationRoutes = [
    {
        path: '/organisation/List',
        element: <ListOrganisation />,
        auth: authRoles.admin,
    },
]

export default organisationRoutes
