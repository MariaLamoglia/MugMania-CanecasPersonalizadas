# ☕ MugMania - Loja de Canecas Personalizadas

Um e-commerce front-end completo e interativo, focado em uma experiência de usuário limpa e agradável para uma loja fictícia de canecas personalizadas.

![Prévia do Projeto MugMania](./docs/preview.gif)

---

## 🔗 Demonstração

**Acesse a demonstração ao vivo:** **[MugMania Live](https://marialamoglia.github.io/MugMania-CanecasPersonalizadas/index.html)**

---

## ✨ Funcionalidades Principais

O projeto foi construído do zero com foco em interatividade e funcionalidades essenciais de um e-commerce:

* **Galeria de Produtos:** Apresentação visual dos produtos em formato de cards, com imagens atraentes de cada caneca personalizada.
* **Carrinho de Compras Dinâmico:**
    * Adição e remoção de itens.
    * Contador de itens na barra de navegação.
    * Persistência de dados: o carrinho **não esvazia** ao recarregar a página, graças ao `localStorage`.
* **Cálculo Automático de Total:**
    * Cálculo do subtotal dos produtos.
    * Adição de taxa de frete fixa.
    * Exibição do total geral do pedido.
* **Formulário de Checkout Condicional:** O formulário de pagamento só aparece se houver itens no carrinho.
* **Validação de Formulário:** Validação completa dos campos (incluindo a seleção de método de pagamento) usando as funcionalidades do Bootstrap.
* **Design Responsivo:** A interface se adapta perfeitamente a dispositivos móveis, com elementos em coluna para melhor usabilidade.
* **Micro-interações e Animações:**
    * Efeitos de `hover` em botões e cards.
    * Animações de texto e ícones para uma experiência mais viva e agradável.
    * Listas com marcadores customizados para um design único.
* **Componentes Interativos:** Uso de Toasts, Offcanvas e Dropdowns do Bootstrap para exibir informações adicionais de forma elegante.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

* **HTML5:** Para a estrutura semântica do conteúdo.
* **CSS3:** Para estilização, design e animações.
    * **Flexbox** para layouts responsivos.
    * **Pseudo-elementos** (`::before`, `::after`) para personalizações avançadas.
    * **`@keyframes`** para animações customizadas.
* **JavaScript (Vanilla JS):** Para toda a interatividade, manipulação do DOM e lógica do carrinho de compras.
* **Bootstrap 5:** Framework utilizado como base para o grid system, componentes e classes utilitárias responsivas.
* **Bootstrap Icons:** Para a biblioteca de ícones.
* **Google Fonts:** Para as fontes personalizadas do projeto.

---

## 🧠 Aprendizados e Destaques do Projeto

O desenvolvimento do MugMania foi uma jornada prática focada na criação de um front-end funcional, com destaque para:

* **Manipulação Avançada do DOM:** Adicionar, remover e atualizar dinamicamente elementos da página (cards no carrinho, totais, etc.) com JavaScript puro.
* **Persistência de Dados no Front-End:** Uso estratégico do `localStorage` para simular uma experiência de compra contínua, guardando o estado do carrinho do usuário.
* **Validação Robusta de Formulários:** Implementação da validação nativa do Bootstrap, incluindo campos customizados como grupos de `radio buttons`.
* **Componentização com Bootstrap:** Utilização eficiente de componentes como Toast, Offcanvas e Dropdowns, controlados via atributos `data-bs-*` e JavaScript.
* **CSS Criativo:** Aplicação de pseudo-elementos para customizações avançadas da UI (como os marcadores de lista) e animações com `@keyframes`.

---

## 🏁 Como Executar o Projeto Localmente

Este é um projeto puramente front-end, então não é necessário um servidor.

1.  Clone o repositório:
    ```bash
    git clone https://github.com/MariaLamoglia/MugMania-CanecasPersonalizadas.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd MugMania-CanecasPersonalizadas
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

---

## 👨‍💻 Autor

Feito com ❤️ por **Maria Lamoglia**.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/maria-lamoglia)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MariaLamoglia)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.