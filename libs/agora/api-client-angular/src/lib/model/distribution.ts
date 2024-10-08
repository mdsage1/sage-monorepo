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
import { RnaDistribution } from './rnaDistribution';
import { ProteomicsDistribution } from './proteomicsDistribution';
import { OverallScoresDistribution } from './overallScoresDistribution';

/**
 * Distributions
 */
export interface Distribution {
  rna_differential_expression: Array<RnaDistribution>;
  proteomics_LFQ: Array<ProteomicsDistribution>;
  proteomics_SRM: Array<ProteomicsDistribution>;
  proteomics_TMT: Array<ProteomicsDistribution>;
  overall_scores: Array<OverallScoresDistribution>;
}
