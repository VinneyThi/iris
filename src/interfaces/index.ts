interface IKafkaNewOrderProcess{
    'orderID':string,
    'name' : string,
    'cpf':string,
    'amount':number,
    'cardNum':string,
    'address':string,
    'email':string,
    'productCode':string,
    }

export { IKafkaNewOrderProcess }
