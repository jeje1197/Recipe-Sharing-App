package com.cognixia.jump.service;

import com.cognixia.jump.exception.ResourceNotFoundException;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {
    @Autowired
    UserRepository repo;

    public List<User> getUsers(){
        return repo.findAll();
    }

    public User getUserById(int id) throws ResourceNotFoundException{
        Optional<User> found=repo.findById(id);

        if(found.isEmpty()){
            throw new ResourceNotFoundException("User",id);
        }
        return found.get();
    }

    //createUser
    public User createUser(User user){
        User created=repo.save(user);
        return created;
    }

    //deleteUser
    public boolean deleteUser(int id) throws ResourceNotFoundException{
        boolean exists = repo.existsById(id);

        if(exists){
            repo.deleteById(id);

            return true;
        }
        throw new ResourceNotFoundException("User",id);
    }

}
