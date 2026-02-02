import { Injectable } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

/**
 * API (Application Programming Interface) service.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Get GitHub Gist API (Application Programming Interface) endpoint.
   * @returns GitHub Gist API (Application Programming Interface) endpoint.
   */
  public getGitHubGistEndpoint(): string {
    return `${configuration.gitHub.apiEndpoint}${configuration.gitHub.users}/${configuration.gitHub.username}/${configuration.gitHub.gists}`;
  }

  /**
  * Get GitHub Repository API (Application Programming Interface) endpoint.
  * @returns GitHub Repository API (Application Programming Interface) endpoint.
  */
  public getGitHubRepositoryEndpoint(): string {
    return `${configuration.gitHub.apiEndpoint}${configuration.gitHub.users}/${configuration.gitHub.username}/${configuration.gitHub.repositories}`;
  }
}
