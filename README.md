# AtechCrud

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.5. É um CRUD básico para demonstração.

## Configuração Inicial

Para rodar o projeto, é necessário ter o Node.js e o Angular CLI instalados. Se você ainda não os tem instalados, siga os passos abaixo:

1. Instale o Node.js:
   - Baixe e instale o Node.js [aqui](https://nodejs.org/).

2. Instale o Angular CLI globalmente:
   ```bash
   npm install -g @angular/cli
   ```

## Instalação das Dependências

Após clonar o projeto, navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências necessárias:
```bash
npm install
```

## Executando o Aplicativo

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
ng serve
```
Após o servidor iniciar, abra o navegador e acesse `http://localhost:4200/`. A aplicação será automaticamente recarregada se você alterar qualquer um dos arquivos fonte.

## Estrutura de Diretórios

A estrutura de diretórios principal inclui:

- `src/app`: Contém os componentes do projeto.
- `src/environments`: Contém as configurações de ambiente.

## Build

Para construir o projeto, execute:
```bash
ng build
```
Os artefatos de build serão armazenados no diretório `dist/`. Use a flag `--prod` para uma build de produção.

## Executando Testes Unitários

Execute o seguinte comando para rodar os testes unitários via [Karma](https://karma-runner.github.io):
```bash
ng test
```

## Deploy

Para realizar o deploy no Firebase, certifique-se de que você está autenticado e configurado corretamente, então execute:
```bash
ng deploy
```

## Mais Informações

Para obter mais informações sobre o Angular CLI, use `ng help` ou visite a página oficial [Angular CLI Overview and Command Reference](https://angular.io/cli).



