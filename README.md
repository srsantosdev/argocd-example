1. Cria um cluster kubernetes

```bash
kind create cluster --name=argocd
```

2. Mudar o contexto

```bash
kubectl cluster-info --context kind-argocd
```

3. Docker build

```bash
docker build -t srsantosdev/argocd-example:latest .
```

4. Subir no docker hub
   
```bash
docker push srsantosdev/argocd-example:latest
```

5. Executar app

```bash
docker run -d --rm -p 3333:3333 srsantosdev/argocd-example:latest
```

6. Cria o deployment no cluster 

```bash
kubectl apply -f k8s/deployment.yaml
```

7. Cria o service no cluster

```bash
kubectl apply -f k8s/service.yaml
```

7.1. Utiliza o service para apontar para os containers

```bash
kubectl port-forward svc/argocdapp 3333:3333
```

8. Gera os manifestos com o kustomize

```bash
cd k8s

kustomize build
```

9. Instalaçao do ArgoCD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

10. Port forwarding

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

11. Senha do argo

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```