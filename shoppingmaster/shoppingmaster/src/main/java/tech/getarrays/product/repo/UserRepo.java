package tech.getarrays.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.product.model.UserModel;

public interface UserRepo extends JpaRepository<UserModel,String> {
    UserModel findByUsername(String username);
}
