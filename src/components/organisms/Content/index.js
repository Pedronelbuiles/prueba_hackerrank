import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from "../../../context/routes"


class Content extends Component {
  render(){
    return(
        <div>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </div>
    )
  }
}

export default withRouter(Content);