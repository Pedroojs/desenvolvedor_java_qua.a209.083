//captura do formulário
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('submit'); // botão do HTML (type="button")
    const ids = ['nome', 'email', 'nascimento', 'cpf', 'telefone', 'cep', 'endereco'];

    const exibirInfo = () => {
        ids.forEach(id => {
            const input = document.getElementById(id);
            const out = document.getElementById(id + 'Result');
            if (input && out) out.innerText = `${id === 'nome' ? 'Nome: ' :
                id === 'email' ? 'Email: ' :
                    id === 'nascimento' ? 'Nascimento: ' :
                        id === 'cpf' ? 'CPF: ' :
                            id === 'telefone' ? 'Telefone: ' :
                                id === 'cep' ? 'CEP: ' : 'Endereço: '} ${input.value}`;
        });
    };

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            exibirInfo();
        });
    } else {
        // fallback: se quiser submeter pelo form (troque botão para type="submit")
        const form = document.getElementById('formUsuario');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                exibirInfo();
            });
        }
    }
});
