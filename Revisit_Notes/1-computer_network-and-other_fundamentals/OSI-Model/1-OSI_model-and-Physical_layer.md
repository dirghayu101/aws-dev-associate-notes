# Quick pointers about OSI Model:
- Another word for OSI 7 layers is networking stack. Every device capable of connecting to the internet will have a network stack. Think of it like the logic and hardware part that facilitates this communication.
- Host Layers: Application, Presentation, Session and Transport -> Chopping and reassembling of data.
- Media Layers: Physical, Data Link and Network -> Deals with transit.
- A layer 1 device, only has the functionality of layer 1.
- A layer 3 device has layer 3, layer 2 and layer 1 capability.
- A layer 2 needs a functioning layer 1, and this goes on for the OSI model. A layer 'n' should have a functional 'n-1' layer.
- We start counting layers from Physical, so Physical is layer 1. Data Link is 2, 
- Encapsulation and Abstraction in OSI model. 
- What is encapsulation and de-encapsulation in OSI model? As the data travel in the layers of OSI model from layer 7 to layer 1, encapsulation happen. Each layer adds their own headers to the data being sent. As the data reaches the destination it travels from layer 1 back to layer 7, then de-encapsulation takes place, headers are removed for data to be presented.
- What is abstraction in OSI model? Let's say you are in the application layer, a web browser let's assume to access the internet. Then you won't be dealing with the layers 1 to 6. You only interact with layer 7. This is abstraction. If you are in data link, you don't care about the physical, you just deal with data link. 

# Quick pointers about Physical Layer (Layer 1):
- Layer 1 uses physical media/characteristics for communication. This can include voltage levels, timings, rates, distance, modulation, etc. Two or more devices connected with each other on layer 1 agree on these and start the communication. They will have some standard like 5V is 1 bit and -5V is 0 bit.
- In layer 1, there is no identification method. All data is processed by all devices. Anything received on any port will be transmitted to every other port.
- Errors and collisions are common occurrence if we talk about just layer 1.
- Layer 1 is the foundation, it talks about how devices are communicating on a physical level.

# Some important terminologies:

- Explain all the interesting things you understood about the Physical Layer from the lecture.
- What is Ethernet?

- What is routing?
- A Router is a process of selecting path along which the data can be transferred from source to the destination. Routing is performed by a special device known as a router.

A router is a networking device that forwards the packet based on the information available in the packet header and forwarding table.

The routing algorithms are used for routing the packets. The routing algorithm is nothing but a software responsible for deciding the optimal path through which packet can be transmitted.

The routing protocols use the metric to determine the best path for the packet delivery. The metric is the standard of measurement such as hop count, bandwidth, delay, current load on the path, etc. used by the routing algorithm to determine the optimal path to the destination.

- What is a port?
In computer networking, a port or port number is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service.

- What is a network service?
In computer networking, a network service is an application running at the network application layer and above, that provides data storage, manipulation, presentation, communication or other capability which is often implemented using a client–server or peer-to-peer architecture based on application layer network protocols.

- Stateful and Stateless Architecture:

Stateful Architecture: Stateful architecture or application describes a structure that allows users to store, record, and return to already established information and processes over the internet. It entails transactions that are performed using past transactions as a reference point. In stateful applications, the current transaction can be affected by the previous ones. 

Stateless Architecture: A stateless architecture or application is a type of Internet protocol where the state of the previous transactions is neither stored nor referenced in subsequent transactions. Each request sent between the sender and receiver can be interpreted and does not need earlier requests for its execution. This is a protocol where a client and server request and response are made in a current state. In addition, the status of the current session is not retained or carried over to the next transaction.

The key difference between stateful and stateless is whether an application retains information about the current state of a user's interactions or if it treats each request as an independent, isolated transaction. However there are also specific differences including:

1. Scalability: Stateless applications are generally more scalable, as each request is independent and can be handled by any available server. Stateful applications may require more complex mechanisms for load balancing and session management.

2. Fault tolerance: Stateless applications can be more fault-tolerant, as the loss of a server doesn't impact user sessions. In stateful applications, the loss of a server can result in the loss of session data unless additional measures, such as session replication or clustering, are in place.

3. Resource utilization: Stateless applications often have lower resource utilization because there is no need to store and manage session data. Stateful applications may require more memory and processing power to handle and maintain session information.

4. Development complexity: Stateless applications can be simpler to develop and maintain, as there is no need to manage state across multiple requests. Stateful applications, on the other hand, require careful handling of session data and state management.

A stateless architecture does not, however, mean that state information is not stored. It simply means that state information is stored outside of the server. Therefore, the state of being stateless only applies to the server.

In AWS, a security group is a virtual firewall that controls inbound and outbound traffic for virtual machines or instances within a cloud environment. Security groups are stateful. When you allow a specific incoming traffic flow, the corresponding outgoing traffic flow is automatically allowed as well. In other words, the state of the connection is tracked.

Network Access Control Lists (NACLs) are used to control inbound and outbound traffic at the subnet level in AWS. NACLs are stateless. Being stateless means that you must explicitly define rules for both incoming and outgoing traffic.

Functions and design patterns can also be stateful or stateless. The key principle behind something that is stateful is that it has perfect memory or knowledge of previous calls or requests, while something that is stateless has no memory or knowledge of previous calls or requests.

- What is a session?
In computer science, according to wikipedia, a session is a temporary and interactive information interchange between two or more computing devices. 

Refer this for more (has links to some interesting articles): https://medium.com/@llamacorn/computer-science-sessions-7517ec8af766