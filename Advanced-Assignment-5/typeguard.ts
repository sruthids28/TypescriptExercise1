type TextMessage = { content: string };
type ImageMessage = { imageUrl: string };
type Message = TextMessage | ImageMessage;

function isTextMessage(msg: Message): msg is TextMessage {
    return (msg as TextMessage).content !== undefined;
}

function handleMessage(msg: Message): void {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    } else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}
const textMsg: TextMessage = { content: "Hello, world!" };
const imageMsg: ImageMessage = { imageUrl: "http://example.com/image.jpg" };

handleMessage(textMsg); 
handleMessage(imageMsg);