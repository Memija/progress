import { Component, OnInit } from '@angular/core';
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
export class GistComponent implements OnInit {
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
    this.gitHubService.getGitHubGists().subscribe(
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
}
