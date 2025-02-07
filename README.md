Vou criar um README.md completo para seu projeto de Teams Multiple Instances:

# Teams Multiple Instances 🚀

![Teams Multiple Instances](icon.png)

Um aplicativo Electron que permite executar múltiplas instâncias do Microsoft Teams simultaneamente no Linux.

## 🌟 Características

- Executa até 3 instâncias do Microsoft Teams simultaneamente
- Interface nativa e integrada com o sistema
- Suporte a notificações do sistema
- Menu personalizado para configuração de instâncias
- Persistência de sessão para cada instância

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão 14.x ou superior)
- npm (normalmente vem com Node.js)
- Git

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GabeHenrique/teams-multiple-instances.git
```

2. Entre no diretório do projeto:
```bash
cd teams-multiple-instances
```

3. Instale as dependências:
```bash
npm install
```

## 💻 Uso

Para iniciar o aplicativo em modo de desenvolvimento:
```bash
npm start
```

Para criar uma build:
```bash
npm run build
```

### Configuração de Instâncias

Você pode configurar o número de instâncias através do menu "Configurações":
- 1 Instância
- 2 Instâncias
- 3 Instâncias

## 🛠️ Tecnologias Utilizadas

- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)

## 📦 Estrutura do Projeto

```
src/
├── main/
│   ├── main.js
│   ├── config.js
│   ├── window.js
│   ├── menu.js
│   └── session.js
├── preload/
│   └── preload.js
└── assets/
    └── icon.png
```

## 🔄 Versionamento

Utilizamos [SemVer](http://semver.org/) para controle de versão. Para ver as versões disponíveis, acesse as [tags neste repositório](https://github.com/GabeHenrique/teams-multiple-instances/tags).

### Scripts de Versionamento

Para atualizar a versão do projeto:
```bash
npm run update-version -- --versionType=major  # Para mudanças maiores (x.0.0)
npm run update-version -- --versionType=minor  # Para novas funcionalidades (0.x.0)
npm run update-version -- --versionType=patch  # Para correções de bugs (0.0.x)
```

## 👤 Autor

**Gabriel Henrique**
* Github: [@GabeHenrique](https://github.com/GabeHenrique)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- Microsoft Teams por fornecer o serviço base
- Comunidade Electron por fornecer excelente documentação

## 🤝 Contribuindo

Contribuições, issues e pedidos de features são bem-vindos!
Sinta-se à vontade para verificar a [página de issues](https://github.com/GabeHenrique/teams-multiple-instances/issues).

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---
⭐️ From [@GabeHenrique](https://github.com/GabeHenrique)
```

Este README.md inclui:
- Uma descrição clara do projeto
- Instruções de instalação e uso
- Estrutura do projeto
- Informações sobre versionamento
- Como contribuir
- Tecnologias utilizadas
- Seção de agradecimentos
- Informações de licença e autor

Para usar este README:

1. Salve o conteúdo em um arquivo chamado `README.md` na raiz do seu projeto
2. Ajuste os links do GitHub para corresponder ao seu repositório real
3. Atualize a seção de pré-requisitos se necessário
4. Adicione ou remova seções conforme necessário
5. Atualize a seção de licença de acordo com a licença que você escolher

Você também pode querer:
1. Adicionar badges (como status de build, versão, etc.)
2. Adicionar screenshots do aplicativo
3. Expandir a seção de contribuição com guias específicos
4. Adicionar uma seção de FAQ
5. Incluir informações sobre testes

Lembre-se de manter o README atualizado conforme o projeto evolui!
