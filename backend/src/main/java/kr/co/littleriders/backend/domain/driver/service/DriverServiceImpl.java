package kr.co.littleriders.backend.domain.driver.service;

import kr.co.littleriders.backend.domain.driver.DriverService;
import kr.co.littleriders.backend.domain.driver.entity.Driver;
import kr.co.littleriders.backend.domain.driver.error.code.DriverErrorCode;
import kr.co.littleriders.backend.domain.driver.error.exception.DriverException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
class DriverServiceImpl implements DriverService {
    private final DriverRepository driverRepository;

    @Override
    public Driver findById(long id) {
        return driverRepository.findById(id).orElseThrow(
                () -> DriverException.from(DriverErrorCode.NOT_FOUND)
        );
    }

    @Override
    public boolean existsById(long id) {
        return driverRepository.existsById(id);
    }

    @Override
    public boolean notExistsById(long id) {
        return !driverRepository.existsById(id);
    }

    @Override
    public long save(Driver driver) {
        return driverRepository.save(driver).getId();
    }
}
