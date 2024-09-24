/**
 * Synapse REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Table checksum (CHECKSUM TABLE) for migration type \'type\'
 */
export interface OrgSagebionetworksRepoModelMigrationMigrationTypeChecksum {
  concreteType: OrgSagebionetworksRepoModelMigrationMigrationTypeChecksum.ConcreteTypeEnum;
  migrationType?: string;
  type?: string;
  checksum?: string;
}
export namespace OrgSagebionetworksRepoModelMigrationMigrationTypeChecksum {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.migration.MigrationTypeChecksum';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelMigrationMigrationTypeChecksum:
      'org.sagebionetworks.repo.model.migration.MigrationTypeChecksum' as ConcreteTypeEnum,
  };
}