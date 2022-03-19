package com.Yana.Buddy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BuddyApplication {
	// 기능 점검용 커밋
	public static void main(String[] args) {
		SpringApplication.run(BuddyApplication.class, args);
	}

}
