import { Kafka } from 'kafkajs'
import 'dotenv/config'
import Iris from './Iris'
import { IKafkaNewOrderProcess } from '@interfaces/index'

const irisManager = new Iris()
const kafka = new Kafka({
  clientId: process.env.CLIENT_ID_KAFKA,
  brokers: [process.env.BROKER_KAFKA as string]
})
const consumer = kafka.consumer({ groupId: process.env.GROUP_ID_CONSUMER_KAFKA as string })

async function run () {
  await consumer.subscribe({ topic: process.env.TOPIC_KAFKA as string }) // fromBeginning:? true

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (message.value !== null) {
        const dataKafka = JSON.parse(message.value.toString()) as IKafkaNewOrderProcess
        irisManager.emit('newOrder_Process', dataKafka)
      }
    }
  })
}

run()
