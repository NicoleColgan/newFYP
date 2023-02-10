package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.entity.UserEntity;
import com.newIbsApp.ibs.model.User;
import com.newIbsApp.ibs.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        UserEntity userEntity=new UserEntity();

        //copy all the values in the user object into the user entity object
        BeanUtils.copyProperties(user, userEntity);
        System.out.println("user entity: "+userEntity);
        System.out.println("user: "+user);

        //save to db
        userRepository.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        //get database user objects
        List<UserEntity> userEntities = userRepository.findAll();
        //convert to new users for ui
        //map function is used to convert from one type to another
        List<User> users = userEntities.stream().map(u -> new User(
                        u.getId(),
                        u.getFirstName(),
                        u.getLastName(),
                        u.getEmail(),
                        u.getPassword()))
                .collect(Collectors.toList());
        return users;
    }
    @Override
    public User getUserById(Long id) {
        UserEntity userEntity = userRepository.findById(id).get();
        User user = new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }

    @Override
    public User getUserByEmail(String email) {
        List<UserEntity> userEntities = userRepository.findAll();
        List<User> users = userEntities.stream().map(u -> new User(
                        u.getId(),
                        u.getFirstName(),
                        u.getLastName(),
                        u.getEmail(),
                        u.getPassword()))
                .collect(Collectors.toList());
        for(User u: users){
            if(u.getEmail().equals(email)) {
                User user = new User();
                BeanUtils.copyProperties(u, user);
                return user;
            }
        }
        return null;
    }

    @Override
    public User authenticateUser(String email, String password) {
        List<UserEntity> userEntities = userRepository.findAll();
        List<User> users = userEntities.stream().map(u -> new User(
                        u.getId(),
                        u.getFirstName(),
                        u.getLastName(),
                        u.getEmail(),
                        u.getPassword()))
                .collect(Collectors.toList());
        for(User u: users){
            //if a user exists with this email
            if(u.getEmail().equals(email)) {
                //check if their password is the same
                if(u.getPassword().equals(password)) {
                    User user = new User();
                    BeanUtils.copyProperties(u, user);
                    return user;
                }
            }
        }
        return null;
    }

}
