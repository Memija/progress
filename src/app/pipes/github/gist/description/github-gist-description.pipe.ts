import { Pipe, PipeTransform } from '@angular/core';
import { GitHubGist } from 'src/app/models/github';

/**
 * GitHub Gist description pipe.
 */
@Pipe({
    name: 'gitHubGistDescriptionPipe'
})
export class GitHubGistDescriptionPipe implements PipeTransform {
  /**
   * Filter GitHub gists by description property.
   * @param value Collection of GitHub gists.
   * @param arg Argument by which the filtering will be performed.
   * @returns Filtered collection of GitHub gists.
   */
  transform(value: GitHubGist[], arg?: string): GitHubGist[] {
    if (value) {
      return arg ? value.filter((gitHubGist) => gitHubGist.description.toLowerCase().includes(arg.toLowerCase())) : value;
    }
    return [];
  }
}
