const btnFinanceiro = document.getElementById('btn-fin');
const sidebar = document.querySelector('.sidebar-adm');
const conteudo = document.querySelector('.main');


btnFinanceiro.addEventListener('click', () => {
    sidebar.classList.toggle('small');
    conteudo.classList.toggle('small_sb');
    btnFinanceiro.classList.toggle('active');
});


