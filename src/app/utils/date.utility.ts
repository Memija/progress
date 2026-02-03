/**
 * Date utility.
 */
export class DateUtility {
  private constructor() { }

  /**
   * Get current year value.
   * @returns Current year value.
   */
  static getCurrentYearValue(): number {
    return new Date().getFullYear();
  }
}
