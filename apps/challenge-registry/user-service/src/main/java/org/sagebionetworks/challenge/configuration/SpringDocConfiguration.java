package org.sagebionetworks.challenge.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfiguration {

  @Bean
  OpenAPI apiInfo() {
    return new OpenAPI()
        .info(
            new Info()
                .title("Challenge User API")
                .description(
                    "No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)")
                .contact(
                    new Contact()
                        .name("Support")
                        .url("https://github.com/Sage-Bionetworks/sage-monorepo"))
                .license(
                    new License()
                        .name("Apache 2.0")
                        .url("https://github.com/Sage-Bionetworks/sage-monorepo"))
                .version("0.6.0"));
  }
}
