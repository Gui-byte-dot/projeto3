function selecionarcomida(classeBotao){
    const botaoSelecionado = document.querySelector('.primeiroprato .cor');
    const buttonSelecionado = document.querySelector('.primeiroprato ion-icon')
    if(botaoSelecionado !== null && buttonSelecionado !== null){
        botaoSelecionado.classList.remove('cor');
        botaoSelecionado.removeChild(buttonSelecionado);

    }
    
    const seletor = '.' + classeBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('cor');
    botao.innerHTML += '<ion-icon name="checkmark-circle"></ion-icon>';
    
}
function selecionarbebida(classeBotao){
    const botaoSelecionado = document.querySelector('.segundoprato .cor');
    const buttonSelecionado = document.querySelector('.segundoprato ion-icon')

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove('cor');
        botaoSelecionado.removeChild(buttonSelecionado);

    }
    const seletor = '.' + classeBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('cor');
    botao.innerHTML += '<ion-icon name="checkmark-circle"></ion-icon>';

}
function selecionarsobremesa(classeBotao){
    const botaoSelecionado = document.querySelector('.terceiroprato .cor');
    const buttonSelecionado = document.querySelector('.terceiroprato ion-icon')

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove('cor');
        botaoSelecionado.removeChild(buttonSelecionado);



    }
    const seletor = '.' + classeBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('cor');
    botao.innerHTML += '<ion-icon name="checkmark-circle"></ion-icon>';

}
function escolher(){
    const selected = document.querySelector('.rodape button');
    let cardapio1 = ((document.querySelector('.pratoum').classList.contains('cor')) || (document.querySelector('.pratodois').classList.contains('cor')) || (document.querySelector('.pratotres').classList.contains('cor')));
    let cardapio2 = (document.querySelector('.bebida1').classList.contains('cor') || document.querySelector('.bebida2').classList.contains('cor') || document.querySelector('.bebida3').classList.contains('cor'));
    let cardapio3 = (document.querySelector('.sobremesa1').classList.contains('cor') || document.querySelector('.sobremesa2').classList.contains('cor') || document.querySelector('.sobremesa3').classList.contains('cor'));

    

    if((cardapio1 === true)&&(cardapio2 === true)&&(cardapio3 === true)){
        selected.classList.add('corpedido');
        selected.innerHTML = `<div onclick="carregar()">Fechar o pedido<div>`   
    }
   
}

function carregar(){
    let titulo = encodeURIComponent('Olá, gostaria de fazer o pedido:');
    let nomedoprato = encodeURIComponent(' - Prato: ' + document.querySelector('.primeiroprato .cor .nomedocardapio').innerHTML);
    let nomedabebida = encodeURIComponent('     - Bebida: ' + document.querySelector('.segundoprato .cor .nomedocardapio').innerHTML);
    let nomedasobremesa = encodeURIComponent(' - Sobremesa: ' + document.querySelector('.terceiroprato .cor .nomedocardapio').innerHTML);

    let pratoconfirmado = document.querySelector('.primeiroprato .cor .nomedocardapio').innerHTML;
    let bebidaconfirmada = document.querySelector('.segundoprato .cor .nomedocardapio').innerHTML;
    let sobremesaconfirmada = document.querySelector('.terceiroprato .cor .nomedocardapio').innerHTML;

    const oneprecodocardapio1 = document.querySelector('.primeiroprato .cor .preco').innerHTML;
    const twoprecodocardapio1 = oneprecodocardapio1.replace('R$ ','');
    const threeprecodocardapio1 = twoprecodocardapio1.replace(',','.');
    const fourprecodocardapio1 = parseFloat(threeprecodocardapio1);

    const oneprecodocardapio2 = document.querySelector('.segundoprato .cor .preco').innerHTML;
    const twoprecodocardapio2 = oneprecodocardapio2.replace('R$ ','');
    const threeprecodocardapio2 = twoprecodocardapio2.replace(',','.');
    const fourprecodocardapio2 = parseFloat(threeprecodocardapio2);

    const oneprecodocardapio3 = document.querySelector('.terceiroprato .cor .preco').innerHTML;
    const twoprecodocardapio3 = oneprecodocardapio3.replace('R$ ','');
    const threeprecodocardapio3 = twoprecodocardapio3.replace(',','.');
    const fourprecodocardapio3 = parseFloat(threeprecodocardapio3);


    const precoTotal = (fourprecodocardapio1 + fourprecodocardapio2 + fourprecodocardapio3).toFixed(2);
    const valorConfirmar = precoTotal.replace('.',',');
    const ValorConfirmarZap = ' TOTAL R$ ' + valorConfirmar;
    const valorTotal = ' ' + ' ' + ' Total: R$ ' + precoTotal;
    const valorTotalZap = encodeURIComponent(valorTotal);
    
    let msg = 
    `Olá, gostaria de fazer o pedido:
    Prato:  ${pratoconfirmado}
    Bebida: ${bebidaconfirmada}
    Sobremesa: ${sobremesaconfirmada}
    TOTAL: ${valorTotalZap}
    `
    let code = encodeURIComponent(msg);

    document.querySelector('.container').classList.add('fundo');
    document.querySelector('body').innerHTML +=     
    `<div class="normal">
        <div>Confirme seu pedido</div>
        <div class="ajuste" style="display:flex;flex-direction:row;margin-top:28px">
            <p style="margin-left:6px">${pratoconfirmado}  ${oneprecodocardapio1}</p>
        </div>
        <div class="ajuste" style="display:flex;flex-direction:row;margin-top:13px">
            <p style="margin-left:6px">${bebidaconfirmada} ${oneprecodocardapio2}</p>
        </div>
        <div class="ajuste" style="display:flex;flex-direction:row;margin-top:13px">
            <p>${sobremesaconfirmada} ${oneprecodocardapio3}</p>
        </div>
        <div class="ajuste" style="display:flex;flex-direction:row;margin-top:13px;">
            <p style="font-weight:700">${ValorConfirmarZap}</p>
        </div>
        <a href="https://api.whatsapp.com/send/?text=${code}" style="">Tudo certo pode pedir</a>
        <div onclick="cancelar()">Cancelar</div>
    </div>`;

}
function cancelar(){
    document.querySelector('.container').classList.remove('fundo');
    document.querySelector('body .normal').classList.add('escondido');
    document.querySelector('.terceiroprato .sobremesa1').classList.remove('cor');
    document.querySelector('.terceiroprato .sobremesa2').classList.remove('cor');
    document.querySelector('.terceiroprato .sobremesa3').classList.remove('cor');
    let list = document.querySelector('.terceiroprato .cor');
    list.removeChild(list.children[4]);




}




