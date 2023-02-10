package com.newIbsApp.ibs.repository;
import com.newIbsApp.ibs.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * repository which holds a user entity with a key of type long
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}

