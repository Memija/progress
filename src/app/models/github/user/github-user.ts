/**
 * GitHub User.
 */
export interface GitHubUser {
  /**
   * Username.
   */
  login: string;

  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Avatar URL (Uniform Resource Locator).
   */
  avatar_url: string;

  /**
   * Gravatar URL (Uniform Resource Locator).
   */
  gravatar_id: string;

  /**
   * URL (Uniform Resource Locator).
   */
  url: string;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: string;

  /**
   * Followers URL (Uniform Resource Locator).
   */
  followers_url: string;

  /**
   * Following URL (Uniform Resource Locator).
   */
  following_url: string;

  /**
   * Gists URL (Uniform Resource Locator).
   */
  gists_url: string;

  /**
   * Starred URL (Uniform Resource Locator).
   */
  starred_url: string;

  /**
   * Subscriptions URL (Uniform Resource Locator).
   */
  subscriptions_url: string;

  /**
   * Organizations URL (Uniform Resource Locator).
   */
  organizations_url: string;

  /**
   * Repository URL (Uniform Resource Locator).
   */
  repos_url: string;

  /**
   * Events URL (Uniform Resource Locator).
   */
  events_url: string;

  /**
   * Received events URL (Uniform Resource Locator).
   */
  received_events_url: string;

  /**
   * Type.
   */
  type: string;

  /**
   * Site admin.
   */
  site_admin: boolean;
}
