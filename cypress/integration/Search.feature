Feature: Search Page
  Search page

  @focus
  Scenario Outline: The search page loads
    Given the user visits the search page
    Then page title "<first_part>" and "<second_part>" appears on page
    And home page link with url "/" appears on page
    And home page link contains text "Home page"

Examples:
|first_part|second_part|
|NCI Dictionary|of Cancer Terms|
