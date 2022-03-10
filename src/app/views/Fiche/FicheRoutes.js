import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const Fiche = Loadable(lazy(() => import('./Fiche')))

const FicheRoutes = [
    {
        path: '/Fiche',
        element: <Fiche />,
        auth: authRoles.admin,
    },
]

export default FicheRoutes
