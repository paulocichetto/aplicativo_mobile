
var identificacao = "";

// botao de login
$(document).on("click", "#btn-login", function(){
    var parametros = {
        "email": $("#login").val(),
        "senha": $("#senha").val()
    };
    $.ajax({
        type: "post",
        url: "https://tcc-paulocichetto.c9users.io/Paulo/Login/userauthentication.php",
        data: parametros,
        dataType: "json",
        success: function(data){
            identificacao = (data);
            console.log(toString(identificacao));
                do{
                   if(identificacao == "precliente"){
                        alert("Eres um pre cliente");   
                        $(location).attr("href", "precliente/precliente.html");
                        break;
                   } 
                    else if(identificacao=="cliente"){
                       alert("E um cliente");
                        break;
                   } 
                   else if(identificacao=="adm"){
                       alert("E um adm");
                       break;
                   } 
                   else if(identificacao=="funcionario"){
                        alert("E um funcionario");
                        break;
                   } 
                   else if(identificacao=="senha_incorreta"){
                        alert("Senha Incorreta");
                        break;
                   } 
                   else if(identificacao=="invalido"){
                       alert("Invalido");
                       break;
                   }
                   else if(identificacao=="email_nao"){
                       alert("Login nao existe");
                       break;
                   }
                   else if(identificacao=="financeiro"){
                       alert("Financeiro");
                   }
                 }
                while (identificacao == "precliente" || identificacao == "cliente" || identificacao == "adm" || identificacao == "funcionario" || identificacao == "senha_incorreta" || identificacao == "invalido" || identificacao == "email_nao" || identificacao == "financeiro");

        },
        error: function(data){
            navigator.notification.alert(data);
        } 
    });
//    
// do{
//    if(identificacao == "precliente"){
//         alert("Eres um pre cliente");   
//         $(location).attr("href", "precliente/index.html");
//         break;
//    } 
//     else if(identificacao=="cliente"){
//        alert("E um cliente");
//         $(location).attr("href", "login.html")
//         break;
//    } 
//    else if(identificacao=="adm"){
//        alert("E um adm");
//        break;
//    } 
//    else if(identificacao=="funcionario"){
//         alert("E um funcionario");
//         break;
//    } 
//    else if(identificacao=="senha_incorreta"){
//         alert("Senha Incorreta");
//         break;
//    } 
//    else if(identificacao=="invalido"){
//        alert("Invalido");
//        break;
//    }
//    else if(identificacao=="email_nao"){
//        alert("Login nao existe");
//        break;
//    }
//    else if(identificacao=="financeiro"){
//        alert("Financeiro");
//    }
//  }
// while (identificacao == "precliente" || identificacao == "cliente" || identificacao == "adm" || identificacao == "funcionario" || identificacao == "senha_incorreta" || identificacao == "invalido" || identificacao == "email_nao" || identificacao == "financeiro");
   //  if(identificacao == "precliente"){
   //      alert("Eres um pre cliente");   
   //      $(location).attr("href", "precliente/index.html");
   // } 
   //  else if(identificacao=="cliente"){
   //     alert("E um cliente");78
   //      $(location).attr("href", "login.html")
   // } 
   // else if(identificacao=="adm"){
   //     alert("E um adm");
   // } 
   // else if(identificacao=="funcionario"){
   //      alert("E um funcionario");
   // } 
   // else if(identificacao=="senha_incorreta"){
   //      alert("Senha Incorreta");
   // } 
   // else if(identificacao=="invalido"){
   //     alert("Invalido");
   // }
   // else if(identificacao=="email_nao"){
   //     alert("Login nao existe");
   // }
   // else if(identificacao=="financeiro"){
   //     alert("Financeiro");
   // }
  // else {
  //      alert ("PROBLEMAS");
  //  }
  
});


