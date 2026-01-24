import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GistComponent } from './gist.component';
import { GitHubService } from 'src/app/services/github/github.service';
import { GitHubGistDescriptionPipe } from 'src/app/pipes/github/gist/description/github-gist-description.pipe';
import { of, throwError } from 'rxjs';
import { GitHubGist } from 'src/app/models/github';

describe('GistComponent', () => {
  let component: GistComponent;
  let fixture: ComponentFixture<GistComponent>;
  let mockGitHubService: jasmine.SpyObj<GitHubService>;

  beforeEach(async () => {
    mockGitHubService = jasmine.createSpyObj('GitHubService', ['getGitHubGists']);

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ GistComponent, GitHubGistDescriptionPipe ],
      providers: [
        { provide: GitHubService, useValue: mockGitHubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockGitHubService.getGitHubGists.and.returnValue(of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load gists on init', () => {
    const mockGists: GitHubGist[] = [
      { id: '1', description: 'Desc1', html_url: 'url1' } as any,
      { id: '2', description: 'Desc2', html_url: 'url2' } as any
    ];
    mockGitHubService.getGitHubGists.and.returnValue(of(mockGists));

    fixture.detectChanges();

    expect(component.gitHubGists).toEqual(mockGists);
    expect(component.errorMessage).toBeUndefined();
  });

  it('should handle error object from service', () => {
    const error = new Error('Service Error');
    mockGitHubService.getGitHubGists.and.returnValue(of(error));

    fixture.detectChanges();

    expect(component.errorMessage).toBe('Service Error');
    expect(component.gitHubGists).toBeUndefined();
  });

  it('should handle observable error', () => {
    mockGitHubService.getGitHubGists.and.returnValue(throwError(new Error('Observable Error')));

    fixture.detectChanges();

    expect(component.errorMessage).toBe('Observable Error');
    expect(component.gitHubGists).toBeUndefined();
  });
});
