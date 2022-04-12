import FormPedro from "../components/molecules/form";
import ListPedro from "../components/molecules/list";

export default routes = [
    {
        path: '/',
        exact: true,
        title: 'form',
        component: () => <FormPedro />
    },
    {
        path: '/',
        exact: true,
        title: 'api',
        component: () => <ListPedro />
    }
]