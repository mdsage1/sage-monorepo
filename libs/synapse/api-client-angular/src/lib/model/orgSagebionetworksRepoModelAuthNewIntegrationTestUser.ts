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
 * Administrative object.  Used to create users for integration tests.  All fields besides username can be null
 */
export interface OrgSagebionetworksRepoModelAuthNewIntegrationTestUser {
  username?: string;
  email?: string;
  password?: string;
  tou?: boolean;
  validatedUser?: boolean;
}