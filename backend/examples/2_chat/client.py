import pika
import asyncio
import threading
import multiprocessing

# Establish a connection to the RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# Declare a queue for sending and receiving messages
queue_name = 'message_queue'
channel.queue_declare(queue=queue_name+"1")

# Event to signal the receiving thread to stop
stop_receiving = threading.Event()

q_in = multiprocessing.Queue()
q_out = multiprocessing.Queue()


def send_message():
    while True:
        message = input("Enter a message to send (or 'exit' to quit): ")
        if message.lower() == 'exit':
            stop_receiving.set()
            break
        channel.basic_publish(exchange='', routing_key=queue_name+"1", body=message)
        print(f"Sent: {message}")

        if not q_out.empty():
            print(q_out.get())


def receive_messages():
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=queue_name)

    def callback(ch, method, properties, body):
        q_out.put(body, block=False)

    channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
    print("Waiting for messages. To exit, press Ctrl+C")
    channel.start_consuming()


def main():
    receive_thread = threading.Thread(target=send_message())
    receive_thread.start()

    receive_messages()


main()

