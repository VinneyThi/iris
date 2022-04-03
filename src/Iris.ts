import { EventEmitter } from 'events'
import { SenderClientEmail, SES } from '@utils/SenderClientEmail'
import { IKafkaNewOrderProcess } from '@interfaces/index'
import 'dotenv/config'

class Iris extends EventEmitter {
    private clientSES : SES
    constructor () {
      super()
      this.clientSES = SenderClientEmail

      this.on('newOrder_Process', async (data:IKafkaNewOrderProcess) => {
        await this.clientSES.sendEmail({
          Source: process.env.Email_verified_AWS as string,
          Destination: { ToAddresses: [`${data.name} <${data.email}>`] },
          Message: {
            Subject: { Data: 'New Order in Processing' },
            Body: { Text: { Data: `Hello ${data.name} your new order : ${data.orderID} is processing state.` } }
          }
        }).promise()
      })
    }
}

export default Iris
