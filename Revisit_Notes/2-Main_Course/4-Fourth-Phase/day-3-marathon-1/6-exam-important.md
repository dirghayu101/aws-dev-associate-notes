Write important points related to development and exams in general.

- An elastic IP requires an IGW attached to a VPC in order to work but there is no dependency in the template: implicit (e.g. !Ref) or explicit. <- This might work or not, based on the random oder in which cloudformation choose to initialize resources. You can resolve this using an explicit depends on relationship declaration in the elastic IP declaration. <- Checkout cloud formation depends on directory under screenshot resource (number 2).

- Cross stack allow you to use resources in two different stack, whereas nested stack gives you a template for setup or to create modular components. They are two different thing, and you should understand the difference. 

- sudo cat /var/log/cloud-init-output.log       # Your supplied user data logs.
- sudo cat /var/log/cfn-init-cmd.log            # What cfn-init commands were used to reach the desired state.
- sudo cat /var/log/cfn-init.log                # Granular look of above commands.
- sudo cat /var/log/cfn-hup.log                 # cfn-hup use case logs.