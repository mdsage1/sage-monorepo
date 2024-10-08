/**
 * Agora REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * BioDomain
 */
export interface BioDomain {
  /**
   * Name of the biological domain
   */
  biodomain: string;
  /**
   * List of Gene Ontology (GO) terms
   */
  go_terms: Array<string>;
  /**
   * Number of terms associated with the biological domain
   */
  n_biodomain_terms: number;
  /**
   * Number of gene terms linked to the biological domain
   */
  n_gene_biodomain_terms: number;
  /**
   * Percentage of terms linking to the domain
   */
  pct_linking_terms: number;
}
