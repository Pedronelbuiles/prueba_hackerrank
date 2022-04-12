import React from 'react';

import FormPedro from "../components/molecules/form";
import ListPedro from "../components/molecules/list";

const routes = [
    {
        path: '/',
        exact: true,
        title: 'form',
        component: () => <FormPedro />
    },
    {
        path: '/api',
        exact: true,
        title: 'api',
        component: () => <ListPedro />
    }
];

export default routes