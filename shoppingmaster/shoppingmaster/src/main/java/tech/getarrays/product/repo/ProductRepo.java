package tech.getarrays.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.getarrays.product.model.Product;

import java.util.Optional;
@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
    void deleteProductById(Long id);

    Optional<Product> findProductById(Long id);
}
