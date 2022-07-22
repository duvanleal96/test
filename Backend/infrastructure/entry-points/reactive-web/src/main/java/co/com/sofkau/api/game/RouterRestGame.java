package co.com.sofkau.api.game;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class RouterRestGame {
    @Bean
    public RouterFunction<ServerResponse> routerFunctionGame(HandlerGame handlerGame) {
        return route(POST("/api/usecase/game"), handlerGame::createGamePostUseCase)

                .and(route(GET("/api/game"), handlerGame::listenGameGETUseCase))
                .and(route(DELETE("/api/game/{id}"), handlerGame::listenDELETEGameUseCase))
                .and(route(PUT("/api/game/actualizar/{id}"), handlerGame::listenPUTUpdateGameUseCase))
                .and(route(GET("/api/gameId/{id}"), handlerGame::listenGETListByIdUseCase))
                .and(route(PUT("/api/game/retire/{id}"), handlerGame::listenRetireGamePlayerUseCase));

    }
}
