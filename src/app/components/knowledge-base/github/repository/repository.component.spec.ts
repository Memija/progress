import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { GitHubService } from 'src/app/services/github/github.service';
import { GitHubRepositoryNamePipe } from 'src/app/pipes/github/repository/name/github-repository-name.pipe';
import { of, throwError } from 'rxjs';
import { GitHubRepository } from 'src/app/models/github';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;
  let mockGitHubService: jasmine.SpyObj<GitHubService>;

  beforeEach(async () => {
    mockGitHubService = jasmine.createSpyObj('GitHubService', ['getGitHubRepositories']);

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ RepositoryComponent, GitHubRepositoryNamePipe ],
      providers: [
        { provide: GitHubService, useValue: mockGitHubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockGitHubService.getGitHubRepositories.and.returnValue(of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load repositories on init', () => {
    const mockRepos: GitHubRepository[] = [
      { id: 1, name: 'Repo1', description: 'Desc1', html_url: 'url1', language: 'TS' } as any,
      { id: 2, name: 'Repo2', description: 'Desc2', html_url: 'url2', language: 'JS' } as any
    ];
    mockGitHubService.getGitHubRepositories.and.returnValue(of(mockRepos));

    fixture.detectChanges();

    expect(component.gitHubRepositories).toEqual(mockRepos);
    expect(component.errorMessage).toBeUndefined();
  });

  it('should handle error object from service', () => {
    const error = new Error('Service Error');
    mockGitHubService.getGitHubRepositories.and.returnValue(of(error));

    fixture.detectChanges();

    expect(component.errorMessage).toBe('Service Error');
    expect(component.gitHubRepositories).toBeUndefined();
  });

  it('should handle observable error', () => {
    mockGitHubService.getGitHubRepositories.and.returnValue(throwError(new Error('Observable Error')));

    fixture.detectChanges();

    expect(component.errorMessage).toBe('Observable Error');
    expect(component.gitHubRepositories).toBeUndefined();
  });
});
