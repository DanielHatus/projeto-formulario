// Função que atualiza a bandeira com base no estado selecionado
function atualizarBandeira() {
    let estado = document.querySelector('#estado').value.trim(); // Pegando o valor do select
    let bandeira = document.querySelector('#div-estado'); // Pegando a div da bandeira
    
    // Definir a bandeira com base no estado selecionado
    if (estado === 'São Paulo') {
        bandeira.style.backgroundImage = "url('imagens/sao-paulo-bandeira.jpg')";
    } else if (estado === 'Minas Gerais') {
        bandeira.style.backgroundImage = "url('imagens/minas-gerais-bandeira.webp')";
    } else if (estado === 'Rio De Janeiro') {
        bandeira.style.backgroundImage = "url('imagens/rio-de-janeiro-bandeira.webp')";
    } else {
        bandeira.style.backgroundImage = "url('imagens/bandeira-espirito-santo.webp')"; // Caso o estado não tenha bandeira configurada
    }
}

// Função que é chamada ao clicar no botão
function clicar() {
    let array = [' O Nome', 'A Data De Nascimento', 'O Email', 'A Senha', 'A Confirmação Da Senha'];
    
    // Pegando os valores dos campos dentro da função clicar
    let nome = document.querySelector('#inpnome').value;
    let nasc = document.querySelector("#nascimento").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let csenha = document.querySelector("#confirmar-senha").value;
    // Verificar se as senhas coincidem
    if (senha != csenha) {
        window.alert('As Senhas São Diferentes!');
    } else {
        // Verificar se todos os campos obrigatórios foram preenchidos
        if (nome == '') {
            window.alert(`Digite ${array[0]} Para Continuarmos`);
            return;
        } else if (nasc == '') {
            window.alert(`Digite ${array[1]} Para Continuarmos`);
            return;
        } else if (email == '') {
            window.alert(`Digite ${array[2]} Para Continuarmos`);
            return;
        } else if (senha == '') {
            window.alert(`Digite ${array[3]} Para Continuarmos`);
            return;
        } else if (csenha == '') {
            window.alert(`Digite ${array[4]} Para Continuarmos`);
            return;
        } else {
            // Calcular a idade com base na data de nascimento
            let ano = nasc.slice(0, 4);
            let mes = nasc.slice(5, 7);
            let dia = nasc.slice(8, 10);
            ano = Number(ano);
            mes = Number(mes);
            dia = Number(dia);

            let mesatual = 3;
            let diaatual = 22;
            let anoatual = 2025;
            let idade = anoatual - ano;

            if (mes > mesatual || (mes == mesatual && dia > diaatual)) {
                idade -= 1;
            }

        }
    }
}

// Chama a função de atualizar bandeira quando o estado for alterado
document.querySelector('#estado').addEventListener('change', atualizarBandeira);
