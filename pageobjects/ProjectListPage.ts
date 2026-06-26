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

export class ProjectListPage {
  private static readonly L = {
    option: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    optionOption: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    optionOption2: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    optionOption3: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    close: { strategy: 'role' as const, value: 'Close', role: 'link', actionKind: 'link' as const },
    closeLink: { strategy: 'role' as const, value: 'Close', role: 'link', actionKind: 'link' as const },
    addFavoriteFavoritesList: { strategy: 'role' as const, value: 'Add favorite Favorites list', role: 'option', actionKind: 'generic' as const },
    addFavorite: { strategy: 'role' as const, value: 'Add favorite', role: 'button', actionKind: 'button' as const },
    projectsRecentlyViewed: { strategy: 'text' as const, value: 'Projects Recently Viewed', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    recentlyViewed: { strategy: 'text' as const, value: 'Recently Viewed', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    selectAListView: { strategy: 'role' as const, value: 'Select a List View: Projects', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    thisListIsPinned: { strategy: 'role' as const, value: 'This list is pinned.', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    new: { strategy: 'role' as const, value: 'New', role: 'button', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    changeOwner: { strategy: 'role' as const, value: 'Change Owner', role: 'button', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    import: { strategy: 'role' as const, value: 'Import', role: 'button', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    createProjectFromTemplate: { strategy: 'role' as const, value: 'Create Project From Template', role: 'button', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    itemsUpdated: { strategy: 'text' as const, value: '3 items • Updated a few seconds ago', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    items: { strategy: 'text' as const, value: '3 items •', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    selectListDisplay: { strategy: 'role' as const, value: 'Select list display', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    multiColumnSortButton: { strategy: 'role' as const, value: 'Column sort', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    lgtDatatable1Options: { strategy: 'css' as const, value: '[name="lgt-datatable-1-options"][type="checkbox"]', shadowHost: 'lightning-primitive-header-factory', actionKind: 'checkbox' as const },
    sortByProjectName: { strategy: 'role' as const, value: 'Sort by: Project Name', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectNameColumn: { strategy: 'role' as const, value: 'Show Project Name column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-505', actionKind: 'button' as const },
    projectNameColumnWidth: { strategy: 'role' as const, value: 'Project Name column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByProjectManager: { strategy: 'role' as const, value: 'Sort by: Project Manager', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectManagerColumn: { strategy: 'role' as const, value: 'Show Project Manager column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-511', actionKind: 'button' as const },
    projectManagerColumnWidth: { strategy: 'role' as const, value: 'Project Manager column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByAccount: { strategy: 'role' as const, value: 'Sort by: Account', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showAccountColumnActions: { strategy: 'role' as const, value: 'Show Account column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-517', actionKind: 'button' as const },
    accountColumnWidth: { strategy: 'role' as const, value: 'Account column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByOpportunity: { strategy: 'role' as const, value: 'Sort by: Opportunity', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showOpportunityColumnActions: { strategy: 'role' as const, value: 'Show Opportunity column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-523', actionKind: 'button' as const },
    opportunityColumnWidth: { strategy: 'role' as const, value: 'Opportunity column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByRegion: { strategy: 'role' as const, value: 'Sort by: Region', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showRegionColumnActions: { strategy: 'role' as const, value: 'Show Region column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-529', actionKind: 'button' as const },
    regionColumnWidth: { strategy: 'role' as const, value: 'Region column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByPractice: { strategy: 'role' as const, value: 'Sort by: Practice', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showPracticeColumnActions: { strategy: 'role' as const, value: 'Show Practice column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-535', actionKind: 'button' as const },
    practiceColumnWidth: { strategy: 'role' as const, value: 'Practice column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByGroup: { strategy: 'role' as const, value: 'Sort by: Group', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showGroupColumnActions: { strategy: 'role' as const, value: 'Show Group column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-541', actionKind: 'button' as const },
    groupColumnWidth: { strategy: 'role' as const, value: 'Group column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByStartDate: { strategy: 'role' as const, value: 'Sort by: Start Date', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStartDateColumn: { strategy: 'role' as const, value: 'Show Start Date column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-547', actionKind: 'button' as const },
    startDateColumnWidth: { strategy: 'role' as const, value: 'Start Date column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByActive: { strategy: 'role' as const, value: 'Sort by: Active', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showActiveColumnActions: { strategy: 'role' as const, value: 'Show Active column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-553', actionKind: 'button' as const },
    activeColumnWidth: { strategy: 'role' as const, value: 'Active column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByBillable: { strategy: 'role' as const, value: 'Sort by: Billable', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showBillableColumnActions: { strategy: 'role' as const, value: 'Show Billable column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-559', actionKind: 'button' as const },
    billableColumnWidth: { strategy: 'role' as const, value: 'Billable column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    likedLikeLikedLikeCommentShare: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike CommentShare', actionKind: 'generic' as const },
    likedLikeNotetest: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'Notetest', actionKind: 'generic' as const },
    likedLikeLikedLikeComment: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike Comment', actionKind: 'generic' as const },
    likedLikeLikedLikeCommentShare2: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike CommentShare', actionKind: 'generic' as const },
    likedLikeLikedLikeCommentShare3: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike CommentShare', actionKind: 'generic' as const },
    likedLikeLikedLikeComment2: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike Comment', actionKind: 'generic' as const },
    likedLikeLikedLikeCommentShare4: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike CommentShare', actionKind: 'generic' as const },
    likedLikeLikedLikeCommentShare5: { strategy: 'role' as const, value: 'LikedLike', role: 'option', scope: 'ol > li', scopeText: 'LikedLike CommentShare', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.option));
  }

  async doubleClickOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.option));
  }

  async expectOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.option), expected, timeoutMs);
  }

  async expectOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.option), substring, timeoutMs);
  }

  async scrollOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.option));
  }

  async clickOptionOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption));
  }

  async doubleClickOptionOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption));
  }

  async expectOptionOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.optionOption), expected, timeoutMs);
  }

  async expectOptionOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.optionOption), substring, timeoutMs);
  }

  async scrollOptionOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption));
  }

  async clickOptionOption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption2));
  }

  async doubleClickOptionOption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption2));
  }

  async expectOptionOption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.optionOption2), expected, timeoutMs);
  }

  async expectOptionOption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.optionOption2), substring, timeoutMs);
  }

  async scrollOptionOption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption2));
  }

  async clickOptionOption3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption3));
  }

  async doubleClickOptionOption3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption3));
  }

  async expectOptionOption3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.optionOption3), expected, timeoutMs);
  }

  async expectOptionOption3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.optionOption3), substring, timeoutMs);
  }

  async scrollOptionOption3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption3));
  }

  async clickClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.close));
  }

  async doubleClickClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.close));
  }

  async expectCloseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.close), expected, timeoutMs);
  }

  async expectCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.close), substring, timeoutMs);
  }

  async scrollCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.close));
  }

  async clickCloseLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.closeLink));
  }

  async doubleClickCloseLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.closeLink));
  }

  async expectCloseLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.closeLink), expected, timeoutMs);
  }

  async expectCloseLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.closeLink), substring, timeoutMs);
  }

  async scrollCloseLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.closeLink));
  }

  async clickAddFavoriteFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList));
  }

  async doubleClickAddFavoriteFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), expected, timeoutMs);
  }

  async expectAddFavoriteFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), substring, timeoutMs);
  }

  async scrollAddFavoriteFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList));
  }

  async clickAddFavorite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.addFavorite));
  }

  async doubleClickAddFavorite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.addFavorite));
  }

  async expectAddFavoriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.addFavorite), expected, timeoutMs);
  }

  async expectAddFavoriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.addFavorite), substring, timeoutMs);
  }

  async scrollAddFavoriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.addFavorite));
  }

  async getInnerTextProjectsRecentlyViewed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed));
  }

  async expectProjectsRecentlyViewedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), expected, timeoutMs);
  }

  async expectProjectsRecentlyViewedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), substring, timeoutMs);
  }

  async scrollProjectsRecentlyViewedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed));
  }

  async getInnerTextRecentlyViewed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed));
  }

  async expectRecentlyViewedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.recentlyViewed), expected, timeoutMs);
  }

  async expectRecentlyViewedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.recentlyViewed), substring, timeoutMs);
  }

  async scrollRecentlyViewedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed));
  }

  async clickSelectAListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.selectAListView));
  }

  async doubleClickSelectAListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.selectAListView));
  }

  async expectSelectAListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.selectAListView), expected, timeoutMs);
  }

  async expectSelectAListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.selectAListView), substring, timeoutMs);
  }

  async scrollSelectAListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.selectAListView));
  }

  async clickThisListIsPinned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.thisListIsPinned));
  }

  async doubleClickThisListIsPinned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.thisListIsPinned));
  }

  async expectThisListIsPinnedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.thisListIsPinned), expected, timeoutMs);
  }

  async expectThisListIsPinnedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.thisListIsPinned), substring, timeoutMs);
  }

  async scrollThisListIsPinnedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.thisListIsPinned));
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.new), substring, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.new));
  }

  async clickChangeOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.changeOwner));
  }

  async doubleClickChangeOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.changeOwner));
  }

  async expectChangeOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.changeOwner), expected, timeoutMs);
  }

  async expectChangeOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.changeOwner), substring, timeoutMs);
  }

  async scrollChangeOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.changeOwner));
  }

  async clickImport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.import));
  }

  async doubleClickImport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.import));
  }

  async expectImportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.import), expected, timeoutMs);
  }

  async expectImportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.import), substring, timeoutMs);
  }

  async scrollImportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.import));
  }

  async clickCreateProjectFromTemplate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate));
  }

  async doubleClickCreateProjectFromTemplate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate));
  }

  async expectCreateProjectFromTemplateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), expected, timeoutMs);
  }

  async expectCreateProjectFromTemplateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), substring, timeoutMs);
  }

  async scrollCreateProjectFromTemplateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate));
  }

  async getInnerTextItemsUpdated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated));
  }

  async expectItemsUpdatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.itemsUpdated), expected, timeoutMs);
  }

  async expectItemsUpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.itemsUpdated), substring, timeoutMs);
  }

  async scrollItemsUpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated));
  }

  async getInnerTextItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectListPage.L.items));
  }

  async expectItemsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.items), expected, timeoutMs);
  }

  async expectItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.items), substring, timeoutMs);
  }

  async scrollItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.items));
  }

  async clickSelectListDisplay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.selectListDisplay));
  }

  async doubleClickSelectListDisplay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.selectListDisplay));
  }

  async expectSelectListDisplayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.selectListDisplay), expected, timeoutMs);
  }

  async expectSelectListDisplayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.selectListDisplay), substring, timeoutMs);
  }

  async scrollSelectListDisplayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.selectListDisplay));
  }

  async clickMultiColumnSortButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.multiColumnSortButton));
  }

  async doubleClickMultiColumnSortButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), expected, timeoutMs);
  }

  async expectMultiColumnSortButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), substring, timeoutMs);
  }

  async scrollMultiColumnSortButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.multiColumnSortButton));
  }

  async checkLgtDatatable1Options(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options));
  }

  async uncheckLgtDatatable1Options(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options));
  }

  async expectLgtDatatable1OptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async scrollLgtDatatable1OptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options));
  }

  async clickSortByProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectName));
  }

  async doubleClickSortByProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectName));
  }

  async expectSortByProjectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByProjectName), expected, timeoutMs);
  }

  async expectSortByProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByProjectName), substring, timeoutMs);
  }

  async scrollSortByProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectName));
  }

  async clickShowProjectNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectNameColumn));
  }

  async doubleClickShowProjectNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), expected, timeoutMs);
  }

  async expectShowProjectNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), substring, timeoutMs);
  }

  async scrollShowProjectNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectNameColumn));
  }

  async clickProjectNameColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth));
  }

  async doubleClickProjectNameColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth));
  }

  async expectProjectNameColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), expected, timeoutMs);
  }

  async expectProjectNameColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), substring, timeoutMs);
  }

  async scrollProjectNameColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth));
  }

  async clickSortByProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectManager));
  }

  async doubleClickSortByProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectManager));
  }

  async expectSortByProjectManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByProjectManager), expected, timeoutMs);
  }

  async expectSortByProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByProjectManager), substring, timeoutMs);
  }

  async scrollSortByProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectManager));
  }

  async clickShowProjectManagerColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn));
  }

  async doubleClickShowProjectManagerColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), expected, timeoutMs);
  }

  async expectShowProjectManagerColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), substring, timeoutMs);
  }

  async scrollShowProjectManagerColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn));
  }

  async clickProjectManagerColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth));
  }

  async doubleClickProjectManagerColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth));
  }

  async expectProjectManagerColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), expected, timeoutMs);
  }

  async expectProjectManagerColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), substring, timeoutMs);
  }

  async scrollProjectManagerColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth));
  }

  async clickSortByAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByAccount));
  }

  async doubleClickSortByAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByAccount));
  }

  async expectSortByAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByAccount), expected, timeoutMs);
  }

  async expectSortByAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByAccount), substring, timeoutMs);
  }

  async scrollSortByAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByAccount));
  }

  async clickShowAccountColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showAccountColumnActions));
  }

  async doubleClickShowAccountColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), expected, timeoutMs);
  }

  async expectShowAccountColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), substring, timeoutMs);
  }

  async scrollShowAccountColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showAccountColumnActions));
  }

  async clickAccountColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.accountColumnWidth));
  }

  async doubleClickAccountColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.accountColumnWidth));
  }

  async expectAccountColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.accountColumnWidth), expected, timeoutMs);
  }

  async expectAccountColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.accountColumnWidth), substring, timeoutMs);
  }

  async scrollAccountColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.accountColumnWidth));
  }

  async clickSortByOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByOpportunity));
  }

  async doubleClickSortByOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByOpportunity));
  }

  async expectSortByOpportunityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByOpportunity), expected, timeoutMs);
  }

  async expectSortByOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByOpportunity), substring, timeoutMs);
  }

  async scrollSortByOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByOpportunity));
  }

  async clickShowOpportunityColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions));
  }

  async doubleClickShowOpportunityColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), expected, timeoutMs);
  }

  async expectShowOpportunityColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), substring, timeoutMs);
  }

  async scrollShowOpportunityColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions));
  }

  async clickOpportunityColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth));
  }

  async doubleClickOpportunityColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth));
  }

  async expectOpportunityColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), expected, timeoutMs);
  }

  async expectOpportunityColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), substring, timeoutMs);
  }

  async scrollOpportunityColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth));
  }

  async clickSortByRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByRegion));
  }

  async doubleClickSortByRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByRegion));
  }

  async expectSortByRegionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByRegion), expected, timeoutMs);
  }

  async expectSortByRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByRegion), substring, timeoutMs);
  }

  async scrollSortByRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByRegion));
  }

  async clickShowRegionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showRegionColumnActions));
  }

  async doubleClickShowRegionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), expected, timeoutMs);
  }

  async expectShowRegionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), substring, timeoutMs);
  }

  async scrollShowRegionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showRegionColumnActions));
  }

  async clickRegionColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.regionColumnWidth));
  }

  async doubleClickRegionColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.regionColumnWidth));
  }

  async expectRegionColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.regionColumnWidth), expected, timeoutMs);
  }

  async expectRegionColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.regionColumnWidth), substring, timeoutMs);
  }

  async scrollRegionColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.regionColumnWidth));
  }

  async clickSortByPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByPractice));
  }

  async doubleClickSortByPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByPractice));
  }

  async expectSortByPracticeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByPractice), expected, timeoutMs);
  }

  async expectSortByPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByPractice), substring, timeoutMs);
  }

  async scrollSortByPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByPractice));
  }

  async clickShowPracticeColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions));
  }

  async doubleClickShowPracticeColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), expected, timeoutMs);
  }

  async expectShowPracticeColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), substring, timeoutMs);
  }

  async scrollShowPracticeColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions));
  }

  async clickPracticeColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.practiceColumnWidth));
  }

  async doubleClickPracticeColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.practiceColumnWidth));
  }

  async expectPracticeColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), expected, timeoutMs);
  }

  async expectPracticeColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), substring, timeoutMs);
  }

  async scrollPracticeColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.practiceColumnWidth));
  }

  async clickSortByGroup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByGroup));
  }

  async doubleClickSortByGroup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByGroup));
  }

  async expectSortByGroupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByGroup), expected, timeoutMs);
  }

  async expectSortByGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByGroup), substring, timeoutMs);
  }

  async scrollSortByGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByGroup));
  }

  async clickShowGroupColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showGroupColumnActions));
  }

  async doubleClickShowGroupColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), expected, timeoutMs);
  }

  async expectShowGroupColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), substring, timeoutMs);
  }

  async scrollShowGroupColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showGroupColumnActions));
  }

  async clickGroupColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.groupColumnWidth));
  }

  async doubleClickGroupColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.groupColumnWidth));
  }

  async expectGroupColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.groupColumnWidth), expected, timeoutMs);
  }

  async expectGroupColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.groupColumnWidth), substring, timeoutMs);
  }

  async scrollGroupColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.groupColumnWidth));
  }

  async clickSortByStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByStartDate));
  }

  async doubleClickSortByStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByStartDate));
  }

  async expectSortByStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByStartDate), expected, timeoutMs);
  }

  async expectSortByStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByStartDate), substring, timeoutMs);
  }

  async scrollSortByStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByStartDate));
  }

  async clickShowStartDateColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showStartDateColumn));
  }

  async doubleClickShowStartDateColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showStartDateColumn), expected, timeoutMs);
  }

  async expectShowStartDateColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showStartDateColumn), substring, timeoutMs);
  }

  async scrollShowStartDateColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showStartDateColumn));
  }

  async clickStartDateColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.startDateColumnWidth));
  }

  async doubleClickStartDateColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.startDateColumnWidth));
  }

  async expectStartDateColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), expected, timeoutMs);
  }

  async expectStartDateColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), substring, timeoutMs);
  }

  async scrollStartDateColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.startDateColumnWidth));
  }

  async clickSortByActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByActive));
  }

  async doubleClickSortByActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByActive));
  }

  async expectSortByActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByActive), expected, timeoutMs);
  }

  async expectSortByActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByActive), substring, timeoutMs);
  }

  async scrollSortByActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByActive));
  }

  async clickShowActiveColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showActiveColumnActions));
  }

  async doubleClickShowActiveColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), expected, timeoutMs);
  }

  async expectShowActiveColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), substring, timeoutMs);
  }

  async scrollShowActiveColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showActiveColumnActions));
  }

  async clickActiveColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.activeColumnWidth));
  }

  async doubleClickActiveColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.activeColumnWidth));
  }

  async expectActiveColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.activeColumnWidth), expected, timeoutMs);
  }

  async expectActiveColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.activeColumnWidth), substring, timeoutMs);
  }

  async scrollActiveColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.activeColumnWidth));
  }

  async clickSortByBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByBillable));
  }

  async doubleClickSortByBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.sortByBillable));
  }

  async expectSortByBillableVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.sortByBillable), expected, timeoutMs);
  }

  async expectSortByBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.sortByBillable), substring, timeoutMs);
  }

  async scrollSortByBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.sortByBillable));
  }

  async clickShowBillableColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.showBillableColumnActions));
  }

  async doubleClickShowBillableColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), expected, timeoutMs);
  }

  async expectShowBillableColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), substring, timeoutMs);
  }

  async scrollShowBillableColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.showBillableColumnActions));
  }

  async clickBillableColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.billableColumnWidth));
  }

  async doubleClickBillableColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.billableColumnWidth));
  }

  async expectBillableColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.billableColumnWidth), expected, timeoutMs);
  }

  async expectBillableColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.billableColumnWidth), substring, timeoutMs);
  }

  async scrollBillableColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.billableColumnWidth));
  }

  async clickLikedLikeLikedLikeCommentShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare));
  }

  async doubleClickLikedLikeLikedLikeCommentShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare));
  }

  async expectLikedLikeLikedLikeCommentShareVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare));
  }

  async clickLikedLikeNotetest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeNotetest));
  }

  async doubleClickLikedLikeNotetest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeNotetest));
  }

  async expectLikedLikeNotetestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), expected, timeoutMs);
  }

  async expectLikedLikeNotetestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), substring, timeoutMs);
  }

  async scrollLikedLikeNotetestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeNotetest));
  }

  async clickLikedLikeLikedLikeComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment));
  }

  async doubleClickLikedLikeLikedLikeComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment));
  }

  async expectLikedLikeLikedLikeCommentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment));
  }

  async clickLikedLikeLikedLikeCommentShare2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2));
  }

  async doubleClickLikedLikeLikedLikeCommentShare2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2));
  }

  async expectLikedLikeLikedLikeCommentShare2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentShare2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2));
  }

  async clickLikedLikeLikedLikeCommentShare3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3));
  }

  async doubleClickLikedLikeLikedLikeCommentShare3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3));
  }

  async expectLikedLikeLikedLikeCommentShare3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentShare3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3));
  }

  async clickLikedLikeLikedLikeComment2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2));
  }

  async doubleClickLikedLikeLikedLikeComment2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2));
  }

  async expectLikedLikeLikedLikeComment2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeComment2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2));
  }

  async clickLikedLikeLikedLikeCommentShare4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4));
  }

  async doubleClickLikedLikeLikedLikeCommentShare4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4));
  }

  async expectLikedLikeLikedLikeCommentShare4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentShare4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4));
  }

  async clickLikedLikeLikedLikeCommentShare5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5));
  }

  async doubleClickLikedLikeLikedLikeCommentShare5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5));
  }

  async expectLikedLikeLikedLikeCommentShare5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), expected, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), substring, timeoutMs);
  }

  async scrollLikedLikeLikedLikeCommentShare5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5));
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
    await expect(this.page).toHaveTitle('Recently Viewed | Projects | Salesforce', { timeout: timeoutMs });
  }


  async longPressOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.option));
  }

  async expectOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.option), value, timeoutMs);
  }

  async expectOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.option), timeoutMs);
  }

  async expectOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.option), count, timeoutMs);
  }

  async longPressOptionOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption));
  }

  async expectOptionOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.optionOption), value, timeoutMs);
  }

  async expectOptionOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.optionOption), timeoutMs);
  }

  async expectOptionOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.optionOption), count, timeoutMs);
  }

  async longPressOptionOption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption2));
  }

  async expectOptionOption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.optionOption2), value, timeoutMs);
  }

  async expectOptionOption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.optionOption2), timeoutMs);
  }

  async expectOptionOption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.optionOption2), count, timeoutMs);
  }

  async longPressOptionOption3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.optionOption3));
  }

  async expectOptionOption3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.optionOption3), value, timeoutMs);
  }

  async expectOptionOption3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.optionOption3), timeoutMs);
  }

  async expectOptionOption3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.optionOption3), count, timeoutMs);
  }

  async longPressClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.close));
  }

  async expectCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.close), value, timeoutMs);
  }

  async expectCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.close), timeoutMs);
  }

  async expectCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.close), count, timeoutMs);
  }

  async longPressCloseLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.closeLink));
  }

  async expectCloseLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.closeLink), value, timeoutMs);
  }

  async expectCloseLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.closeLink), timeoutMs);
  }

  async expectCloseLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.closeLink), count, timeoutMs);
  }

  async longPressAddFavoriteFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), value, timeoutMs);
  }

  async expectAddFavoriteFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.addFavoriteFavoritesList), count, timeoutMs);
  }

  async longPressAddFavorite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.addFavorite));
  }

  async expectAddFavoriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.addFavorite), value, timeoutMs);
  }

  async expectAddFavoriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.addFavorite), count, timeoutMs);
  }

  async clickProjectsRecentlyViewed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed));
  }

  async doubleClickProjectsRecentlyViewed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed));
  }

  async longPressProjectsRecentlyViewed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed));
  }

  async expectProjectsRecentlyViewedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), value, timeoutMs);
  }

  async expectProjectsRecentlyViewedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.projectsRecentlyViewed), count, timeoutMs);
  }

  async clickRecentlyViewed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed));
  }

  async doubleClickRecentlyViewed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed));
  }

  async longPressRecentlyViewed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.recentlyViewed));
  }

  async expectRecentlyViewedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.recentlyViewed), value, timeoutMs);
  }

  async expectRecentlyViewedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.recentlyViewed), count, timeoutMs);
  }

  async longPressSelectAListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.selectAListView));
  }

  async expectSelectAListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.selectAListView), value, timeoutMs);
  }

  async expectSelectAListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.selectAListView), count, timeoutMs);
  }

  async longPressThisListIsPinned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.thisListIsPinned));
  }

  async expectThisListIsPinnedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.thisListIsPinned), value, timeoutMs);
  }

  async expectThisListIsPinnedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.thisListIsPinned), count, timeoutMs);
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.new));
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.new), count, timeoutMs);
  }

  async longPressChangeOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.changeOwner));
  }

  async expectChangeOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.changeOwner), value, timeoutMs);
  }

  async expectChangeOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.changeOwner), timeoutMs);
  }

  async expectChangeOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.changeOwner), count, timeoutMs);
  }

  async longPressImport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.import));
  }

  async expectImportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.import), value, timeoutMs);
  }

  async expectImportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.import), timeoutMs);
  }

  async expectImportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.import), count, timeoutMs);
  }

  async longPressCreateProjectFromTemplate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate));
  }

  async expectCreateProjectFromTemplateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), value, timeoutMs);
  }

  async expectCreateProjectFromTemplateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.createProjectFromTemplate), count, timeoutMs);
  }

  async clickItemsUpdated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated));
  }

  async doubleClickItemsUpdated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated));
  }

  async longPressItemsUpdated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.itemsUpdated));
  }

  async expectItemsUpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.itemsUpdated), value, timeoutMs);
  }

  async expectItemsUpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.itemsUpdated), count, timeoutMs);
  }

  async clickItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectListPage.L.items));
  }

  async doubleClickItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectListPage.L.items));
  }

  async longPressItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.items));
  }

  async expectItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.items), value, timeoutMs);
  }

  async expectItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.items), timeoutMs);
  }

  async expectItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.items), count, timeoutMs);
  }

  async longPressSelectListDisplay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.selectListDisplay));
  }

  async expectSelectListDisplayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.selectListDisplay), value, timeoutMs);
  }

  async expectSelectListDisplayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.selectListDisplay), count, timeoutMs);
  }

  async longPressMultiColumnSortButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), value, timeoutMs);
  }

  async expectMultiColumnSortButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.multiColumnSortButton), count, timeoutMs);
  }

  async expectLgtDatatable1OptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), expected, timeoutMs);
  }

  async expectLgtDatatable1OptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), substring, timeoutMs);
  }

  async expectLgtDatatable1OptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), value, timeoutMs);
  }

  async expectLgtDatatable1OptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), timeoutMs);
  }

  async expectLgtDatatable1OptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.lgtDatatable1Options), count, timeoutMs);
  }

  async longPressSortByProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectName));
  }

  async expectSortByProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByProjectName), value, timeoutMs);
  }

  async expectSortByProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByProjectName), count, timeoutMs);
  }

  async longPressShowProjectNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), value, timeoutMs);
  }

  async expectShowProjectNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showProjectNameColumn), count, timeoutMs);
  }

  async longPressProjectNameColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth));
  }

  async expectProjectNameColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), value, timeoutMs);
  }

  async expectProjectNameColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.projectNameColumnWidth), count, timeoutMs);
  }

  async longPressSortByProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByProjectManager));
  }

  async expectSortByProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByProjectManager), value, timeoutMs);
  }

  async expectSortByProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByProjectManager), count, timeoutMs);
  }

  async longPressShowProjectManagerColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), value, timeoutMs);
  }

  async expectShowProjectManagerColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showProjectManagerColumn), count, timeoutMs);
  }

  async longPressProjectManagerColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth));
  }

  async expectProjectManagerColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), value, timeoutMs);
  }

  async expectProjectManagerColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.projectManagerColumnWidth), count, timeoutMs);
  }

  async longPressSortByAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByAccount));
  }

  async expectSortByAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByAccount), value, timeoutMs);
  }

  async expectSortByAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByAccount), count, timeoutMs);
  }

  async longPressShowAccountColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), value, timeoutMs);
  }

  async expectShowAccountColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showAccountColumnActions), count, timeoutMs);
  }

  async longPressAccountColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.accountColumnWidth));
  }

  async expectAccountColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.accountColumnWidth), value, timeoutMs);
  }

  async expectAccountColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.accountColumnWidth), count, timeoutMs);
  }

  async longPressSortByOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByOpportunity));
  }

  async expectSortByOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByOpportunity), value, timeoutMs);
  }

  async expectSortByOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByOpportunity), count, timeoutMs);
  }

  async longPressShowOpportunityColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), value, timeoutMs);
  }

  async expectShowOpportunityColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showOpportunityColumnActions), count, timeoutMs);
  }

  async longPressOpportunityColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth));
  }

  async expectOpportunityColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), value, timeoutMs);
  }

  async expectOpportunityColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.opportunityColumnWidth), count, timeoutMs);
  }

  async longPressSortByRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByRegion));
  }

  async expectSortByRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByRegion), value, timeoutMs);
  }

  async expectSortByRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByRegion), count, timeoutMs);
  }

  async longPressShowRegionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), value, timeoutMs);
  }

  async expectShowRegionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showRegionColumnActions), count, timeoutMs);
  }

  async longPressRegionColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.regionColumnWidth));
  }

  async expectRegionColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.regionColumnWidth), value, timeoutMs);
  }

  async expectRegionColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.regionColumnWidth), count, timeoutMs);
  }

  async longPressSortByPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByPractice));
  }

  async expectSortByPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByPractice), value, timeoutMs);
  }

  async expectSortByPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByPractice), count, timeoutMs);
  }

  async longPressShowPracticeColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), value, timeoutMs);
  }

  async expectShowPracticeColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showPracticeColumnActions), count, timeoutMs);
  }

  async longPressPracticeColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.practiceColumnWidth));
  }

  async expectPracticeColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), value, timeoutMs);
  }

  async expectPracticeColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.practiceColumnWidth), count, timeoutMs);
  }

  async longPressSortByGroup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByGroup));
  }

  async expectSortByGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByGroup), value, timeoutMs);
  }

  async expectSortByGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByGroup), count, timeoutMs);
  }

  async longPressShowGroupColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), value, timeoutMs);
  }

  async expectShowGroupColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showGroupColumnActions), count, timeoutMs);
  }

  async longPressGroupColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.groupColumnWidth));
  }

  async expectGroupColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.groupColumnWidth), value, timeoutMs);
  }

  async expectGroupColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.groupColumnWidth), count, timeoutMs);
  }

  async longPressSortByStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByStartDate));
  }

  async expectSortByStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByStartDate), value, timeoutMs);
  }

  async expectSortByStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByStartDate), count, timeoutMs);
  }

  async longPressShowStartDateColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showStartDateColumn), value, timeoutMs);
  }

  async expectShowStartDateColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showStartDateColumn), count, timeoutMs);
  }

  async longPressStartDateColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.startDateColumnWidth));
  }

  async expectStartDateColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), value, timeoutMs);
  }

  async expectStartDateColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.startDateColumnWidth), count, timeoutMs);
  }

  async longPressSortByActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByActive));
  }

  async expectSortByActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByActive), value, timeoutMs);
  }

  async expectSortByActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByActive), count, timeoutMs);
  }

  async longPressShowActiveColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), value, timeoutMs);
  }

  async expectShowActiveColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showActiveColumnActions), count, timeoutMs);
  }

  async longPressActiveColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.activeColumnWidth));
  }

  async expectActiveColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.activeColumnWidth), value, timeoutMs);
  }

  async expectActiveColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.activeColumnWidth), count, timeoutMs);
  }

  async longPressSortByBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.sortByBillable));
  }

  async expectSortByBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.sortByBillable), value, timeoutMs);
  }

  async expectSortByBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.sortByBillable), count, timeoutMs);
  }

  async longPressShowBillableColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), value, timeoutMs);
  }

  async expectShowBillableColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.showBillableColumnActions), count, timeoutMs);
  }

  async longPressBillableColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.billableColumnWidth));
  }

  async expectBillableColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.billableColumnWidth), value, timeoutMs);
  }

  async expectBillableColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.billableColumnWidth), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeCommentShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare));
  }

  async expectLikedLikeLikedLikeCommentShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare), count, timeoutMs);
  }

  async longPressLikedLikeNotetest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeNotetest));
  }

  async expectLikedLikeNotetestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), value, timeoutMs);
  }

  async expectLikedLikeNotetestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), timeoutMs);
  }

  async expectLikedLikeNotetestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeNotetest), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment));
  }

  async expectLikedLikeLikedLikeCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeCommentShare2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2));
  }

  async expectLikedLikeLikedLikeCommentShare2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare2), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeCommentShare3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3));
  }

  async expectLikedLikeLikedLikeCommentShare3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare3), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeComment2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2));
  }

  async expectLikedLikeLikedLikeComment2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), timeoutMs);
  }

  async expectLikedLikeLikedLikeComment2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeComment2), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeCommentShare4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4));
  }

  async expectLikedLikeLikedLikeCommentShare4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare4), count, timeoutMs);
  }

  async longPressLikedLikeLikedLikeCommentShare5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5));
  }

  async expectLikedLikeLikedLikeCommentShare5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), value, timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), timeoutMs);
  }

  async expectLikedLikeLikedLikeCommentShare5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectListPage.L.likedLikeLikedLikeCommentShare5), count, timeoutMs);
  }

}
