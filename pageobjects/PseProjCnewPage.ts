import type { Page } from "@playwright/test";
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
  expectPageTitle,
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

export class PseProjCnewPage {
  private static readonly L = {
    projectsRecentlyViewed: { strategy: 'text' as const, value: 'Projects Recently Viewed', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    selectAListView: { strategy: 'role' as const, value: 'Select a List View: Projects', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    createProjectFromTemplate: { strategy: 'role' as const, value: 'Create Project From Template', role: 'button', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    itemsUpdated: { strategy: 'text' as const, value: '4 items • Updated a few seconds ago', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    items: { strategy: 'text' as const, value: '4 items •', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    sortByProjectName: { strategy: 'role' as const, value: 'Sort by: Project Name', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectNameColumn: { strategy: 'role' as const, value: 'Show Project Name column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-622', actionKind: 'button' as const },
    sortByProjectManager: { strategy: 'role' as const, value: 'Sort by: Project Manager', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectManagerColumn: { strategy: 'role' as const, value: 'Show Project Manager column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10852', actionKind: 'button' as const },
    sortByAccount: { strategy: 'role' as const, value: 'Sort by: Account', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showAccountColumnActions: { strategy: 'role' as const, value: 'Show Account column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10858', actionKind: 'button' as const },
    sortByOpportunity: { strategy: 'role' as const, value: 'Sort by: Opportunity', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showOpportunityColumnActions: { strategy: 'role' as const, value: 'Show Opportunity column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10864', actionKind: 'button' as const },
    sortByRegion: { strategy: 'role' as const, value: 'Sort by: Region', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showRegionColumnActions: { strategy: 'role' as const, value: 'Show Region column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10870', actionKind: 'button' as const },
    sortByPractice: { strategy: 'role' as const, value: 'Sort by: Practice', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showPracticeColumnActions: { strategy: 'role' as const, value: 'Show Practice column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10876', actionKind: 'button' as const },
    sortByGroup: { strategy: 'role' as const, value: 'Sort by: Group', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showGroupColumnActions: { strategy: 'role' as const, value: 'Show Group column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10882', actionKind: 'button' as const },
    sortByStartDate: { strategy: 'role' as const, value: 'Sort by: Start Date', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStartDateColumn: { strategy: 'role' as const, value: 'Show Start Date column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10888', actionKind: 'button' as const },
    sortByActive: { strategy: 'role' as const, value: 'Sort by: Active', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showActiveColumnActions: { strategy: 'role' as const, value: 'Show Active column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10894', actionKind: 'button' as const },
    sortByBillable: { strategy: 'role' as const, value: 'Sort by: Billable', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showBillableColumnActions: { strategy: 'role' as const, value: 'Show Billable column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-10900', actionKind: 'button' as const },
    newProject: { strategy: 'text' as const, value: 'New Project', shadowHost: 'record_flexipage-desktop-record-page-decorator', actionKind: 'text' as const },
    projectOverview: { strategy: 'text' as const, value: 'Project Overview', shadowHost: 'flexipage-field-section2', actionKind: 'text' as const },
    stage: { strategy: 'role' as const, value: 'Stage', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    practiceManager: { strategy: 'role' as const, value: 'Practice Manager', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    practiceDirector: { strategy: 'role' as const, value: 'Practice Director', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    billableHelpInfo: { strategy: 'role' as const, value: 'Billable Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    projectManager: { strategy: 'role' as const, value: 'Project Manager', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    practice: { strategy: 'role' as const, value: 'Practice', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    region: { strategy: 'role' as const, value: 'Region', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    timeZoneHelpInfo: { strategy: 'role' as const, value: 'Time Zone Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    timeZone: { strategy: 'role' as const, value: 'Time Zone', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    engagementDetails: { strategy: 'text' as const, value: 'Engagement Details', shadowHost: 'flexipage-field-section2', actionKind: 'text' as const },
    account: { strategy: 'role' as const, value: 'Account', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    opportunity: { strategy: 'role' as const, value: 'Opportunity', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    opportunityOwner: { strategy: 'role' as const, value: 'Opportunity Owner', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    currency: { strategy: 'role' as const, value: 'Currency', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    engagementHelpInfo: { strategy: 'role' as const, value: 'Engagement Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    engagement: { strategy: 'role' as const, value: 'Engagement', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    parentProject: { strategy: 'role' as const, value: 'Parent Project', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    smb: { strategy: 'text' as const, value: 'SMB', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    smbOption: { strategy: 'role' as const, value: 'SMB', role: 'option', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    midMarket: { strategy: 'text' as const, value: 'Mid-Market', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    midMarketOption: { strategy: 'role' as const, value: 'Mid-Market', role: 'option', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    migration: { strategy: 'text' as const, value: 'Migration', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    migrationOption: { strategy: 'role' as const, value: 'Migration', role: 'option', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    partnerDirect: { strategy: 'text' as const, value: 'Partner Direct', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    partnerDirectOption: { strategy: 'role' as const, value: 'Partner Direct', role: 'option', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    emerging: { strategy: 'text' as const, value: 'Emerging', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    emergingOption: { strategy: 'role' as const, value: 'Emerging', role: 'option', shadowHost: 'lightning-dual-listbox', actionKind: 'generic' as const },
    datesScheduling: { strategy: 'text' as const, value: 'Dates & Scheduling', shadowHost: 'flexipage-field-section2', actionKind: 'text' as const },
    expectedStartDate: { strategy: 'text' as const, value: 'Expected Start Date', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    pseStartDateC: { strategy: 'css' as const, value: '[name="pse__Start_Date__c"]', shadowHost: 'lightning-datepicker', actionKind: 'textbox' as const },
    pseEndDateC: { strategy: 'css' as const, value: '[name="pse__End_Date__c"]', shadowHost: 'lightning-datepicker', actionKind: 'textbox' as const },
    onHoldReason: { strategy: 'role' as const, value: 'On-Hold Reason', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    holdStartDateHelp: { strategy: 'role' as const, value: 'Hold Start Date Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    ukgHoldStartDateC: { strategy: 'css' as const, value: '[name="UKG_Hold_Start_Date__c"]', shadowHost: 'lightning-datepicker', actionKind: 'textbox' as const },
    percentHoursCompleteHelp: { strategy: 'role' as const, value: 'Percent Hours Complete Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    psePercentHoursCompleteC: { strategy: 'css' as const, value: '[name="pse__Percent_Hours_Complete__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    plannedHoursHelpInfo: { strategy: 'role' as const, value: 'Planned Hours Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    psePlannedHoursC: { strategy: 'css' as const, value: '[name="pse__Planned_Hours__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    totalAssignedHoursHelp: { strategy: 'role' as const, value: 'Total Assigned Hours Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    pseTotalAssignedHoursC: { strategy: 'css' as const, value: '[name="pse__Total_Assigned_Hours__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    holdEndDateHelp: { strategy: 'role' as const, value: 'Hold End Date Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    ukgHoldEndDateC: { strategy: 'css' as const, value: '[name="UKG_Hold_End_Date__c"]', shadowHost: 'lightning-datepicker', actionKind: 'textbox' as const },
    financialSummary: { strategy: 'text' as const, value: 'Financial Summary', shadowHost: 'flexipage-field-section2', actionKind: 'text' as const },
    pseBillingsC: { strategy: 'css' as const, value: '[name="pse__Billings__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseBookingsC: { strategy: 'css' as const, value: '[name="pse__Bookings__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseRevenueC: { strategy: 'css' as const, value: '[name="pse__Revenue__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseInvoicedC: { strategy: 'css' as const, value: '[name="pse__Invoiced__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseInternalCostsC: { strategy: 'css' as const, value: '[name="pse__Internal_Costs__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseExternalCostsC: { strategy: 'css' as const, value: '[name="pse__External_Costs__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    pseExpenseCostsC: { strategy: 'css' as const, value: '[name="pse__Expense_Costs__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    totalCosts: { strategy: 'text' as const, value: 'Total Costs', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    margin: { strategy: 'text' as const, value: 'Margin', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    projectStatus: { strategy: 'text' as const, value: 'Project Status', shadowHost: 'flexipage-field-section2', actionKind: 'text' as const },
    overallProjectStatusHelp: { strategy: 'role' as const, value: 'Overall Project Status Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    overallProjectStatus: { strategy: 'role' as const, value: 'Overall Project Status', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    overallProjectCommentsHelp: { strategy: 'role' as const, value: 'Overall Project Comments Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    helpProjectStatus: { strategy: 'role' as const, value: 'Help Project Status', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    projectId: { strategy: 'text' as const, value: 'Project ID', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    concurCorrelationIdHelp: { strategy: 'role' as const, value: 'Concur Correlation ID Help Info', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    psacConcurCorrelationIdC: { strategy: 'css' as const, value: '[name="psac__Concur_Correlation_Id__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    sendToThirdPartyExpenses: { strategy: 'text' as const, value: 'Send to Third-Party Expenses Application', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    helpSendToThirdParty: { strategy: 'role' as const, value: 'Help Send to Third-Party Expenses Application', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextProjectsRecentlyViewed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed));
  }

  async expectProjectsRecentlyViewedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs, soft);
  }

  async clickSelectAListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.selectAListView));
  }

  async doubleClickSelectAListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.selectAListView));
  }

  async expectSelectAListViewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs, soft);
  }

  async clickCreateProjectFromTemplate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate));
  }

  async expectCreateProjectFromTemplateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs, soft);
  }

  async getInnerTextItemsUpdated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated));
  }

  async expectItemsUpdatedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs, soft);
  }

  async getInnerTextItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.items));
  }

  async expectItemsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs, soft);
  }

  async clickSortByProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectName));
  }

  async expectSortByProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs, soft);
  }

  async clickShowProjectNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn));
  }

  async doubleClickShowProjectNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs, soft);
  }

  async clickSortByProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager));
  }

  async expectSortByProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs, soft);
  }

  async clickShowProjectManagerColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn));
  }

  async doubleClickShowProjectManagerColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs, soft);
  }

  async clickSortByAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByAccount));
  }

  async expectSortByAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs, soft);
  }

  async clickShowAccountColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions));
  }

  async doubleClickShowAccountColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs, soft);
  }

  async clickSortByOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity));
  }

  async expectSortByOpportunityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs, soft);
  }

  async clickShowOpportunityColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions));
  }

  async doubleClickShowOpportunityColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs, soft);
  }

  async clickSortByRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByRegion));
  }

  async expectSortByRegionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs, soft);
  }

  async clickShowRegionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions));
  }

  async doubleClickShowRegionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs, soft);
  }

  async clickSortByPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByPractice));
  }

  async expectSortByPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs, soft);
  }

  async clickShowPracticeColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions));
  }

  async doubleClickShowPracticeColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs, soft);
  }

  async clickSortByGroup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByGroup));
  }

  async expectSortByGroupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs, soft);
  }

  async clickShowGroupColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions));
  }

  async doubleClickShowGroupColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs, soft);
  }

  async clickSortByStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByStartDate));
  }

  async expectSortByStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs, soft);
  }

  async clickShowStartDateColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn));
  }

  async doubleClickShowStartDateColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs, soft);
  }

  async clickSortByActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByActive));
  }

  async expectSortByActiveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs, soft);
  }

  async clickShowActiveColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions));
  }

  async doubleClickShowActiveColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs, soft);
  }

  async clickSortByBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByBillable));
  }

  async expectSortByBillableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs, soft);
  }

  async clickShowBillableColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions));
  }

  async doubleClickShowBillableColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs, soft);
  }

  async getInnerTextNewProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.newProject));
  }

  async expectNewProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs, soft);
  }

  async getInnerTextProjectOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview));
  }

  async expectProjectOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs, soft);
  }

  async clickStage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.stage));
  }

  async doubleClickStage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.stage));
  }

  async expectStageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs, soft);
  }

  async fillPracticeManager(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager), value);
  }

  async clearPracticeManager(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager));
  }

  async getPracticeManagerValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager));
  }

  async expectPracticeManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs, soft);
  }

  async fillPracticeDirector(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector), value);
  }

  async clearPracticeDirector(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector));
  }

  async getPracticeDirectorValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector));
  }

  async expectPracticeDirectorVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs, soft);
  }

  async clickBillableHelpInfo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo));
  }

  async doubleClickBillableHelpInfo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo));
  }

  async expectBillableHelpInfoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs, soft);
  }

  async fillProjectManager(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectManager), value);
  }

  async clearProjectManager(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectManager));
  }

  async getProjectManagerValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectManager));
  }

  async expectProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs, soft);
  }

  async fillPractice(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.practice), value);
  }

  async clearPractice(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.practice));
  }

  async getPracticeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practice));
  }

  async expectPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs, soft);
  }

  async fillRegion(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.region), value);
  }

  async clearRegion(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.region));
  }

  async getRegionValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.region));
  }

  async expectRegionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs, soft);
  }

  async clickTimeZoneHelpInfo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo));
  }

  async doubleClickTimeZoneHelpInfo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo));
  }

  async expectTimeZoneHelpInfoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs, soft);
  }

  async clickTimeZone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZone));
  }

  async doubleClickTimeZone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZone));
  }

  async expectTimeZoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs, soft);
  }

  async getInnerTextEngagementDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails));
  }

  async expectEngagementDetailsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs, soft);
  }

  async fillAccount(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.account), value);
  }

  async clearAccount(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.account));
  }

  async getAccountValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.account));
  }

  async expectAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs, soft);
  }

  async fillOpportunity(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunity), value);
  }

  async clearOpportunity(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunity));
  }

  async getOpportunityValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunity));
  }

  async expectOpportunityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs, soft);
  }

  async fillOpportunityOwner(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), value);
  }

  async clearOpportunityOwner(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner));
  }

  async getOpportunityOwnerValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner));
  }

  async expectOpportunityOwnerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs, soft);
  }

  async clickCurrency(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.currency));
  }

  async doubleClickCurrency(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.currency));
  }

  async expectCurrencyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs, soft);
  }

  async clickEngagementHelpInfo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo));
  }

  async doubleClickEngagementHelpInfo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo));
  }

  async expectEngagementHelpInfoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs, soft);
  }

  async fillEngagement(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagement), value);
  }

  async clearEngagement(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagement));
  }

  async getEngagementValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagement));
  }

  async expectEngagementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs, soft);
  }

  async fillParentProject(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.parentProject), value);
  }

  async clearParentProject(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.parentProject));
  }

  async getParentProjectValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.parentProject));
  }

  async expectParentProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs, soft);
  }

  async clickSmb(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.smb));
  }

  async expectSmbVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs, soft);
  }

  async clickSmbOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.smbOption));
  }

  async expectSmbOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs, soft);
  }

  async clickMidMarket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarket));
  }

  async expectMidMarketVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs, soft);
  }

  async clickMidMarketOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarketOption));
  }

  async expectMidMarketOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs, soft);
  }

  async clickMigration(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.migration));
  }

  async expectMigrationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs, soft);
  }

  async clickMigrationOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.migrationOption));
  }

  async expectMigrationOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs, soft);
  }

  async clickPartnerDirect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirect));
  }

  async expectPartnerDirectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs, soft);
  }

  async clickPartnerDirectOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption));
  }

  async expectPartnerDirectOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs, soft);
  }

  async clickEmerging(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.emerging));
  }

  async expectEmergingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs, soft);
  }

  async clickEmergingOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.emergingOption));
  }

  async expectEmergingOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs, soft);
  }

  async getInnerTextDatesScheduling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling));
  }

  async expectDatesSchedulingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs, soft);
  }

  async getInnerTextExpectedStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate));
  }

  async expectExpectedStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs, soft);
  }

  async fillPseStartDateC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), value);
  }

  async clearPseStartDateC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC));
  }

  async getPseStartDateCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC));
  }

  async expectPseStartDateCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs, soft);
  }

  async fillPseEndDateC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), value);
  }

  async clearPseEndDateC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC));
  }

  async getPseEndDateCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC));
  }

  async expectPseEndDateCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs, soft);
  }

  async clickOnHoldReason(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.onHoldReason));
  }

  async doubleClickOnHoldReason(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.onHoldReason));
  }

  async expectOnHoldReasonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs, soft);
  }

  async clickHoldStartDateHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp));
  }

  async doubleClickHoldStartDateHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp));
  }

  async expectHoldStartDateHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs, soft);
  }

  async fillUkgHoldStartDateC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), value);
  }

  async clearUkgHoldStartDateC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC));
  }

  async getUkgHoldStartDateCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC));
  }

  async expectUkgHoldStartDateCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs, soft);
  }

  async clickPercentHoursCompleteHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp));
  }

  async doubleClickPercentHoursCompleteHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp));
  }

  async expectPercentHoursCompleteHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs, soft);
  }

  async fillPsePercentHoursCompleteC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), value);
  }

  async clearPsePercentHoursCompleteC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC));
  }

  async getPsePercentHoursCompleteCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC));
  }

  async expectPsePercentHoursCompleteCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs, soft);
  }

  async clickPlannedHoursHelpInfo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo));
  }

  async doubleClickPlannedHoursHelpInfo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo));
  }

  async expectPlannedHoursHelpInfoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs, soft);
  }

  async fillPsePlannedHoursC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), value);
  }

  async clearPsePlannedHoursC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC));
  }

  async getPsePlannedHoursCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC));
  }

  async expectPsePlannedHoursCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs, soft);
  }

  async clickTotalAssignedHoursHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp));
  }

  async doubleClickTotalAssignedHoursHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp));
  }

  async expectTotalAssignedHoursHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs, soft);
  }

  async fillPseTotalAssignedHoursC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), value);
  }

  async clearPseTotalAssignedHoursC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC));
  }

  async getPseTotalAssignedHoursCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC));
  }

  async expectPseTotalAssignedHoursCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs, soft);
  }

  async clickHoldEndDateHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp));
  }

  async doubleClickHoldEndDateHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp));
  }

  async expectHoldEndDateHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs, soft);
  }

  async fillUkgHoldEndDateC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), value);
  }

  async clearUkgHoldEndDateC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC));
  }

  async getUkgHoldEndDateCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC));
  }

  async expectUkgHoldEndDateCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs, soft);
  }

  async getInnerTextFinancialSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary));
  }

  async expectFinancialSummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs, soft);
  }

  async fillPseBillingsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), value);
  }

  async clearPseBillingsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC));
  }

  async getPseBillingsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC));
  }

  async expectPseBillingsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs, soft);
  }

  async fillPseBookingsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), value);
  }

  async clearPseBookingsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC));
  }

  async getPseBookingsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC));
  }

  async expectPseBookingsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs, soft);
  }

  async fillPseRevenueC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), value);
  }

  async clearPseRevenueC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC));
  }

  async getPseRevenueCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC));
  }

  async expectPseRevenueCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs, soft);
  }

  async fillPseInvoicedC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), value);
  }

  async clearPseInvoicedC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC));
  }

  async getPseInvoicedCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC));
  }

  async expectPseInvoicedCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs, soft);
  }

  async fillPseInternalCostsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), value);
  }

  async clearPseInternalCostsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC));
  }

  async getPseInternalCostsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC));
  }

  async expectPseInternalCostsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs, soft);
  }

  async fillPseExternalCostsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), value);
  }

  async clearPseExternalCostsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC));
  }

  async getPseExternalCostsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC));
  }

  async expectPseExternalCostsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs, soft);
  }

  async fillPseExpenseCostsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), value);
  }

  async clearPseExpenseCostsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC));
  }

  async getPseExpenseCostsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC));
  }

  async expectPseExpenseCostsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs, soft);
  }

  async getInnerTextTotalCosts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts));
  }

  async expectTotalCostsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs, soft);
  }

  async getInnerTextMargin(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.margin));
  }

  async expectMarginVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs, soft);
  }

  async getInnerTextProjectStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus));
  }

  async expectProjectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs, soft);
  }

  async clickOverallProjectStatusHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp));
  }

  async doubleClickOverallProjectStatusHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp));
  }

  async expectOverallProjectStatusHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs, soft);
  }

  async clickOverallProjectStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus));
  }

  async doubleClickOverallProjectStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus));
  }

  async expectOverallProjectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs, soft);
  }

  async clickOverallProjectCommentsHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp));
  }

  async doubleClickOverallProjectCommentsHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp));
  }

  async expectOverallProjectCommentsHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs, soft);
  }

  async clickHelpProjectStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus));
  }

  async doubleClickHelpProjectStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus));
  }

  async expectHelpProjectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs, soft);
  }

  async getInnerTextProjectId(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectId));
  }

  async expectProjectIdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs, soft);
  }

  async clickConcurCorrelationIdHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp));
  }

  async doubleClickConcurCorrelationIdHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp));
  }

  async expectConcurCorrelationIdHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs, soft);
  }

  async fillPsacConcurCorrelationIdC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), value);
  }

  async clearPsacConcurCorrelationIdC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC));
  }

  async getPsacConcurCorrelationIdCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC));
  }

  async expectPsacConcurCorrelationIdCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs, soft);
  }

  async getInnerTextSendToThirdPartyExpenses(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses));
  }

  async expectSendToThirdPartyExpensesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs, soft);
  }

  async clickHelpSendToThirdParty(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty));
  }

  async doubleClickHelpSendToThirdParty(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty));
  }

  async expectHelpSendToThirdPartyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'New Project | Salesforce', timeoutMs);
  }


  async clickProjectsRecentlyViewed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed));
  }

  async doubleClickProjectsRecentlyViewed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed));
  }

  async longPressProjectsRecentlyViewed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed));
  }

  async expectProjectsRecentlyViewedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), expected, timeoutMs);
  }

  async expectProjectsRecentlyViewedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), substring, timeoutMs);
  }

  async expectProjectsRecentlyViewedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), value, timeoutMs);
  }

  async expectProjectsRecentlyViewedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), timeoutMs);
  }

  async expectProjectsRecentlyViewedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed), count, timeoutMs);
  }

  async scrollProjectsRecentlyViewedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectsRecentlyViewed));
  }

  async longPressSelectAListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.selectAListView));
  }

  async expectSelectAListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.selectAListView), expected, timeoutMs);
  }

  async expectSelectAListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.selectAListView), substring, timeoutMs);
  }

  async expectSelectAListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.selectAListView), value, timeoutMs);
  }

  async expectSelectAListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.selectAListView), count, timeoutMs);
  }

  async scrollSelectAListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.selectAListView));
  }

  async doubleClickCreateProjectFromTemplate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate));
  }

  async longPressCreateProjectFromTemplate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate));
  }

  async expectCreateProjectFromTemplateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), expected, timeoutMs);
  }

  async expectCreateProjectFromTemplateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), substring, timeoutMs);
  }

  async expectCreateProjectFromTemplateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), value, timeoutMs);
  }

  async expectCreateProjectFromTemplateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), timeoutMs);
  }

  async expectCreateProjectFromTemplateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate), count, timeoutMs);
  }

  async scrollCreateProjectFromTemplateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.createProjectFromTemplate));
  }

  async clickItemsUpdated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated));
  }

  async doubleClickItemsUpdated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated));
  }

  async longPressItemsUpdated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated));
  }

  async expectItemsUpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), expected, timeoutMs);
  }

  async expectItemsUpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), substring, timeoutMs);
  }

  async expectItemsUpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), value, timeoutMs);
  }

  async expectItemsUpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.itemsUpdated), count, timeoutMs);
  }

  async scrollItemsUpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.itemsUpdated));
  }

  async clickItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.items));
  }

  async doubleClickItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.items));
  }

  async longPressItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.items));
  }

  async expectItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.items), expected, timeoutMs);
  }

  async expectItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.items), substring, timeoutMs);
  }

  async expectItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.items), value, timeoutMs);
  }

  async expectItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.items), timeoutMs);
  }

  async expectItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.items), count, timeoutMs);
  }

  async scrollItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.items));
  }

  async doubleClickSortByProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectName));
  }

  async longPressSortByProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectName));
  }

  async expectSortByProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), expected, timeoutMs);
  }

  async expectSortByProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), substring, timeoutMs);
  }

  async expectSortByProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), value, timeoutMs);
  }

  async expectSortByProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), timeoutMs);
  }

  async expectSortByProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByProjectName), count, timeoutMs);
  }

  async scrollSortByProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectName));
  }

  async longPressShowProjectNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), expected, timeoutMs);
  }

  async expectShowProjectNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), substring, timeoutMs);
  }

  async expectShowProjectNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), value, timeoutMs);
  }

  async expectShowProjectNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn), count, timeoutMs);
  }

  async scrollShowProjectNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectNameColumn));
  }

  async doubleClickSortByProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager));
  }

  async longPressSortByProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager));
  }

  async expectSortByProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), expected, timeoutMs);
  }

  async expectSortByProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), substring, timeoutMs);
  }

  async expectSortByProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), value, timeoutMs);
  }

  async expectSortByProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), timeoutMs);
  }

  async expectSortByProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager), count, timeoutMs);
  }

  async scrollSortByProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByProjectManager));
  }

  async longPressShowProjectManagerColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), expected, timeoutMs);
  }

  async expectShowProjectManagerColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), substring, timeoutMs);
  }

  async expectShowProjectManagerColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), value, timeoutMs);
  }

  async expectShowProjectManagerColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn), count, timeoutMs);
  }

  async scrollShowProjectManagerColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showProjectManagerColumn));
  }

  async doubleClickSortByAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByAccount));
  }

  async longPressSortByAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByAccount));
  }

  async expectSortByAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByAccount), expected, timeoutMs);
  }

  async expectSortByAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByAccount), substring, timeoutMs);
  }

  async expectSortByAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByAccount), value, timeoutMs);
  }

  async expectSortByAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByAccount), timeoutMs);
  }

  async expectSortByAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByAccount), count, timeoutMs);
  }

  async scrollSortByAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByAccount));
  }

  async longPressShowAccountColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), expected, timeoutMs);
  }

  async expectShowAccountColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), substring, timeoutMs);
  }

  async expectShowAccountColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), value, timeoutMs);
  }

  async expectShowAccountColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions), count, timeoutMs);
  }

  async scrollShowAccountColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showAccountColumnActions));
  }

  async doubleClickSortByOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity));
  }

  async longPressSortByOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity));
  }

  async expectSortByOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), expected, timeoutMs);
  }

  async expectSortByOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), substring, timeoutMs);
  }

  async expectSortByOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), value, timeoutMs);
  }

  async expectSortByOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), timeoutMs);
  }

  async expectSortByOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity), count, timeoutMs);
  }

  async scrollSortByOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByOpportunity));
  }

  async longPressShowOpportunityColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), expected, timeoutMs);
  }

  async expectShowOpportunityColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), substring, timeoutMs);
  }

  async expectShowOpportunityColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), value, timeoutMs);
  }

  async expectShowOpportunityColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions), count, timeoutMs);
  }

  async scrollShowOpportunityColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showOpportunityColumnActions));
  }

  async doubleClickSortByRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByRegion));
  }

  async longPressSortByRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByRegion));
  }

  async expectSortByRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByRegion), expected, timeoutMs);
  }

  async expectSortByRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByRegion), substring, timeoutMs);
  }

  async expectSortByRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByRegion), value, timeoutMs);
  }

  async expectSortByRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByRegion), timeoutMs);
  }

  async expectSortByRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByRegion), count, timeoutMs);
  }

  async scrollSortByRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByRegion));
  }

  async longPressShowRegionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), expected, timeoutMs);
  }

  async expectShowRegionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), substring, timeoutMs);
  }

  async expectShowRegionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), value, timeoutMs);
  }

  async expectShowRegionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions), count, timeoutMs);
  }

  async scrollShowRegionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showRegionColumnActions));
  }

  async doubleClickSortByPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByPractice));
  }

  async longPressSortByPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByPractice));
  }

  async expectSortByPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByPractice), expected, timeoutMs);
  }

  async expectSortByPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByPractice), substring, timeoutMs);
  }

  async expectSortByPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByPractice), value, timeoutMs);
  }

  async expectSortByPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByPractice), timeoutMs);
  }

  async expectSortByPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByPractice), count, timeoutMs);
  }

  async scrollSortByPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByPractice));
  }

  async longPressShowPracticeColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), expected, timeoutMs);
  }

  async expectShowPracticeColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), substring, timeoutMs);
  }

  async expectShowPracticeColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), value, timeoutMs);
  }

  async expectShowPracticeColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions), count, timeoutMs);
  }

  async scrollShowPracticeColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showPracticeColumnActions));
  }

  async doubleClickSortByGroup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByGroup));
  }

  async longPressSortByGroup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByGroup));
  }

  async expectSortByGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByGroup), expected, timeoutMs);
  }

  async expectSortByGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByGroup), substring, timeoutMs);
  }

  async expectSortByGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByGroup), value, timeoutMs);
  }

  async expectSortByGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByGroup), timeoutMs);
  }

  async expectSortByGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByGroup), count, timeoutMs);
  }

  async scrollSortByGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByGroup));
  }

  async longPressShowGroupColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), expected, timeoutMs);
  }

  async expectShowGroupColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), substring, timeoutMs);
  }

  async expectShowGroupColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), value, timeoutMs);
  }

  async expectShowGroupColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions), count, timeoutMs);
  }

  async scrollShowGroupColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showGroupColumnActions));
  }

  async doubleClickSortByStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByStartDate));
  }

  async longPressSortByStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByStartDate));
  }

  async expectSortByStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), expected, timeoutMs);
  }

  async expectSortByStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), substring, timeoutMs);
  }

  async expectSortByStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), value, timeoutMs);
  }

  async expectSortByStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByStartDate), count, timeoutMs);
  }

  async scrollSortByStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByStartDate));
  }

  async longPressShowStartDateColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), expected, timeoutMs);
  }

  async expectShowStartDateColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), substring, timeoutMs);
  }

  async expectShowStartDateColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), value, timeoutMs);
  }

  async expectShowStartDateColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn), count, timeoutMs);
  }

  async scrollShowStartDateColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showStartDateColumn));
  }

  async doubleClickSortByActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByActive));
  }

  async longPressSortByActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByActive));
  }

  async expectSortByActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByActive), expected, timeoutMs);
  }

  async expectSortByActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByActive), substring, timeoutMs);
  }

  async expectSortByActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByActive), value, timeoutMs);
  }

  async expectSortByActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByActive), timeoutMs);
  }

  async expectSortByActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByActive), count, timeoutMs);
  }

  async scrollSortByActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByActive));
  }

  async longPressShowActiveColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), expected, timeoutMs);
  }

  async expectShowActiveColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), substring, timeoutMs);
  }

  async expectShowActiveColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), value, timeoutMs);
  }

  async expectShowActiveColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions), count, timeoutMs);
  }

  async scrollShowActiveColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showActiveColumnActions));
  }

  async doubleClickSortByBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByBillable));
  }

  async longPressSortByBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByBillable));
  }

  async expectSortByBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sortByBillable), expected, timeoutMs);
  }

  async expectSortByBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sortByBillable), substring, timeoutMs);
  }

  async expectSortByBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sortByBillable), value, timeoutMs);
  }

  async expectSortByBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sortByBillable), timeoutMs);
  }

  async expectSortByBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sortByBillable), count, timeoutMs);
  }

  async scrollSortByBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sortByBillable));
  }

  async longPressShowBillableColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), expected, timeoutMs);
  }

  async expectShowBillableColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), substring, timeoutMs);
  }

  async expectShowBillableColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), value, timeoutMs);
  }

  async expectShowBillableColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions), count, timeoutMs);
  }

  async scrollShowBillableColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.showBillableColumnActions));
  }

  async clickNewProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.newProject));
  }

  async doubleClickNewProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.newProject));
  }

  async longPressNewProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.newProject));
  }

  async expectNewProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.newProject), expected, timeoutMs);
  }

  async expectNewProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.newProject), substring, timeoutMs);
  }

  async expectNewProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.newProject), value, timeoutMs);
  }

  async expectNewProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.newProject), timeoutMs);
  }

  async expectNewProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.newProject), count, timeoutMs);
  }

  async scrollNewProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.newProject));
  }

  async clickProjectOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview));
  }

  async doubleClickProjectOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview));
  }

  async longPressProjectOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview));
  }

  async expectProjectOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.projectOverview), expected, timeoutMs);
  }

  async expectProjectOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.projectOverview), substring, timeoutMs);
  }

  async expectProjectOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.projectOverview), value, timeoutMs);
  }

  async expectProjectOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.projectOverview), count, timeoutMs);
  }

  async scrollProjectOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectOverview));
  }

  async longPressStage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.stage));
  }

  async expectStageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.stage), expected, timeoutMs);
  }

  async expectStageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.stage), substring, timeoutMs);
  }

  async expectStageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.stage), value, timeoutMs);
  }

  async expectStageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.stage), timeoutMs);
  }

  async expectStageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.stage), count, timeoutMs);
  }

  async scrollStageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.stage));
  }

  async typeTextPracticeManager(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager), value);
  }

  async expectPracticeManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.practiceManager), expected, timeoutMs);
  }

  async expectPracticeManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.practiceManager), substring, timeoutMs);
  }

  async expectPracticeManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.practiceManager), value, timeoutMs);
  }

  async expectPracticeManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.practiceManager), count, timeoutMs);
  }

  async scrollPracticeManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceManager));
  }

  async typeTextPracticeDirector(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector), value);
  }

  async expectPracticeDirectorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.practiceDirector), expected, timeoutMs);
  }

  async expectPracticeDirectorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.practiceDirector), substring, timeoutMs);
  }

  async expectPracticeDirectorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.practiceDirector), value, timeoutMs);
  }

  async expectPracticeDirectorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.practiceDirector), count, timeoutMs);
  }

  async scrollPracticeDirectorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.practiceDirector));
  }

  async longPressBillableHelpInfo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo));
  }

  async expectBillableHelpInfoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), expected, timeoutMs);
  }

  async expectBillableHelpInfoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), substring, timeoutMs);
  }

  async expectBillableHelpInfoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), value, timeoutMs);
  }

  async expectBillableHelpInfoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), timeoutMs);
  }

  async expectBillableHelpInfoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo), count, timeoutMs);
  }

  async scrollBillableHelpInfoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.billableHelpInfo));
  }

  async typeTextProjectManager(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectManager), value);
  }

  async expectProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.projectManager), expected, timeoutMs);
  }

  async expectProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.projectManager), substring, timeoutMs);
  }

  async expectProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.projectManager), value, timeoutMs);
  }

  async expectProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.projectManager), count, timeoutMs);
  }

  async scrollProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectManager));
  }

  async typeTextPractice(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.practice), value);
  }

  async expectPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.practice), expected, timeoutMs);
  }

  async expectPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.practice), substring, timeoutMs);
  }

  async expectPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.practice), value, timeoutMs);
  }

  async expectPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.practice), timeoutMs);
  }

  async expectPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.practice), count, timeoutMs);
  }

  async scrollPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.practice));
  }

  async typeTextRegion(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.region), value);
  }

  async expectRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.region), expected, timeoutMs);
  }

  async expectRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.region), substring, timeoutMs);
  }

  async expectRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.region), value, timeoutMs);
  }

  async expectRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.region), timeoutMs);
  }

  async expectRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.region), count, timeoutMs);
  }

  async scrollRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.region));
  }

  async longPressTimeZoneHelpInfo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo));
  }

  async expectTimeZoneHelpInfoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), expected, timeoutMs);
  }

  async expectTimeZoneHelpInfoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), substring, timeoutMs);
  }

  async expectTimeZoneHelpInfoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), value, timeoutMs);
  }

  async expectTimeZoneHelpInfoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), timeoutMs);
  }

  async expectTimeZoneHelpInfoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo), count, timeoutMs);
  }

  async scrollTimeZoneHelpInfoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZoneHelpInfo));
  }

  async longPressTimeZone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZone));
  }

  async expectTimeZoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.timeZone), expected, timeoutMs);
  }

  async expectTimeZoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.timeZone), substring, timeoutMs);
  }

  async expectTimeZoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.timeZone), value, timeoutMs);
  }

  async expectTimeZoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.timeZone), count, timeoutMs);
  }

  async scrollTimeZoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.timeZone));
  }

  async clickEngagementDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails));
  }

  async doubleClickEngagementDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails));
  }

  async longPressEngagementDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails));
  }

  async expectEngagementDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.engagementDetails), expected, timeoutMs);
  }

  async expectEngagementDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.engagementDetails), substring, timeoutMs);
  }

  async expectEngagementDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.engagementDetails), value, timeoutMs);
  }

  async expectEngagementDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.engagementDetails), count, timeoutMs);
  }

  async scrollEngagementDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementDetails));
  }

  async typeTextAccount(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.account), value);
  }

  async expectAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.account), expected, timeoutMs);
  }

  async expectAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.account), substring, timeoutMs);
  }

  async expectAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.account), value, timeoutMs);
  }

  async expectAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.account), timeoutMs);
  }

  async expectAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.account), count, timeoutMs);
  }

  async scrollAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.account));
  }

  async typeTextOpportunity(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunity), value);
  }

  async expectOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.opportunity), expected, timeoutMs);
  }

  async expectOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.opportunity), substring, timeoutMs);
  }

  async expectOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.opportunity), value, timeoutMs);
  }

  async expectOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.opportunity), count, timeoutMs);
  }

  async scrollOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunity));
  }

  async typeTextOpportunityOwner(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), value);
  }

  async expectOpportunityOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), expected, timeoutMs);
  }

  async expectOpportunityOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), substring, timeoutMs);
  }

  async expectOpportunityOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), value, timeoutMs);
  }

  async expectOpportunityOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.opportunityOwner), count, timeoutMs);
  }

  async scrollOpportunityOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.opportunityOwner));
  }

  async longPressCurrency(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.currency));
  }

  async expectCurrencyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.currency), expected, timeoutMs);
  }

  async expectCurrencyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.currency), substring, timeoutMs);
  }

  async expectCurrencyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.currency), value, timeoutMs);
  }

  async expectCurrencyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.currency), timeoutMs);
  }

  async expectCurrencyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.currency), count, timeoutMs);
  }

  async scrollCurrencyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.currency));
  }

  async longPressEngagementHelpInfo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo));
  }

  async expectEngagementHelpInfoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), expected, timeoutMs);
  }

  async expectEngagementHelpInfoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), substring, timeoutMs);
  }

  async expectEngagementHelpInfoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), value, timeoutMs);
  }

  async expectEngagementHelpInfoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), timeoutMs);
  }

  async expectEngagementHelpInfoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo), count, timeoutMs);
  }

  async scrollEngagementHelpInfoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagementHelpInfo));
  }

  async typeTextEngagement(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagement), value);
  }

  async expectEngagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.engagement), expected, timeoutMs);
  }

  async expectEngagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.engagement), substring, timeoutMs);
  }

  async expectEngagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.engagement), value, timeoutMs);
  }

  async expectEngagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.engagement), timeoutMs);
  }

  async expectEngagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.engagement), count, timeoutMs);
  }

  async scrollEngagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.engagement));
  }

  async typeTextParentProject(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.parentProject), value);
  }

  async expectParentProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.parentProject), expected, timeoutMs);
  }

  async expectParentProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.parentProject), substring, timeoutMs);
  }

  async expectParentProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.parentProject), value, timeoutMs);
  }

  async expectParentProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.parentProject), timeoutMs);
  }

  async expectParentProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.parentProject), count, timeoutMs);
  }

  async scrollParentProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.parentProject));
  }

  async doubleClickSmb(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.smb));
  }

  async longPressSmb(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.smb));
  }

  async expectSmbHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.smb), expected, timeoutMs);
  }

  async expectSmbContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.smb), substring, timeoutMs);
  }

  async expectSmbValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.smb), value, timeoutMs);
  }

  async expectSmbEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.smb), timeoutMs);
  }

  async expectSmbCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.smb), count, timeoutMs);
  }

  async scrollSmbIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.smb));
  }

  async doubleClickSmbOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.smbOption));
  }

  async longPressSmbOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.smbOption));
  }

  async expectSmbOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.smbOption), expected, timeoutMs);
  }

  async expectSmbOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.smbOption), substring, timeoutMs);
  }

  async expectSmbOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.smbOption), value, timeoutMs);
  }

  async expectSmbOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.smbOption), timeoutMs);
  }

  async expectSmbOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.smbOption), count, timeoutMs);
  }

  async scrollSmbOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.smbOption));
  }

  async doubleClickMidMarket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarket));
  }

  async longPressMidMarket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarket));
  }

  async expectMidMarketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.midMarket), expected, timeoutMs);
  }

  async expectMidMarketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.midMarket), substring, timeoutMs);
  }

  async expectMidMarketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.midMarket), value, timeoutMs);
  }

  async expectMidMarketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.midMarket), timeoutMs);
  }

  async expectMidMarketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.midMarket), count, timeoutMs);
  }

  async scrollMidMarketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarket));
  }

  async doubleClickMidMarketOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarketOption));
  }

  async longPressMidMarketOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarketOption));
  }

  async expectMidMarketOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.midMarketOption), expected, timeoutMs);
  }

  async expectMidMarketOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.midMarketOption), substring, timeoutMs);
  }

  async expectMidMarketOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.midMarketOption), value, timeoutMs);
  }

  async expectMidMarketOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.midMarketOption), timeoutMs);
  }

  async expectMidMarketOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.midMarketOption), count, timeoutMs);
  }

  async scrollMidMarketOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.midMarketOption));
  }

  async doubleClickMigration(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.migration));
  }

  async longPressMigration(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.migration));
  }

  async expectMigrationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.migration), expected, timeoutMs);
  }

  async expectMigrationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.migration), substring, timeoutMs);
  }

  async expectMigrationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.migration), value, timeoutMs);
  }

  async expectMigrationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.migration), timeoutMs);
  }

  async expectMigrationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.migration), count, timeoutMs);
  }

  async scrollMigrationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.migration));
  }

  async doubleClickMigrationOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.migrationOption));
  }

  async longPressMigrationOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.migrationOption));
  }

  async expectMigrationOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.migrationOption), expected, timeoutMs);
  }

  async expectMigrationOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.migrationOption), substring, timeoutMs);
  }

  async expectMigrationOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.migrationOption), value, timeoutMs);
  }

  async expectMigrationOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.migrationOption), timeoutMs);
  }

  async expectMigrationOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.migrationOption), count, timeoutMs);
  }

  async scrollMigrationOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.migrationOption));
  }

  async doubleClickPartnerDirect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirect));
  }

  async longPressPartnerDirect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirect));
  }

  async expectPartnerDirectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.partnerDirect), expected, timeoutMs);
  }

  async expectPartnerDirectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.partnerDirect), substring, timeoutMs);
  }

  async expectPartnerDirectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.partnerDirect), value, timeoutMs);
  }

  async expectPartnerDirectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.partnerDirect), timeoutMs);
  }

  async expectPartnerDirectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.partnerDirect), count, timeoutMs);
  }

  async scrollPartnerDirectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirect));
  }

  async doubleClickPartnerDirectOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption));
  }

  async longPressPartnerDirectOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption));
  }

  async expectPartnerDirectOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), expected, timeoutMs);
  }

  async expectPartnerDirectOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), substring, timeoutMs);
  }

  async expectPartnerDirectOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), value, timeoutMs);
  }

  async expectPartnerDirectOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), timeoutMs);
  }

  async expectPartnerDirectOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption), count, timeoutMs);
  }

  async scrollPartnerDirectOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.partnerDirectOption));
  }

  async doubleClickEmerging(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.emerging));
  }

  async longPressEmerging(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.emerging));
  }

  async expectEmergingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.emerging), expected, timeoutMs);
  }

  async expectEmergingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.emerging), substring, timeoutMs);
  }

  async expectEmergingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.emerging), value, timeoutMs);
  }

  async expectEmergingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.emerging), timeoutMs);
  }

  async expectEmergingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.emerging), count, timeoutMs);
  }

  async scrollEmergingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.emerging));
  }

  async doubleClickEmergingOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.emergingOption));
  }

  async longPressEmergingOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.emergingOption));
  }

  async expectEmergingOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.emergingOption), expected, timeoutMs);
  }

  async expectEmergingOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.emergingOption), substring, timeoutMs);
  }

  async expectEmergingOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.emergingOption), value, timeoutMs);
  }

  async expectEmergingOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.emergingOption), timeoutMs);
  }

  async expectEmergingOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.emergingOption), count, timeoutMs);
  }

  async scrollEmergingOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.emergingOption));
  }

  async clickDatesScheduling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling));
  }

  async doubleClickDatesScheduling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling));
  }

  async longPressDatesScheduling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling));
  }

  async expectDatesSchedulingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.datesScheduling), expected, timeoutMs);
  }

  async expectDatesSchedulingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.datesScheduling), substring, timeoutMs);
  }

  async expectDatesSchedulingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.datesScheduling), value, timeoutMs);
  }

  async expectDatesSchedulingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.datesScheduling), count, timeoutMs);
  }

  async scrollDatesSchedulingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.datesScheduling));
  }

  async clickExpectedStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate));
  }

  async doubleClickExpectedStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate));
  }

  async longPressExpectedStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate));
  }

  async expectExpectedStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), expected, timeoutMs);
  }

  async expectExpectedStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), substring, timeoutMs);
  }

  async expectExpectedStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), value, timeoutMs);
  }

  async expectExpectedStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), timeoutMs);
  }

  async expectExpectedStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.expectedStartDate), count, timeoutMs);
  }

  async scrollExpectedStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.expectedStartDate));
  }

  async typeTextPseStartDateC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), value);
  }

  async expectPseStartDateCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), expected, timeoutMs);
  }

  async expectPseStartDateCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), substring, timeoutMs);
  }

  async expectPseStartDateCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), value, timeoutMs);
  }

  async expectPseStartDateCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), timeoutMs);
  }

  async expectPseStartDateCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseStartDateC), count, timeoutMs);
  }

  async scrollPseStartDateCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseStartDateC));
  }

  async typeTextPseEndDateC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), value);
  }

  async expectPseEndDateCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), expected, timeoutMs);
  }

  async expectPseEndDateCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), substring, timeoutMs);
  }

  async expectPseEndDateCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), value, timeoutMs);
  }

  async expectPseEndDateCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), timeoutMs);
  }

  async expectPseEndDateCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseEndDateC), count, timeoutMs);
  }

  async scrollPseEndDateCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseEndDateC));
  }

  async longPressOnHoldReason(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.onHoldReason));
  }

  async expectOnHoldReasonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.onHoldReason), expected, timeoutMs);
  }

  async expectOnHoldReasonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.onHoldReason), substring, timeoutMs);
  }

  async expectOnHoldReasonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.onHoldReason), value, timeoutMs);
  }

  async expectOnHoldReasonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.onHoldReason), timeoutMs);
  }

  async expectOnHoldReasonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.onHoldReason), count, timeoutMs);
  }

  async scrollOnHoldReasonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.onHoldReason));
  }

  async longPressHoldStartDateHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp));
  }

  async expectHoldStartDateHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), expected, timeoutMs);
  }

  async expectHoldStartDateHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), substring, timeoutMs);
  }

  async expectHoldStartDateHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), value, timeoutMs);
  }

  async expectHoldStartDateHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), timeoutMs);
  }

  async expectHoldStartDateHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp), count, timeoutMs);
  }

  async scrollHoldStartDateHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdStartDateHelp));
  }

  async typeTextUkgHoldStartDateC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), value);
  }

  async expectUkgHoldStartDateCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), expected, timeoutMs);
  }

  async expectUkgHoldStartDateCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), substring, timeoutMs);
  }

  async expectUkgHoldStartDateCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), value, timeoutMs);
  }

  async expectUkgHoldStartDateCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), timeoutMs);
  }

  async expectUkgHoldStartDateCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC), count, timeoutMs);
  }

  async scrollUkgHoldStartDateCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldStartDateC));
  }

  async longPressPercentHoursCompleteHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp));
  }

  async expectPercentHoursCompleteHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), expected, timeoutMs);
  }

  async expectPercentHoursCompleteHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), substring, timeoutMs);
  }

  async expectPercentHoursCompleteHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), value, timeoutMs);
  }

  async expectPercentHoursCompleteHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), timeoutMs);
  }

  async expectPercentHoursCompleteHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp), count, timeoutMs);
  }

  async scrollPercentHoursCompleteHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.percentHoursCompleteHelp));
  }

  async typeTextPsePercentHoursCompleteC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), value);
  }

  async expectPsePercentHoursCompleteCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), expected, timeoutMs);
  }

  async expectPsePercentHoursCompleteCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), substring, timeoutMs);
  }

  async expectPsePercentHoursCompleteCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), value, timeoutMs);
  }

  async expectPsePercentHoursCompleteCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), timeoutMs);
  }

  async expectPsePercentHoursCompleteCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC), count, timeoutMs);
  }

  async scrollPsePercentHoursCompleteCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePercentHoursCompleteC));
  }

  async longPressPlannedHoursHelpInfo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo));
  }

  async expectPlannedHoursHelpInfoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), expected, timeoutMs);
  }

  async expectPlannedHoursHelpInfoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), substring, timeoutMs);
  }

  async expectPlannedHoursHelpInfoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), value, timeoutMs);
  }

  async expectPlannedHoursHelpInfoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), timeoutMs);
  }

  async expectPlannedHoursHelpInfoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo), count, timeoutMs);
  }

  async scrollPlannedHoursHelpInfoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.plannedHoursHelpInfo));
  }

  async typeTextPsePlannedHoursC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), value);
  }

  async expectPsePlannedHoursCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), expected, timeoutMs);
  }

  async expectPsePlannedHoursCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), substring, timeoutMs);
  }

  async expectPsePlannedHoursCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), value, timeoutMs);
  }

  async expectPsePlannedHoursCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), timeoutMs);
  }

  async expectPsePlannedHoursCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC), count, timeoutMs);
  }

  async scrollPsePlannedHoursCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.psePlannedHoursC));
  }

  async longPressTotalAssignedHoursHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp));
  }

  async expectTotalAssignedHoursHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), expected, timeoutMs);
  }

  async expectTotalAssignedHoursHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), substring, timeoutMs);
  }

  async expectTotalAssignedHoursHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), value, timeoutMs);
  }

  async expectTotalAssignedHoursHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), timeoutMs);
  }

  async expectTotalAssignedHoursHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp), count, timeoutMs);
  }

  async scrollTotalAssignedHoursHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalAssignedHoursHelp));
  }

  async typeTextPseTotalAssignedHoursC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), value);
  }

  async expectPseTotalAssignedHoursCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), expected, timeoutMs);
  }

  async expectPseTotalAssignedHoursCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), substring, timeoutMs);
  }

  async expectPseTotalAssignedHoursCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), value, timeoutMs);
  }

  async expectPseTotalAssignedHoursCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), timeoutMs);
  }

  async expectPseTotalAssignedHoursCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC), count, timeoutMs);
  }

  async scrollPseTotalAssignedHoursCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseTotalAssignedHoursC));
  }

  async longPressHoldEndDateHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp));
  }

  async expectHoldEndDateHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), expected, timeoutMs);
  }

  async expectHoldEndDateHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), substring, timeoutMs);
  }

  async expectHoldEndDateHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), value, timeoutMs);
  }

  async expectHoldEndDateHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), timeoutMs);
  }

  async expectHoldEndDateHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp), count, timeoutMs);
  }

  async scrollHoldEndDateHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.holdEndDateHelp));
  }

  async typeTextUkgHoldEndDateC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), value);
  }

  async expectUkgHoldEndDateCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), expected, timeoutMs);
  }

  async expectUkgHoldEndDateCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), substring, timeoutMs);
  }

  async expectUkgHoldEndDateCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), value, timeoutMs);
  }

  async expectUkgHoldEndDateCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), timeoutMs);
  }

  async expectUkgHoldEndDateCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC), count, timeoutMs);
  }

  async scrollUkgHoldEndDateCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.ukgHoldEndDateC));
  }

  async clickFinancialSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary));
  }

  async doubleClickFinancialSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary));
  }

  async longPressFinancialSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary));
  }

  async expectFinancialSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.financialSummary), expected, timeoutMs);
  }

  async expectFinancialSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.financialSummary), substring, timeoutMs);
  }

  async expectFinancialSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.financialSummary), value, timeoutMs);
  }

  async expectFinancialSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.financialSummary), count, timeoutMs);
  }

  async scrollFinancialSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.financialSummary));
  }

  async typeTextPseBillingsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), value);
  }

  async expectPseBillingsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), expected, timeoutMs);
  }

  async expectPseBillingsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), substring, timeoutMs);
  }

  async expectPseBillingsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), value, timeoutMs);
  }

  async expectPseBillingsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), timeoutMs);
  }

  async expectPseBillingsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseBillingsC), count, timeoutMs);
  }

  async scrollPseBillingsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBillingsC));
  }

  async typeTextPseBookingsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), value);
  }

  async expectPseBookingsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), expected, timeoutMs);
  }

  async expectPseBookingsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), substring, timeoutMs);
  }

  async expectPseBookingsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), value, timeoutMs);
  }

  async expectPseBookingsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), timeoutMs);
  }

  async expectPseBookingsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseBookingsC), count, timeoutMs);
  }

  async scrollPseBookingsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseBookingsC));
  }

  async typeTextPseRevenueC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), value);
  }

  async expectPseRevenueCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), expected, timeoutMs);
  }

  async expectPseRevenueCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), substring, timeoutMs);
  }

  async expectPseRevenueCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), value, timeoutMs);
  }

  async expectPseRevenueCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), timeoutMs);
  }

  async expectPseRevenueCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseRevenueC), count, timeoutMs);
  }

  async scrollPseRevenueCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseRevenueC));
  }

  async typeTextPseInvoicedC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), value);
  }

  async expectPseInvoicedCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), expected, timeoutMs);
  }

  async expectPseInvoicedCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), substring, timeoutMs);
  }

  async expectPseInvoicedCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), value, timeoutMs);
  }

  async expectPseInvoicedCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), timeoutMs);
  }

  async expectPseInvoicedCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC), count, timeoutMs);
  }

  async scrollPseInvoicedCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInvoicedC));
  }

  async typeTextPseInternalCostsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), value);
  }

  async expectPseInternalCostsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), expected, timeoutMs);
  }

  async expectPseInternalCostsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), substring, timeoutMs);
  }

  async expectPseInternalCostsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), value, timeoutMs);
  }

  async expectPseInternalCostsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), timeoutMs);
  }

  async expectPseInternalCostsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC), count, timeoutMs);
  }

  async scrollPseInternalCostsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseInternalCostsC));
  }

  async typeTextPseExternalCostsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), value);
  }

  async expectPseExternalCostsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), expected, timeoutMs);
  }

  async expectPseExternalCostsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), substring, timeoutMs);
  }

  async expectPseExternalCostsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), value, timeoutMs);
  }

  async expectPseExternalCostsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), timeoutMs);
  }

  async expectPseExternalCostsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC), count, timeoutMs);
  }

  async scrollPseExternalCostsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExternalCostsC));
  }

  async typeTextPseExpenseCostsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), value);
  }

  async expectPseExpenseCostsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), expected, timeoutMs);
  }

  async expectPseExpenseCostsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), substring, timeoutMs);
  }

  async expectPseExpenseCostsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), value, timeoutMs);
  }

  async expectPseExpenseCostsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), timeoutMs);
  }

  async expectPseExpenseCostsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC), count, timeoutMs);
  }

  async scrollPseExpenseCostsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.pseExpenseCostsC));
  }

  async clickTotalCosts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts));
  }

  async doubleClickTotalCosts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts));
  }

  async longPressTotalCosts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts));
  }

  async expectTotalCostsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.totalCosts), expected, timeoutMs);
  }

  async expectTotalCostsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.totalCosts), substring, timeoutMs);
  }

  async expectTotalCostsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.totalCosts), value, timeoutMs);
  }

  async expectTotalCostsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.totalCosts), timeoutMs);
  }

  async expectTotalCostsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.totalCosts), count, timeoutMs);
  }

  async scrollTotalCostsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.totalCosts));
  }

  async clickMargin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.margin));
  }

  async doubleClickMargin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.margin));
  }

  async longPressMargin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.margin));
  }

  async expectMarginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.margin), expected, timeoutMs);
  }

  async expectMarginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.margin), substring, timeoutMs);
  }

  async expectMarginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.margin), value, timeoutMs);
  }

  async expectMarginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.margin), timeoutMs);
  }

  async expectMarginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.margin), count, timeoutMs);
  }

  async scrollMarginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.margin));
  }

  async clickProjectStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus));
  }

  async doubleClickProjectStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus));
  }

  async longPressProjectStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus));
  }

  async expectProjectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.projectStatus), expected, timeoutMs);
  }

  async expectProjectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.projectStatus), substring, timeoutMs);
  }

  async expectProjectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.projectStatus), value, timeoutMs);
  }

  async expectProjectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.projectStatus), count, timeoutMs);
  }

  async scrollProjectStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectStatus));
  }

  async longPressOverallProjectStatusHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp));
  }

  async expectOverallProjectStatusHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), expected, timeoutMs);
  }

  async expectOverallProjectStatusHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), substring, timeoutMs);
  }

  async expectOverallProjectStatusHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), value, timeoutMs);
  }

  async expectOverallProjectStatusHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), timeoutMs);
  }

  async expectOverallProjectStatusHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp), count, timeoutMs);
  }

  async scrollOverallProjectStatusHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatusHelp));
  }

  async longPressOverallProjectStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus));
  }

  async expectOverallProjectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), expected, timeoutMs);
  }

  async expectOverallProjectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), substring, timeoutMs);
  }

  async expectOverallProjectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), value, timeoutMs);
  }

  async expectOverallProjectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), timeoutMs);
  }

  async expectOverallProjectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus), count, timeoutMs);
  }

  async scrollOverallProjectStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectStatus));
  }

  async longPressOverallProjectCommentsHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp));
  }

  async expectOverallProjectCommentsHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), expected, timeoutMs);
  }

  async expectOverallProjectCommentsHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), substring, timeoutMs);
  }

  async expectOverallProjectCommentsHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), value, timeoutMs);
  }

  async expectOverallProjectCommentsHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), timeoutMs);
  }

  async expectOverallProjectCommentsHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp), count, timeoutMs);
  }

  async scrollOverallProjectCommentsHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.overallProjectCommentsHelp));
  }

  async longPressHelpProjectStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus));
  }

  async expectHelpProjectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), expected, timeoutMs);
  }

  async expectHelpProjectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), substring, timeoutMs);
  }

  async expectHelpProjectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), value, timeoutMs);
  }

  async expectHelpProjectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), timeoutMs);
  }

  async expectHelpProjectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus), count, timeoutMs);
  }

  async scrollHelpProjectStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpProjectStatus));
  }

  async clickProjectId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectId));
  }

  async doubleClickProjectId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectId));
  }

  async longPressProjectId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectId));
  }

  async expectProjectIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.projectId), expected, timeoutMs);
  }

  async expectProjectIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.projectId), substring, timeoutMs);
  }

  async expectProjectIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.projectId), value, timeoutMs);
  }

  async expectProjectIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.projectId), timeoutMs);
  }

  async expectProjectIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.projectId), count, timeoutMs);
  }

  async scrollProjectIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.projectId));
  }

  async longPressConcurCorrelationIdHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp));
  }

  async expectConcurCorrelationIdHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), expected, timeoutMs);
  }

  async expectConcurCorrelationIdHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), substring, timeoutMs);
  }

  async expectConcurCorrelationIdHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), value, timeoutMs);
  }

  async expectConcurCorrelationIdHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), timeoutMs);
  }

  async expectConcurCorrelationIdHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp), count, timeoutMs);
  }

  async scrollConcurCorrelationIdHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.concurCorrelationIdHelp));
  }

  async typeTextPsacConcurCorrelationIdC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), value);
  }

  async expectPsacConcurCorrelationIdCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), expected, timeoutMs);
  }

  async expectPsacConcurCorrelationIdCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), substring, timeoutMs);
  }

  async expectPsacConcurCorrelationIdCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), value, timeoutMs);
  }

  async expectPsacConcurCorrelationIdCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), timeoutMs);
  }

  async expectPsacConcurCorrelationIdCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC), count, timeoutMs);
  }

  async scrollPsacConcurCorrelationIdCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.psacConcurCorrelationIdC));
  }

  async clickSendToThirdPartyExpenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses));
  }

  async doubleClickSendToThirdPartyExpenses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses));
  }

  async longPressSendToThirdPartyExpenses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses));
  }

  async expectSendToThirdPartyExpensesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), expected, timeoutMs);
  }

  async expectSendToThirdPartyExpensesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), substring, timeoutMs);
  }

  async expectSendToThirdPartyExpensesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), value, timeoutMs);
  }

  async expectSendToThirdPartyExpensesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), timeoutMs);
  }

  async expectSendToThirdPartyExpensesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses), count, timeoutMs);
  }

  async scrollSendToThirdPartyExpensesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.sendToThirdPartyExpenses));
  }

  async longPressHelpSendToThirdParty(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty));
  }

  async expectHelpSendToThirdPartyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), expected, timeoutMs);
  }

  async expectHelpSendToThirdPartyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), substring, timeoutMs);
  }

  async expectHelpSendToThirdPartyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), value, timeoutMs);
  }

  async expectHelpSendToThirdPartyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), timeoutMs);
  }

  async expectHelpSendToThirdPartyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty), count, timeoutMs);
  }

  async scrollHelpSendToThirdPartyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCnewPage.L.helpSendToThirdParty));
  }

}
