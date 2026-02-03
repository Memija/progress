import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GitHubGist } from 'src/app/models/github';
import { GitHubService } from 'src/app/services/github/github.service';

/**
 * Gist component.
 */
@Component({
  selector: 'training-knowledge-base-github-gist',
  templateUrl: './gist.component.html',
  styleUrls: [
    '../github.component.less'
  ]
})
export class GistComponent implements OnInit, OnDestroy {
  /**
   * Unsubscribe.
   */
  private readonly unsubscribe = new Subject<void>();

  /**
   * Error message.
   */
  public errorMessage: string;

  /**
   * GitHub gists or error.
   */
  public gitHubGists: GitHubGist[];

  /**
   * Search term.
   */
  public searchTerm: string;

  constructor(private readonly gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.gitHubService.getGitHubGists()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => {
          if (data instanceof Error) {
            this.errorMessage = data.message;
          } else {
            this.gitHubGists = data;
          }
        }, error => {
          this.errorMessage = error.message;
        });
    this.searchTerm = '';
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
