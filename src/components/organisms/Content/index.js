import { PageSettings } from "../../../context/page-settings"
import routes from "../../../context/routes"


const Content = () => {

    return(
        <PageSettings.Consumer>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </PageSettings.Consumer>
    )
}

export default Content