# coding: utf-8

"""
    OpenChallenges REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

import openchallenges_client
from openchallenges_client.api.challenge_api import ChallengeApi  # noqa: E501
from openchallenges_client.rest import ApiException


class TestChallengeApi(unittest.TestCase):
    """ChallengeApi unit test stubs"""

    def setUp(self):
        self.api = openchallenges_client.api.challenge_api.ChallengeApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_challenge(self):
        """Test case for get_challenge

        Get a challenge  # noqa: E501
        """
        pass

    def test_list_challenges(self):
        """Test case for list_challenges

        List challenges  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()