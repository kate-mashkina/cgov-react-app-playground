Feature: Home Page
  There is a home page

  Background:
    But the user visits the home page

  @focus
  Scenario: The home page will load
    Then page title "NCI Dictionary of Cancer Terms" appears on page
    And search link with url "/search" appears on page
    And search link contains text "Search page"
    Then "http://localhost:3000/" page is loaded

  @focus
  Scenario: The home page will load #2
    Then page title "NCI Dictionary of Cancer Terms" appears on page
    And search link with url "/search" appears on page
    And search link contains text "Search page"
    Then "http://localhost:3000/" page is loaded
