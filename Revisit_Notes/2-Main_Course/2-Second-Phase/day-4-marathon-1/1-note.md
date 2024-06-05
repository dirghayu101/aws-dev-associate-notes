# Policy interpretation deep dive - Example 1 (10)
- I will start with policy's syntax. They are written in JSON.
- Starts with metadata header version, and is immediately followed with an Array called Statement.
- Now Statement array can have several element, each of which is permission description.
- Checkout example of policies in resources directory.
- By default everything is denied implicitly. Implicit deny can only be overruled by explicit allow. And explicit deny overrules everything.
- Read the about statement again. Now think about this, a policy which has only deny statement, can it be standalone? No, there will be another policy in conjunction with allow statements. As deny is implicit, a policy with only deny cannot be standalone.
- A statement can have following component: Sid (abbreviated to statement ID), Effect, Action or NotAction, Resources and Condition (optional).
- Effect: can be allow or deny.
- Action: which actions will be affected by Effect.
- Resource: what are the resource these actions will affect?
- Conditions: any conditionals like time specific, date or anything.


# Policy interpretation deep dive - Example 2 (9)
- Condition example, region restriction:
``` json
{
    "Condition":{
        "StringsNotEqual":{
            "aws:RequestedRegion":[
                "ap-southeast-2",
                "eu-west-1"
            ]
        }
    }
}

```
- Be very observant about Not operations. Identify/locate all not conditions in the policy, before even start reading it. 


# Policy interpretation deep dive - Example 3 (11)
- Three actions of s3, ListAllMyBuckets, GetBucketLocation and CreateBucket, requires you to put wildcard as resource. (Remember)
```json 
    {
    "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "s3:ListAllMyBuckets",
                    "s3:GetBucketLocation"
                ],
                "Resource": "*"
            }]
    }

```
- 

# AWS permission evaluation (11)



# CloudHSM (14)
- HSM is hardware security module.