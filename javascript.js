// ACTIVE NOS LINKS 
document.addEventListener('DOMContentLoaded', function(){
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(){
            // REMOVE A CLASSE 'active' DOS LINKS
            navLinks.forEach(l => l.classList.remove('active'));

            // ADD A CLASSE 'active' NO LINK CLICADO
            this.classList.add('active');
        });
    });
});

// FUNÇÃO PARA ATUALIZAR O CONTADOR GERAL DO CARRINHO
document.addEventListener('DOMContentLoaded', function() {

    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems.length;
        }
    }

    // FUNÇÃO PARA CALCULAR E EXIBIR O TOTAL
    function calculateAndDisplayTotal() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalContainer = document.getElementById('cart-total');
        const confirmButton = document.getElementById('confirm-order-btn');
        const paymentForm = document.getElementById('payment-form-container');

        // .PEDIDO TOTAL
        const subtotalElement = document.getElementById('subtotal-value');
        const grandTotalElement = document.getElementById('grand-total-value');

        if (!totalContainer || !confirmButton || !paymentForm || !subtotalElement || !grandTotalElement) return; // SAI SE NÃO ESTIVER NA PÁGINA 'carrinho.html'

        if (cartItems.length === 0) {
            totalContainer.innerHTML = ''; // LIMPA O TOTAL SE O CARRINHO ESTIVER VAZIO
            confirmButton.style.display = 'none'; // ESCONDE O BOTÃO
            paymentForm.style.display = 'none'; // ESCONDE O FORMULÁRIO
            subtotalElement.textContent = 'R$ 0,00';
            grandTotalElement.textContent = 'R$ 0,00';
            return;
        }

        // SE TIVER ITENS, MOSTRA O BOTÃO E O FORMULÁRIO
        confirmButton.style.display = 'inline-block';
        paymentForm.style.display = 'block';

        // DEFINE A TAXA DE ENVIO FIXA
        const shippingFee = 10.00;

        // CALCULA O SUBTOTAL (SOMA DOS PRODUTOS)
        const subtotal = cartItems.reduce((sum, item) => {
            // EXTRAI O NÚMERO DO TEXTO DO PREÇO ('Por apenas R$39,90' -> 39.90) 
            const priceString = item.price? item.price.replace('Por apenas R$', '').trim().replace(',', '.') : 0;
            const priceNumber = parseFloat(priceString);

            // ADICIONA AO SOMATÓRIO SE FOR UM NÚMERO VÁLIDO
            return sum + (isNaN(priceNumber) ? 0 : priceNumber);
        }, 0);

        // CALCULA O TOTAL GERAL
        const grandTotal = subtotal + shippingFee;

        // --- NOSSOS DETETIVES ---
        console.log('Subtotal calculado (número):', subtotal);
        console.log('Total geral calculado (número):', grandTotal);
        // -------------------------

        // FORMATA OS VALORES COMO MOEDA BR (BRL)
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        const formattedSubtotal = formatter.format(subtotal);
        const formattedGrandTotal = formatter.format(grandTotal);

        // --- DETETIVE FINAL ---
        console.log('Total geral FORMATADO:', formattedGrandTotal);
        // --------------------

        // ATUALIZA HTML COM OS VALORES FORMATADOS
        totalContainer.innerHTML = `<strong>Total:</strong> ${formattedGrandTotal}`; // TOTAL QUE JÁ EXISTIA
        subtotalElement.textContent = formattedSubtotal; // ATUALIZA A CÉLULA DO 'VALOR TOTAL'
        grandTotalElement.textContent = formattedGrandTotal; // ATUALIZA A CÉLULA DO 'TOTAL DO PEDIDO'
    }

    // FUNÇÃO PARA EXIBIR OS ITENS NA PÁGINA DO CARRINHO
    function displayCartItems() {
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) return; // SE NÃO TIVER NA PÁGINA DO CARRINHO, NÃO FAZ NADA

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p class="col-12 text-center">Seu carrinho está vazio.</p>';
        } else {
            cartContainer.innerHTML = ''; // LIMPA O CONTAINER
            cartItems.forEach((item, index) => { // ADICIONANDO 'index' PARA SABER QUAL ITEM REMOVER
                const cardHtml = `
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="${item.image}" class="card-img-top" alt="${item.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text small descricao">${item.description}</p>
                                <p class="card-text small preco">${item.price}</p>
                                <p class="card-text stars">${item.starsHTML}</p>
                                <button class="btn btn-danger mt-auto remove-from-cart-btn" data-index="${index}">
                                    <i class="bi bi-trash"></i> Remover
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                cartContainer.innerHTML += cardHtml;
            });
        }
        updateCartCount(); // ATUALIZA O CONTADOR APÓS EXIBIR OS ITENS
        calculateAndDisplayTotal(); // CHAMA A FUNÇÃO DE CÁLCULO AQUI
    }

    // LÓGICA PARA ADICIONAR ITENS (index.html)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // ENCONTRA O CARD PAI DO BOTÃO CLICADO
                const card = button.closest('.card');
                if (!card) return; // PARA A EXECUÇÃO SE O CARD NÃO FOR ENCONTRADO

                // EXTRAINDO DADOS DE FORMA SEGURA
                const product = {
                    image: card.querySelector('.card-img-top').src,
                    title: card.querySelector('.card-title').textContent,
                    description: card.querySelector('.descricao').textContent,
                    price: card.querySelector('.preco').textContent,
                    starsHTML: card.querySelector('.stars').innerHTML
                };

                // OBTER O CARRINHO ATUAL DO 'localStorage' OU CRIAR UM NOVO ARRAY
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // ADD O NOVO PRODUTO AO ARRAY
                cartItems.push(product);

                // SALVAR O ARRAY ATUALIZADO DE VOLTA NO 'localStorage'
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // ATUALIZA O CONTADOR NA NAVBAR
                updateCartCount();
            });
        });
    }

    // LÓGICA PARA REMOVER ITENS (carrinho.html)
    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
        cartContainer.addEventListener('click', function(event) {
            // VERIFICA SE O ELEMENTO CLICADO É O BOTÃO DE REMOVER
            if (event.target.classList.contains('remove-from-cart-btn') || event.target.closest('.remove-from-cart-btn')) {
                const button = event.target.closest('.remove-from-cart-btn');
                const indexToRemove = parseInt(button.getAttribute('data-index'));

                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // REMOVE O ITEM DO ARRAY NA POSIÇÃO 'indexToRemove'
                cartItems.splice(indexToRemove, 1);

                // SALVA O ARRAY MODIFICADO DE VOLTA NO 'localStorage'
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                displayCartItems(); // RE-EXIBE OS ITENS 
                calculateAndDisplayTotal(); // RECALCULA O TOTAL
            }
        });
    }

    // EXECUTA AS FUNÇÕES PRINCIPAIS AO CARREGAR A PÁGINA 
    displayCartItems(); // PARA PÁGINA carrinho.html
    updateCartCount(); // PARA AMBAS AS PÁGINAS
});


// MÉTODO DE PAGAMENTO (INTERROGAÇÕES - PIX E BOLETO)
document.addEventListener('DOMContentLoaded', function () {
  // PEGA TODOS OS BOTÕES QUE DEVEM ATIVAR UM TOAST DE INFORMAÇÃO
  const toastTriggerButtons = document.querySelectorAll('.info-toast-btn');

  // ADD UM EVENTO DE CLIQUE A CADA UM DELES 
  toastTriggerButtons.forEach(toastTriggerEl => {
    toastTriggerEl.addEventListener('click', event => {
      event.preventDefault(); // IMPEDE QUALQUER COMPORTAMENTO PADRÃO DO BOTÃO 
      event.stopPropagation(); // IMPEDE QUE O CLIQUE NO BOTÃO SELECIONE O 'radio button'

      // PEGA O SELETOR DO ALVO (ex: '#pixToast') A PARTIR DO ATRIBUTO 'data-bs-target'
      const targetSelector = toastTriggerEl.getAttribute('data-bs-target');
      const toastTargetEl = document.querySelector(targetSelector);

      // SE O ALVO EXISTIR, MOSTRA O TOAST CORRESPONDENTE
      if (toastTargetEl) {
        const toast = bootstrap.Toast.getOrCreateInstance(toastTargetEl);
        toast.show();
      }
    });
  });
});

// MÉTODO DE VALIDAÇÃO DE FORMULÁRIO

// EXEMPLO DE JS INICIAL PARA DESABILITAR ENVIOS DE FORMULÁRIOS SE HOUVER CAMPOS INVÁLIDOS 
(() => {
  'use strict'

  // BUSCA TODOS OS FORMULÁRIOS AOS QUAIS DESEJA APLICAR ESTILOS DE VALIDAÇÃO BOOTSTRAP PERSONALIZADOS 
  const forms = document.querySelectorAll('.needs-validation')

  // LOOP SOBRE ELES E EVITA A SUBMISSÃO
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()