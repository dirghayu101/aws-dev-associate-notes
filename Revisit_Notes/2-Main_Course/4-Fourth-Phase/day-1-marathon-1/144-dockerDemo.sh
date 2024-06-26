#!/bin/sh

sudo dnf install docker
sudo service docker start
sudo username -a -G docker ec2-user 
# The above command is magical, it can grant ec2-user privilege to access docker thus removing the overhead 
of typing sudo with every command. Ufff.

# After typing in the above command the changes won’t reflect immediately, you will still get permission denied error if you type in any docker command without sudo. You will have to restart the terminal for the changes to reflect.

exit

# Then after starting a new session.
sudo su - ec2-user # ec2-user login who has permission.
docker build -t containerofcats .
docker images —filter reference=containerofcats
docker run -t -i -p 80:80 containerofcats
docker run -t --detach -p 80:80 containerofcats
docker login --username=dirghayu101
docker images -a
docker images --filter "dangling=true"
docker tag <iamgeID> dirghayu101/<imageName>
docker push dirghayu101/<imageName>:latest
