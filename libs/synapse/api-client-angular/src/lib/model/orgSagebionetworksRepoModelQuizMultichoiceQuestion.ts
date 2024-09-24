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
import { OrgSagebionetworksRepoModelDaoWikiPageKey } from './orgSagebionetworksRepoModelDaoWikiPageKey';
import { OrgSagebionetworksRepoModelQuizMultichoiceAnswer } from './orgSagebionetworksRepoModelQuizMultichoiceAnswer';

/**
 * A multiple choice question
 */
export interface OrgSagebionetworksRepoModelQuizMultichoiceQuestion {
  questionIndex?: number;
  prompt?: string;
  reference?: OrgSagebionetworksRepoModelDaoWikiPageKey;
  docLink?: string;
  helpText?: string;
  concreteType: OrgSagebionetworksRepoModelQuizMultichoiceQuestion.ConcreteTypeEnum;
  exclusive?: boolean;
  /**
   * The possible answers for this question
   */
  answers?: Array<OrgSagebionetworksRepoModelQuizMultichoiceAnswer>;
}
export namespace OrgSagebionetworksRepoModelQuizMultichoiceQuestion {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.quiz.MultichoiceQuestion';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelQuizMultichoiceQuestion:
      'org.sagebionetworks.repo.model.quiz.MultichoiceQuestion' as ConcreteTypeEnum,
  };
}