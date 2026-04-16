# Agenda de Eventos do Campus

1. Identificação

. Nome do Projeto: Agenda de Eventos do Campus

. Tecnologia Obrigatória: React (Vite)

. Versão: 0.0.0

2. Visão Geral

A Agenda de Eventos do Campus é uma aplicação do tipo Single Page Application (SPA) desenvolvida em React. O projeto simula um sistema real e útil para a comunidade acadêmica, centralizando a divulgação de atividades, palestras e competições, facilitando o engajamento estudantil.

3. Tecnologias Utilizadas

De acordo com o arquivo package.json e os requisitos técnicos, as seguintes ferramentas foram empregadas:

. React 19.2.4 & React-DOM: Biblioteca base para construção da interface.

. Vite 8.0.4: Build tool para um desenvolvimento rápido e otimizado.

. React Router Dom: Gerenciamento de rotas dinâmicas.

. Lucide React: Biblioteca de ícones vetoriais.

. Tailwind CSS: Framework utilitário para estilização responsiva e suporte a Dark Mode.

. ESLint: Padronização e qualidade do código.

4. Funcionalidades Implementadas

. Listagem de Eventos: Exibição de cards com informações resumidas de todos os eventos.

. Busca com Filtro: Campo de entrada para pesquisar eventos por nome ou categoria.

. Página de Detalhes: Rota dinâmica (/evento/:id) que exibe descrição completa, local, data e horário.

. Sistema de Favoritos: Possibilidade de salvar eventos de interesse (armazenados globalmente via Context API).

. Modo Escuro (Dark Mode): Alternância de tema com persistência.

. Feedbacks Visuais: Estados de carregamento (loading), estados vazios para buscas sem resultado e alertas visuais de interação.

5. Estrutura do Projeto

A organização segue o padrão modular exigido:

src/
├── components/      # Componentes reutilizáveis (EventCard, Navigation)
├── context/         # Gerenciamento de estado global (EventContext)
├── hooks/           # Hooks customizados (useLocalStorage)
├── pages/           # Telas principais (Home, Details, SavedEvents)
└── App.jsx          # Componente raiz com as definições de rotas


6. Decisões Técnicas

. Context API: Utilizada para garantir que a lista de "Eventos Salvos" esteja disponível em qualquer parte da aplicação sem prop drilling.

. Persistência (Local ↔ Global): Implementamos o hook useLocalStorage para que, mesmo ao atualizar o navegador, as preferências de tema e os eventos favoritos do usuário sejam mantidos.

. Simulação de API: Foi implementada uma função assíncrona com setTimeout na listagem inicial para simular o comportamento de uma requisição real de rede (fetch).

7. Fluxo da Aplicação

1- Início: O usuário acessa a página inicial e visualiza todos os eventos disponíveis.

2- Pesquisa: Ao digitar no campo de busca, a lista é filtrada em tempo real.

3- Exploração: O usuário clica em "Ver Informações" para acessar a rota dinâmica do evento escolhido.

4- Interação: O usuário pode favoritar o evento. Essa ação dispara uma atualização no Context API e salva o dado no localStorage.

5- Acompanhamento: Na aba de "Salvos", o usuário gerencia sua agenda personalizada.

8. Instruções de Execução

Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


9. Diferenciais (Impacto Positivo)

. Design Mobile-First: Interface totalmente responsiva adaptada para smartphones.

. Acessibilidade: Uso de ícones semânticos e contrastes adequados.

. Desempenho: Utilização de Vite e componentes funcionais otimizados.

Este projeto foi desenvolvido seguindo as orientações de arquitetura modular e boas práticas de desenvolvimento em React conforme os critérios de avaliação institucional.
