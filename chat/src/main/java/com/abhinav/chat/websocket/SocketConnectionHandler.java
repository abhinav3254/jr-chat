package com.abhinav.chat.websocket;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


// Socket-Connection Configuration class
@Configuration
public class SocketConnectionHandler extends TextWebSocketHandler {

    // In this list all the connections will be stored
    // Then it will be used to broadcast the message
    List<WebSocketSession> webSocketSessions = Collections.synchronizedList(new ArrayList<>());

    // This method is executed when client tries to connect
    // to the sockets
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        System.out.println(session.getId()+" system");
        webSocketSessions.add(session);
    }

    // When client disconnect from WebSocket then this
    // method is called
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        System.out.println(session.getId()+" Disconnected");
        webSocketSessions.remove(session);
    }

    // It will handle exchanging of message in the network
    // It will have a session info who is sending the
    // message Also the Message object passes as parameter
    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        super.handleMessage(session, message);

        //
        for (WebSocketSession webSocketSession:webSocketSessions) {
            if (session == webSocketSession)
                continue;

            // used to send message
            webSocketSession.sendMessage(message);
        }
    }
}
