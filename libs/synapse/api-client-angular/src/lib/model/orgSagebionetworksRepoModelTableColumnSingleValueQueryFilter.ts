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
 * A filter using a single value against a column. Values within the values list have an OR relationship
 */
export interface OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter {
  concreteType: OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter.ConcreteTypeEnum;
  isDefiningCondition?: boolean;
  /**
   * Values to be used with the filter.
   */
  values?: Array<string>;
  columnName?: string;
  operator?: string;
}
export namespace OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter {
  export type ConcreteTypeEnum =
    'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter' as ConcreteTypeEnum,
  };
}