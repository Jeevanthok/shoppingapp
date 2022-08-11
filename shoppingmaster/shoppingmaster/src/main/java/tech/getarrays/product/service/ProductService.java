package tech.getarrays.product.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.product.exception.UserNotFoundException;
import tech.getarrays.product.model.Product;
import tech.getarrays.product.model.UserModel;
import tech.getarrays.product.repo.ProductRepo;
import tech.getarrays.product.repo.UserRepo;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class ProductService {
    @Autowired
    private final ProductRepo productRepo;
    @Autowired
    private final UserRepo userRepo;
    @Autowired
    public ProductService(ProductRepo productRepo, UserRepo userRepo) {
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }

    public Product addProduct(Product product) {

        return productRepo.save(product);
    }

    public List<Product> findAllProdcut() {
        return productRepo.findAll();
    }

    public Product updateproduct(Product product) {
        return productRepo.save(product);
    }

    public Product findProductById(Long id) {
        return productRepo.findProductById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteProduct(Long id){
        productRepo.deleteProductById(id);
    }
    public Map<String, String> login(Map<String, String> userInput) {
        String username = userInput.get("username");
        String password = userInput.get("password");
        Map<String, String> response = new HashMap<String, String>();
        try {
            UserModel userModel = userRepo.findByUsername(username);
            if(username.equals("admin")){
                if (userModel.getUsername().equals(username) && userModel.getPassword().equals(password)) {
                    response.put("status", "valid-admin");
                    return response;
                }
            }else if (userModel.getUsername().equals(username) && userModel.getPassword().equals(password)) {
                response.put("status", "valid-user");
                return response;
            }else {
                response.put("status", "Incorrect credentials");

            }
        } catch (Exception e) {
            response.put("status", "User doesn't exist");
            return response;
        }
        return response;
    }
}
