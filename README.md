# Backstage Application

Backstage developer portal configurado com autenticação GitHub e pronto para deployment no Kubernetes.

## 🎯 Features

- ✅ Autenticação GitHub OAuth
- ✅ Integração com GitHub (PAT)
- ✅ Deployment Kubernetes via ArgoCD
- ✅ Secrets gerenciados via Vault
- ✅ PostgreSQL database

## 🚀 Quick Start

### Local Development

```bash
# Carregar Node.js 22
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use 22

# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn start
```

Acesse: http://localhost:3000

### Build Docker Image

```bash
docker build -t backstage:latest .
```

## ☸️ Kubernetes Deployment

### Pré-requisitos

- Cluster Kubernetes
- ArgoCD instalado
- External Secrets Operator instalado
- Vault configurado

### Configurar Secrets no Vault

```bash
# Criar secrets no Vault
vault kv put secret/backstage/credentials \
  github_token="ghp_..." \
  auth_github_client_id="Iv23..." \
  auth_github_client_secret="..." \
  postgres_host="postgres.default.svc.cluster.local" \
  postgres_port="5432" \
  postgres_user="backstage" \
  postgres_password="..." \
  postgres_db="backstage"

# Configurar Kubernetes auth no Vault
vault auth enable kubernetes
vault write auth/kubernetes/config \
    kubernetes_host="https://kubernetes.default.svc"

# Criar policy
vault policy write backstage - <<EOF
path "secret/data/backstage/*" {
  capabilities = ["read"]
}
EOF

# Criar role
vault write auth/kubernetes/role/backstage \
    bound_service_account_names=backstage \
    bound_service_account_namespaces=backstage \
    policies=backstage \
    ttl=24h
```

### Deploy via ArgoCD

```bash
# Aplicar ArgoCD Application
kubectl apply -f argocd/application.yaml

# Verificar status
argocd app get backstage
```

## 📁 Estrutura

```
.
├── k8s/
│   ├── base/
│   │   ├── namespace.yaml
│   │   ├── serviceaccount.yaml
│   │   ├── configmap.yaml
│   │   ├── external-secrets.yaml
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── kustomization.yaml
│   └── overlays/
│       └── production/
├── argocd/
│   └── application.yaml
├── packages/
│   ├── app/          # Frontend
│   └── backend/      # Backend
└── Dockerfile
```

## 🔧 Configuração

A configuração é gerenciada através de:
- `app-config.yaml` - Configuração base
- `app-config.production.yaml` - Overrides de produção
- Environment variables (do Vault via ExternalSecrets)

## 📝 License

Apache-2.0
