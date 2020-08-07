
window.onscroll = function () {/*é chamada assim que a pagina for rolada */
    scroll();
}
function scroll() {/* mostra o botão assim que decer a pagina */
    let btn = document.getElementById("topo");/*pega o botão*/
    if (document.documentElement.scrollTop > 50) {/* unidade de medida, que mede o quanto de scroll foi dado a partir do topo */
        btn.style.display = "block";/*passa o botão de none para block */
    } else {
        btn.style.display = "none";
    }
}
function backToTop() {/*faz o botão voltar ao topo que vai ser chamada dentro da função onclick do botão  */
    document.documentElement.scrollTop = 0;
}
