package kr.co.littleriders.backend.domain.route.service;

import kr.co.littleriders.backend.domain.route.RouteService;
import kr.co.littleriders.backend.domain.route.entity.Route;
import kr.co.littleriders.backend.domain.route.error.code.RouteErrorCode;
import kr.co.littleriders.backend.domain.route.error.exception.RouteException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class RouteServiceImpl implements RouteService {

    private final RouteRepository routeRepository;

    @Override
    public Route findById(long id) {
        return routeRepository.findById(id).orElseThrow(
                () -> RouteException.from(RouteErrorCode.NOT_FOUND)
        );
    }

    @Override
    public boolean existsById(final long id) {
        return routeRepository.existsById(id);
    }

    @Override
    public boolean notExistsById(final long id) {
        return !routeRepository.existsById(id);
    }

    @Override
    public long save(Route route) {
        return routeRepository.save(route).getId();
    }

}
