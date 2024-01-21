const fs = require("fs");
const Schema = require("./messages_pb");

const message1 = new Schema.Message();
message1.setName("Sagar");
message1.setAge(30);
message1.setMessage("Hi you missed my message earlier");

const message2 = new Schema.Message();
message2.setName("Sagar1");
message2.setAge(31);
message2.setMessage("Hi you missed my message earlier and this");

const messages = new Schema.Messsages();
messages.addMessages(message1);
messages.addMessages(message2);

const bytes = messages.serializeBinary();
console.log(bytes);

fs.writeFileSync("protobuf", bytes);

const receivedBytes = fs.readFileSync("protobuf");

console.log(receivedBytes);
const receivedMessages = Schema.Messsages.deserializeBinary(receivedBytes);

console.log("receivedMessages", receivedMessages);
console.log("receivedMessagesList", receivedMessages.getMessagesList());

const messagesArr = receivedMessages.getMessagesList();
for (let i = 0; i < messagesArr.length; i++) {
  let message = messagesArr[i];
  console.log(message.getName());
  console.log(message.getAge());
  console.log(message.getMessage());
}
