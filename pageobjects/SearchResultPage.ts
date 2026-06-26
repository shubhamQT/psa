import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";
import { webTable, type WebTable } from "../support/web-table";

export class SearchResultPage {
  private static readonly L = {
    search360HealthAnd: { strategy: 'role' as const, value: 'Search: 360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation', role: 'button', actionKind: 'button' as const },
    searchResults: { strategy: 'text' as const, value: 'Search Results', actionKind: 'text' as const },
    assistiveTextId1c0252b67f21B48bF220A4d4760b0966: { strategy: 'css' as const, value: '#assistive-text-id-1c0252b6-7f21-b48b-f220-a4d4760b0966', actionKind: 'text' as const },
    topResults: { strategy: 'role' as const, value: 'Top Results', role: 'option', actionKind: 'generic' as const },
    topResultsLink: { strategy: 'role' as const, value: 'Top Results', role: 'link', actionKind: 'link' as const },
    projects1: { strategy: 'role' as const, value: 'Projects 1', role: 'option', actionKind: 'generic' as const },
    projectsLink: { strategy: 'role' as const, value: 'Projects 1', role: 'link', actionKind: 'link' as const },
    chatterHelp: { strategy: 'role' as const, value: 'Chatter Help', role: 'option', actionKind: 'generic' as const },
    chatter: { strategy: 'role' as const, value: 'Chatter Help', role: 'link', actionKind: 'link' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    opportunities0: { strategy: 'role' as const, value: 'Opportunities 0', role: 'option', actionKind: 'generic' as const },
    opportunitiesLink: { strategy: 'role' as const, value: 'Opportunities 0', role: 'link', actionKind: 'link' as const },
    accounts0: { strategy: 'role' as const, value: 'Accounts 0', role: 'option', actionKind: 'generic' as const },
    accountsLink: { strategy: 'role' as const, value: 'Accounts 0', role: 'link', actionKind: 'link' as const },
    contacts0: { strategy: 'role' as const, value: 'Contacts 0', role: 'option', actionKind: 'generic' as const },
    contactsLink: { strategy: 'role' as const, value: 'Contacts 0', role: 'link', actionKind: 'link' as const },
    quotes0: { strategy: 'role' as const, value: 'Quotes 0', role: 'option', actionKind: 'generic' as const },
    quotes: { strategy: 'role' as const, value: 'Quotes 0', role: 'link', actionKind: 'link' as const },
    people0: { strategy: 'role' as const, value: 'People 0', role: 'option', actionKind: 'generic' as const },
    people: { strategy: 'role' as const, value: 'People 0', role: 'link', actionKind: 'link' as const },
    resourceRequests0: { strategy: 'role' as const, value: 'Resource Requests 0', role: 'option', actionKind: 'generic' as const },
    resourceRequests: { strategy: 'role' as const, value: 'Resource Requests 0', role: 'link', actionKind: 'link' as const },
    reports0: { strategy: 'role' as const, value: 'Reports 0', role: 'option', actionKind: 'generic' as const },
    reportsLink: { strategy: 'role' as const, value: 'Reports 0', role: 'link', actionKind: 'link' as const },
    events0: { strategy: 'role' as const, value: 'Events 0', role: 'option', actionKind: 'generic' as const },
    events: { strategy: 'role' as const, value: 'Events 0', role: 'link', actionKind: 'link' as const },
    tasks0: { strategy: 'role' as const, value: 'Tasks 0', role: 'option', actionKind: 'generic' as const },
    tasks: { strategy: 'role' as const, value: 'Tasks 0', role: 'link', actionKind: 'link' as const },
    showMoreSearchableObjects: { strategy: 'role' as const, value: 'Show More', role: 'button', actionKind: 'button' as const },
    topResultsResults: { strategy: 'text' as const, value: 'Top Results Results', actionKind: 'text' as const },
    result: { strategy: 'text' as const, value: '1 Result', actionKind: 'text' as const },
    sortProjectName: { strategy: 'role' as const, value: 'Sort Project Name', role: 'button', actionKind: 'link' as const },
    showProjectNameColumn: { strategy: 'role' as const, value: 'Show Project Name Column Actions', role: 'button', actionKind: 'button' as const },
    sortProjectManager: { strategy: 'role' as const, value: 'Sort Project Manager', role: 'button', actionKind: 'link' as const },
    showProjectManagerColumn: { strategy: 'role' as const, value: 'Show Project Manager Column Actions', role: 'button', actionKind: 'button' as const },
    sortAccount: { strategy: 'role' as const, value: 'Sort Account', role: 'button', actionKind: 'link' as const },
    showAccountColumnActions: { strategy: 'role' as const, value: 'Show Account Column Actions', role: 'button', actionKind: 'button' as const },
    sortOpportunity: { strategy: 'role' as const, value: 'Sort Opportunity', role: 'button', actionKind: 'link' as const },
    showOpportunityColumnActions: { strategy: 'role' as const, value: 'Show Opportunity Column Actions', role: 'button', actionKind: 'button' as const },
    sortRegion: { strategy: 'role' as const, value: 'Sort Region', role: 'button', actionKind: 'link' as const },
    showRegionColumnActions: { strategy: 'role' as const, value: 'Show Region Column Actions', role: 'button', actionKind: 'button' as const },
    sortPractice: { strategy: 'role' as const, value: 'Sort Practice', role: 'button', actionKind: 'link' as const },
    showPracticeColumnActions: { strategy: 'role' as const, value: 'Show Practice Column Actions', role: 'button', actionKind: 'button' as const },
    sortGroup: { strategy: 'role' as const, value: 'Sort Group', role: 'button', actionKind: 'link' as const },
    showGroupColumnActions: { strategy: 'role' as const, value: 'Show Group Column Actions', role: 'button', actionKind: 'button' as const },
    sortStartDate: { strategy: 'role' as const, value: 'Sort Start Date', role: 'button', actionKind: 'link' as const },
    showStartDateColumn: { strategy: 'role' as const, value: 'Show Start Date Column Actions', role: 'button', actionKind: 'button' as const },
    sortActive: { strategy: 'role' as const, value: 'Sort Active', role: 'button', actionKind: 'link' as const },
    showActiveColumnActions: { strategy: 'role' as const, value: 'Show Active Column Actions', role: 'button', actionKind: 'button' as const },
    sortBillable: { strategy: 'role' as const, value: 'Sort Billable', role: 'button', actionKind: 'link' as const },
    showBillableColumnActions: { strategy: 'role' as const, value: 'Show Billable Column Actions', role: 'button', actionKind: 'button' as const },
    donTSeeYourResult: { strategy: 'text' as const, value: 'Don’t see your result?', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
    weSearchedTheObjects: { strategy: 'text' as const, value: 'We searched the objects you use most, but we', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
    knowWhichObjectYouRe: { strategy: 'text' as const, value: 'Know which object you’re looking for? Select it in', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
  } as const;

  readonly sldsTable2: WebTable; // columns: ["Item Number", "Sort Project Name Show Project Name Column Actions", "Sort Project Manager Show Project Manager Column Actions", "Sort Account Show Account Column Actions", "Sort Opportunity Show Opportunity Column Actions", "Sort Region Show Region Column Actions", "Sort Practice Show Practice Column Actions", "Sort Group Show Group Column Actions", "Sort Start Date Show Start Date Column Actions", "Sort Active Show Active Column Actions", "Sort Billable Show Billable Column Actions", "Action"]

  constructor(private readonly page: Page) {
    this.sldsTable2 = webTable(this.page, '#brandBand_2 table');
  }

  async clickSearch360HealthAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async doubleClickSearch360HealthAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async expectSearch360HealthAndVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.search360HealthAnd), expected, timeoutMs);
  }

  async expectSearch360HealthAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.search360HealthAnd), substring, timeoutMs);
  }

  async scrollSearch360HealthAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async getInnerTextSearchResults(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async expectSearchResultsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.searchResults), expected, timeoutMs);
  }

  async expectSearchResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.searchResults), substring, timeoutMs);
  }

  async scrollSearchResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async getInnerTextAssistiveTextId1c0252b67f21B48bF220A4d4760b0966(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966));
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), expected, timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), substring, timeoutMs);
  }

  async scrollAssistiveTextId1c0252b67f21B48bF220A4d4760b0966IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966));
  }

  async clickTopResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async doubleClickTopResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async expectTopResultsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.topResults), expected, timeoutMs);
  }

  async expectTopResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.topResults), substring, timeoutMs);
  }

  async scrollTopResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async clickTopResultsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsLink));
  }

  async doubleClickTopResultsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsLink));
  }

  async expectTopResultsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.topResultsLink), expected, timeoutMs);
  }

  async expectTopResultsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.topResultsLink), substring, timeoutMs);
  }

  async scrollTopResultsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsLink));
  }

  async clickProjects1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async doubleClickProjects1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async expectProjects1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projects1), expected, timeoutMs);
  }

  async expectProjects1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projects1), substring, timeoutMs);
  }

  async scrollProjects1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async clickProjectsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projectsLink));
  }

  async doubleClickProjectsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projectsLink));
  }

  async expectProjectsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projectsLink), expected, timeoutMs);
  }

  async expectProjectsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projectsLink), substring, timeoutMs);
  }

  async scrollProjectsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projectsLink));
  }

  async clickChatterHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async doubleClickChatterHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async expectChatterHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.chatterHelp), expected, timeoutMs);
  }

  async expectChatterHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.chatterHelp), substring, timeoutMs);
  }

  async scrollChatterHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async clickChatter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.chatter));
  }

  async doubleClickChatter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.chatter));
  }

  async expectChatterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.chatter), expected, timeoutMs);
  }

  async expectChatterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.chatter), substring, timeoutMs);
  }

  async scrollChatterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.chatter));
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.help), substring, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async clickOpportunities0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async doubleClickOpportunities0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async expectOpportunities0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.opportunities0), expected, timeoutMs);
  }

  async expectOpportunities0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.opportunities0), substring, timeoutMs);
  }

  async scrollOpportunities0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async clickOpportunitiesLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunitiesLink));
  }

  async doubleClickOpportunitiesLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunitiesLink));
  }

  async expectOpportunitiesLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.opportunitiesLink), expected, timeoutMs);
  }

  async expectOpportunitiesLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.opportunitiesLink), substring, timeoutMs);
  }

  async scrollOpportunitiesLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.opportunitiesLink));
  }

  async clickAccounts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async doubleClickAccounts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async expectAccounts0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.accounts0), expected, timeoutMs);
  }

  async expectAccounts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.accounts0), substring, timeoutMs);
  }

  async scrollAccounts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async clickAccountsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.accountsLink));
  }

  async doubleClickAccountsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.accountsLink));
  }

  async expectAccountsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.accountsLink), expected, timeoutMs);
  }

  async expectAccountsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.accountsLink), substring, timeoutMs);
  }

  async scrollAccountsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.accountsLink));
  }

  async clickContacts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async doubleClickContacts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async expectContacts0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.contacts0), expected, timeoutMs);
  }

  async expectContacts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.contacts0), substring, timeoutMs);
  }

  async scrollContacts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async clickContactsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.contactsLink));
  }

  async doubleClickContactsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.contactsLink));
  }

  async expectContactsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.contactsLink), expected, timeoutMs);
  }

  async expectContactsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.contactsLink), substring, timeoutMs);
  }

  async scrollContactsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.contactsLink));
  }

  async clickQuotes0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async doubleClickQuotes0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async expectQuotes0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.quotes0), expected, timeoutMs);
  }

  async expectQuotes0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.quotes0), substring, timeoutMs);
  }

  async scrollQuotes0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async clickQuotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes));
  }

  async doubleClickQuotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes));
  }

  async expectQuotesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.quotes), expected, timeoutMs);
  }

  async expectQuotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.quotes), substring, timeoutMs);
  }

  async scrollQuotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.quotes));
  }

  async clickPeople0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async doubleClickPeople0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async expectPeople0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.people0), expected, timeoutMs);
  }

  async expectPeople0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.people0), substring, timeoutMs);
  }

  async scrollPeople0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async clickPeople(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.people));
  }

  async doubleClickPeople(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.people));
  }

  async expectPeopleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.people), expected, timeoutMs);
  }

  async expectPeopleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.people), substring, timeoutMs);
  }

  async scrollPeopleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.people));
  }

  async clickResourceRequests0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests0));
  }

  async doubleClickResourceRequests0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests0));
  }

  async expectResourceRequests0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.resourceRequests0), expected, timeoutMs);
  }

  async expectResourceRequests0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.resourceRequests0), substring, timeoutMs);
  }

  async scrollResourceRequests0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests0));
  }

  async clickResourceRequests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests));
  }

  async doubleClickResourceRequests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests));
  }

  async expectResourceRequestsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.resourceRequests), expected, timeoutMs);
  }

  async expectResourceRequestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.resourceRequests), substring, timeoutMs);
  }

  async scrollResourceRequestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests));
  }

  async clickReports0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async doubleClickReports0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async expectReports0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.reports0), expected, timeoutMs);
  }

  async expectReports0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.reports0), substring, timeoutMs);
  }

  async scrollReports0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async clickReportsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.reportsLink));
  }

  async doubleClickReportsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.reportsLink));
  }

  async expectReportsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.reportsLink), expected, timeoutMs);
  }

  async expectReportsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.reportsLink), substring, timeoutMs);
  }

  async scrollReportsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.reportsLink));
  }

  async clickEvents0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.events0));
  }

  async doubleClickEvents0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.events0));
  }

  async expectEvents0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.events0), expected, timeoutMs);
  }

  async expectEvents0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.events0), substring, timeoutMs);
  }

  async scrollEvents0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.events0));
  }

  async clickEvents(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.events));
  }

  async doubleClickEvents(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.events));
  }

  async expectEventsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.events), expected, timeoutMs);
  }

  async expectEventsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.events), substring, timeoutMs);
  }

  async scrollEventsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.events));
  }

  async clickTasks0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.tasks0));
  }

  async doubleClickTasks0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.tasks0));
  }

  async expectTasks0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.tasks0), expected, timeoutMs);
  }

  async expectTasks0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.tasks0), substring, timeoutMs);
  }

  async scrollTasks0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.tasks0));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.tasks), substring, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.tasks));
  }

  async clickShowMoreSearchableObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async doubleClickShowMoreSearchableObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async expectShowMoreSearchableObjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), expected, timeoutMs);
  }

  async expectShowMoreSearchableObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), substring, timeoutMs);
  }

  async scrollShowMoreSearchableObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async getInnerTextTopResultsResults(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async expectTopResultsResultsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.topResultsResults), expected, timeoutMs);
  }

  async expectTopResultsResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.topResultsResults), substring, timeoutMs);
  }

  async scrollTopResultsResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async getInnerTextResult(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async expectResultVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.result), expected, timeoutMs);
  }

  async expectResultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.result), substring, timeoutMs);
  }

  async scrollResultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async clickSortProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async doubleClickSortProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async expectSortProjectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortProjectName), expected, timeoutMs);
  }

  async expectSortProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortProjectName), substring, timeoutMs);
  }

  async scrollSortProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async clickShowProjectNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async doubleClickShowProjectNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), expected, timeoutMs);
  }

  async expectShowProjectNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), substring, timeoutMs);
  }

  async scrollShowProjectNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async clickSortProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async doubleClickSortProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async expectSortProjectManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortProjectManager), expected, timeoutMs);
  }

  async expectSortProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortProjectManager), substring, timeoutMs);
  }

  async scrollSortProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async clickShowProjectManagerColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async doubleClickShowProjectManagerColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), expected, timeoutMs);
  }

  async expectShowProjectManagerColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), substring, timeoutMs);
  }

  async scrollShowProjectManagerColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async clickSortAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async doubleClickSortAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async expectSortAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortAccount), expected, timeoutMs);
  }

  async expectSortAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortAccount), substring, timeoutMs);
  }

  async scrollSortAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async clickShowAccountColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async doubleClickShowAccountColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), expected, timeoutMs);
  }

  async expectShowAccountColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), substring, timeoutMs);
  }

  async scrollShowAccountColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async clickSortOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async doubleClickSortOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async expectSortOpportunityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortOpportunity), expected, timeoutMs);
  }

  async expectSortOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortOpportunity), substring, timeoutMs);
  }

  async scrollSortOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async clickShowOpportunityColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async doubleClickShowOpportunityColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), expected, timeoutMs);
  }

  async expectShowOpportunityColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), substring, timeoutMs);
  }

  async scrollShowOpportunityColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async clickSortRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async doubleClickSortRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async expectSortRegionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortRegion), expected, timeoutMs);
  }

  async expectSortRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortRegion), substring, timeoutMs);
  }

  async scrollSortRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async clickShowRegionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async doubleClickShowRegionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), expected, timeoutMs);
  }

  async expectShowRegionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), substring, timeoutMs);
  }

  async scrollShowRegionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async clickSortPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async doubleClickSortPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async expectSortPracticeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortPractice), expected, timeoutMs);
  }

  async expectSortPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortPractice), substring, timeoutMs);
  }

  async scrollSortPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async clickShowPracticeColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async doubleClickShowPracticeColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), expected, timeoutMs);
  }

  async expectShowPracticeColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), substring, timeoutMs);
  }

  async scrollShowPracticeColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async clickSortGroup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async doubleClickSortGroup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async expectSortGroupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortGroup), expected, timeoutMs);
  }

  async expectSortGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortGroup), substring, timeoutMs);
  }

  async scrollSortGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async clickShowGroupColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async doubleClickShowGroupColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), expected, timeoutMs);
  }

  async expectShowGroupColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), substring, timeoutMs);
  }

  async scrollShowGroupColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async clickSortStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async doubleClickSortStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async expectSortStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortStartDate), expected, timeoutMs);
  }

  async expectSortStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortStartDate), substring, timeoutMs);
  }

  async scrollSortStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async clickShowStartDateColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async doubleClickShowStartDateColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showStartDateColumn), expected, timeoutMs);
  }

  async expectShowStartDateColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showStartDateColumn), substring, timeoutMs);
  }

  async scrollShowStartDateColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async clickSortActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async doubleClickSortActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async expectSortActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortActive), expected, timeoutMs);
  }

  async expectSortActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortActive), substring, timeoutMs);
  }

  async scrollSortActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async clickShowActiveColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async doubleClickShowActiveColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), expected, timeoutMs);
  }

  async expectShowActiveColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), substring, timeoutMs);
  }

  async scrollShowActiveColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async clickSortBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async doubleClickSortBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async expectSortBillableVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortBillable), expected, timeoutMs);
  }

  async expectSortBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortBillable), substring, timeoutMs);
  }

  async scrollSortBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async clickShowBillableColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async doubleClickShowBillableColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), expected, timeoutMs);
  }

  async expectShowBillableColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), substring, timeoutMs);
  }

  async scrollShowBillableColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async getInnerTextDonTSeeYourResult(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async expectDonTSeeYourResultVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), expected, timeoutMs);
  }

  async expectDonTSeeYourResultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), substring, timeoutMs);
  }

  async scrollDonTSeeYourResultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async getInnerTextWeSearchedTheObjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async expectWeSearchedTheObjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), expected, timeoutMs);
  }

  async expectWeSearchedTheObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), substring, timeoutMs);
  }

  async scrollWeSearchedTheObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async getInnerTextKnowWhichObjectYouRe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async expectKnowWhichObjectYouReVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), expected, timeoutMs);
  }

  async expectKnowWhichObjectYouReContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), substring, timeoutMs);
  }

  async scrollKnowWhichObjectYouReIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle('360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation - Search | Salesforce', { timeout: timeoutMs });
  }

  // ── #brandBand_2 table ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getSldsTable2TableText(row: number, col: number | string): Promise<string> {
    return this.sldsTable2.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getSldsTable2TableColumn(col: number | string): Promise<string[]> {
    return this.sldsTable2.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getSldsTable2TableRowData(row: number): Promise<Record<string, string>> {
    return this.sldsTable2.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findSldsTable2TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.sldsTable2.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findSldsTable2TableRowByText(text: string): Promise<number> {
    return this.sldsTable2.findRowByText(text);
  }

  /** Total number of body rows. */
  async getSldsTable2TableRowCount(): Promise<number> {
    return this.sldsTable2.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickSldsTable2TableLink(row: number, col: number | string): Promise<void> {
    return this.sldsTable2.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getSldsTable2TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.sldsTable2.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkSldsTable2TableRow(row: number): Promise<void> {
    const cb = this.sldsTable2.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckSldsTable2TableRow(row: number): Promise<void> {
    const cb = this.sldsTable2.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isSldsTable2TableRowChecked(row: number): Promise<boolean> {
    return this.sldsTable2.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getSldsTable2TableSwitchState(row: number): Promise<boolean> {
    return this.sldsTable2.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleSldsTable2TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.sldsTable2.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickSldsTable2TableButton(row: number, label?: string): Promise<void> {
    return this.sldsTable2.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickSldsTable2TableMenuOption(label: string): Promise<void> {
    return this.sldsTable2.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortSldsTable2TableBy(col: string): Promise<void> {
    return this.sldsTable2.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getSldsTable2TableInRow(row: number, selector: string): Locator {
    return this.sldsTable2.getInRow(row, selector);
  }


  async longPressSearch360HealthAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async expectSearch360HealthAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.search360HealthAnd), value, timeoutMs);
  }

  async expectSearch360HealthAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.search360HealthAnd), count, timeoutMs);
  }

  async clickSearchResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async doubleClickSearchResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async longPressSearchResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async expectSearchResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.searchResults), value, timeoutMs);
  }

  async expectSearchResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.searchResults), count, timeoutMs);
  }

  async clickAssistiveTextId1c0252b67f21B48bF220A4d4760b0966(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966));
  }

  async doubleClickAssistiveTextId1c0252b67f21B48bF220A4d4760b0966(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966));
  }

  async longPressAssistiveTextId1c0252b67f21B48bF220A4d4760b0966(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966));
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), value, timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), timeoutMs);
  }

  async expectAssistiveTextId1c0252b67f21B48bF220A4d4760b0966Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.assistiveTextId1c0252b67f21B48bF220A4d4760b0966), count, timeoutMs);
  }

  async longPressTopResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async expectTopResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.topResults), value, timeoutMs);
  }

  async expectTopResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.topResults), count, timeoutMs);
  }

  async longPressTopResultsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsLink));
  }

  async expectTopResultsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.topResultsLink), value, timeoutMs);
  }

  async expectTopResultsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.topResultsLink), timeoutMs);
  }

  async expectTopResultsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.topResultsLink), count, timeoutMs);
  }

  async longPressProjects1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async expectProjects1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projects1), value, timeoutMs);
  }

  async expectProjects1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projects1), count, timeoutMs);
  }

  async longPressProjectsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projectsLink));
  }

  async expectProjectsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projectsLink), value, timeoutMs);
  }

  async expectProjectsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projectsLink), timeoutMs);
  }

  async expectProjectsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projectsLink), count, timeoutMs);
  }

  async longPressChatterHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async expectChatterHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.chatterHelp), value, timeoutMs);
  }

  async expectChatterHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.chatterHelp), count, timeoutMs);
  }

  async longPressChatter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.chatter));
  }

  async expectChatterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.chatter), value, timeoutMs);
  }

  async expectChatterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.chatter), timeoutMs);
  }

  async expectChatterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.chatter), count, timeoutMs);
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.help), value, timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.help), count, timeoutMs);
  }

  async longPressOpportunities0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async expectOpportunities0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.opportunities0), value, timeoutMs);
  }

  async expectOpportunities0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.opportunities0), count, timeoutMs);
  }

  async longPressOpportunitiesLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.opportunitiesLink));
  }

  async expectOpportunitiesLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.opportunitiesLink), value, timeoutMs);
  }

  async expectOpportunitiesLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.opportunitiesLink), timeoutMs);
  }

  async expectOpportunitiesLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.opportunitiesLink), count, timeoutMs);
  }

  async longPressAccounts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async expectAccounts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.accounts0), value, timeoutMs);
  }

  async expectAccounts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.accounts0), count, timeoutMs);
  }

  async longPressAccountsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.accountsLink));
  }

  async expectAccountsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.accountsLink), value, timeoutMs);
  }

  async expectAccountsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.accountsLink), timeoutMs);
  }

  async expectAccountsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.accountsLink), count, timeoutMs);
  }

  async longPressContacts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async expectContacts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.contacts0), value, timeoutMs);
  }

  async expectContacts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.contacts0), count, timeoutMs);
  }

  async longPressContactsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.contactsLink));
  }

  async expectContactsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.contactsLink), value, timeoutMs);
  }

  async expectContactsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.contactsLink), timeoutMs);
  }

  async expectContactsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.contactsLink), count, timeoutMs);
  }

  async longPressQuotes0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async expectQuotes0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.quotes0), value, timeoutMs);
  }

  async expectQuotes0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.quotes0), count, timeoutMs);
  }

  async longPressQuotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.quotes));
  }

  async expectQuotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.quotes), value, timeoutMs);
  }

  async expectQuotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.quotes), timeoutMs);
  }

  async expectQuotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.quotes), count, timeoutMs);
  }

  async longPressPeople0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async expectPeople0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.people0), value, timeoutMs);
  }

  async expectPeople0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.people0), count, timeoutMs);
  }

  async longPressPeople(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.people));
  }

  async expectPeopleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.people), value, timeoutMs);
  }

  async expectPeopleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.people), timeoutMs);
  }

  async expectPeopleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.people), count, timeoutMs);
  }

  async longPressResourceRequests0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests0));
  }

  async expectResourceRequests0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.resourceRequests0), value, timeoutMs);
  }

  async expectResourceRequests0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.resourceRequests0), timeoutMs);
  }

  async expectResourceRequests0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.resourceRequests0), count, timeoutMs);
  }

  async longPressResourceRequests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.resourceRequests));
  }

  async expectResourceRequestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.resourceRequests), value, timeoutMs);
  }

  async expectResourceRequestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.resourceRequests), timeoutMs);
  }

  async expectResourceRequestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.resourceRequests), count, timeoutMs);
  }

  async longPressReports0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async expectReports0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.reports0), value, timeoutMs);
  }

  async expectReports0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.reports0), count, timeoutMs);
  }

  async longPressReportsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.reportsLink));
  }

  async expectReportsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.reportsLink), value, timeoutMs);
  }

  async expectReportsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.reportsLink), timeoutMs);
  }

  async expectReportsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.reportsLink), count, timeoutMs);
  }

  async longPressEvents0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.events0));
  }

  async expectEvents0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.events0), value, timeoutMs);
  }

  async expectEvents0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.events0), timeoutMs);
  }

  async expectEvents0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.events0), count, timeoutMs);
  }

  async longPressEvents(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.events));
  }

  async expectEventsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.events), value, timeoutMs);
  }

  async expectEventsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.events), timeoutMs);
  }

  async expectEventsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.events), count, timeoutMs);
  }

  async longPressTasks0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.tasks0));
  }

  async expectTasks0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.tasks0), value, timeoutMs);
  }

  async expectTasks0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.tasks0), timeoutMs);
  }

  async expectTasks0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.tasks0), count, timeoutMs);
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.tasks), count, timeoutMs);
  }

  async longPressShowMoreSearchableObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async expectShowMoreSearchableObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), value, timeoutMs);
  }

  async expectShowMoreSearchableObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), count, timeoutMs);
  }

  async clickTopResultsResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async doubleClickTopResultsResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async longPressTopResultsResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async expectTopResultsResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.topResultsResults), value, timeoutMs);
  }

  async expectTopResultsResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.topResultsResults), count, timeoutMs);
  }

  async clickResult(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async doubleClickResult(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async longPressResult(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async expectResultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.result), value, timeoutMs);
  }

  async expectResultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.result), count, timeoutMs);
  }

  async longPressSortProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async expectSortProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortProjectName), value, timeoutMs);
  }

  async expectSortProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortProjectName), count, timeoutMs);
  }

  async longPressShowProjectNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), value, timeoutMs);
  }

  async expectShowProjectNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), count, timeoutMs);
  }

  async longPressSortProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async expectSortProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortProjectManager), value, timeoutMs);
  }

  async expectSortProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortProjectManager), count, timeoutMs);
  }

  async longPressShowProjectManagerColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), value, timeoutMs);
  }

  async expectShowProjectManagerColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), count, timeoutMs);
  }

  async longPressSortAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async expectSortAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortAccount), value, timeoutMs);
  }

  async expectSortAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortAccount), count, timeoutMs);
  }

  async longPressShowAccountColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), value, timeoutMs);
  }

  async expectShowAccountColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), count, timeoutMs);
  }

  async longPressSortOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async expectSortOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortOpportunity), value, timeoutMs);
  }

  async expectSortOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortOpportunity), count, timeoutMs);
  }

  async longPressShowOpportunityColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), value, timeoutMs);
  }

  async expectShowOpportunityColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), count, timeoutMs);
  }

  async longPressSortRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async expectSortRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortRegion), value, timeoutMs);
  }

  async expectSortRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortRegion), count, timeoutMs);
  }

  async longPressShowRegionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), value, timeoutMs);
  }

  async expectShowRegionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), count, timeoutMs);
  }

  async longPressSortPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async expectSortPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortPractice), value, timeoutMs);
  }

  async expectSortPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortPractice), count, timeoutMs);
  }

  async longPressShowPracticeColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), value, timeoutMs);
  }

  async expectShowPracticeColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), count, timeoutMs);
  }

  async longPressSortGroup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async expectSortGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortGroup), value, timeoutMs);
  }

  async expectSortGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortGroup), count, timeoutMs);
  }

  async longPressShowGroupColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), value, timeoutMs);
  }

  async expectShowGroupColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), count, timeoutMs);
  }

  async longPressSortStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async expectSortStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortStartDate), value, timeoutMs);
  }

  async expectSortStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortStartDate), count, timeoutMs);
  }

  async longPressShowStartDateColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showStartDateColumn), value, timeoutMs);
  }

  async expectShowStartDateColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showStartDateColumn), count, timeoutMs);
  }

  async longPressSortActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async expectSortActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortActive), value, timeoutMs);
  }

  async expectSortActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortActive), count, timeoutMs);
  }

  async longPressShowActiveColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), value, timeoutMs);
  }

  async expectShowActiveColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), count, timeoutMs);
  }

  async longPressSortBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async expectSortBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortBillable), value, timeoutMs);
  }

  async expectSortBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortBillable), count, timeoutMs);
  }

  async longPressShowBillableColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), value, timeoutMs);
  }

  async expectShowBillableColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), count, timeoutMs);
  }

  async clickDonTSeeYourResult(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async doubleClickDonTSeeYourResult(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async longPressDonTSeeYourResult(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async expectDonTSeeYourResultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), value, timeoutMs);
  }

  async expectDonTSeeYourResultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), count, timeoutMs);
  }

  async clickWeSearchedTheObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async doubleClickWeSearchedTheObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async longPressWeSearchedTheObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async expectWeSearchedTheObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), value, timeoutMs);
  }

  async expectWeSearchedTheObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), count, timeoutMs);
  }

  async clickKnowWhichObjectYouRe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async doubleClickKnowWhichObjectYouRe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async longPressKnowWhichObjectYouRe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async expectKnowWhichObjectYouReValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), value, timeoutMs);
  }

  async expectKnowWhichObjectYouReEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), count, timeoutMs);
  }

}
