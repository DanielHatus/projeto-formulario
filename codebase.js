function clicar() {
    let array = [' O Nome', 'A Data De Nascimento', 'O Email', 'A Senha', 'A Confirmação Da Senha'];
    let vetor = [];
    let nome = document.querySelector('#inpnome').value;
    let nasc = document.querySelector("#nascimento").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let csenha = document.querySelector("#confirmar-senha").value;
    let bandeira = document.querySelector("#bandeiras-estados");

    if (senha != csenha) {
        window.alert('As Senhas São Diferentes!');
    } else {
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
            let ano = nasc.slice(0, 3);
            let mes = nasc.slice(6, 6);
            let dia = nasc.slice(8, 9);
            ano = Number(ano);
            mes = Number(mes);
            dia = Number(dia);

            let mesatual = 3;
            let diaatual = 22;
            let anoatual = 2025;

            let idade = anoatual - ano;

            if (mes < mesatual || (mes == mesatual && dia <= diaatual)) {
                idade += 1;
                
            } else {
                idade += 0;
                
            }
        vetor.push(nome);
        window.alert(vetor[0])
        
        }
    }
}
