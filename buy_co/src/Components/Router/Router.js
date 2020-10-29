import React from "react";
import {SolidPage} from "./stylesRouter";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import UsersPage from "../UsersPage/UsersPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Router(){
    return(
    <SolidPage>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home">
              <Header/>
              <UsersPage/>
              <Footer/>
            </Route>
            <Route exact path="/">
              <Header/>
              <UsersPage/>
              <Footer/>
            </Route>
            {/* <Route exact path="/home/:tipo">
              <Header/>
              <HomePage/>
              <Footer/>
            </Route>
            <Route exact path="/inscricao">
              <Header/>
              <RegistrationPage/>
              <Footer/>
            </Route>
            <Route exact path="/login/:log">
              <Header/>
              <LoginPage/>
              <Footer/>
            </Route>
            <Route exact path="/logado/viagens">
              <Header/>
              <TravelsPage/>
              <Footer/>
            </Route>
            <Route exact path="/logado/nova-viagem">
              <Header/>
              <CreateTravelPage/>
              <Footer/>
            </Route>
            <Route exact path="/logado/pagina-de-aprovacao">
              <Header/>
              <ApprovalPage/>
              <Footer/>
            </Route>
            <Route path="/">
              <Header/>
              <NotFound/>
              <Footer/>
            </Route> */}
          </Switch>
        </BrowserRouter>
      </SolidPage>
    )
}
export default Router;