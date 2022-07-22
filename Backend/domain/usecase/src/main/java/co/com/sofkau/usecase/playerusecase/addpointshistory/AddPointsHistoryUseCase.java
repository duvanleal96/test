package co.com.sofkau.usecase.playerusecase.addpointshistory;

import co.com.sofkau.model.player.Player;
import co.com.sofkau.model.player.gateways.PlayerRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import java.util.List;

@RequiredArgsConstructor
public class AddPointsHistoryUseCase {
    private final PlayerRepository repository;

    public Mono<Player> addpointshistory(Integer pointshistory, Player player){

        List<Integer>  listsPointshistory = player.getPointsHistory();
        listsPointshistory.add(pointshistory);
        player.setPointsHistory(listsPointshistory);

        return repository.addPointsHistory(player);
    }
}
