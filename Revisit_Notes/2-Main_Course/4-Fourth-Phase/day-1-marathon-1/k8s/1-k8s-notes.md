- I need k8s, I need it for exam. It's an essential concept so I will learn it comprehensively here.

- I will be following this tutorial: https://kubernetes.io/docs/tutorials/hello-minikube/

- I will run it on an ec2 instant and install kubectl from scratch.

- Let's start!

- Created EC2, connected via Instance Connect, for installing kubectl was checking ec2-metadata at 169.254.169.254, but since the IP of instance connect was not recognized, I didn't get any response. Will have to setup session manager for connecting and retrieving metadata.

- lscpu # To get the architecture. curl http://169.254.169.254/latest/meta-data doesn't have anything about architecture. Instead of using session manager, you could have run the command sudo su, and made the curl request as the root user.

- Install kubectl (https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64

- minikube start # Gave error.

- You need docker to run minikube. I feel so stupid. (Checkout: https://crishantha.medium.com/running-minikube-on-aws-ec2-e845337a956)

- Installing docker:
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo su - ec2-user
docker ps

- I feel dumb. I initialized the free tier ec2, which comes with just 1 vcpu. I will use my school account to re run all these steps now.

- Installed kubectl:
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client
kubectl cluster-info

- Created deployment using:
kubectl create deployment hello-node --image=registry.k8s.io/e2e-test-images/agnhost:2.39 -- /agnhost netexec --http-port=8080
kubectl get deployments
kubectl get pods
kubectl get events
kubectl config view
kubectl logs hello-node-55fdcd95bf-rwjfh

- Creating a service:
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
kubectl get services
minikube service hello-node

- Delete services
kubectl delete service hello-node
kubectl delete deployment hello-node

- Stop and Delete Minikube Cluster:
minikube stop
minikube delete

