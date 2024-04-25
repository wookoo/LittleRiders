package kr.co.littleriders.backend.domain.family.entity;

import jakarta.persistence.*;
import kr.co.littleriders.backend.domain.child.entity.Child;
import kr.co.littleriders.backend.global.entity.Member;

import java.util.List;

@Entity
@Table(name = "family")
public class Family implements Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id; // 보호자 id

    @Column(name = "email", nullable = false)
    private String email; // 이메일

    @Column(name = "password", nullable = false)
    private String password; // 비밀번호

    @Column(name = "name", nullable = false)
    private String name; // 성명

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber; // 연락처

    @OneToMany(mappedBy = "family")
    private List<Child> child; // 자녀 목록

    private Family(String email, String password, String name, String phoneNumber) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    public static Family of(String email, String password, String name, String phoneNumber) {
        return new Family(email, password, name, phoneNumber);
    }

}
