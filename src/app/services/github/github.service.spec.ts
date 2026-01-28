import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitHubService } from './github.service';
import { ApplicationProgrammingInterfaceService } from 'src/app/services/configurations/api/api.service';
import { ErrorHandlingService } from 'src/app/services/handlers/error-handling.service';
import { GitHubGist, GitHubRepository } from 'src/app/models/github';
import { throwError } from 'rxjs';

describe('GitHubService', () => {
  let service: GitHubService;
  let httpMock: HttpTestingController;
  let errorHandlingServiceSpy: jasmine.SpyObj<ErrorHandlingService>;

  beforeEach(() => {
    const apiSpy = jasmine.createSpyObj('ApplicationProgrammingInterfaceService', ['getGitHubGistEndpoint', 'getGitHubRepositoryEndpoint']);
    apiSpy.getGitHubGistEndpoint.and.returnValue('https://api.github.com/users/test/gists');
    apiSpy.getGitHubRepositoryEndpoint.and.returnValue('https://api.github.com/users/test/repos');

    const errorSpy = jasmine.createSpyObj('ErrorHandlingService', ['handleError']);
    errorSpy.handleError.and.returnValue(throwError(new Error('Mock Error')));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubService,
        { provide: ApplicationProgrammingInterfaceService, useValue: apiSpy },
        { provide: ErrorHandlingService, useValue: errorSpy }
      ]
    });
    service = TestBed.inject(GitHubService);
    httpMock = TestBed.inject(HttpTestingController);
    errorHandlingServiceSpy = TestBed.inject(ErrorHandlingService) as jasmine.SpyObj<ErrorHandlingService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve GitHub gists', () => {
    const mockGists: GitHubGist[] = [{ id: '1', description: 'Test Gist' } as any];

    service.getGitHubGists().subscribe(gists => {
      expect(gists).toEqual(mockGists);
    });

    const req = httpMock.expectOne('https://api.github.com/users/test/gists');
    expect(req.request.method).toBe('GET');
    req.flush(mockGists);
  });

  it('should handle error when retrieving GitHub gists', () => {
    service.getGitHubGists().subscribe(
      () => fail('should have failed with the error'),
      (error: Error) => {
        expect(error.message).toBe('Mock Error');
        expect(errorHandlingServiceSpy.handleError).toHaveBeenCalled();
      }
    );

    const req = httpMock.expectOne('https://api.github.com/users/test/gists');
    req.flush('Something went wrong', { status: 500, statusText: 'Server Error' });
  });

  it('should retrieve GitHub repositories', () => {
    const mockRepos: GitHubRepository[] = [{ id: 1, name: 'Test Repo' } as any];

    service.getGitHubRepositories().subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpMock.expectOne('https://api.github.com/users/test/repos');
    expect(req.request.method).toBe('GET');
    req.flush(mockRepos);
  });

  it('should handle error when retrieving GitHub repositories', () => {
    service.getGitHubRepositories().subscribe(
      () => fail('should have failed with the error'),
      (error: Error) => {
        expect(error.message).toBe('Mock Error');
        expect(errorHandlingServiceSpy.handleError).toHaveBeenCalled();
      }
    );

    const req = httpMock.expectOne('https://api.github.com/users/test/repos');
    req.flush('Something went wrong', { status: 500, statusText: 'Server Error' });
  });
});
