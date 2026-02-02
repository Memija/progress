import { GitHubUser } from '../user/github-user';

/**
 * GitHub Repository.
 */
export interface GitHubRepository {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Name.
   */
  name: string;

  /**
   * Full name.
   */
  full_name: string;

  /**
   * Owner.
   */
  owner: GitHubUser;

  /**
   * Private.
   */
  private: boolean;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: string;

  /**
   * Description.
   */
  description: string;

  /**
   * Fork.
   */
  fork: boolean;

  /**
   * URL (Uniform Resource Locator).
   */
  url: string;

  /**
   * Forks URL (Uniform Resource Locator).
   */
  forks_url: string;

  /**
   * Keys URL (Uniform Resource Locator).
   */
  keys_url: string;

  /**
   * Collaborators URL (Uniform Resource Locator).
   */
  collaborators_url: string;

  /**
   * Teams URL (Uniform Resource Locator).
   */
  teams_url: string;

  /**
   * Hooks URL (Uniform Resource Locator).
   */
  hooks_url: string;

  /**
   * Issue events URL (Uniform Resource Locator).
   */
  issue_events_url: string;

  /**
   * Events URL (Uniform Resource Locator).
   */
  events_url: string;

  /**
   * Assignees URL (Uniform Resource Locator).
   */
  assignees_url: string;

  /**
   * Branches URL (Uniform Resource Locator).
   */
  branches_url: string;

  /**
   * Tags URL (Uniform Resource Locator).
   */
  tags_url: string;

  /**
   * Blobs URL (Uniform Resource Locator).
   */
  blobs_url: string;

  /**
   * Git tags URL (Uniform Resource Locator).
   */
  git_tags_url: string;

  /**
   * Git refs URL (Uniform Resource Locator).
   */
  git_refs_url: string;

  /**
   * Trees URL (Uniform Resource Locator).
   */
  trees_url: string;

  /**
   * Statuses URL (Uniform Resource Locator).
   */
  statuses_url: string;

  /**
   * Languages URL (Uniform Resource Locator).
   */
  languages_url: string;

  /**
   * Stargazers URL (Uniform Resource Locator).
   */
  stargazers_url: string;

  /**
   * Contributors URL (Uniform Resource Locator).
   */
  contributors_url: string;

  /**
   * Subscribers URL (Uniform Resource Locator).
   */
  subscribers_url: string;

  /**
   * Subscription URL (Uniform Resource Locator).
   */
  subscription_url: string;

  /**
   * Commits URL (Uniform Resource Locator).
   */
  commits_url: string;

  /**
   * Git commits URL (Uniform Resource Locator).
   */
  git_commits_url: string;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  comments_url: string;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  issue_comment_url: string;

  /**
   * Contents URL (Uniform Resource Locator).
   */
  contents_url: string;

  /**
   * Compare URL (Uniform Resource Locator).
   */
  compare_url: string;

  /**
   * Merges URL (Uniform Resource Locator).
   */
  merges_url: string;

  /**
   * Archive URL (Uniform Resource Locator).
   */
  archive_url: string;

  /**
   * Downloads URL (Uniform Resource Locator).
   */
  downloads_url: string;

  /**
   * Issues URL (Uniform Resource Locator).
   */
  issues_url: string;

  /**
   * Pulls URL (Uniform Resource Locator).
   */
  pulls_url: string;

  /**
   * Milestones URL (Uniform Resource Locator).
   */
  milestones_url: string;

  /**
   * Notifications URL (Uniform Resource Locator).
   */
  notifications_url: string;

  /**
   * Labels URL (Uniform Resource Locator).
   */
  labels_url: string;

  /**
   * Releases URL (Uniform Resource Locator).
   */
  releases_url: string;

  /**
   * Deployments URL (Uniform Resource Locator).
   */
  deployments_url: string;

  /**
   * Created at.
   */
  created_at: string;

  /**
   * Updated at.
   */
  updated_at: string;

  /**
   * Pushed at.
   */
  pushed_at: string;

  /**
   * Git URL (Uniform Resource Locator).
   */
  git_url: string;

  /**
   * SSH (Secure Shell) URL (Uniform Resource Locator).
   */
  ssh_url: string;

  /**
   * Clone URL (Uniform Resource Locator).
   */
  clone_url: string;

  /**
   * SVN (Apache Subversion) URL (Uniform Resource Locator).
   */
  svn_url: string;

  /**
   * Homepage.
   */
  homepage?: string;

  /**
   * Size.
   */
  size: number;

  /**
   * Stargazers count.
   */
  stargazers_count: number;

  /**
   * Watchers count.
   */
  watchers_count: number;

  /**
   * Language.
   */
  language: string;

  /**
   * Has issues.
   */
  has_issues: boolean;

  /**
   * Has projects.
   */
  has_projects: boolean;

  /**
   * Has downloads.
   */
  has_downloads: boolean;

  /**
   * Has Wiki.
   */
  has_wiki: boolean;

  /**
   * Has pages.
   */
  has_pages: boolean;

  /**
   * Forks count.
   */
  forks_count: number;

  /**
   * Mirror URL (Uniform Resource Locator).
   */
  mirror_url?: string;

  /**
   * Open issues count.
   */
  open_issues_count: number;

  /**
   * Forks.
   */
  forks: number;

  /**
   * Open issues.
   */
  open_issues: number;

  /**
   * Watchers.
   */
  watchers: number;

  /**
   * Default branch.
   */
  default_branch: string;
}
