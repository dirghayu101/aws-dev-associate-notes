
# Overview:
- When you deploy k8s, you get a cluster.
- Cluster has a set of worker machine called nodes.
- Nodes run containerized application(s). Note plural.
- Every cluster has to have at least one worker node.
- The worker node(s) host the Pods that are the components of the application workload. A pod in this context is a set of running containers in your cluster.
- Pod: Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers. Context is shared.
- The control plane manages the worker nodes and the Pods in the cluster. Master node.
- In production environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability.
- We have Control Plane (kube-apiserver, etcd, kube-scheduler, kube-controller-manager & cloud-controller-manager) as the main administrative unit. It was called master node.
- Think of a Worker Node as a virtual machine. It has pods which in general use cases is a single container or maybe a set.
- Node components include kubelet, kube-proxy and Container Runtime.

# Control Plane Components:
- The control plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events (for example, starting up a new pod when a Deployment's replicas field is unsatisfied).
- Control plane components can be run on any machine in the cluster. However, for simplicity, setup scripts typically start all control plane components on the same machine, and do not run user containers on this machine
- kube-apiserver: 
- etcd: etcd is a consistent distributed key-value store. Mainly used as a separate coordination service, in distributed systems. And designed to hold small amounts of data that can fit entirely in memory
- kube-scheduler: Control plane component that watches for newly created Pods with no assigned node, and select a node for them to run on.
- 


# Controller Loop:






# References:
- Component: https://kubernetes.io/docs/concepts/overview/components/
- Pod: https://kubernetes.io/docs/concepts/workloads/pods/
- Master and Control plane kindda synonymous after updates: https://stackoverflow.com/questions/68860301/what-is-the-difference-between-master-node-and-control-plane-on-kubernetes
- etcd docs: https://etcd.io/docs/v3.5/faq/  -> I have no idea what problem this component is solving.