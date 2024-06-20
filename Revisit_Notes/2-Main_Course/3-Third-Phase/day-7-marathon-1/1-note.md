# 104: Virtualization 101 (12:27)
- Binary Translation in Hypervisor:
- System Calls
- User mode / Unprivileged Mode
- System wide error -> When an application other then OS tries to make system call.
- Emulated Virtualization for solving the problem of multiple OS in privileged mode. -> Hypervisor -> In this case, guest OS believes that the operating system is running on real hardware.
- Binary Translation -> A method of resolving multiple OS making privileged call at the same time. -> This is slow. -> Hyper Call solution.
- Privileged Calls -> hardware calls made by kernel.
- Hyper Calls -> Calls hypervisor instead of hardware. Hypervisor is the middleware between Hardware and Guest OS. -> Uses Para Virtualization.
- Para-virtualization -> Hardware calls are modified to make them hyper calls. Instead of calling hardware for making some changes or perform some actions they will perform calls to the hypervisor. -> Guest OS became aware of the para-virtualization.
- Understand this concept: Virtualization till this point happened on the software level. But there is a limit to what you can achieve so hypervisor with hardware components were being used for virtualization. 
- SR-IOV network card virtualization is interesting. EC2 make use of this for enhanced networking capabilities.
- Good ref: https://www.brendangregg.com/blog/2017-11-29/aws-ec2-virtualization-2017.html

# 105: EC2 Architecture and Resilience (12:36)
- Check the screenshots for EC2 Architecture.
- Shared host have isolation. So the other user won't be able to see anything that's happening in your instance.
- EC2 runs on a single AZ.
- EC2 is Availability Zone Resilient. If an AZ fails, so will the EC2.
- An EC2 has local store called instance store. <- Stored in the host OS. If the ec2 is moved from the host, this is lost
- Two types of networking Storage Networking and Data Networking.
- When an instance is provisioned in a specific subnet within a VPC what really happen is that a primary elastic network interface is provisioned in a subnet, this is mapped to the physical hardware on the EC2 host.
- Subnets are also provisioned in one particular availability zone. <- This means that an instance can have multiple elastic network interface mapped to their hardware (_in the same availability zone._)
- EBS lets you allocate volume. (Check diagram)
- Availability zone matters a lot when you are talking about EC2 instance. -> You cannot use an EBS from a different zone to store data.
- If availability zone is down, then all of these dependencies will have an impact.
- Elastic Block Storage: In the same availability zone if there is an EBS, you can connect your EC2 to this to store your data remotely.
- EC2 runs on a host, and even if you restart, it stays on the same host.
- EC2 instances stay on a host until one of two things happen: You stop and then start an instance (not restart) or host fails or is taken down by AWS for some reason. Otherwise, it will stay on the same host.
- Even if an instance's host changes, the host will be in the same AZ.
- EC2 is good for: Traditional OS + Application Compute (legacy), long running compute needs, server style application, if your application has a burst or steady state load, monolithic application stack, etc. (Check SS).
- The biggest issue with EC2 is that it is tied down to an availability zone. For a highly available system, this is a big concern. 
- At the same time, this is a big strength, as the blast radius will be an availability zone.

# 106: EC2 Instance Types - PART1 (11:52)
- Re-watch this video at the end for notes.
- What are instance type based on: Raw CPU, Memory, Local Storage Capacity & type provisioned also the resource ratio (ratio of RAM to processing power or something similar), storage and data network bandwidth (let's say you have a premium storage type, in that case you will have to choose an EC2 with a high data/network bandwidth to fully exploit the premium storage use case and some EC2 instances are specially designed for this.) System architecture is also a factor, some hardware are designed for specific functionalities.
- 5 main categories: General purpose (Default, even ratio of resources, use this if there is no special case), Compute Optimized, Memory Optimized, Accelerated Computing, and Storage Optimized. Checkout SS for more details.
- Naming scheme of EC2 comprises of (instance type e.g. R5dn.8xlarge): Instance family (eg R) , Generation (eg 5), extra capabilities (eg dn) and finally Instance Size (8xlarge)
- Instance family: Like T, M, I and R. Families designed for specific functionalities (check 5 categories).
- Generation: Always choose the latest/ most recent. Can be 5, 4, 3, etc.
- Extra Capabilities: Can be a for AMD CPU, d for NVMe storage, n for network optimized, e for extra capacity which can be RAM or storage.
- Instance Size: Can be nano, micro, small, medium, large, xlarge, 2xlarge, 4xlarge or 8xlarge, etc. Point to note, scale out is always preferred over scaling up. 

# 107: EC2 Instance Types - PART2 (8:13)
- Re-watch for notes. Refer the web resources as well and put it in exam relevant section.
- Checkout EC2 instance type screenshot starting with zero in the resource directory of this section. It's important for exam prep.

# 108: EC2 SSH vs EC2 Instance Connect (17:06) -> Demo 
-  Fingerprint in SSH. -> it's not always safe, know what you are getting into using the fingerprint of the public key. -> man in the middle attack. Ref: https://superuser.com/questions/421997/what-is-a-ssh-key-fingerprint-and-how-is-it-generated
- EC2 instance connect resource: https://ip-ranges.amazonaws.com/ip-ranges.json -> This has IP address of AWS resources, you can use this to make security group rules to access an ec2 instance just using the IP block of specific service. This will increase the security.

# 109: Storage Refresher (14:16)
- Exam important -> Direct attached/ local attached storage: Direct attached to ec2 host and it is called the instance store. Super fast, but it is not resilient to hardware failure, disk failure. Related to Ephemeral Storage.
- Exam important -> Network Attached Storage: Volumes are created and delivered over the network. Elastic Block Store is an example. Related to Persistent Storage.
- Exam important -> Ephemeral Storage: Temporary storage that doesn't exist long term and on which you cannot rely as it is not persistent. Instance store (direct attached) is an example. Related to Direct Attached / Local Attached Storage.
- Exam important -> Persistent Storage: Storage that is persistent and lives past the life of device it is attached to. Related to network attached storage.
- Block Storage -> Entire Storage is presented as addressable blocks to kernel/os, then the os puts a layer of filesystem over it and start using it. All the SSDs you use are just addressed block of storage with no file system, your OS puts a filesystem over it to make use of it.
- Block Storage is Mountable and Bootable.
- File Storage -> There exist a file system instead of just addressed blocks of memories.
- File Storage is not Bootable but is Mountable.
- Object Storage -> Collection of Objects. Objects can be anything and there is a flat structure. An object is a key value pair. Collection of object, and has a flat structure.
- Object Storage is neither Bootable nor Mountable.
- Storage Performance Parameter includes: IO Size, IOPS (Input Output Per Second) and Throughput. Check Screenshot. 


# 110: Elastic Block Store (EBS) Service Architecture (8:43)
- Block Storage - Raw Disk Allocations called Volume. This can be encrypted using KMS.
- Instances see block device and create file system on this device (ext3/4, xfs)
- Storage is provisioned in One AZ. It is resilient in that one az it's provisioned. Though if there is a major AZ failure, then it will fail.
- EBS volume can be attached, detached or re-attached.
- You can create snapshots of EBS volumes.
- Snapshot of an EBS volume is regional resistant. Think: Multiple copies across AZs.
- Billed based on GB consumed.
- Detached and Re-attached, not linked to ec2 instance's lifecycle. EBS volume is separate entity from the EC2 instance it is attached to.
- EBS volume provisioned in one availability zone cannot be accessed by EC2 instance in another availability zone. Cross AZ attachment of EBS Volume is not possible.  -> Important.
- Can back it up as S3 snapshot.
- Checkout EBS Screenshot.

# 111: EBS Volume Types - General Purpose SSD - GP2 & GP3 (9:23)
- In GP2 you also consider a factor known as IO credit. 
- In case of GP2 you can allocate volumes starting from 1 GB and it can go up to 16TB. If the provisioned storage is more than 1000 GB, IO credit is not applicable.
- Checkout the IO credit thing, it's created by amazon for GP2 and I am not going to put efforts in noting down points from slide, go through it.
- In case of GP3, there is no IO credit.
- GP2 is default, in general cases (not special), GP3 is more economical than GP2.
- Checkout Screenshots or architecture.

NOTE: In the screenshots for the below section, a term Burst is often used. It means the maximum possible threshold that can be achieved.

# 112: EBS Volume Types - Provisioned IOPS (Comparison between IO1 and IO2) (6:15)
- IO is the factor/credit of GP2. Check the previous section. 
- IO1, IO2 and IO Block Express. -> Types of EBS.
- IO speed doesn't depend on the size you allocate, you can adjust them regardless of the size you are using.
- If your configuration is io1, then you can achieve a maximum of 50 IOPS/GB, in case of io2, this is 500 IOPS/GB and in case of BlockExpress, this will be 1000 IOPS/GB. This is the threshold, you cannot configure it to be more than this.
- Another figure to keep in your head -> For a **provisioned** ec2, io1 can give a max performance of 260,000 IOPS or 7500 MB/s, io2 can give a max of 160,000 IOPS or 4750 MB/s and io2 Block Express can give you up to 260,000 IOPS or 7500 MB/s.
- Check the screenshot.

# 113: EBS Volume Types - HDD-Based (4:32)
- HDD -> Moving Components -> Slow.
- Check screenshot.

# 114: Instance Store Volumes - Architecture (9:00)
- Not all instances have a sizeable instance store volume.
- Instances have their own volume.
- They give the best performance. (better than EBS or any other option)
- They can only attached during the launching of an instant. Cannot be attached after an instance has been provisioned.
- What are they called? The official name is Ephemeral Storage. Ephemeral means temporary and so always think of them as such.
- They are temporary/ephemeral.
- As you know EC2 instances are hosted in a parent OS, so the parent OS originally owns the ephemeral disk allocated to the ec2.
- Now let's say if the parent host is put on maintenance, then the ec2 instances in the parent host will be moved. <- And this, can disrupt the operations of ephemeral disk. Instance store volume are local to a host.
- Even when you change an EC2 type, the instant will be moved from one host to other resulting in loss of the ephemeral disk.
- Instance store volume might be ephemeral but you cannot ignore them because of the speed they are capable of providing.
- You pay for it anyway as it is included in the instance prize.
- Check Screenshot.

# 115: Choosing Between the EC2 Instance Store and EBS (8:49)
- Rule: If you need persistent storage, resilience storage or isolated storage (instance store is local) avoid instance store.
- Screenshot for this section are important for exam. 

# 116: Snapshots, Restore & Fast Snapshot Restore (FSR) (10:55)
- S3 is a non-negotiable intermediatory for Snapshot. 
- Snapshots are region resilient as S3 is.
- The first snapshot you create is a full copy of 'data' on the volume. A 40GB volume can have just 4GB data so only 4GB will be copied.
- Future snapshots (once you have a copy) are incremented.
- Snaps if you restore them are restored lazily - fetched gradually (async kind of) -> dd command in linux.
- Snapshot are billed on GB month basis. (20 GB stored for 15 days is equal to 10 GB stored for a month)
- New functionality available: Fast Snapshot Restore (FSR) -> Threshold of 50 snapshots per region. 

# 117: EBS Volumes - PART1 (15:16) - DEMO
- Command used: lsblk, file, mkfs, mount and blkid.
- Linux file locations: /dev/xvdf, /etc/fstab
- lsblk -> Also shows disk used for booting -> read about the output of this command.
- sudo file -s /dev/xvdf -> This command was used to check if the storage device attached has any filesystem. The output will be "/dev/xvdf: data" if you don't have any filesystem.
- sudo file -s xfs /dev/xvdf -> Make xfs type filesystem for the volume loaded on xvdf location.
- sudo mkdir /rootLocationOfFileSystem && sudo mount /dev/xvdf /rootLocationOfFileSystem -> This was the command used for mounting the newly created file system.
- df -k -> List all the filesystem loaded in the system.

# 118: EBS Volumes - PART2 (14:13) - DEMO
- In the last section, you loaded the file system manually, in this one you will setup auto-load.
- sudo blkid: Gives the unique identifier for all the storage devices available to be mounted.
- sudo nano /etc/fstab -> location where all the mounted file system's metadata is stored. You add the ID here. -> read more about the metadata here (not relevant for exam but interesting)
- sudo mount -a -> mounts all the file system whose information is available on /etc/fstab
- You can create a snapshot of an EBS volume being used in one region in another region. <- Then you can replicate in another region.

# 119: EBS Volumes - PART3 (14:27)
- lsblk displays everything that can possibly be mounted whereas df -k only lists the currently mounted ones.

# 120: EBS Encryption (8:22)
- Revisit DEK and KMS concepts.
- DEK is generated here as well. DEK is encrypted value of an encryption key which can only be decrypted in KMS. 
- This DEK is decrypted and used to encrypt data before storing it at rest. After encrypting data for storing it, this decrypted key is discarded and an encrypted copy of it would have already been stored along with data.
- AWS accounts can be configured to encrypt EBS volumes by default.
- You can use a default or manual key to use for encryption.
- Each EBS volume has 1 unique Data Encryption Key (single this is emphasis).
- Snapshots created of an EBS or Volumes created from a snapshot in EBS will use the same DEK. <- Very important.
- The operating system is not aware of this encryption -> abstracted -> no performance loss. -> Very efficient and optimized.
- You cannot change a volume which is encrypted to not be encrypted -> you can clone the entire filesystem after logging into an ec2 though.

