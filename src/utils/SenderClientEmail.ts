import SES from 'aws-sdk/clients/ses'
import 'dotenv/config'

const SenderClientEmail = new SES({
  region: process.env.regionAWS
})

export { SenderClientEmail, SES }
