#!/bin/sh
curl http://169.254.169.254/latest/meta-data/
curl http://169.254.169.254/latest/meta-data/public-hostname


# Download the metadata utility tool locally to access metadata.
wget http://s3.amazonaws.com/ec2metadata/ec2-metadata
chmod u+x ec2-metadata

ec2-metadata --help
ec2-metadata -a
ec2-metadata -z
ec2-metadata -s