Feature: duckduckgo.com

    @debug
    Scenario: visiting the frontpage
        When I visit duckduckgo.com
        When I pass table
            | a     |
            | <val> |
        Then I should see a search bar

        Examples:
            | val |
            | 1   |
            | 3   |

    Scenario: visiting the frontpage 2
        When I visit duckduckgo.com
        Then I should see a search bar