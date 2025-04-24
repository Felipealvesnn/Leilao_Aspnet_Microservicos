# Leilao_Aspnet_Microservicos

Este é um projeto para construir uma aplicação de leilão utilizando arquitetura de microserviços. O objetivo é integrar várias tecnologias modernas e melhores práticas, como comunicação via RabbitMQ, autenticação com IdentityServer, e implantação em contêineres Docker e Kubernetes.

## 🚀 Funcionalidades do Projeto

- **Arquitetura de Microserviços com .NET**:
  - Cada microserviço é isolado e gerenciado independentemente.
- **RabbitMQ**:
  - Serviço de barramento para comunicação entre microserviços.
- **Interface do Cliente com Next.js**:
  - Frontend moderno e responsivo com suporte a SSR (Server-Side Rendering).
- **IdentityServer**:
  - Gerenciamento de autenticação e autorização.
- **Testes**:
  - Unitários e de integração utilizando XUnit.
- **Implantação**:
  - Publicação via Docker Compose.
  - Implantação em clusters Kubernetes locais e na nuvem.

## 🛠️ Tecnologias e Ferramentas

### Backend
- **.NET** (C#)
- **IdentityServer**

### Frontend
- **Next.js** (React Framework)

### Comunicação entre serviços
- **RabbitMQ**

### Testes
- **XUnit**

### Containers e Orquestração
- **Docker**
- **Kubernetes**

## 📋 Pré-requisitos

Certifique-se de ter os seguintes softwares instalados no seu ambiente de desenvolvimento:

- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/)
- [.NET SDK](https://dotnet.microsoft.com/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## 📂 Estrutura do Projeto

```plaintext
Leilao_Aspnet_Microservicos/
├── Src/
│   ├────
│   │   ├── AuctionService/
│   │   ├── UserService/
│   │   ├── NotificationService/
│   │   ├── IdentityServer/
│
├── Frontend/
│   ├── web-app/ (Next.js)
│
├── Tests/
│   ├── UnitTests/
│   ├── IntegrationTests/
│
├── Deployments/
│   ├── Docker/
│   ├── Kubernetes/

