function validarFormulario(){

    const nome = document.getElementById('nome_maquinista').value.trim();
    console.log(nome);

    const cpf = document.getElementById('cpf_maquinista').value.trim();
    console.log(cpf);

    const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
    console.log(idade); 

    const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);
    console.log(experiencia); 

}

if(!nome){
    alert('por favor, preencha o nome.');
    return ;
}else{
    console.log(nome);


}
if(!cpf || cpf.length !== 11 || isNaN(cpf)){
    alert('por favor, insira um CPF válido');
    return
}else{
    console.log(cpf);

}
if(isNaN(idade) || idade <30){
    alert(' A idade deve ser um número maior que trinta');
    return
}else{
    console.log(idade);
}

if(isNaN(experiencia) || experiencia < 3 ){
    alert('Os anos de experiencia de ser maior que tres ou igual');
    return;
}else{
    console.log(experiencia);
}
a