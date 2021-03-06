import React from "react";
import {SolidPage} from "./stylesRouter";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import UsersPage from "../../Pages/UsersPage/UsersPage";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CreateUser from "../../Pages/CreateUser/CreateUser";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
function Router(){
    return(
    <SolidPage>
        <BrowserRouter>
          <Switch>
            <Route exact path="/users">
              <Header/>
              <UsersPage/>
              <Footer/>
            </Route>
            <Route exact path="/">
              <Header/>
              <UsersPage/>
              <Footer/>
            </Route>
             <Route exact path="/signup">
              <Header/>
              <CreateUser/>
              <Footer/>
            </Route>
            <Route path="/">
            <Header/>
            <PageNotFound/>
            <Footer/>
          </Route>
          </Switch>
        </BrowserRouter>
      </SolidPage>
    )
}
export default Router;