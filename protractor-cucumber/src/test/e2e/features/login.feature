Feature: Login Github
  As a user of github
  I want to login with my account
  So that I use my github

  @login
  Scenario Outline: login Github
    Given open the login page
    When login with users "<UserName>" and "<PassWord>"
    Then login "<LoginResult>"
    Examples:
      | UserName  | PassWord  | LoginResult |
      | RainieYan | 111111    | failed      |
#      | RainieYan | 111111ysy | successful  |
