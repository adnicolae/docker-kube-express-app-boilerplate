[![Build Status](https://travis-ci.com/adnicolae/docker-kube-express-app.svg?token=xwY5xjrobw7AHHzKyFDP&branch=master)](https://travis-ci.com/adnicolae/docker-kube-express-app)
# docker-kube-express-app
A simple Express app deployed using Kubernetes and Docker on a cluster in AWS EKS.
This serves the `/status/` endpoint which is further tested on a [demo nginx reverse proxy](https://github.com/adnicolae/nginx-reverse-proxy) API gateway.

## Getting Started

### Installing
`git clone https://github.com/adnicolae/docker-kube-express-app.git`

### Prerequisites
- [Create an AWS EKS Cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)
- [Install `kubectl`](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
- [Set up `aws-iam-authenticator`](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
- [Set up `kubeconfig`](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)

## Deployment
### Load YAML config
Run the following commands to load the deployment and service configs onto EKS.
- `kubectl apply -f config/deployment.yaml`
- `kubectl apply -f config/service.yaml`

### Test deployment
1. Run `kubectl get pods` and check the health of the newly created pod.
2. Access the pod using `kubectl exec -it {{YOUR_POD_NAME}} bash`
3. Run `curl http://localhost:8080/status/` and `curl http://docker-kube-express-app-svc:8080/status` which should return "Service available!".
