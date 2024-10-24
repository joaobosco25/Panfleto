// Selecionar os ícones e associar a ação de abrir o modal
document.getElementById('icon1').onclick = function() {
    document.getElementById('modal1').style.display = 'block';
};

document.getElementById('icon2').onclick = function() {
    document.getElementById('modal2').style.display = 'block';
};

document.getElementById('icon3').onclick = function() {
    document.getElementById('modal3').style.display = 'block';
};

document.getElementById('icon4').onclick = function() {
    document.getElementById('modal4').style.display = 'block';
};

document.getElementById('icon5').onclick = function() {
    document.getElementById('modal5').style.display = 'block';
};

document.getElementById('icon6').onclick = function() {
    document.getElementById('modal6').style.display = 'block';
};

document.getElementById('icon7').onclick = function() {
    document.getElementById('modal7').style.display = 'block';
};


// Selecionar o botão de fechar e fechar o modal
document.querySelectorAll('.close').forEach(function(btn) {
    btn.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    };
});

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

