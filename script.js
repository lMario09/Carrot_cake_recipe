const itens = document.querySelectorAll(".js-descr dt");
const active = "ativo"
if(itens.length) {
    function activeDescricao() {
        this.classList.toggle(active);
        this.nextElementSibling.classList.toggle(active);
    }
    itens.forEach((item) => {
        item.addEventListener('click', activeDescricao);
    });
}