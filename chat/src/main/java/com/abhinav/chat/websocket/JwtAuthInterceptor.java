package com.abhinav.chat.websocket;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.util.Map;

public class JwtAuthInterceptor implements HandshakeInterceptor {
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        System.out.println(request.getHeaders());
        String token = request.getHeaders().getFirst("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // Remove "Bearer "
            try {
                // Validate JWT here
                Claims claims = Jwts.parser().setSigningKey("37XLYJPXX33RJYNZI8DLKYSVHVSSJO3NASXOIPYB7FO").parseClaimsJws(token).getBody();
                String username = claims.getSubject();
                // You can add username to attributes if needed
                attributes.put("username", username);
                return true;
            } catch (Exception e) {
                // Invalid token
                return false;
            }
        }
        // No token found
        return false;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {

    }
}
