# Gestor de Tarefas em React.js (LocalStorage)

Este repositório contém uma aplicação de gerenciamento de tarefas construída com React. A aplicação permite aos usuários adicionar, editar e gerenciar tarefas com diferentes prioridades e status.

#Link: [https://vercel.com/miltonproject/task-manager-with-reactjs-local-storage/C5r8DrKD2iRfEoqnDzbbieYa2cxD](https://task-manager-with-reactjs-local-storage-ehw5yme3n-miltonproject.vercel.app/)

## Estrutura de Pastas

O projeto segue a seguinte estrutura de pastas:

```
src/
  components/
    AddTaskForm.js
    TaskDetails.js
    TaskList.js
  models/
    Task.js
  utils/
    TaskManager.js
  App.js
  App.test.js
  index.js
  setupTest.js
```

- A pasta `components` contém os componentes React usados na aplicação, incluindo `AddTaskForm.js`, `TaskDetails.js` e `TaskList.js`.
- A pasta `models` contém a classe de modelo `Task.js`, que representa uma tarefa com propriedades como `id`, `title`, `description`, `priority` e `status`.
- A pasta `utils` contém o arquivo de utilitário `TaskManager.js`, que gerencia os dados das tarefas e fornece funções para adicionar, atualizar e remover tarefas.
- O arquivo `App.js` é o ponto de entrada principal da aplicação, que configura as rotas e renderiza o componente `TaskManager`.
- O arquivo `App.test.js` contém um teste de exemplo para o componente `App`.
- O arquivo `index.js` é o ponto de entrada para renderizar a aplicação no navegador.
- O arquivo `setupTest.js` contém a configuração de setup para executar os testes.

## Componentes

### AddTaskForm

O componente `AddTaskForm` é responsável por renderizar um formulário para adicionar uma nova tarefa. Ele fornece campos de entrada para o título, descrição, prioridade e status da tarefa. Quando o formulário é enviado, a função `onTaskAdd` é chamada com os dados da nova tarefa.

### TaskDetails

O componente `TaskDetails` exibe os detalhes de uma tarefa específica. Ele permite editar o título, descrição, prioridade e status da tarefa. Quando o botão "Editar" é clicado, o componente muda para o modo de edição e permite modificar a tarefa. A tarefa atualizada é então passada para a função `onUpdate` quando o botão "Salvar" é clicado.

### TaskList

O componente `TaskList` exibe uma tabela de tarefas agrupadas por seu status (A fazer, Pendente e Concluído). Ele fornece botões para remover uma tarefa, marcar uma tarefa como concluída e abrir os detalhes da tarefa para edição. O componente recebe um array de tarefas como entrada e lida com as interações com essas tarefas por meio das funções `onTaskComplete`, `onTaskRemove` e `onTaskUpdate`.

### Task

A classe `Task` representa um objeto de tarefa com propriedades como `id`, `title`, `description`, `priority` e `status`. Ela fornece um método para editar as propriedades da tarefa.

### TaskManager

O componente `TaskManager` é o componente principal da aplicação. Ele gerencia o estado das tarefas e categorias (prioridades) usando o hook `useState`. O componente carrega as tarefas do armazenamento local (localStorage) na renderização inicial e atualiza o armazenamento

 sempre que as tarefas mudam. Ele também calcula o número de tarefas concluídas e não concluídas usando o hook `useMemo`. O componente `TaskManager` renderiza os componentes `AddTaskForm` e `TaskList`, passando as tarefas e as funções de manipulação de tarefas apropriadas como props.

## Configuração do Projeto

Siga as etapas abaixo para configurar o projeto em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório em seu diretório de trabalho usando o comando `git clone <URL do repositório>`.
3. Navegue até o diretório raiz do projeto.
4. Execute `npm install` para instalar as dependências do projeto.
5. Execute `npm start` para iniciar o servidor de desenvolvimento.
6. Acesse `http://localhost:3000` em seu navegador para ver a aplicação em execução.

---

Este é um projeto de exemplo para demonstrar o uso do React para construir uma aplicação de gerenciamento de tarefas. Sinta-se à vontade para explorar e adaptar o código de acordo com suas necessidades. Se você tiver alguma dúvida, sinta-se à vontade para perguntar. Boa sorte!
