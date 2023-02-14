package com.cognixia.jump.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
public class Recipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    @NotBlank
    private String Name;

    @Column(nullable = false)
    @NotBlank
    private String imageLink ;

    @Column(name = "sourceId",nullable = false)
    @NotBlank
    private String APIId;

    public Recipe() {

    }

    public Recipe(Integer id, String name,String imageLink,String APIId) {
        this.id=id;
        this.Name=name;
        this.imageLink=imageLink;
        this.APIId=APIId;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id= id;
    }
    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getAPIId() {
        return APIId;
    }

    public void setAPIId(String APIId) {
        this.APIId = APIId;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", imageLink='" + imageLink + '\'' +
                ", APIId='" + APIId + '\'' +
                '}';
    }
}
