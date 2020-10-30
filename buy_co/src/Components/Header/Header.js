import React from "react";
import {Head, Title, TitlePoint, But} from "./stylesHeader"
import {useLocation} from "react-router-dom";
import useUrl from "../Hooks/CustomHooks";

function Header(){
    const location = useLocation();
    const [goToSignUp] = useUrl("/signup");
    const [goToUsers] = useUrl("/users");

    const renderizaBotao = ()=>{
        if(location.pathname === "/" || location.pathname === "/users"){
           return <But onClick={goToSignUp}>Criar Usuário</But>;
        }else if (location.pathname === "/signup"){
           return <But onClick={goToUsers}>Ver Usuários</But>;
        }else{
            return <span></span>;
        };
      };
    return(
         <Head>
            <Title onClick={goToUsers}>Teste BuyCo<TitlePoint>.</TitlePoint></Title>
            {renderizaBotao()}
         </Head>
    )
}
export default Header;