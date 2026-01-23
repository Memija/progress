import { Pipe, PipeTransform } from '@angular/core';
import { GitHubRepository } from 'src/app/models/github';

/**
 * GitHub Repository name pipe.
 */
@Pipe({
    name: 'gitHubRepositoryNamePipe'
})
export class GitHubRepositoryNamePipe implements PipeTransform {
  /**
   * Filter GitHub repositories by name property.
   * @param value Collection of GitHub repositories.
   * @param arg Argument by which the filtering will be performed.
   * @returns Filtered collection of GitHub repositories.
   */
  transform(value: GitHubRepository[], arg?: string): GitHubRepository[] {
    if (value) {
      return arg ? value.filter((gitHubRepository) => gitHubRepository.name.toLowerCase().includes(arg.toLowerCase())) : value;
    }
    return [];
  }
}
