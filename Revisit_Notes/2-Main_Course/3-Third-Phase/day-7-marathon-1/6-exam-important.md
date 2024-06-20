Write important points related to development and exams in general.

- EC2 instance type is an important topic, checkout notes and associated resources like links and screenshots of the lecture. If you know it well, gives you an edge in exam. You need attention to detail.
- EC2 instance type screenshot resources starting with 0. Very important for exam.
- If your configuration is io1, then you can achieve a maximum of 50 IOPS/GB, in case of io2, this is 500 IOPS/GB and in case of BlockExpress, this will be 1000 IOPS/GB. This is the threshold, you cannot configure it to be more than this.
- Another figure to keep in your head -> For a **provisioned** ec2, io1 can give a max performance of 260,000 IOPS or 7500 MB/s, io2 can give a max of 160,000 IOPS or 4750 MB/s and io2 Block Express can give you up to 260,000 IOPS or 7500 MB/s.
- Choosing between EC2 and instance storage is an important topic in exam. Check the screenshot related.
- One of the ways to see if an instance has moved between hosts (remember that ec2 are hosted in a parent OS) if to check its initially initialized public IP address -> This changes when a change of host occurs.
- - Each EBS volume has 1 unique Data Encryption Key (single this is emphasis).
- Snapshots created of an EBS or Volumes created from a snapshot in EBS will use the same DEK. <- Very important.