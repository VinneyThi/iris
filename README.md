# iris
Iris was the personification of the rainbow and the messenger of the gods

## Introduction
This is the microserver performs email sending.

## Todo list
List of cool things to add:

* [ ] Add Units Test e intregation tests 
* [ ] Add a system to store e-mails sender
* [ ] Add a script builder
* [ ] Create interface to possibilite use other messages server 


## How to use?
### Sender Email
Need configure .env with info of sender email do you user

Is possible use SES from Amazon servicer ou STMP, if both is configure SES Amazon have priority.

In `Email_verified Address` and `Email Verifed_name` are name and email to user from in sender
 
### Kafka
  Need configure connection with kafka cluster in .env
