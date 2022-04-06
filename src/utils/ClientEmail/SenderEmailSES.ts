import { ISenderEmail, IMessage } from '@interfaces/index'
import SES from 'aws-sdk/clients/ses'

export default class SenderEmailSES implements ISenderEmail {
  private SESClient : SES
  constructor (regionInput : string) {
    this.SESClient = new SES({ region: regionInput })
  }

  async senderEmail (message: IMessage) : Promise<void> {
    await this.SESClient.sendEmail({
      Source: `${message.from.name} <${message.from.address}>`,
      Destination: { ToAddresses: [`${message.to.name} <${message.to.address}>`] },
      Message: {
        Subject: { Data: message.subject },
        Body: { Text: { Data: message.body } }
      }
    }).promise()
  }
}
