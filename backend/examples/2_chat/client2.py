import pika
import asyncio
import threading

# Establish a connection to the RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# Declare a queue for sending and receiving messages
queue_name = 'message_queue'
channel.queue_declare(queue=queue_name)

# Event to signal the receiving thread to stop
stop_receiving = threading.Event()

async def send_message():
    while True:
        message = input("Enter a message to send (or 'exit' to quit): ")
        if message.lower() == 'exit':
            stop_receiving.set()
            break
        channel.basic_publish(exchange='', routing_key=queue_name, body=message)
        print(f"Sent: {message}")

def receive_messages():
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=queue_name + "1")

    def callback(ch, method, properties, body):
        print(f"Received: {body.decode()}")

    channel.basic_consume(queue=queue_name + "1", on_message_callback=callback, auto_ack=True)
    print("Waiting for messages. To exit, press Ctrl+C")
    channel.start_consuming()

async def main():
    receive_thread = threading.Thread(target=receive_messages)
    receive_thread.start()

    await asyncio.gather(send_message())

    stop_receiving.set()
    receive_thread.join()

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
