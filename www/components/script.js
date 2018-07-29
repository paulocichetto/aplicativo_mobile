
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
        dataType: "JSON",
        success: function(data){
            alert("OLAAA");
            $.each(data.usuarios, function(i, dados){
                identificacao = dados.nm_categoria;
                alert(identificacao);
            });
    
            do{
               if(identificacao == "Pre-cliente" || identificacao == "Pré-cliente"){
                alert("Eres um pre cliente");   
                    $(location).attr("href", "precliente/precliente.html");
                    break;
               } 
               else if(identificacao=="Cliente"){
                alert("E um cliente");
                    break;
               } 
               else if(identificacao=="ADM"){
                alert("E um adm");
                    break;
                   } 
                   else if(identificacao=="Funcionário" || identificacao=="Funcionario"){
                        alert("E um funcionario");
                        break;
                   } 
                   else if(identificacao=="senha_incorreta"){
                        alert("A senha está incorreta. Tente novamente.");
                        break;
                   } 
                   else if(identificacao=="invalido"){
                       alert("Email ou senha inválidos.");
                       break;
                   }
                   else if(identificacao=="email_nao"){
                       alert("O email inserido não corresponde a uma conta. Verifique seu email e tente novamente.");
                       break;
                   }
                   else if(identificacao=="Financeiro"){
                       alert("E doFinanceiro");
                       break;
                   }
                 }
                while (identificacao == "Pre-cliente" || identificacao == "Pré-cliente" || identificacao == "Cliente" || identificacao == "ADM" || identificacao=="Funcionário" || identificacao=="Funcionario" || identificacao == "senha_incorreta" || identificacao == "invalido" || identificacao == "email_nao" || identificacao == "Financeiro");

        },
        error: function(data){
            navigator.notification.alert(data);
            alert('olaaa');
        } 
    });
  
});
// 
// //$(location).attr("href", "precliente/precliente.html");
