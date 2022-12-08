package org.sagebionetworks.challenge.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * The User information saved to DB.
 *
 * <p>The following properties are saved in Keycloak: email, password (hash).
 */
@Entity
@Table(name = "challenge_organization")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, updatable = false)
  private Long id;

  @Column(nullable = false)
  private String name;
}