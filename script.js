// JANELA COMO COMPRAR

const abrirModal = document.getElementById("abrir-como-comprar");
const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal-compra");

// ABRIR JANELA

abrirModal.addEventListener("click", function(event) {
    event.preventDefault();
    modal.hidden = false;
});

// FECHAR NO X

fecharModal.addEventListener("click", function() {
    modal.hidden = true;
});

// FECHAR AO CLICAR FORA

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.hidden = true;
    }
});

// FECHAR COM ESC

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.hidden = true;
    }
});
