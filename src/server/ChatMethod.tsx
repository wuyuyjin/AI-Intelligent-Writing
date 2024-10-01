import useResultStore from "../store/useResultStore";

interface dataType {
  question: string
  promptId?: number
  prompt?: string
  status: number
}

const ChatMethod = () => {
  const setResult = useResultStore.use.changeResult()
  let result: string;

  // const data = {
  //   question: inputData,
  //   promptId: 1,
  //   prompt: referenceCopy,
  //   status: referenceCopy ? 0 : 1
  // }
  const IFlytekChat = (chat: dataType) => {
    const userId = '6afec9c4-66ef-4dc1-94ed-99441d3484cb'; // 你随机设置的 userId
    // const topicld = ""
    const ChatUrl = "ws://xiaoli.chat:8000"
    // const socketUrl = `${ChatUrl}/ws/ai/iflyteks?userId=${userId}&topicId=`

    const socketUrl = `${ChatUrl}/ws/ai/iflyteks?userId=${userId}&topicId=`

    // const socketUrl = 'ws://apptest.mossyear.com/payment/message?machineCode=baiyunshanmac'
    // 创建WebSocket对象
    const socket = new WebSocket(socketUrl);

    // 监听WebSocket连接打开事件
    socket.addEventListener('open', () => {
      console.log('WebSocket连接已打开');
      // 连接成功后发送消息
      socket.send(JSON.stringify(chat));
    });

    // 监听WebSocket接收到消息事件
    socket.addEventListener('message', (event) => {
      let data = JSON.parse(event.data);
      try {
        if (data && data.content) {
          result += data.content; // 将收到的消息 content 拼接到 result 中
        } else {
          console.log('收到无效消息或缺少内容:', data);
        }
        console.log("result:"+result)
        setResult(result)

        // 在此可以根据需要进行其他逻辑处理
        // 例如判断是否接收到了所有需要的消息，然后进行回复等操作
      } catch (error) {
        console.error('解析消息时出错:', error);
      }

      if (!data.content) {
        socket.close()
        return;
      }
    });

    // 监听WebSocket连接关闭事件
    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log(`WebSocket连接已关闭，状态码: ${event.code}，原因: ${event.reason}`);
      } else {
        console.log('WebSocket连接意外关闭');
      }

    });

    // 监听WebSocket发生错误事件
    socket.addEventListener('error', (error) => {
      console.error('WebSocket发生错误:', error);
    });


      // const socketUrl = 'wss://apptest.mossyear.com/payment/message?machineCode=baiyunshanmac'
      // // 创建WebSocket对象
      // const socket = new WebSocket(socketUrl);
      //
      // // 监听WebSocket连接打开事件
      // socket.addEventListener('open', () => {
      //   console.log('WebSocket连接已打开');
      //   // 连接成功后发送消息
      //   socket.send(chat);
      // });
      //
      // // 监听WebSocket接收到消息事件
      // socket.addEventListener('message', (event) => {
      //   let data = JSON.stringify(event.data);
      //   setResult(data)
      // });

    }
    return {IFlytekChat}
}

  export default ChatMethod