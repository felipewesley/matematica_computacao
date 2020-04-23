var checked = false; 

function calculaF(){
    
    let name    = prompt('Informe o nome do funcionário: '); 
    let media   = 0; 
    let soma    = 0; 
    let meses   = 12; 
    let obj; 
    let dados_json = []; 

    if((name != null) && (name != '')){

        for (let index = 0; index < meses; index++) {
            let month = ''; 
            switch (index+1) {
                case 1: month = 'janeiro'; 
                break;

                case 2: month = 'fevereiro'; 
                break;

                case 3: month = 'março'; 
                break;

                case 4: month = 'abril'; 
                break;

                case 5: month = 'maio'; 
                break;

                case 6: month = 'junho'; 
                break;

                case 7: month = 'julho'; 
                break;

                case 8: month = 'agosto'; 
                break;

                case 9: month = 'setembro'; 
                break;

                case 10: month = 'outubro'; 
                break;

                case 11: month = 'novembro'; 
                break;

                case 12: month = 'dezembro'; 
                break;
            }
            var element = prompt('Valor do mês de ' + month)
            
            if((element == null) || (element == '')){
                name = null; 
                break; 
            } else{
                element = parseInt(element); 
                soma+= element; 
                dados_json.push(element); 
            }
        }
    }
    media = soma / meses; 

    obj = ({
        "nome": name, 
        "media": media, 
        "dados_json": dados_json
    }); 

    return showList(obj,escreveForm(obj))
}

function escreveForm(data){
    let body = ''; 

    body = "<link rel='stylesheet' href='./style.css'>"; 
    
    body+= "<h1> "; 

    body+=  "<form action='./processa.php' method='POST'>"; 
    body+=      "<table class='response'> "; 
    body+=          "<tr>"; 
    body+=              "<td class='cabec'> Funcionário: </td>"; 
    body+=              "<td> <input type='text' name='nome' value='" + data.nome + "' readonly /> </td>"; 
    body+=          "</tr>"; 
    body+=          "<tr>"; 
    body+=              "<td class='cabec'> Média calculada: </td>"; 
    body+=              "<td> <input type='text' name='media' value='" + data.media + "' readonly /> </td>"; 
    body+=          "</tr>"; 
    body+=          "<tr>"; 
    body+=              "<td class='cabec'> Valores fornecidos: </td>"; 
    body+=              "<td> <textarea name='dados' readonly>" + data.dados_json + "</textarea> </td>"; 
    body+=          "</tr>"; 
    body+=          "<tr>"; 
    body+=              "<td colspan='2' align='right' class='btns'>"; 
    body+=                  "<input type='submit' value='Enviar' />"; 
    body+=                  "<small> Se os valores estiverem incorretos, recarregue esta página [F5]. </small>"; 
    body+=              "</td>"; 
    body+=          "</tr>"; 
    body+=      "</table>"; 
    body+=  "</form>"; 

    return body; 
}

function showList(objeto, form){
    if((objeto.nome != null) && (objeto.nome != '')){
        document.write(form); 
    } else{
        document.write('<h2> Undefinied data response. </h2><br><small>Reload page please (Press F5).</small>'); 
        alert('Dados indefinidos. '); 
    }
    return true; 
}
