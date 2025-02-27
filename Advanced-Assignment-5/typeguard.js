"use strict";
function isTextMessage(msg) {
    return msg.content !== undefined;
}
function handleMessage(msg) {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    }
    else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}
const textMsg = { content: "Hello, world!" };
const imageMsg = { imageUrl: "http://example.com/image.jpg" };
handleMessage(textMsg);
handleMessage(imageMsg);
