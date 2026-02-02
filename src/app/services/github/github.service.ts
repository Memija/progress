import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GitHubGist, GitHubRepository } from 'src/app/models/github';
import { ApiService } from '../configurations/api/api.service';
import { ErrorHandlingService } from '../handlers/error-handling.service';

/**
 * GitHub service.
 */
@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  /**
   * Error handling service.
   */
  private readonly errorHandlingService: ErrorHandlingService;

  /**
   * GitHub gists API (Application programming interface) endpoint.
   */
  private readonly gitHubGistEndpoint: string;

  /**
   * GitHub repositories API (Application Programming Interface) endpoint.
   */
  private readonly gitHubRepositoryEndpoint: string;

  /**
   * Http (HyperText Transfer Protocol) client.
   */
  private readonly httpClient: HttpClient;

  /**
   * Creates an instance of class.
   * @param apiService API (Application Programming Interface) service.
   * @param errorHandlingService Error handling service.
   * @param httpClient Http (HyperText Transfer Protocol) client.
   */
  constructor(apiService: ApiService, errorHandlingService: ErrorHandlingService, httpClient: HttpClient) {
    this.gitHubGistEndpoint = apiService.getGitHubGistEndpoint();
    this.gitHubRepositoryEndpoint = apiService.getGitHubRepositoryEndpoint();
    this.errorHandlingService = errorHandlingService;
    this.httpClient = httpClient;
  }

  /**
   * Get GitHub gists.
   * @returns GitHub gists if no Error occurred, otherwise Error.
   */
  public getGitHubGists(): Observable<GitHubGist[] | Error> {
    return this.httpClient.get<GitHubGist[] | Error>(this.gitHubGistEndpoint)
      .pipe(catchError(this.errorHandlingService.handleError));
  }

  /**
   * Get GitHub repositories.
   * @returns GitHub repositories if no Error occurred, otherwise Error.
   */
  public getGitHubRepositories(): Observable<GitHubRepository[] | Error> {
    return this.httpClient.get<GitHubRepository[] | Error>(this.gitHubRepositoryEndpoint)
      .pipe(catchError(this.errorHandlingService.handleError));
  }
}
