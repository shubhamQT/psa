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

export class PseProjCPage {
  private static readonly L = {
    addFavoriteFavoritesList: { strategy: 'role' as const, value: 'Add favorite Favorites list', role: 'option', actionKind: 'generic' as const },
    addFavorite: { strategy: 'role' as const, value: 'Add favorite', role: 'button', actionKind: 'button' as const },
    project360HealthAnd: { strategy: 'text' as const, value: 'Project 360 HEALTH AND COMMU - Q-383470 - Ready', shadowHost: 'records-highlights2', actionKind: 'text' as const },
    edit: { strategy: 'role' as const, value: 'Edit', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    delete: { strategy: 'role' as const, value: 'Delete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    projectPlanner: { strategy: 'role' as const, value: 'Project Planner', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    shareProject: { strategy: 'role' as const, value: 'Share Project', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    share: { strategy: 'role' as const, value: 'Sharing', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    showMoreActions: { strategy: 'role' as const, value: 'Show more actions', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    healthAndCommunity: { strategy: 'text' as const, value: '360 HEALTH AND COMMUNITY LIMITED Preview', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    healthAndCommunityLink: { strategy: 'role' as const, value: '360 HEALTH AND COMMUNITY LIMITED', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    preview: { strategy: 'role' as const, value: 'Preview', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    projectManager: { strategy: 'text' as const, value: 'Project Manager', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    braydonMenzelPreview: { strategy: 'text' as const, value: 'Braydon Menzel Preview', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    braydonMenzel: { strategy: 'role' as const, value: 'Braydon Menzel', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    bookings: { strategy: 'text' as const, value: 'Bookings', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    aud147200Eur82750: { strategy: 'text' as const, value: 'AUD 1,472.00 (EUR 827.50)', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    billings: { strategy: 'text' as const, value: 'Billings', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    projectHistory10Preview: { strategy: 'text' as const, value: 'Project History (10+) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectHistory10: { strategy: 'role' as const, value: 'Project History (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    teams1Preview: { strategy: 'text' as const, value: 'Teams (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    teams1: { strategy: 'role' as const, value: 'Teams (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    resourceRequests10Preview: { strategy: 'text' as const, value: 'Resource Requests (10) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    resourceRequests10: { strategy: 'role' as const, value: 'Resource Requests (10)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    assignments2Preview: { strategy: 'text' as const, value: 'Assignments (2) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    assignments2: { strategy: 'role' as const, value: 'Assignments (2)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgetAllocations0Preview: { strategy: 'text' as const, value: 'Budget Allocations (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    budgetAllocations0: { strategy: 'role' as const, value: 'Budget Allocations (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    timecards0Preview: { strategy: 'text' as const, value: 'Timecards (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    timecards0: { strategy: 'role' as const, value: 'Timecards (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    timecardSplits0Preview: { strategy: 'text' as const, value: 'Timecard Splits (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    timecardSplits0: { strategy: 'role' as const, value: 'Timecard Splits (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenseReports0Preview: { strategy: 'text' as const, value: 'Expense Reports (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    expenseReports0: { strategy: 'role' as const, value: 'Expense Reports (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenses0Preview: { strategy: 'text' as const, value: 'Expenses (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    expenses0: { strategy: 'role' as const, value: 'Expenses (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    milestones7Preview: { strategy: 'text' as const, value: 'Milestones (7) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    milestones7: { strategy: 'role' as const, value: 'Milestones (7)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgets1Preview: { strategy: 'text' as const, value: 'Budgets (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    budgets1: { strategy: 'role' as const, value: 'Budgets (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    miscellaneousAdjustments0Preview: { strategy: 'text' as const, value: 'Miscellaneous Adjustments (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    miscellaneousAdjustments0: { strategy: 'role' as const, value: 'Miscellaneous Adjustments (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showAll35: { strategy: 'role' as const, value: 'Show All (35)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    path: { strategy: 'text' as const, value: 'Path', shadowHost: 'flexipage-aura-wrapper', actionKind: 'text' as const },
    showKeyFieldsAndOr: { strategy: 'role' as const, value: '', role: 'button', shadowHost: 'flexipage-aura-wrapper', actionKind: 'button' as const },
    stageCompletePlanned: { strategy: 'text' as const, value: 'stage complete Planned', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    planned: { strategy: 'role' as const, value: 'stage complete Planned', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    stageCompleteReadyTo: { strategy: 'text' as const, value: 'stage complete Ready to Staff', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    readyToStaff: { strategy: 'role' as const, value: 'stage complete Ready to Staff', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    stageCompleteInProgress: { strategy: 'text' as const, value: 'stage complete In Progress', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    inProgress: { strategy: 'role' as const, value: 'stage complete In Progress', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    onHoldOption: { strategy: 'role' as const, value: 'On Hold', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    completedOption: { strategy: 'role' as const, value: 'Completed', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    canceledOption: { strategy: 'role' as const, value: 'Canceled', role: 'link', shadowHost: 'flexipage-aura-wrapper', actionKind: 'link' as const },
    markStageAsComplete: { strategy: 'role' as const, value: '', role: 'button', shadowHost: 'flexipage-aura-wrapper', actionKind: 'button' as const },
    tabsetHeading3194: { strategy: 'text' as const, value: 'Tabs', shadowHost: 'flexipage-tabset2', actionKind: 'text' as const },
    overviewTab: { strategy: 'role' as const, value: 'Overview', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    projectPlanTab: { strategy: 'role' as const, value: 'Project Plan', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    ganttTab: { strategy: 'role' as const, value: 'Gantt', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    resourcePlanTab: { strategy: 'role' as const, value: 'Resource Plan', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    financialsTab: { strategy: 'role' as const, value: 'Financials', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    raidTrackerTab: { strategy: 'role' as const, value: 'RAID Tracker', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    moreTabs: { strategy: 'text' as const, value: 'More Tabs', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    moreTabsButton: { strategy: 'role' as const, value: 'More Tabs', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    onHoldStage: { strategy: 'text' as const, value: 'On Hold Stage', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    monthsAgoNo: { strategy: 'text' as const, value: '2 months ago No Action Required 4/20/2026 Start', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    badgeDateDescription3332: { strategy: 'text' as const, value: 'No Action Required', shadowHost: '#hl-card-header-3330', actionKind: 'text' as const },
    hlAssistiveText3330: { strategy: 'text' as const, value: 'The Highlight Date card is in a Default state.', shadowHost: 'c-ffui_highlight-card', actionKind: 'text' as const },
    in3MonthsNo: { strategy: 'text' as const, value: 'in 3 months No Action Required 10/7/2026 End Date', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    aud147200Eur827503: { strategy: 'text' as const, value: 'AUD 1,472.00 (EUR 827.50) Bookings The threshold', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    hlAssistiveText3348: { strategy: 'text' as const, value: 'The threshold values have not been set or are', shadowHost: 'c-ffui_highlight-card', actionKind: 'text' as const },
    aud147200Eur827504: { strategy: 'text' as const, value: 'AUD 1,472.00 (EUR 827.50) Billings The threshold', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    aud000Eur000: { strategy: 'text' as const, value: 'AUD 0.00 (EUR 0.00) Billed The threshold values', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    aud147200Eur827505: { strategy: 'text' as const, value: 'AUD 1,472.00 (EUR 827.50) Margin The threshold', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    fixedPriceBillingType: { strategy: 'text' as const, value: 'Fixed Price Billing Type', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    aud000Eur0002: { strategy: 'text' as const, value: 'AUD 0.00 (EUR 0.00) Total Costs The threshold', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    plannedHoursTheThreshold: { strategy: 'text' as const, value: 'Planned Hours The threshold values have not been', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    nonBillableHoursExternal: { strategy: 'text' as const, value: '0 Non-Billable Hours (External) The threshold', shadowHost: 'fferpcore-exp_highlights-panel', actionKind: 'text' as const },
    projectOverview: { strategy: 'role' as const, value: 'Project Overview', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    projectName: { strategy: 'text' as const, value: 'Project Name', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editProjectName: { strategy: 'role' as const, value: 'Edit Project Name', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    stage: { strategy: 'text' as const, value: 'Stage', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editStage: { strategy: 'role' as const, value: 'Edit Stage', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    practiceManager: { strategy: 'text' as const, value: 'Practice Manager', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editPracticeManager: { strategy: 'role' as const, value: 'Edit Practice Manager', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    paulDeBono: { strategy: 'role' as const, value: 'Paul De Bono', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    practiceDirector: { strategy: 'text' as const, value: 'Practice Director', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editPracticeDirector: { strategy: 'role' as const, value: 'Edit Practice Director', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    michaelKoller: { strategy: 'role' as const, value: 'Michael Koller', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    billable: { strategy: 'text' as const, value: 'Billable', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    helpBillable: { strategy: 'role' as const, value: 'Help Billable', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editBillable: { strategy: 'role' as const, value: 'Edit Billable', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    editProjectManager: { strategy: 'role' as const, value: 'Edit Project Manager', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    practice: { strategy: 'text' as const, value: 'Practice', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editPractice: { strategy: 'role' as const, value: 'Edit Practice', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    ready: { strategy: 'role' as const, value: 'Ready', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    region: { strategy: 'text' as const, value: 'Region', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editRegion: { strategy: 'role' as const, value: 'Edit Region', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    apac: { strategy: 'role' as const, value: 'APAC', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    timeZone: { strategy: 'text' as const, value: 'Time Zone', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    helpTimeZone: { strategy: 'role' as const, value: 'Help Time Zone', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editTimeZone: { strategy: 'role' as const, value: 'Edit Time Zone', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    dailyTimecardNotesRequired: { strategy: 'text' as const, value: 'Daily Timecard Notes Required', shadowHost: 'record_flexipage-record-field', actionKind: 'text' as const },
    editDailyTimecardNotes: { strategy: 'role' as const, value: 'Edit Daily Timecard Notes Required', role: 'button', shadowHost: 'record_flexipage-record-field', actionKind: 'button' as const },
    engagementDetails: { strategy: 'role' as const, value: 'Engagement Details', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    datesScheduling: { strategy: 'role' as const, value: 'Dates & Scheduling', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    financialSummary: { strategy: 'role' as const, value: 'Financial Summary', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    projectStatus: { strategy: 'role' as const, value: 'Project Status', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    systemInformation: { strategy: 'role' as const, value: 'System Information', role: 'button', shadowHost: 'flexipage-field-section2', actionKind: 'button' as const },
    manageProjectPlans: { strategy: 'role' as const, value: 'Manage Project Plans', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    openGantt: { strategy: 'role' as const, value: 'Open Gantt', role: 'link', shadowHost: 'c-ffui_page-reference-link', actionKind: 'link' as const },
    openProjectPlanner: { strategy: 'role' as const, value: 'Open Project Planner', role: 'link', shadowHost: 'c-ffui_page-reference-link', actionKind: 'link' as const },
    addRecordsFromTemplate: { strategy: 'role' as const, value: 'Add Records from Template', role: 'button', shadowHost: 'c-ffui_launcher-panel', actionKind: 'button' as const },
    copyToProjectFrom: { strategy: 'role' as const, value: 'Copy to Project from Template', role: 'link', shadowHost: 'c-ffui_page-reference-link', actionKind: 'link' as const },
    createSubProjectFromTemplate: { strategy: 'role' as const, value: 'Create Sub-Project from Template', role: 'link', shadowHost: 'c-ffui_page-reference-link', actionKind: 'link' as const },
    projectVersioning: { strategy: 'role' as const, value: 'Project Versioning', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    projectTask: { strategy: 'role' as const, value: 'Project Task', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    manageResourceRequest: { strategy: 'role' as const, value: 'Manage Resource Request', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    manageTaskBasedResourcing: { strategy: 'role' as const, value: 'Manage Task Based Resourcing', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    manageFinancials: { strategy: 'role' as const, value: 'Manage Financials', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    manageRaid: { strategy: 'role' as const, value: 'Manage RAID', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    timesheetEntry: { strategy: 'role' as const, value: 'Timesheet Entry', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    assignment: { strategy: 'role' as const, value: 'Assignment', role: 'button', shadowHost: 'lightning-accordion-section', actionKind: 'button' as const },
    projectHistory: { strategy: 'text' as const, value: 'Project History', shadowHost: 'lst-stencil-related-list-single', actionKind: 'text' as const },
    immediateSubProjects: { strategy: 'text' as const, value: 'Immediate Sub-Projects', shadowHost: 'lst-stencil-related-list-single', actionKind: 'text' as const },
    projectPhases0Preview: { strategy: 'text' as const, value: 'Project Phases (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectPhases0: { strategy: 'role' as const, value: 'Project Phases (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectMethodologies0Preview: { strategy: 'text' as const, value: 'Project Methodologies (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectMethodologies0: { strategy: 'role' as const, value: 'Project Methodologies (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectLocations0Preview: { strategy: 'text' as const, value: 'Project Locations (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectLocations0: { strategy: 'role' as const, value: 'Project Locations (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectActuals5Preview: { strategy: 'text' as const, value: 'Project Actuals (5) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectActuals5: { strategy: 'role' as const, value: 'Project Actuals (5)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    transactionLog7Preview: { strategy: 'text' as const, value: 'Transaction Log (7) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    transactionLog7: { strategy: 'role' as const, value: 'Transaction Log (7)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    billingEvents1Preview: { strategy: 'text' as const, value: 'Billing Events (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    billingEvents1: { strategy: 'role' as const, value: 'Billing Events (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    billingEventItems1: { strategy: 'text' as const, value: 'Billing Event Items (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    billingEventItems1Link: { strategy: 'role' as const, value: 'Billing Event Items (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    permissionControls1Preview: { strategy: 'text' as const, value: 'Permission Controls (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    permissionControls1: { strategy: 'role' as const, value: 'Permission Controls (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    immediateSubProjects0Preview: { strategy: 'text' as const, value: 'Immediate Sub-Projects (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    immediateSubProjects0: { strategy: 'role' as const, value: 'Immediate Sub-Projects (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    masterProjectForSubProjects: { strategy: 'text' as const, value: 'Master Project For Sub-Projects: (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    masterProjectForSubProjectsLink: { strategy: 'role' as const, value: 'Master Project For Sub-Projects: (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenseLimitsRates: { strategy: 'text' as const, value: 'Expense Limits / Rates (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    expenseLimitsRatesLink: { strategy: 'role' as const, value: 'Expense Limits / Rates (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgetHeaders0Preview: { strategy: 'text' as const, value: 'Budget Headers (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    budgetHeaders0: { strategy: 'role' as const, value: 'Budget Headers (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    estVsActuals10: { strategy: 'text' as const, value: 'Est Vs Actuals (10+) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    estVsActuals10Link: { strategy: 'role' as const, value: 'Est Vs Actuals (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    backlogCalculations0Preview: { strategy: 'text' as const, value: 'Backlog Calculations (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    backlogCalculations0: { strategy: 'role' as const, value: 'Backlog Calculations (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    backlogDetails0Preview: { strategy: 'text' as const, value: 'Backlog Details (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    backlogDetails0: { strategy: 'role' as const, value: 'Backlog Details (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasks10Preview: { strategy: 'text' as const, value: 'Project Tasks (10+) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTasks10: { strategy: 'role' as const, value: 'Project Tasks (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    revenueForecasts0Preview: { strategy: 'text' as const, value: 'Revenue Forecasts (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    revenueForecasts0: { strategy: 'role' as const, value: 'Revenue Forecasts (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    costForecasts0Preview: { strategy: 'text' as const, value: 'Cost Forecasts (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    costForecasts0: { strategy: 'role' as const, value: 'Cost Forecasts (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    revenueForecastBatchLogs: { strategy: 'text' as const, value: 'Revenue Forecast Batch Logs (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    revenueForecastBatchLogsLink: { strategy: 'role' as const, value: 'Revenue Forecast Batch Logs (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectSources7Preview: { strategy: 'text' as const, value: 'Project Sources (7) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectSources7: { strategy: 'role' as const, value: 'Project Sources (7)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectServicesDeliverables0: { strategy: 'text' as const, value: 'Project Services Deliverables (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectServicesDeliverables0Link: { strategy: 'role' as const, value: 'Project Services Deliverables (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectServicesDeliverableItems: { strategy: 'text' as const, value: 'Project Services Deliverable Items (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectServicesDeliverableItemsLink: { strategy: 'role' as const, value: 'Project Services Deliverable Items (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    managedVersions0Preview: { strategy: 'text' as const, value: 'Managed Versions (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    managedVersions0: { strategy: 'role' as const, value: 'Managed Versions (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showLess: { strategy: 'role' as const, value: 'Show Less', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickAddFavoriteFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs, soft);
  }

  async clickAddFavorite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.addFavorite));
  }

  async doubleClickAddFavorite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.addFavorite));
  }

  async expectAddFavoriteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs, soft);
  }

  async getInnerTextProject360HealthAnd(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd));
  }

  async expectProject360HealthAndVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs, soft);
  }

  async clickEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async doubleClickEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async expectEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.edit), timeoutMs, soft);
  }

  async clickDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async doubleClickDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async expectDeleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.delete), timeoutMs, soft);
  }

  async clickProjectPlanner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async doubleClickProjectPlanner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async expectProjectPlannerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs, soft);
  }

  async clickShareProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async doubleClickShareProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async expectShareProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs, soft);
  }

  async clickShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async doubleClickShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async expectShareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.share), timeoutMs, soft);
  }

  async clickShowMoreActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async doubleClickShowMoreActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async expectShowMoreActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs, soft);
  }

  async getInnerTextHealthAndCommunity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity));
  }

  async expectHealthAndCommunityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs, soft);
  }

  async clickHealthAndCommunityLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink));
  }

  async expectHealthAndCommunityLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs, soft);
  }

  async clickPreview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.preview));
  }

  async doubleClickPreview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.preview));
  }

  async expectPreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.preview), timeoutMs, soft);
  }

  async getInnerTextProjectManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async expectProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs, soft);
  }

  async getInnerTextBraydonMenzelPreview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview));
  }

  async expectBraydonMenzelPreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs, soft);
  }

  async clickBraydonMenzel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzel));
  }

  async expectBraydonMenzelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs, soft);
  }

  async getInnerTextBookings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async expectBookingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs, soft);
  }

  async getInnerTextAud147200Eur82750(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750));
  }

  async expectAud147200Eur82750Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs, soft);
  }

  async getInnerTextBillings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billings), timeoutMs, soft);
  }

  async getInnerTextProjectHistory10Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview));
  }

  async expectProjectHistory10PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs, soft);
  }

  async clickProjectHistory10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10));
  }

  async expectProjectHistory10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs, soft);
  }

  async getInnerTextTeams1Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.teams1Preview));
  }

  async expectTeams1PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs, soft);
  }

  async clickTeams1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async expectTeams1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs, soft);
  }

  async getInnerTextResourceRequests10Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview));
  }

  async expectResourceRequests10PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs, soft);
  }

  async clickResourceRequests10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10));
  }

  async expectResourceRequests10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs, soft);
  }

  async getInnerTextAssignments2Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview));
  }

  async expectAssignments2PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs, soft);
  }

  async clickAssignments2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2));
  }

  async expectAssignments2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs, soft);
  }

  async getInnerTextBudgetAllocations0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview));
  }

  async expectBudgetAllocations0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs, soft);
  }

  async clickBudgetAllocations0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0));
  }

  async expectBudgetAllocations0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs, soft);
  }

  async getInnerTextTimecards0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview));
  }

  async expectTimecards0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs, soft);
  }

  async clickTimecards0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async expectTimecards0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs, soft);
  }

  async getInnerTextTimecardSplits0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview));
  }

  async expectTimecardSplits0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs, soft);
  }

  async clickTimecardSplits0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async expectTimecardSplits0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs, soft);
  }

  async getInnerTextExpenseReports0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview));
  }

  async expectExpenseReports0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs, soft);
  }

  async clickExpenseReports0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async expectExpenseReports0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs, soft);
  }

  async getInnerTextExpenses0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview));
  }

  async expectExpenses0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs, soft);
  }

  async clickExpenses0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async expectExpenses0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs, soft);
  }

  async getInnerTextMilestones7Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview));
  }

  async expectMilestones7PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs, soft);
  }

  async clickMilestones7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7));
  }

  async expectMilestones7Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs, soft);
  }

  async getInnerTextBudgets1Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview));
  }

  async expectBudgets1PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs, soft);
  }

  async clickBudgets1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async expectBudgets1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs, soft);
  }

  async getInnerTextMiscellaneousAdjustments0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview));
  }

  async expectMiscellaneousAdjustments0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs, soft);
  }

  async clickMiscellaneousAdjustments0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async expectMiscellaneousAdjustments0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs, soft);
  }

  async clickShowAll35(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async expectShowAll35Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs, soft);
  }

  async getInnerTextPath(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.path));
  }

  async expectPathVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.path), timeoutMs, soft);
  }

  async clickShowKeyFieldsAndOr(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr));
  }

  async doubleClickShowKeyFieldsAndOr(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr));
  }

  async expectShowKeyFieldsAndOrVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs, soft);
  }

  async clickStageCompletePlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs, soft);
  }

  async clickPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async expectPlannedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.planned), timeoutMs, soft);
  }

  async clickStageCompleteReadyTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo));
  }

  async expectStageCompleteReadyToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs, soft);
  }

  async clickReadyToStaff(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async expectReadyToStaffVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs, soft);
  }

  async clickStageCompleteInProgress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs, soft);
  }

  async clickInProgress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async expectInProgressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs, soft);
  }

  async clickOnHoldOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldOption));
  }

  async expectOnHoldOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs, soft);
  }

  async clickCompletedOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.completedOption));
  }

  async expectCompletedOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs, soft);
  }

  async clickCanceledOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.canceledOption));
  }

  async expectCanceledOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs, soft);
  }

  async clickMarkStageAsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async doubleClickMarkStageAsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async expectMarkStageAsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs, soft);
  }

  async getInnerTextTabsetHeading3194(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194));
  }

  async expectTabsetHeading3194Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs, soft);
  }

  async clickOverviewTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async expectOverviewTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs, soft);
  }

  async clickProjectPlanTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async expectProjectPlanTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs, soft);
  }

  async clickGanttTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async expectGanttTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs, soft);
  }

  async clickResourcePlanTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async expectResourcePlanTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs, soft);
  }

  async clickFinancialsTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async expectFinancialsTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs, soft);
  }

  async clickRaidTrackerTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async expectRaidTrackerTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs, soft);
  }

  async clickMoreTabs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabs));
  }

  async expectMoreTabsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs, soft);
  }

  async clickMoreTabsButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async doubleClickMoreTabsButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async expectMoreTabsButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs, soft);
  }

  async getInnerTextOnHoldStage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldStage));
  }

  async expectOnHoldStageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs, soft);
  }

  async getInnerTextMonthsAgoNo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo));
  }

  async expectMonthsAgoNoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs, soft);
  }

  async getInnerTextBadgeDateDescription3332(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332));
  }

  async expectBadgeDateDescription3332Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs, soft);
  }

  async getInnerTextHlAssistiveText3330(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330));
  }

  async expectHlAssistiveText3330Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs, soft);
  }

  async getInnerTextIn3MonthsNo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo));
  }

  async expectIn3MonthsNoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs, soft);
  }

  async getInnerTextAud147200Eur827503(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503));
  }

  async expectAud147200Eur827503Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs, soft);
  }

  async getInnerTextHlAssistiveText3348(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348));
  }

  async expectHlAssistiveText3348Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs, soft);
  }

  async getInnerTextAud147200Eur827504(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504));
  }

  async expectAud147200Eur827504Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs, soft);
  }

  async getInnerTextAud000Eur000(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000));
  }

  async expectAud000Eur000Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs, soft);
  }

  async getInnerTextAud147200Eur827505(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505));
  }

  async expectAud147200Eur827505Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs, soft);
  }

  async getInnerTextFixedPriceBillingType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType));
  }

  async expectFixedPriceBillingTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs, soft);
  }

  async getInnerTextAud000Eur0002(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002));
  }

  async expectAud000Eur0002Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs, soft);
  }

  async getInnerTextPlannedHoursTheThreshold(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold));
  }

  async expectPlannedHoursTheThresholdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs, soft);
  }

  async getInnerTextNonBillableHoursExternal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal));
  }

  async expectNonBillableHoursExternalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs, soft);
  }

  async clickProjectOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectOverview));
  }

  async doubleClickProjectOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectOverview));
  }

  async expectProjectOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs, soft);
  }

  async getInnerTextProjectName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectName));
  }

  async expectProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs, soft);
  }

  async clickEditProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectName));
  }

  async doubleClickEditProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectName));
  }

  async expectEditProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs, soft);
  }

  async getInnerTextStage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.stage));
  }

  async expectStageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.stage), timeoutMs, soft);
  }

  async clickEditStage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editStage));
  }

  async doubleClickEditStage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editStage));
  }

  async expectEditStageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs, soft);
  }

  async getInnerTextPracticeManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.practiceManager));
  }

  async expectPracticeManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs, soft);
  }

  async clickEditPracticeManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeManager));
  }

  async doubleClickEditPracticeManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeManager));
  }

  async expectEditPracticeManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs, soft);
  }

  async clickPaulDeBono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.paulDeBono));
  }

  async expectPaulDeBonoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs, soft);
  }

  async getInnerTextPracticeDirector(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.practiceDirector));
  }

  async expectPracticeDirectorVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs, soft);
  }

  async clickEditPracticeDirector(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeDirector));
  }

  async doubleClickEditPracticeDirector(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeDirector));
  }

  async expectEditPracticeDirectorVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs, soft);
  }

  async clickMichaelKoller(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.michaelKoller));
  }

  async expectMichaelKollerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs, soft);
  }

  async getInnerTextBillable(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.billable));
  }

  async expectBillableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billable), timeoutMs, soft);
  }

  async clickHelpBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.helpBillable));
  }

  async doubleClickHelpBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.helpBillable));
  }

  async expectHelpBillableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs, soft);
  }

  async clickEditBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editBillable));
  }

  async doubleClickEditBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editBillable));
  }

  async expectEditBillableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs, soft);
  }

  async clickEditProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectManager));
  }

  async doubleClickEditProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectManager));
  }

  async expectEditProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs, soft);
  }

  async getInnerTextPractice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.practice));
  }

  async expectPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.practice), timeoutMs, soft);
  }

  async clickEditPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editPractice));
  }

  async doubleClickEditPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editPractice));
  }

  async expectEditPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs, soft);
  }

  async clickReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.ready));
  }

  async expectReadyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.ready), timeoutMs, soft);
  }

  async getInnerTextRegion(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.region));
  }

  async expectRegionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.region), timeoutMs, soft);
  }

  async clickEditRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editRegion));
  }

  async doubleClickEditRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editRegion));
  }

  async expectEditRegionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs, soft);
  }

  async clickApac(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.apac));
  }

  async expectApacVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.apac), timeoutMs, soft);
  }

  async getInnerTextTimeZone(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.timeZone));
  }

  async expectTimeZoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs, soft);
  }

  async clickHelpTimeZone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.helpTimeZone));
  }

  async doubleClickHelpTimeZone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.helpTimeZone));
  }

  async expectHelpTimeZoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs, soft);
  }

  async clickEditTimeZone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editTimeZone));
  }

  async doubleClickEditTimeZone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editTimeZone));
  }

  async expectEditTimeZoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs, soft);
  }

  async getInnerTextDailyTimecardNotesRequired(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired));
  }

  async expectDailyTimecardNotesRequiredVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs, soft);
  }

  async clickEditDailyTimecardNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes));
  }

  async doubleClickEditDailyTimecardNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes));
  }

  async expectEditDailyTimecardNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs, soft);
  }

  async clickEngagementDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.engagementDetails));
  }

  async doubleClickEngagementDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.engagementDetails));
  }

  async expectEngagementDetailsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs, soft);
  }

  async clickDatesScheduling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.datesScheduling));
  }

  async doubleClickDatesScheduling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.datesScheduling));
  }

  async expectDatesSchedulingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs, soft);
  }

  async clickFinancialSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.financialSummary));
  }

  async doubleClickFinancialSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.financialSummary));
  }

  async expectFinancialSummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs, soft);
  }

  async clickProjectStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectStatus));
  }

  async doubleClickProjectStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectStatus));
  }

  async expectProjectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs, soft);
  }

  async clickSystemInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.systemInformation));
  }

  async doubleClickSystemInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.systemInformation));
  }

  async expectSystemInformationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs, soft);
  }

  async clickManageProjectPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.manageProjectPlans));
  }

  async doubleClickManageProjectPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.manageProjectPlans));
  }

  async expectManageProjectPlansVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs, soft);
  }

  async clickOpenGantt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.openGantt));
  }

  async expectOpenGanttVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs, soft);
  }

  async clickOpenProjectPlanner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.openProjectPlanner));
  }

  async expectOpenProjectPlannerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs, soft);
  }

  async clickAddRecordsFromTemplate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate));
  }

  async doubleClickAddRecordsFromTemplate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate));
  }

  async expectAddRecordsFromTemplateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs, soft);
  }

  async clickCopyToProjectFrom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.copyToProjectFrom));
  }

  async expectCopyToProjectFromVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs, soft);
  }

  async clickCreateSubProjectFromTemplate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate));
  }

  async expectCreateSubProjectFromTemplateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs, soft);
  }

  async clickProjectVersioning(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectVersioning));
  }

  async doubleClickProjectVersioning(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectVersioning));
  }

  async expectProjectVersioningVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs, soft);
  }

  async clickProjectTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTask));
  }

  async doubleClickProjectTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTask));
  }

  async expectProjectTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs, soft);
  }

  async clickManageResourceRequest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.manageResourceRequest));
  }

  async doubleClickManageResourceRequest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.manageResourceRequest));
  }

  async expectManageResourceRequestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs, soft);
  }

  async clickManageTaskBasedResourcing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing));
  }

  async doubleClickManageTaskBasedResourcing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing));
  }

  async expectManageTaskBasedResourcingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs, soft);
  }

  async clickManageFinancials(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.manageFinancials));
  }

  async doubleClickManageFinancials(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.manageFinancials));
  }

  async expectManageFinancialsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs, soft);
  }

  async clickManageRaid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.manageRaid));
  }

  async doubleClickManageRaid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.manageRaid));
  }

  async expectManageRaidVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs, soft);
  }

  async clickTimesheetEntry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timesheetEntry));
  }

  async doubleClickTimesheetEntry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timesheetEntry));
  }

  async expectTimesheetEntryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs, soft);
  }

  async clickAssignment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.assignment));
  }

  async doubleClickAssignment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.assignment));
  }

  async expectAssignmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs, soft);
  }

  async getInnerTextProjectHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory));
  }

  async expectProjectHistoryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs, soft);
  }

  async getInnerTextImmediateSubProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects));
  }

  async expectImmediateSubProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs, soft);
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
    await expectPageTitle(this.page, '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation | Project | Salesforce', timeoutMs);
  }

  async getInnerTextProjectPhases0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview));
  }

  async expectProjectPhases0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs, soft);
  }

  async clickProjectPhases0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async expectProjectPhases0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs, soft);
  }

  async getInnerTextProjectMethodologies0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview));
  }

  async expectProjectMethodologies0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs, soft);
  }

  async clickProjectMethodologies0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async expectProjectMethodologies0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs, soft);
  }

  async getInnerTextProjectLocations0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview));
  }

  async expectProjectLocations0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs, soft);
  }

  async clickProjectLocations0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async expectProjectLocations0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs, soft);
  }

  async getInnerTextProjectActuals5Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview));
  }

  async expectProjectActuals5PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs, soft);
  }

  async clickProjectActuals5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5));
  }

  async expectProjectActuals5Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs, soft);
  }

  async getInnerTextTransactionLog7Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview));
  }

  async expectTransactionLog7PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs, soft);
  }

  async clickTransactionLog7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7));
  }

  async expectTransactionLog7Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs, soft);
  }

  async getInnerTextBillingEvents1Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview));
  }

  async expectBillingEvents1PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs, soft);
  }

  async clickBillingEvents1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async expectBillingEvents1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs, soft);
  }

  async getInnerTextBillingEventItems1(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1));
  }

  async expectBillingEventItems1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs, soft);
  }

  async clickBillingEventItems1Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async expectBillingEventItems1LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs, soft);
  }

  async getInnerTextPermissionControls1Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview));
  }

  async expectPermissionControls1PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs, soft);
  }

  async clickPermissionControls1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async expectPermissionControls1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs, soft);
  }

  async getInnerTextImmediateSubProjects0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview));
  }

  async expectImmediateSubProjects0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs, soft);
  }

  async clickImmediateSubProjects0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async expectImmediateSubProjects0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs, soft);
  }

  async getInnerTextMasterProjectForSubProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects));
  }

  async expectMasterProjectForSubProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs, soft);
  }

  async clickMasterProjectForSubProjectsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async expectMasterProjectForSubProjectsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs, soft);
  }

  async getInnerTextExpenseLimitsRates(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates));
  }

  async expectExpenseLimitsRatesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs, soft);
  }

  async clickExpenseLimitsRatesLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async expectExpenseLimitsRatesLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs, soft);
  }

  async getInnerTextBudgetHeaders0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview));
  }

  async expectBudgetHeaders0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs, soft);
  }

  async clickBudgetHeaders0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async expectBudgetHeaders0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs, soft);
  }

  async getInnerTextEstVsActuals10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10));
  }

  async expectEstVsActuals10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs, soft);
  }

  async clickEstVsActuals10Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async expectEstVsActuals10LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs, soft);
  }

  async getInnerTextBacklogCalculations0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview));
  }

  async expectBacklogCalculations0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs, soft);
  }

  async clickBacklogCalculations0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async expectBacklogCalculations0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs, soft);
  }

  async getInnerTextBacklogDetails0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview));
  }

  async expectBacklogDetails0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs, soft);
  }

  async clickBacklogDetails0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async expectBacklogDetails0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs, soft);
  }

  async getInnerTextProjectTasks10Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview));
  }

  async expectProjectTasks10PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs, soft);
  }

  async clickProjectTasks10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async expectProjectTasks10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs, soft);
  }

  async getInnerTextRevenueForecasts0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview));
  }

  async expectRevenueForecasts0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs, soft);
  }

  async clickRevenueForecasts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async expectRevenueForecasts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs, soft);
  }

  async getInnerTextCostForecasts0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview));
  }

  async expectCostForecasts0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs, soft);
  }

  async clickCostForecasts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async expectCostForecasts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs, soft);
  }

  async getInnerTextRevenueForecastBatchLogs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs));
  }

  async expectRevenueForecastBatchLogsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs, soft);
  }

  async clickRevenueForecastBatchLogsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async expectRevenueForecastBatchLogsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs, soft);
  }

  async getInnerTextProjectSources7Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview));
  }

  async expectProjectSources7PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs, soft);
  }

  async clickProjectSources7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7));
  }

  async expectProjectSources7Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs, soft);
  }

  async getInnerTextProjectServicesDeliverables0(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0));
  }

  async expectProjectServicesDeliverables0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs, soft);
  }

  async clickProjectServicesDeliverables0Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async expectProjectServicesDeliverables0LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs, soft);
  }

  async getInnerTextProjectServicesDeliverableItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems));
  }

  async expectProjectServicesDeliverableItemsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs, soft);
  }

  async clickProjectServicesDeliverableItemsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async expectProjectServicesDeliverableItemsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs, soft);
  }

  async getInnerTextManagedVersions0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview));
  }

  async expectManagedVersions0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs, soft);
  }

  async clickManagedVersions0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async expectManagedVersions0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs, soft);
  }

  async clickShowLess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async expectShowLessVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs, soft);
  }


  async doubleClickAddFavoriteFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList));
  }

  async longPressAddFavoriteFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), expected, timeoutMs);
  }

  async expectAddFavoriteFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), substring, timeoutMs);
  }

  async expectAddFavoriteFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), value, timeoutMs);
  }

  async expectAddFavoriteFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList), count, timeoutMs);
  }

  async scrollAddFavoriteFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.addFavoriteFavoritesList));
  }

  async longPressAddFavorite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.addFavorite));
  }

  async expectAddFavoriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.addFavorite), expected, timeoutMs);
  }

  async expectAddFavoriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.addFavorite), substring, timeoutMs);
  }

  async expectAddFavoriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.addFavorite), value, timeoutMs);
  }

  async expectAddFavoriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.addFavorite), count, timeoutMs);
  }

  async scrollAddFavoriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.addFavorite));
  }

  async clickProject360HealthAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd));
  }

  async doubleClickProject360HealthAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd));
  }

  async longPressProject360HealthAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd));
  }

  async expectProject360HealthAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.project360HealthAnd), expected, timeoutMs);
  }

  async expectProject360HealthAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.project360HealthAnd), substring, timeoutMs);
  }

  async expectProject360HealthAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.project360HealthAnd), value, timeoutMs);
  }

  async expectProject360HealthAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.project360HealthAnd), timeoutMs);
  }

  async expectProject360HealthAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.project360HealthAnd), count, timeoutMs);
  }

  async scrollProject360HealthAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.project360HealthAnd));
  }

  async longPressEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async expectEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.edit), expected, timeoutMs);
  }

  async expectEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.edit), substring, timeoutMs);
  }

  async expectEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.edit), value, timeoutMs);
  }

  async expectEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.edit), count, timeoutMs);
  }

  async scrollEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async longPressDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async expectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.delete), expected, timeoutMs);
  }

  async expectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.delete), substring, timeoutMs);
  }

  async expectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.delete), value, timeoutMs);
  }

  async expectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.delete), count, timeoutMs);
  }

  async scrollDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async longPressProjectPlanner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async expectProjectPlannerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPlanner), expected, timeoutMs);
  }

  async expectProjectPlannerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPlanner), substring, timeoutMs);
  }

  async expectProjectPlannerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPlanner), value, timeoutMs);
  }

  async expectProjectPlannerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPlanner), count, timeoutMs);
  }

  async scrollProjectPlannerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async longPressShareProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async expectShareProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.shareProject), expected, timeoutMs);
  }

  async expectShareProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.shareProject), substring, timeoutMs);
  }

  async expectShareProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.shareProject), value, timeoutMs);
  }

  async expectShareProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.shareProject), count, timeoutMs);
  }

  async scrollShareProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async longPressShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async expectShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.share), expected, timeoutMs);
  }

  async expectShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.share), substring, timeoutMs);
  }

  async expectShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.share), value, timeoutMs);
  }

  async expectShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.share), count, timeoutMs);
  }

  async scrollShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async longPressShowMoreActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async expectShowMoreActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showMoreActions), expected, timeoutMs);
  }

  async expectShowMoreActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showMoreActions), substring, timeoutMs);
  }

  async expectShowMoreActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showMoreActions), value, timeoutMs);
  }

  async expectShowMoreActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showMoreActions), count, timeoutMs);
  }

  async scrollShowMoreActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async clickHealthAndCommunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity));
  }

  async doubleClickHealthAndCommunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity));
  }

  async longPressHealthAndCommunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity));
  }

  async expectHealthAndCommunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.healthAndCommunity), expected, timeoutMs);
  }

  async expectHealthAndCommunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.healthAndCommunity), substring, timeoutMs);
  }

  async expectHealthAndCommunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.healthAndCommunity), value, timeoutMs);
  }

  async expectHealthAndCommunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.healthAndCommunity), timeoutMs);
  }

  async expectHealthAndCommunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.healthAndCommunity), count, timeoutMs);
  }

  async scrollHealthAndCommunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunity));
  }

  async doubleClickHealthAndCommunityLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink));
  }

  async longPressHealthAndCommunityLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink));
  }

  async expectHealthAndCommunityLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), expected, timeoutMs);
  }

  async expectHealthAndCommunityLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), substring, timeoutMs);
  }

  async expectHealthAndCommunityLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), value, timeoutMs);
  }

  async expectHealthAndCommunityLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), timeoutMs);
  }

  async expectHealthAndCommunityLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink), count, timeoutMs);
  }

  async scrollHealthAndCommunityLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.healthAndCommunityLink));
  }

  async longPressPreview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.preview));
  }

  async expectPreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.preview), expected, timeoutMs);
  }

  async expectPreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.preview), substring, timeoutMs);
  }

  async expectPreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.preview), value, timeoutMs);
  }

  async expectPreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.preview), timeoutMs);
  }

  async expectPreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.preview), count, timeoutMs);
  }

  async scrollPreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.preview));
  }

  async clickProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async doubleClickProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async longPressProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async expectProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectManager), expected, timeoutMs);
  }

  async expectProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectManager), substring, timeoutMs);
  }

  async expectProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectManager), value, timeoutMs);
  }

  async expectProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectManager), count, timeoutMs);
  }

  async scrollProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async clickBraydonMenzelPreview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview));
  }

  async doubleClickBraydonMenzelPreview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview));
  }

  async longPressBraydonMenzelPreview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview));
  }

  async expectBraydonMenzelPreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), expected, timeoutMs);
  }

  async expectBraydonMenzelPreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), substring, timeoutMs);
  }

  async expectBraydonMenzelPreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), value, timeoutMs);
  }

  async expectBraydonMenzelPreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), timeoutMs);
  }

  async expectBraydonMenzelPreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview), count, timeoutMs);
  }

  async scrollBraydonMenzelPreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzelPreview));
  }

  async doubleClickBraydonMenzel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzel));
  }

  async longPressBraydonMenzel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzel));
  }

  async expectBraydonMenzelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.braydonMenzel), expected, timeoutMs);
  }

  async expectBraydonMenzelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.braydonMenzel), substring, timeoutMs);
  }

  async expectBraydonMenzelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.braydonMenzel), value, timeoutMs);
  }

  async expectBraydonMenzelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.braydonMenzel), timeoutMs);
  }

  async expectBraydonMenzelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.braydonMenzel), count, timeoutMs);
  }

  async scrollBraydonMenzelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.braydonMenzel));
  }

  async clickBookings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async doubleClickBookings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async longPressBookings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async expectBookingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.bookings), expected, timeoutMs);
  }

  async expectBookingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.bookings), substring, timeoutMs);
  }

  async expectBookingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.bookings), value, timeoutMs);
  }

  async expectBookingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.bookings), count, timeoutMs);
  }

  async scrollBookingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async clickAud147200Eur82750(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750));
  }

  async doubleClickAud147200Eur82750(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750));
  }

  async longPressAud147200Eur82750(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750));
  }

  async expectAud147200Eur82750Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), expected, timeoutMs);
  }

  async expectAud147200Eur82750ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), substring, timeoutMs);
  }

  async expectAud147200Eur82750Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), value, timeoutMs);
  }

  async expectAud147200Eur82750Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), timeoutMs);
  }

  async expectAud147200Eur82750Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud147200Eur82750), count, timeoutMs);
  }

  async scrollAud147200Eur82750IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur82750));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billings), substring, timeoutMs);
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billings), count, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async clickProjectHistory10Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview));
  }

  async doubleClickProjectHistory10Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview));
  }

  async longPressProjectHistory10Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview));
  }

  async expectProjectHistory10PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), expected, timeoutMs);
  }

  async expectProjectHistory10PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), substring, timeoutMs);
  }

  async expectProjectHistory10PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), value, timeoutMs);
  }

  async expectProjectHistory10PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), timeoutMs);
  }

  async expectProjectHistory10PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectHistory10Preview), count, timeoutMs);
  }

  async scrollProjectHistory10PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10Preview));
  }

  async doubleClickProjectHistory10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10));
  }

  async longPressProjectHistory10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10));
  }

  async expectProjectHistory10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectHistory10), expected, timeoutMs);
  }

  async expectProjectHistory10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectHistory10), substring, timeoutMs);
  }

  async expectProjectHistory10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectHistory10), value, timeoutMs);
  }

  async expectProjectHistory10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectHistory10), timeoutMs);
  }

  async expectProjectHistory10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectHistory10), count, timeoutMs);
  }

  async scrollProjectHistory10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory10));
  }

  async clickTeams1Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1Preview));
  }

  async doubleClickTeams1Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1Preview));
  }

  async longPressTeams1Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.teams1Preview));
  }

  async expectTeams1PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.teams1Preview), expected, timeoutMs);
  }

  async expectTeams1PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.teams1Preview), substring, timeoutMs);
  }

  async expectTeams1PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.teams1Preview), value, timeoutMs);
  }

  async expectTeams1PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.teams1Preview), timeoutMs);
  }

  async expectTeams1PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.teams1Preview), count, timeoutMs);
  }

  async scrollTeams1PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.teams1Preview));
  }

  async doubleClickTeams1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async longPressTeams1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async expectTeams1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.teams1), expected, timeoutMs);
  }

  async expectTeams1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.teams1), substring, timeoutMs);
  }

  async expectTeams1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.teams1), value, timeoutMs);
  }

  async expectTeams1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.teams1), count, timeoutMs);
  }

  async scrollTeams1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async clickResourceRequests10Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview));
  }

  async doubleClickResourceRequests10Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview));
  }

  async longPressResourceRequests10Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview));
  }

  async expectResourceRequests10PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), expected, timeoutMs);
  }

  async expectResourceRequests10PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), substring, timeoutMs);
  }

  async expectResourceRequests10PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), value, timeoutMs);
  }

  async expectResourceRequests10PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), timeoutMs);
  }

  async expectResourceRequests10PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview), count, timeoutMs);
  }

  async scrollResourceRequests10PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10Preview));
  }

  async doubleClickResourceRequests10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10));
  }

  async longPressResourceRequests10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10));
  }

  async expectResourceRequests10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.resourceRequests10), expected, timeoutMs);
  }

  async expectResourceRequests10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.resourceRequests10), substring, timeoutMs);
  }

  async expectResourceRequests10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.resourceRequests10), value, timeoutMs);
  }

  async expectResourceRequests10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.resourceRequests10), timeoutMs);
  }

  async expectResourceRequests10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.resourceRequests10), count, timeoutMs);
  }

  async scrollResourceRequests10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests10));
  }

  async clickAssignments2Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview));
  }

  async doubleClickAssignments2Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview));
  }

  async longPressAssignments2Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview));
  }

  async expectAssignments2PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.assignments2Preview), expected, timeoutMs);
  }

  async expectAssignments2PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.assignments2Preview), substring, timeoutMs);
  }

  async expectAssignments2PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.assignments2Preview), value, timeoutMs);
  }

  async expectAssignments2PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.assignments2Preview), timeoutMs);
  }

  async expectAssignments2PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.assignments2Preview), count, timeoutMs);
  }

  async scrollAssignments2PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2Preview));
  }

  async doubleClickAssignments2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2));
  }

  async longPressAssignments2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2));
  }

  async expectAssignments2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.assignments2), expected, timeoutMs);
  }

  async expectAssignments2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.assignments2), substring, timeoutMs);
  }

  async expectAssignments2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.assignments2), value, timeoutMs);
  }

  async expectAssignments2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.assignments2), timeoutMs);
  }

  async expectAssignments2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.assignments2), count, timeoutMs);
  }

  async scrollAssignments2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.assignments2));
  }

  async clickBudgetAllocations0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview));
  }

  async doubleClickBudgetAllocations0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview));
  }

  async longPressBudgetAllocations0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview));
  }

  async expectBudgetAllocations0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), expected, timeoutMs);
  }

  async expectBudgetAllocations0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), substring, timeoutMs);
  }

  async expectBudgetAllocations0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), value, timeoutMs);
  }

  async expectBudgetAllocations0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), timeoutMs);
  }

  async expectBudgetAllocations0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview), count, timeoutMs);
  }

  async scrollBudgetAllocations0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0Preview));
  }

  async doubleClickBudgetAllocations0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0));
  }

  async longPressBudgetAllocations0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0));
  }

  async expectBudgetAllocations0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetAllocations0), expected, timeoutMs);
  }

  async expectBudgetAllocations0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetAllocations0), substring, timeoutMs);
  }

  async expectBudgetAllocations0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetAllocations0), value, timeoutMs);
  }

  async expectBudgetAllocations0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetAllocations0), timeoutMs);
  }

  async expectBudgetAllocations0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetAllocations0), count, timeoutMs);
  }

  async scrollBudgetAllocations0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations0));
  }

  async clickTimecards0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview));
  }

  async doubleClickTimecards0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview));
  }

  async longPressTimecards0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview));
  }

  async expectTimecards0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecards0Preview), expected, timeoutMs);
  }

  async expectTimecards0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecards0Preview), substring, timeoutMs);
  }

  async expectTimecards0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecards0Preview), value, timeoutMs);
  }

  async expectTimecards0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecards0Preview), timeoutMs);
  }

  async expectTimecards0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecards0Preview), count, timeoutMs);
  }

  async scrollTimecards0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0Preview));
  }

  async doubleClickTimecards0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async longPressTimecards0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async expectTimecards0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecards0), expected, timeoutMs);
  }

  async expectTimecards0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecards0), substring, timeoutMs);
  }

  async expectTimecards0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecards0), value, timeoutMs);
  }

  async expectTimecards0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecards0), count, timeoutMs);
  }

  async scrollTimecards0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async clickTimecardSplits0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview));
  }

  async doubleClickTimecardSplits0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview));
  }

  async longPressTimecardSplits0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview));
  }

  async expectTimecardSplits0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), expected, timeoutMs);
  }

  async expectTimecardSplits0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), substring, timeoutMs);
  }

  async expectTimecardSplits0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), value, timeoutMs);
  }

  async expectTimecardSplits0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), timeoutMs);
  }

  async expectTimecardSplits0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview), count, timeoutMs);
  }

  async scrollTimecardSplits0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0Preview));
  }

  async doubleClickTimecardSplits0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async longPressTimecardSplits0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async expectTimecardSplits0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecardSplits0), expected, timeoutMs);
  }

  async expectTimecardSplits0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecardSplits0), substring, timeoutMs);
  }

  async expectTimecardSplits0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecardSplits0), value, timeoutMs);
  }

  async expectTimecardSplits0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecardSplits0), count, timeoutMs);
  }

  async scrollTimecardSplits0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async clickExpenseReports0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview));
  }

  async doubleClickExpenseReports0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview));
  }

  async longPressExpenseReports0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview));
  }

  async expectExpenseReports0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), expected, timeoutMs);
  }

  async expectExpenseReports0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), substring, timeoutMs);
  }

  async expectExpenseReports0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), value, timeoutMs);
  }

  async expectExpenseReports0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), timeoutMs);
  }

  async expectExpenseReports0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseReports0Preview), count, timeoutMs);
  }

  async scrollExpenseReports0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0Preview));
  }

  async doubleClickExpenseReports0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async longPressExpenseReports0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async expectExpenseReports0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseReports0), expected, timeoutMs);
  }

  async expectExpenseReports0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseReports0), substring, timeoutMs);
  }

  async expectExpenseReports0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseReports0), value, timeoutMs);
  }

  async expectExpenseReports0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseReports0), count, timeoutMs);
  }

  async scrollExpenseReports0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async clickExpenses0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview));
  }

  async doubleClickExpenses0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview));
  }

  async longPressExpenses0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview));
  }

  async expectExpenses0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenses0Preview), expected, timeoutMs);
  }

  async expectExpenses0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenses0Preview), substring, timeoutMs);
  }

  async expectExpenses0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenses0Preview), value, timeoutMs);
  }

  async expectExpenses0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenses0Preview), timeoutMs);
  }

  async expectExpenses0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenses0Preview), count, timeoutMs);
  }

  async scrollExpenses0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0Preview));
  }

  async doubleClickExpenses0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async longPressExpenses0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async expectExpenses0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenses0), expected, timeoutMs);
  }

  async expectExpenses0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenses0), substring, timeoutMs);
  }

  async expectExpenses0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenses0), value, timeoutMs);
  }

  async expectExpenses0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenses0), count, timeoutMs);
  }

  async scrollExpenses0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async clickMilestones7Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview));
  }

  async doubleClickMilestones7Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview));
  }

  async longPressMilestones7Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview));
  }

  async expectMilestones7PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.milestones7Preview), expected, timeoutMs);
  }

  async expectMilestones7PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.milestones7Preview), substring, timeoutMs);
  }

  async expectMilestones7PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.milestones7Preview), value, timeoutMs);
  }

  async expectMilestones7PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.milestones7Preview), timeoutMs);
  }

  async expectMilestones7PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.milestones7Preview), count, timeoutMs);
  }

  async scrollMilestones7PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7Preview));
  }

  async doubleClickMilestones7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7));
  }

  async longPressMilestones7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7));
  }

  async expectMilestones7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.milestones7), expected, timeoutMs);
  }

  async expectMilestones7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.milestones7), substring, timeoutMs);
  }

  async expectMilestones7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.milestones7), value, timeoutMs);
  }

  async expectMilestones7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.milestones7), timeoutMs);
  }

  async expectMilestones7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.milestones7), count, timeoutMs);
  }

  async scrollMilestones7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.milestones7));
  }

  async clickBudgets1Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview));
  }

  async doubleClickBudgets1Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview));
  }

  async longPressBudgets1Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview));
  }

  async expectBudgets1PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgets1Preview), expected, timeoutMs);
  }

  async expectBudgets1PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgets1Preview), substring, timeoutMs);
  }

  async expectBudgets1PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgets1Preview), value, timeoutMs);
  }

  async expectBudgets1PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgets1Preview), timeoutMs);
  }

  async expectBudgets1PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgets1Preview), count, timeoutMs);
  }

  async scrollBudgets1PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1Preview));
  }

  async doubleClickBudgets1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async longPressBudgets1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async expectBudgets1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgets1), expected, timeoutMs);
  }

  async expectBudgets1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgets1), substring, timeoutMs);
  }

  async expectBudgets1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgets1), value, timeoutMs);
  }

  async expectBudgets1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgets1), count, timeoutMs);
  }

  async scrollBudgets1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async clickMiscellaneousAdjustments0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview));
  }

  async doubleClickMiscellaneousAdjustments0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview));
  }

  async longPressMiscellaneousAdjustments0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview));
  }

  async expectMiscellaneousAdjustments0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), expected, timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), substring, timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), value, timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), timeoutMs);
  }

  async expectMiscellaneousAdjustments0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview), count, timeoutMs);
  }

  async scrollMiscellaneousAdjustments0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0Preview));
  }

  async doubleClickMiscellaneousAdjustments0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async longPressMiscellaneousAdjustments0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async expectMiscellaneousAdjustments0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), expected, timeoutMs);
  }

  async expectMiscellaneousAdjustments0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), substring, timeoutMs);
  }

  async expectMiscellaneousAdjustments0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), value, timeoutMs);
  }

  async expectMiscellaneousAdjustments0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), count, timeoutMs);
  }

  async scrollMiscellaneousAdjustments0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async doubleClickShowAll35(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async longPressShowAll35(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async expectShowAll35Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showAll35), expected, timeoutMs);
  }

  async expectShowAll35ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showAll35), substring, timeoutMs);
  }

  async expectShowAll35Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showAll35), value, timeoutMs);
  }

  async expectShowAll35Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showAll35), count, timeoutMs);
  }

  async scrollShowAll35IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async clickPath(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.path));
  }

  async doubleClickPath(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.path));
  }

  async longPressPath(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.path));
  }

  async expectPathHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.path), expected, timeoutMs);
  }

  async expectPathContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.path), substring, timeoutMs);
  }

  async expectPathValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.path), value, timeoutMs);
  }

  async expectPathEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.path), timeoutMs);
  }

  async expectPathCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.path), count, timeoutMs);
  }

  async scrollPathIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.path));
  }

  async longPressShowKeyFieldsAndOr(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr));
  }

  async expectShowKeyFieldsAndOrHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), expected, timeoutMs);
  }

  async expectShowKeyFieldsAndOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), substring, timeoutMs);
  }

  async expectShowKeyFieldsAndOrValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), value, timeoutMs);
  }

  async expectShowKeyFieldsAndOrEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), timeoutMs);
  }

  async expectShowKeyFieldsAndOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr), count, timeoutMs);
  }

  async scrollShowKeyFieldsAndOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showKeyFieldsAndOr));
  }

  async doubleClickStageCompletePlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompletePlanned));
  }

  async longPressStageCompletePlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), expected, timeoutMs);
  }

  async expectStageCompletePlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), substring, timeoutMs);
  }

  async expectStageCompletePlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), value, timeoutMs);
  }

  async expectStageCompletePlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.stageCompletePlanned), count, timeoutMs);
  }

  async scrollStageCompletePlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompletePlanned));
  }

  async doubleClickPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async longPressPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async expectPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.planned), expected, timeoutMs);
  }

  async expectPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.planned), substring, timeoutMs);
  }

  async expectPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.planned), value, timeoutMs);
  }

  async expectPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.planned), count, timeoutMs);
  }

  async scrollPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async doubleClickStageCompleteReadyTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo));
  }

  async longPressStageCompleteReadyTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo));
  }

  async expectStageCompleteReadyToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), expected, timeoutMs);
  }

  async expectStageCompleteReadyToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), substring, timeoutMs);
  }

  async expectStageCompleteReadyToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), value, timeoutMs);
  }

  async expectStageCompleteReadyToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), timeoutMs);
  }

  async expectStageCompleteReadyToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo), count, timeoutMs);
  }

  async scrollStageCompleteReadyToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteReadyTo));
  }

  async doubleClickReadyToStaff(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async longPressReadyToStaff(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async expectReadyToStaffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.readyToStaff), expected, timeoutMs);
  }

  async expectReadyToStaffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.readyToStaff), substring, timeoutMs);
  }

  async expectReadyToStaffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.readyToStaff), value, timeoutMs);
  }

  async expectReadyToStaffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.readyToStaff), count, timeoutMs);
  }

  async scrollReadyToStaffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async doubleClickStageCompleteInProgress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress));
  }

  async longPressStageCompleteInProgress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), expected, timeoutMs);
  }

  async expectStageCompleteInProgressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), substring, timeoutMs);
  }

  async expectStageCompleteInProgressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), value, timeoutMs);
  }

  async expectStageCompleteInProgressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress), count, timeoutMs);
  }

  async scrollStageCompleteInProgressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.stageCompleteInProgress));
  }

  async doubleClickInProgress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async longPressInProgress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async expectInProgressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.inProgress), expected, timeoutMs);
  }

  async expectInProgressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.inProgress), substring, timeoutMs);
  }

  async expectInProgressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.inProgress), value, timeoutMs);
  }

  async expectInProgressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.inProgress), count, timeoutMs);
  }

  async scrollInProgressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async doubleClickOnHoldOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldOption));
  }

  async longPressOnHoldOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldOption));
  }

  async expectOnHoldOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.onHoldOption), expected, timeoutMs);
  }

  async expectOnHoldOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.onHoldOption), substring, timeoutMs);
  }

  async expectOnHoldOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.onHoldOption), value, timeoutMs);
  }

  async expectOnHoldOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.onHoldOption), timeoutMs);
  }

  async expectOnHoldOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.onHoldOption), count, timeoutMs);
  }

  async scrollOnHoldOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldOption));
  }

  async doubleClickCompletedOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.completedOption));
  }

  async longPressCompletedOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.completedOption));
  }

  async expectCompletedOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.completedOption), expected, timeoutMs);
  }

  async expectCompletedOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.completedOption), substring, timeoutMs);
  }

  async expectCompletedOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.completedOption), value, timeoutMs);
  }

  async expectCompletedOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.completedOption), timeoutMs);
  }

  async expectCompletedOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.completedOption), count, timeoutMs);
  }

  async scrollCompletedOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.completedOption));
  }

  async doubleClickCanceledOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.canceledOption));
  }

  async longPressCanceledOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.canceledOption));
  }

  async expectCanceledOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.canceledOption), expected, timeoutMs);
  }

  async expectCanceledOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.canceledOption), substring, timeoutMs);
  }

  async expectCanceledOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.canceledOption), value, timeoutMs);
  }

  async expectCanceledOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.canceledOption), timeoutMs);
  }

  async expectCanceledOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.canceledOption), count, timeoutMs);
  }

  async scrollCanceledOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.canceledOption));
  }

  async longPressMarkStageAsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async expectMarkStageAsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.markStageAsComplete), expected, timeoutMs);
  }

  async expectMarkStageAsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.markStageAsComplete), substring, timeoutMs);
  }

  async expectMarkStageAsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.markStageAsComplete), value, timeoutMs);
  }

  async expectMarkStageAsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.markStageAsComplete), count, timeoutMs);
  }

  async scrollMarkStageAsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async clickTabsetHeading3194(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194));
  }

  async doubleClickTabsetHeading3194(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194));
  }

  async longPressTabsetHeading3194(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194));
  }

  async expectTabsetHeading3194Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), expected, timeoutMs);
  }

  async expectTabsetHeading3194ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), substring, timeoutMs);
  }

  async expectTabsetHeading3194Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), value, timeoutMs);
  }

  async expectTabsetHeading3194Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), timeoutMs);
  }

  async expectTabsetHeading3194Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.tabsetHeading3194), count, timeoutMs);
  }

  async scrollTabsetHeading3194IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.tabsetHeading3194));
  }

  async doubleClickOverviewTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async longPressOverviewTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async expectOverviewTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.overviewTab), expected, timeoutMs);
  }

  async expectOverviewTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.overviewTab), substring, timeoutMs);
  }

  async expectOverviewTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.overviewTab), value, timeoutMs);
  }

  async expectOverviewTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.overviewTab), count, timeoutMs);
  }

  async scrollOverviewTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async doubleClickProjectPlanTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async longPressProjectPlanTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async expectProjectPlanTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPlanTab), expected, timeoutMs);
  }

  async expectProjectPlanTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPlanTab), substring, timeoutMs);
  }

  async expectProjectPlanTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPlanTab), value, timeoutMs);
  }

  async expectProjectPlanTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPlanTab), count, timeoutMs);
  }

  async scrollProjectPlanTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async doubleClickGanttTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async longPressGanttTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async expectGanttTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.ganttTab), expected, timeoutMs);
  }

  async expectGanttTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.ganttTab), substring, timeoutMs);
  }

  async expectGanttTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.ganttTab), value, timeoutMs);
  }

  async expectGanttTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.ganttTab), count, timeoutMs);
  }

  async scrollGanttTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async doubleClickResourcePlanTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async longPressResourcePlanTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async expectResourcePlanTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.resourcePlanTab), expected, timeoutMs);
  }

  async expectResourcePlanTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.resourcePlanTab), substring, timeoutMs);
  }

  async expectResourcePlanTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.resourcePlanTab), value, timeoutMs);
  }

  async expectResourcePlanTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.resourcePlanTab), count, timeoutMs);
  }

  async scrollResourcePlanTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async doubleClickFinancialsTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async longPressFinancialsTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async expectFinancialsTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.financialsTab), expected, timeoutMs);
  }

  async expectFinancialsTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.financialsTab), substring, timeoutMs);
  }

  async expectFinancialsTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.financialsTab), value, timeoutMs);
  }

  async expectFinancialsTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.financialsTab), count, timeoutMs);
  }

  async scrollFinancialsTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async doubleClickRaidTrackerTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async longPressRaidTrackerTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async expectRaidTrackerTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.raidTrackerTab), expected, timeoutMs);
  }

  async expectRaidTrackerTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.raidTrackerTab), substring, timeoutMs);
  }

  async expectRaidTrackerTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.raidTrackerTab), value, timeoutMs);
  }

  async expectRaidTrackerTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.raidTrackerTab), count, timeoutMs);
  }

  async scrollRaidTrackerTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async doubleClickMoreTabs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabs));
  }

  async longPressMoreTabs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabs));
  }

  async expectMoreTabsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.moreTabs), expected, timeoutMs);
  }

  async expectMoreTabsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.moreTabs), substring, timeoutMs);
  }

  async expectMoreTabsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.moreTabs), value, timeoutMs);
  }

  async expectMoreTabsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.moreTabs), timeoutMs);
  }

  async expectMoreTabsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.moreTabs), count, timeoutMs);
  }

  async scrollMoreTabsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabs));
  }

  async longPressMoreTabsButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async expectMoreTabsButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.moreTabsButton), expected, timeoutMs);
  }

  async expectMoreTabsButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.moreTabsButton), substring, timeoutMs);
  }

  async expectMoreTabsButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.moreTabsButton), value, timeoutMs);
  }

  async expectMoreTabsButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.moreTabsButton), count, timeoutMs);
  }

  async scrollMoreTabsButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async clickOnHoldStage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldStage));
  }

  async doubleClickOnHoldStage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldStage));
  }

  async longPressOnHoldStage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldStage));
  }

  async expectOnHoldStageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.onHoldStage), expected, timeoutMs);
  }

  async expectOnHoldStageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.onHoldStage), substring, timeoutMs);
  }

  async expectOnHoldStageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.onHoldStage), value, timeoutMs);
  }

  async expectOnHoldStageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.onHoldStage), timeoutMs);
  }

  async expectOnHoldStageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.onHoldStage), count, timeoutMs);
  }

  async scrollOnHoldStageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.onHoldStage));
  }

  async clickMonthsAgoNo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo));
  }

  async doubleClickMonthsAgoNo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo));
  }

  async longPressMonthsAgoNo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo));
  }

  async expectMonthsAgoNoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.monthsAgoNo), expected, timeoutMs);
  }

  async expectMonthsAgoNoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.monthsAgoNo), substring, timeoutMs);
  }

  async expectMonthsAgoNoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.monthsAgoNo), value, timeoutMs);
  }

  async expectMonthsAgoNoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.monthsAgoNo), timeoutMs);
  }

  async expectMonthsAgoNoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.monthsAgoNo), count, timeoutMs);
  }

  async scrollMonthsAgoNoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.monthsAgoNo));
  }

  async clickBadgeDateDescription3332(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332));
  }

  async doubleClickBadgeDateDescription3332(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332));
  }

  async longPressBadgeDateDescription3332(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332));
  }

  async expectBadgeDateDescription3332Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), expected, timeoutMs);
  }

  async expectBadgeDateDescription3332ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), substring, timeoutMs);
  }

  async expectBadgeDateDescription3332Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), value, timeoutMs);
  }

  async expectBadgeDateDescription3332Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), timeoutMs);
  }

  async expectBadgeDateDescription3332Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332), count, timeoutMs);
  }

  async scrollBadgeDateDescription3332IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.badgeDateDescription3332));
  }

  async clickHlAssistiveText3330(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330));
  }

  async doubleClickHlAssistiveText3330(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330));
  }

  async longPressHlAssistiveText3330(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330));
  }

  async expectHlAssistiveText3330Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), expected, timeoutMs);
  }

  async expectHlAssistiveText3330ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), substring, timeoutMs);
  }

  async expectHlAssistiveText3330Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), value, timeoutMs);
  }

  async expectHlAssistiveText3330Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), timeoutMs);
  }

  async expectHlAssistiveText3330Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330), count, timeoutMs);
  }

  async scrollHlAssistiveText3330IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3330));
  }

  async clickIn3MonthsNo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo));
  }

  async doubleClickIn3MonthsNo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo));
  }

  async longPressIn3MonthsNo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo));
  }

  async expectIn3MonthsNoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.in3MonthsNo), expected, timeoutMs);
  }

  async expectIn3MonthsNoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.in3MonthsNo), substring, timeoutMs);
  }

  async expectIn3MonthsNoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.in3MonthsNo), value, timeoutMs);
  }

  async expectIn3MonthsNoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.in3MonthsNo), timeoutMs);
  }

  async expectIn3MonthsNoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.in3MonthsNo), count, timeoutMs);
  }

  async scrollIn3MonthsNoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.in3MonthsNo));
  }

  async clickAud147200Eur827503(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503));
  }

  async doubleClickAud147200Eur827503(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503));
  }

  async longPressAud147200Eur827503(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503));
  }

  async expectAud147200Eur827503Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), expected, timeoutMs);
  }

  async expectAud147200Eur827503ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), substring, timeoutMs);
  }

  async expectAud147200Eur827503Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), value, timeoutMs);
  }

  async expectAud147200Eur827503Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), timeoutMs);
  }

  async expectAud147200Eur827503Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud147200Eur827503), count, timeoutMs);
  }

  async scrollAud147200Eur827503IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827503));
  }

  async clickHlAssistiveText3348(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348));
  }

  async doubleClickHlAssistiveText3348(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348));
  }

  async longPressHlAssistiveText3348(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348));
  }

  async expectHlAssistiveText3348Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), expected, timeoutMs);
  }

  async expectHlAssistiveText3348ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), substring, timeoutMs);
  }

  async expectHlAssistiveText3348Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), value, timeoutMs);
  }

  async expectHlAssistiveText3348Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), timeoutMs);
  }

  async expectHlAssistiveText3348Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348), count, timeoutMs);
  }

  async scrollHlAssistiveText3348IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.hlAssistiveText3348));
  }

  async clickAud147200Eur827504(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504));
  }

  async doubleClickAud147200Eur827504(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504));
  }

  async longPressAud147200Eur827504(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504));
  }

  async expectAud147200Eur827504Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), expected, timeoutMs);
  }

  async expectAud147200Eur827504ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), substring, timeoutMs);
  }

  async expectAud147200Eur827504Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), value, timeoutMs);
  }

  async expectAud147200Eur827504Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), timeoutMs);
  }

  async expectAud147200Eur827504Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud147200Eur827504), count, timeoutMs);
  }

  async scrollAud147200Eur827504IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827504));
  }

  async clickAud000Eur000(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000));
  }

  async doubleClickAud000Eur000(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000));
  }

  async longPressAud000Eur000(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000));
  }

  async expectAud000Eur000Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud000Eur000), expected, timeoutMs);
  }

  async expectAud000Eur000ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud000Eur000), substring, timeoutMs);
  }

  async expectAud000Eur000Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud000Eur000), value, timeoutMs);
  }

  async expectAud000Eur000Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud000Eur000), timeoutMs);
  }

  async expectAud000Eur000Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud000Eur000), count, timeoutMs);
  }

  async scrollAud000Eur000IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur000));
  }

  async clickAud147200Eur827505(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505));
  }

  async doubleClickAud147200Eur827505(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505));
  }

  async longPressAud147200Eur827505(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505));
  }

  async expectAud147200Eur827505Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), expected, timeoutMs);
  }

  async expectAud147200Eur827505ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), substring, timeoutMs);
  }

  async expectAud147200Eur827505Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), value, timeoutMs);
  }

  async expectAud147200Eur827505Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), timeoutMs);
  }

  async expectAud147200Eur827505Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud147200Eur827505), count, timeoutMs);
  }

  async scrollAud147200Eur827505IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud147200Eur827505));
  }

  async clickFixedPriceBillingType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType));
  }

  async doubleClickFixedPriceBillingType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType));
  }

  async longPressFixedPriceBillingType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType));
  }

  async expectFixedPriceBillingTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), expected, timeoutMs);
  }

  async expectFixedPriceBillingTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), substring, timeoutMs);
  }

  async expectFixedPriceBillingTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), value, timeoutMs);
  }

  async expectFixedPriceBillingTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), timeoutMs);
  }

  async expectFixedPriceBillingTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType), count, timeoutMs);
  }

  async scrollFixedPriceBillingTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.fixedPriceBillingType));
  }

  async clickAud000Eur0002(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002));
  }

  async doubleClickAud000Eur0002(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002));
  }

  async longPressAud000Eur0002(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002));
  }

  async expectAud000Eur0002Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.aud000Eur0002), expected, timeoutMs);
  }

  async expectAud000Eur0002ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.aud000Eur0002), substring, timeoutMs);
  }

  async expectAud000Eur0002Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.aud000Eur0002), value, timeoutMs);
  }

  async expectAud000Eur0002Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.aud000Eur0002), timeoutMs);
  }

  async expectAud000Eur0002Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.aud000Eur0002), count, timeoutMs);
  }

  async scrollAud000Eur0002IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.aud000Eur0002));
  }

  async clickPlannedHoursTheThreshold(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold));
  }

  async doubleClickPlannedHoursTheThreshold(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold));
  }

  async longPressPlannedHoursTheThreshold(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold));
  }

  async expectPlannedHoursTheThresholdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), expected, timeoutMs);
  }

  async expectPlannedHoursTheThresholdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), substring, timeoutMs);
  }

  async expectPlannedHoursTheThresholdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), value, timeoutMs);
  }

  async expectPlannedHoursTheThresholdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), timeoutMs);
  }

  async expectPlannedHoursTheThresholdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold), count, timeoutMs);
  }

  async scrollPlannedHoursTheThresholdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.plannedHoursTheThreshold));
  }

  async clickNonBillableHoursExternal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal));
  }

  async doubleClickNonBillableHoursExternal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal));
  }

  async longPressNonBillableHoursExternal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal));
  }

  async expectNonBillableHoursExternalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), expected, timeoutMs);
  }

  async expectNonBillableHoursExternalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), substring, timeoutMs);
  }

  async expectNonBillableHoursExternalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), value, timeoutMs);
  }

  async expectNonBillableHoursExternalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), timeoutMs);
  }

  async expectNonBillableHoursExternalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal), count, timeoutMs);
  }

  async scrollNonBillableHoursExternalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.nonBillableHoursExternal));
  }

  async longPressProjectOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectOverview));
  }

  async expectProjectOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectOverview), expected, timeoutMs);
  }

  async expectProjectOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectOverview), substring, timeoutMs);
  }

  async expectProjectOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectOverview), value, timeoutMs);
  }

  async expectProjectOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectOverview), timeoutMs);
  }

  async expectProjectOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectOverview), count, timeoutMs);
  }

  async scrollProjectOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectOverview));
  }

  async clickProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectName));
  }

  async doubleClickProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectName));
  }

  async longPressProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectName));
  }

  async expectProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectName), expected, timeoutMs);
  }

  async expectProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectName), substring, timeoutMs);
  }

  async expectProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectName), value, timeoutMs);
  }

  async expectProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectName), timeoutMs);
  }

  async expectProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectName), count, timeoutMs);
  }

  async scrollProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectName));
  }

  async longPressEditProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectName));
  }

  async expectEditProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editProjectName), expected, timeoutMs);
  }

  async expectEditProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editProjectName), substring, timeoutMs);
  }

  async expectEditProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editProjectName), value, timeoutMs);
  }

  async expectEditProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editProjectName), timeoutMs);
  }

  async expectEditProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editProjectName), count, timeoutMs);
  }

  async scrollEditProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectName));
  }

  async clickStage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.stage));
  }

  async doubleClickStage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.stage));
  }

  async longPressStage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.stage));
  }

  async expectStageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.stage), expected, timeoutMs);
  }

  async expectStageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.stage), substring, timeoutMs);
  }

  async expectStageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.stage), value, timeoutMs);
  }

  async expectStageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.stage), timeoutMs);
  }

  async expectStageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.stage), count, timeoutMs);
  }

  async scrollStageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.stage));
  }

  async longPressEditStage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editStage));
  }

  async expectEditStageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editStage), expected, timeoutMs);
  }

  async expectEditStageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editStage), substring, timeoutMs);
  }

  async expectEditStageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editStage), value, timeoutMs);
  }

  async expectEditStageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editStage), timeoutMs);
  }

  async expectEditStageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editStage), count, timeoutMs);
  }

  async scrollEditStageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editStage));
  }

  async clickPracticeManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.practiceManager));
  }

  async doubleClickPracticeManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.practiceManager));
  }

  async longPressPracticeManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.practiceManager));
  }

  async expectPracticeManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.practiceManager), expected, timeoutMs);
  }

  async expectPracticeManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.practiceManager), substring, timeoutMs);
  }

  async expectPracticeManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.practiceManager), value, timeoutMs);
  }

  async expectPracticeManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.practiceManager), timeoutMs);
  }

  async expectPracticeManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.practiceManager), count, timeoutMs);
  }

  async scrollPracticeManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.practiceManager));
  }

  async longPressEditPracticeManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeManager));
  }

  async expectEditPracticeManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editPracticeManager), expected, timeoutMs);
  }

  async expectEditPracticeManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editPracticeManager), substring, timeoutMs);
  }

  async expectEditPracticeManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editPracticeManager), value, timeoutMs);
  }

  async expectEditPracticeManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editPracticeManager), timeoutMs);
  }

  async expectEditPracticeManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editPracticeManager), count, timeoutMs);
  }

  async scrollEditPracticeManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeManager));
  }

  async doubleClickPaulDeBono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.paulDeBono));
  }

  async longPressPaulDeBono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.paulDeBono));
  }

  async expectPaulDeBonoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.paulDeBono), expected, timeoutMs);
  }

  async expectPaulDeBonoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.paulDeBono), substring, timeoutMs);
  }

  async expectPaulDeBonoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.paulDeBono), value, timeoutMs);
  }

  async expectPaulDeBonoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.paulDeBono), timeoutMs);
  }

  async expectPaulDeBonoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.paulDeBono), count, timeoutMs);
  }

  async scrollPaulDeBonoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.paulDeBono));
  }

  async clickPracticeDirector(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.practiceDirector));
  }

  async doubleClickPracticeDirector(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.practiceDirector));
  }

  async longPressPracticeDirector(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.practiceDirector));
  }

  async expectPracticeDirectorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.practiceDirector), expected, timeoutMs);
  }

  async expectPracticeDirectorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.practiceDirector), substring, timeoutMs);
  }

  async expectPracticeDirectorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.practiceDirector), value, timeoutMs);
  }

  async expectPracticeDirectorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.practiceDirector), timeoutMs);
  }

  async expectPracticeDirectorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.practiceDirector), count, timeoutMs);
  }

  async scrollPracticeDirectorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.practiceDirector));
  }

  async longPressEditPracticeDirector(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeDirector));
  }

  async expectEditPracticeDirectorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editPracticeDirector), expected, timeoutMs);
  }

  async expectEditPracticeDirectorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editPracticeDirector), substring, timeoutMs);
  }

  async expectEditPracticeDirectorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editPracticeDirector), value, timeoutMs);
  }

  async expectEditPracticeDirectorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editPracticeDirector), timeoutMs);
  }

  async expectEditPracticeDirectorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editPracticeDirector), count, timeoutMs);
  }

  async scrollEditPracticeDirectorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editPracticeDirector));
  }

  async doubleClickMichaelKoller(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.michaelKoller));
  }

  async longPressMichaelKoller(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.michaelKoller));
  }

  async expectMichaelKollerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.michaelKoller), expected, timeoutMs);
  }

  async expectMichaelKollerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.michaelKoller), substring, timeoutMs);
  }

  async expectMichaelKollerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.michaelKoller), value, timeoutMs);
  }

  async expectMichaelKollerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.michaelKoller), timeoutMs);
  }

  async expectMichaelKollerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.michaelKoller), count, timeoutMs);
  }

  async scrollMichaelKollerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.michaelKoller));
  }

  async clickBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billable));
  }

  async doubleClickBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billable));
  }

  async longPressBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billable));
  }

  async expectBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billable), expected, timeoutMs);
  }

  async expectBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billable), substring, timeoutMs);
  }

  async expectBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billable), value, timeoutMs);
  }

  async expectBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billable), timeoutMs);
  }

  async expectBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billable), count, timeoutMs);
  }

  async scrollBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billable));
  }

  async longPressHelpBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.helpBillable));
  }

  async expectHelpBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.helpBillable), expected, timeoutMs);
  }

  async expectHelpBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.helpBillable), substring, timeoutMs);
  }

  async expectHelpBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.helpBillable), value, timeoutMs);
  }

  async expectHelpBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.helpBillable), timeoutMs);
  }

  async expectHelpBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.helpBillable), count, timeoutMs);
  }

  async scrollHelpBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.helpBillable));
  }

  async longPressEditBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editBillable));
  }

  async expectEditBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editBillable), expected, timeoutMs);
  }

  async expectEditBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editBillable), substring, timeoutMs);
  }

  async expectEditBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editBillable), value, timeoutMs);
  }

  async expectEditBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editBillable), timeoutMs);
  }

  async expectEditBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editBillable), count, timeoutMs);
  }

  async scrollEditBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editBillable));
  }

  async longPressEditProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectManager));
  }

  async expectEditProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editProjectManager), expected, timeoutMs);
  }

  async expectEditProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editProjectManager), substring, timeoutMs);
  }

  async expectEditProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editProjectManager), value, timeoutMs);
  }

  async expectEditProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editProjectManager), timeoutMs);
  }

  async expectEditProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editProjectManager), count, timeoutMs);
  }

  async scrollEditProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editProjectManager));
  }

  async clickPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.practice));
  }

  async doubleClickPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.practice));
  }

  async longPressPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.practice));
  }

  async expectPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.practice), expected, timeoutMs);
  }

  async expectPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.practice), substring, timeoutMs);
  }

  async expectPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.practice), value, timeoutMs);
  }

  async expectPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.practice), timeoutMs);
  }

  async expectPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.practice), count, timeoutMs);
  }

  async scrollPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.practice));
  }

  async longPressEditPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editPractice));
  }

  async expectEditPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editPractice), expected, timeoutMs);
  }

  async expectEditPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editPractice), substring, timeoutMs);
  }

  async expectEditPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editPractice), value, timeoutMs);
  }

  async expectEditPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editPractice), timeoutMs);
  }

  async expectEditPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editPractice), count, timeoutMs);
  }

  async scrollEditPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editPractice));
  }

  async doubleClickReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.ready));
  }

  async longPressReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.ready));
  }

  async expectReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.ready), expected, timeoutMs);
  }

  async expectReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.ready), substring, timeoutMs);
  }

  async expectReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.ready), value, timeoutMs);
  }

  async expectReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.ready), timeoutMs);
  }

  async expectReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.ready), count, timeoutMs);
  }

  async scrollReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.ready));
  }

  async clickRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.region));
  }

  async doubleClickRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.region));
  }

  async longPressRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.region));
  }

  async expectRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.region), expected, timeoutMs);
  }

  async expectRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.region), substring, timeoutMs);
  }

  async expectRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.region), value, timeoutMs);
  }

  async expectRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.region), timeoutMs);
  }

  async expectRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.region), count, timeoutMs);
  }

  async scrollRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.region));
  }

  async longPressEditRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editRegion));
  }

  async expectEditRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editRegion), expected, timeoutMs);
  }

  async expectEditRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editRegion), substring, timeoutMs);
  }

  async expectEditRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editRegion), value, timeoutMs);
  }

  async expectEditRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editRegion), timeoutMs);
  }

  async expectEditRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editRegion), count, timeoutMs);
  }

  async scrollEditRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editRegion));
  }

  async doubleClickApac(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.apac));
  }

  async longPressApac(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.apac));
  }

  async expectApacHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.apac), expected, timeoutMs);
  }

  async expectApacContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.apac), substring, timeoutMs);
  }

  async expectApacValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.apac), value, timeoutMs);
  }

  async expectApacEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.apac), timeoutMs);
  }

  async expectApacCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.apac), count, timeoutMs);
  }

  async scrollApacIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.apac));
  }

  async clickTimeZone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timeZone));
  }

  async doubleClickTimeZone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timeZone));
  }

  async longPressTimeZone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timeZone));
  }

  async expectTimeZoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timeZone), expected, timeoutMs);
  }

  async expectTimeZoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timeZone), substring, timeoutMs);
  }

  async expectTimeZoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timeZone), value, timeoutMs);
  }

  async expectTimeZoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timeZone), timeoutMs);
  }

  async expectTimeZoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timeZone), count, timeoutMs);
  }

  async scrollTimeZoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timeZone));
  }

  async longPressHelpTimeZone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.helpTimeZone));
  }

  async expectHelpTimeZoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.helpTimeZone), expected, timeoutMs);
  }

  async expectHelpTimeZoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.helpTimeZone), substring, timeoutMs);
  }

  async expectHelpTimeZoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.helpTimeZone), value, timeoutMs);
  }

  async expectHelpTimeZoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.helpTimeZone), timeoutMs);
  }

  async expectHelpTimeZoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.helpTimeZone), count, timeoutMs);
  }

  async scrollHelpTimeZoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.helpTimeZone));
  }

  async longPressEditTimeZone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editTimeZone));
  }

  async expectEditTimeZoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editTimeZone), expected, timeoutMs);
  }

  async expectEditTimeZoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editTimeZone), substring, timeoutMs);
  }

  async expectEditTimeZoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editTimeZone), value, timeoutMs);
  }

  async expectEditTimeZoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editTimeZone), timeoutMs);
  }

  async expectEditTimeZoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editTimeZone), count, timeoutMs);
  }

  async scrollEditTimeZoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editTimeZone));
  }

  async clickDailyTimecardNotesRequired(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired));
  }

  async doubleClickDailyTimecardNotesRequired(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired));
  }

  async longPressDailyTimecardNotesRequired(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired));
  }

  async expectDailyTimecardNotesRequiredHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), expected, timeoutMs);
  }

  async expectDailyTimecardNotesRequiredContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), substring, timeoutMs);
  }

  async expectDailyTimecardNotesRequiredValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), value, timeoutMs);
  }

  async expectDailyTimecardNotesRequiredEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), timeoutMs);
  }

  async expectDailyTimecardNotesRequiredCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired), count, timeoutMs);
  }

  async scrollDailyTimecardNotesRequiredIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.dailyTimecardNotesRequired));
  }

  async longPressEditDailyTimecardNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes));
  }

  async expectEditDailyTimecardNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), expected, timeoutMs);
  }

  async expectEditDailyTimecardNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), substring, timeoutMs);
  }

  async expectEditDailyTimecardNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), value, timeoutMs);
  }

  async expectEditDailyTimecardNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), timeoutMs);
  }

  async expectEditDailyTimecardNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes), count, timeoutMs);
  }

  async scrollEditDailyTimecardNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.editDailyTimecardNotes));
  }

  async longPressEngagementDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.engagementDetails));
  }

  async expectEngagementDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.engagementDetails), expected, timeoutMs);
  }

  async expectEngagementDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.engagementDetails), substring, timeoutMs);
  }

  async expectEngagementDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.engagementDetails), value, timeoutMs);
  }

  async expectEngagementDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.engagementDetails), timeoutMs);
  }

  async expectEngagementDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.engagementDetails), count, timeoutMs);
  }

  async scrollEngagementDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.engagementDetails));
  }

  async longPressDatesScheduling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.datesScheduling));
  }

  async expectDatesSchedulingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.datesScheduling), expected, timeoutMs);
  }

  async expectDatesSchedulingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.datesScheduling), substring, timeoutMs);
  }

  async expectDatesSchedulingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.datesScheduling), value, timeoutMs);
  }

  async expectDatesSchedulingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.datesScheduling), timeoutMs);
  }

  async expectDatesSchedulingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.datesScheduling), count, timeoutMs);
  }

  async scrollDatesSchedulingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.datesScheduling));
  }

  async longPressFinancialSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.financialSummary));
  }

  async expectFinancialSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.financialSummary), expected, timeoutMs);
  }

  async expectFinancialSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.financialSummary), substring, timeoutMs);
  }

  async expectFinancialSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.financialSummary), value, timeoutMs);
  }

  async expectFinancialSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.financialSummary), timeoutMs);
  }

  async expectFinancialSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.financialSummary), count, timeoutMs);
  }

  async scrollFinancialSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.financialSummary));
  }

  async longPressProjectStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectStatus));
  }

  async expectProjectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectStatus), expected, timeoutMs);
  }

  async expectProjectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectStatus), substring, timeoutMs);
  }

  async expectProjectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectStatus), value, timeoutMs);
  }

  async expectProjectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectStatus), timeoutMs);
  }

  async expectProjectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectStatus), count, timeoutMs);
  }

  async scrollProjectStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectStatus));
  }

  async longPressSystemInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.systemInformation));
  }

  async expectSystemInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.systemInformation), expected, timeoutMs);
  }

  async expectSystemInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.systemInformation), substring, timeoutMs);
  }

  async expectSystemInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.systemInformation), value, timeoutMs);
  }

  async expectSystemInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.systemInformation), timeoutMs);
  }

  async expectSystemInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.systemInformation), count, timeoutMs);
  }

  async scrollSystemInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.systemInformation));
  }

  async longPressManageProjectPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.manageProjectPlans));
  }

  async expectManageProjectPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.manageProjectPlans), expected, timeoutMs);
  }

  async expectManageProjectPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.manageProjectPlans), substring, timeoutMs);
  }

  async expectManageProjectPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.manageProjectPlans), value, timeoutMs);
  }

  async expectManageProjectPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.manageProjectPlans), timeoutMs);
  }

  async expectManageProjectPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.manageProjectPlans), count, timeoutMs);
  }

  async scrollManageProjectPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.manageProjectPlans));
  }

  async doubleClickOpenGantt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.openGantt));
  }

  async longPressOpenGantt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.openGantt));
  }

  async expectOpenGanttHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.openGantt), expected, timeoutMs);
  }

  async expectOpenGanttContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.openGantt), substring, timeoutMs);
  }

  async expectOpenGanttValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.openGantt), value, timeoutMs);
  }

  async expectOpenGanttEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.openGantt), timeoutMs);
  }

  async expectOpenGanttCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.openGantt), count, timeoutMs);
  }

  async scrollOpenGanttIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.openGantt));
  }

  async doubleClickOpenProjectPlanner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.openProjectPlanner));
  }

  async longPressOpenProjectPlanner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.openProjectPlanner));
  }

  async expectOpenProjectPlannerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.openProjectPlanner), expected, timeoutMs);
  }

  async expectOpenProjectPlannerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.openProjectPlanner), substring, timeoutMs);
  }

  async expectOpenProjectPlannerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.openProjectPlanner), value, timeoutMs);
  }

  async expectOpenProjectPlannerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.openProjectPlanner), timeoutMs);
  }

  async expectOpenProjectPlannerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.openProjectPlanner), count, timeoutMs);
  }

  async scrollOpenProjectPlannerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.openProjectPlanner));
  }

  async longPressAddRecordsFromTemplate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate));
  }

  async expectAddRecordsFromTemplateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), expected, timeoutMs);
  }

  async expectAddRecordsFromTemplateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), substring, timeoutMs);
  }

  async expectAddRecordsFromTemplateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), value, timeoutMs);
  }

  async expectAddRecordsFromTemplateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), timeoutMs);
  }

  async expectAddRecordsFromTemplateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate), count, timeoutMs);
  }

  async scrollAddRecordsFromTemplateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.addRecordsFromTemplate));
  }

  async doubleClickCopyToProjectFrom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.copyToProjectFrom));
  }

  async longPressCopyToProjectFrom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.copyToProjectFrom));
  }

  async expectCopyToProjectFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), expected, timeoutMs);
  }

  async expectCopyToProjectFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), substring, timeoutMs);
  }

  async expectCopyToProjectFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), value, timeoutMs);
  }

  async expectCopyToProjectFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), timeoutMs);
  }

  async expectCopyToProjectFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.copyToProjectFrom), count, timeoutMs);
  }

  async scrollCopyToProjectFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.copyToProjectFrom));
  }

  async doubleClickCreateSubProjectFromTemplate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate));
  }

  async longPressCreateSubProjectFromTemplate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate));
  }

  async expectCreateSubProjectFromTemplateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), expected, timeoutMs);
  }

  async expectCreateSubProjectFromTemplateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), substring, timeoutMs);
  }

  async expectCreateSubProjectFromTemplateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), value, timeoutMs);
  }

  async expectCreateSubProjectFromTemplateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), timeoutMs);
  }

  async expectCreateSubProjectFromTemplateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate), count, timeoutMs);
  }

  async scrollCreateSubProjectFromTemplateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.createSubProjectFromTemplate));
  }

  async longPressProjectVersioning(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectVersioning));
  }

  async expectProjectVersioningHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectVersioning), expected, timeoutMs);
  }

  async expectProjectVersioningContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectVersioning), substring, timeoutMs);
  }

  async expectProjectVersioningValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectVersioning), value, timeoutMs);
  }

  async expectProjectVersioningEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectVersioning), timeoutMs);
  }

  async expectProjectVersioningCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectVersioning), count, timeoutMs);
  }

  async scrollProjectVersioningIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectVersioning));
  }

  async longPressProjectTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectTask));
  }

  async expectProjectTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectTask), expected, timeoutMs);
  }

  async expectProjectTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectTask), substring, timeoutMs);
  }

  async expectProjectTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectTask), value, timeoutMs);
  }

  async expectProjectTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectTask), timeoutMs);
  }

  async expectProjectTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectTask), count, timeoutMs);
  }

  async scrollProjectTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectTask));
  }

  async longPressManageResourceRequest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.manageResourceRequest));
  }

  async expectManageResourceRequestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.manageResourceRequest), expected, timeoutMs);
  }

  async expectManageResourceRequestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.manageResourceRequest), substring, timeoutMs);
  }

  async expectManageResourceRequestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.manageResourceRequest), value, timeoutMs);
  }

  async expectManageResourceRequestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.manageResourceRequest), timeoutMs);
  }

  async expectManageResourceRequestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.manageResourceRequest), count, timeoutMs);
  }

  async scrollManageResourceRequestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.manageResourceRequest));
  }

  async longPressManageTaskBasedResourcing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing));
  }

  async expectManageTaskBasedResourcingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), expected, timeoutMs);
  }

  async expectManageTaskBasedResourcingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), substring, timeoutMs);
  }

  async expectManageTaskBasedResourcingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), value, timeoutMs);
  }

  async expectManageTaskBasedResourcingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), timeoutMs);
  }

  async expectManageTaskBasedResourcingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing), count, timeoutMs);
  }

  async scrollManageTaskBasedResourcingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.manageTaskBasedResourcing));
  }

  async longPressManageFinancials(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.manageFinancials));
  }

  async expectManageFinancialsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.manageFinancials), expected, timeoutMs);
  }

  async expectManageFinancialsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.manageFinancials), substring, timeoutMs);
  }

  async expectManageFinancialsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.manageFinancials), value, timeoutMs);
  }

  async expectManageFinancialsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.manageFinancials), timeoutMs);
  }

  async expectManageFinancialsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.manageFinancials), count, timeoutMs);
  }

  async scrollManageFinancialsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.manageFinancials));
  }

  async longPressManageRaid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.manageRaid));
  }

  async expectManageRaidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.manageRaid), expected, timeoutMs);
  }

  async expectManageRaidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.manageRaid), substring, timeoutMs);
  }

  async expectManageRaidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.manageRaid), value, timeoutMs);
  }

  async expectManageRaidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.manageRaid), timeoutMs);
  }

  async expectManageRaidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.manageRaid), count, timeoutMs);
  }

  async scrollManageRaidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.manageRaid));
  }

  async longPressTimesheetEntry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timesheetEntry));
  }

  async expectTimesheetEntryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timesheetEntry), expected, timeoutMs);
  }

  async expectTimesheetEntryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timesheetEntry), substring, timeoutMs);
  }

  async expectTimesheetEntryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timesheetEntry), value, timeoutMs);
  }

  async expectTimesheetEntryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timesheetEntry), timeoutMs);
  }

  async expectTimesheetEntryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timesheetEntry), count, timeoutMs);
  }

  async scrollTimesheetEntryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timesheetEntry));
  }

  async longPressAssignment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.assignment));
  }

  async expectAssignmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.assignment), expected, timeoutMs);
  }

  async expectAssignmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.assignment), substring, timeoutMs);
  }

  async expectAssignmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.assignment), value, timeoutMs);
  }

  async expectAssignmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.assignment), timeoutMs);
  }

  async expectAssignmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.assignment), count, timeoutMs);
  }

  async scrollAssignmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.assignment));
  }

  async clickProjectHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory));
  }

  async doubleClickProjectHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory));
  }

  async longPressProjectHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory));
  }

  async expectProjectHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectHistory), expected, timeoutMs);
  }

  async expectProjectHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectHistory), substring, timeoutMs);
  }

  async expectProjectHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectHistory), value, timeoutMs);
  }

  async expectProjectHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectHistory), timeoutMs);
  }

  async expectProjectHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectHistory), count, timeoutMs);
  }

  async scrollProjectHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory));
  }

  async clickImmediateSubProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects));
  }

  async doubleClickImmediateSubProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects));
  }

  async longPressImmediateSubProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects));
  }

  async expectImmediateSubProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.immediateSubProjects), expected, timeoutMs);
  }

  async expectImmediateSubProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.immediateSubProjects), substring, timeoutMs);
  }

  async expectImmediateSubProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.immediateSubProjects), value, timeoutMs);
  }

  async expectImmediateSubProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.immediateSubProjects), timeoutMs);
  }

  async expectImmediateSubProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.immediateSubProjects), count, timeoutMs);
  }

  async scrollImmediateSubProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects));
  }

  async clickProjectPhases0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview));
  }

  async doubleClickProjectPhases0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview));
  }

  async longPressProjectPhases0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview));
  }

  async expectProjectPhases0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), expected, timeoutMs);
  }

  async expectProjectPhases0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), substring, timeoutMs);
  }

  async expectProjectPhases0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), value, timeoutMs);
  }

  async expectProjectPhases0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), timeoutMs);
  }

  async expectProjectPhases0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPhases0Preview), count, timeoutMs);
  }

  async scrollProjectPhases0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0Preview));
  }

  async doubleClickProjectPhases0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async longPressProjectPhases0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async expectProjectPhases0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPhases0), expected, timeoutMs);
  }

  async expectProjectPhases0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPhases0), substring, timeoutMs);
  }

  async expectProjectPhases0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPhases0), value, timeoutMs);
  }

  async expectProjectPhases0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPhases0), count, timeoutMs);
  }

  async scrollProjectPhases0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async clickProjectMethodologies0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview));
  }

  async doubleClickProjectMethodologies0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview));
  }

  async longPressProjectMethodologies0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview));
  }

  async expectProjectMethodologies0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), expected, timeoutMs);
  }

  async expectProjectMethodologies0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), substring, timeoutMs);
  }

  async expectProjectMethodologies0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), value, timeoutMs);
  }

  async expectProjectMethodologies0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), timeoutMs);
  }

  async expectProjectMethodologies0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview), count, timeoutMs);
  }

  async scrollProjectMethodologies0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0Preview));
  }

  async doubleClickProjectMethodologies0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async longPressProjectMethodologies0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async expectProjectMethodologies0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectMethodologies0), expected, timeoutMs);
  }

  async expectProjectMethodologies0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectMethodologies0), substring, timeoutMs);
  }

  async expectProjectMethodologies0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectMethodologies0), value, timeoutMs);
  }

  async expectProjectMethodologies0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectMethodologies0), count, timeoutMs);
  }

  async scrollProjectMethodologies0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async clickProjectLocations0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview));
  }

  async doubleClickProjectLocations0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview));
  }

  async longPressProjectLocations0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview));
  }

  async expectProjectLocations0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), expected, timeoutMs);
  }

  async expectProjectLocations0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), substring, timeoutMs);
  }

  async expectProjectLocations0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), value, timeoutMs);
  }

  async expectProjectLocations0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), timeoutMs);
  }

  async expectProjectLocations0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectLocations0Preview), count, timeoutMs);
  }

  async scrollProjectLocations0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0Preview));
  }

  async doubleClickProjectLocations0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async longPressProjectLocations0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async expectProjectLocations0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectLocations0), expected, timeoutMs);
  }

  async expectProjectLocations0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectLocations0), substring, timeoutMs);
  }

  async expectProjectLocations0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectLocations0), value, timeoutMs);
  }

  async expectProjectLocations0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectLocations0), count, timeoutMs);
  }

  async scrollProjectLocations0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async clickProjectActuals5Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview));
  }

  async doubleClickProjectActuals5Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview));
  }

  async longPressProjectActuals5Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview));
  }

  async expectProjectActuals5PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), expected, timeoutMs);
  }

  async expectProjectActuals5PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), substring, timeoutMs);
  }

  async expectProjectActuals5PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), value, timeoutMs);
  }

  async expectProjectActuals5PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), timeoutMs);
  }

  async expectProjectActuals5PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectActuals5Preview), count, timeoutMs);
  }

  async scrollProjectActuals5PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5Preview));
  }

  async doubleClickProjectActuals5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5));
  }

  async longPressProjectActuals5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5));
  }

  async expectProjectActuals5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectActuals5), expected, timeoutMs);
  }

  async expectProjectActuals5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectActuals5), substring, timeoutMs);
  }

  async expectProjectActuals5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectActuals5), value, timeoutMs);
  }

  async expectProjectActuals5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectActuals5), timeoutMs);
  }

  async expectProjectActuals5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectActuals5), count, timeoutMs);
  }

  async scrollProjectActuals5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals5));
  }

  async clickTransactionLog7Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview));
  }

  async doubleClickTransactionLog7Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview));
  }

  async longPressTransactionLog7Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview));
  }

  async expectTransactionLog7PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), expected, timeoutMs);
  }

  async expectTransactionLog7PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), substring, timeoutMs);
  }

  async expectTransactionLog7PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), value, timeoutMs);
  }

  async expectTransactionLog7PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), timeoutMs);
  }

  async expectTransactionLog7PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.transactionLog7Preview), count, timeoutMs);
  }

  async scrollTransactionLog7PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7Preview));
  }

  async doubleClickTransactionLog7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7));
  }

  async longPressTransactionLog7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7));
  }

  async expectTransactionLog7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.transactionLog7), expected, timeoutMs);
  }

  async expectTransactionLog7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.transactionLog7), substring, timeoutMs);
  }

  async expectTransactionLog7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.transactionLog7), value, timeoutMs);
  }

  async expectTransactionLog7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.transactionLog7), timeoutMs);
  }

  async expectTransactionLog7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.transactionLog7), count, timeoutMs);
  }

  async scrollTransactionLog7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog7));
  }

  async clickBillingEvents1Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview));
  }

  async doubleClickBillingEvents1Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview));
  }

  async longPressBillingEvents1Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview));
  }

  async expectBillingEvents1PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), expected, timeoutMs);
  }

  async expectBillingEvents1PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), substring, timeoutMs);
  }

  async expectBillingEvents1PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), value, timeoutMs);
  }

  async expectBillingEvents1PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), timeoutMs);
  }

  async expectBillingEvents1PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEvents1Preview), count, timeoutMs);
  }

  async scrollBillingEvents1PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1Preview));
  }

  async doubleClickBillingEvents1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async longPressBillingEvents1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async expectBillingEvents1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEvents1), expected, timeoutMs);
  }

  async expectBillingEvents1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEvents1), substring, timeoutMs);
  }

  async expectBillingEvents1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEvents1), value, timeoutMs);
  }

  async expectBillingEvents1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEvents1), count, timeoutMs);
  }

  async scrollBillingEvents1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async clickBillingEventItems1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1));
  }

  async doubleClickBillingEventItems1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1));
  }

  async longPressBillingEventItems1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1));
  }

  async expectBillingEventItems1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEventItems1), expected, timeoutMs);
  }

  async expectBillingEventItems1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEventItems1), substring, timeoutMs);
  }

  async expectBillingEventItems1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEventItems1), value, timeoutMs);
  }

  async expectBillingEventItems1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEventItems1), timeoutMs);
  }

  async expectBillingEventItems1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEventItems1), count, timeoutMs);
  }

  async scrollBillingEventItems1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1));
  }

  async doubleClickBillingEventItems1Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async longPressBillingEventItems1Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async expectBillingEventItems1LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), expected, timeoutMs);
  }

  async expectBillingEventItems1LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), substring, timeoutMs);
  }

  async expectBillingEventItems1LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), value, timeoutMs);
  }

  async expectBillingEventItems1LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), count, timeoutMs);
  }

  async scrollBillingEventItems1LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async clickPermissionControls1Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview));
  }

  async doubleClickPermissionControls1Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview));
  }

  async longPressPermissionControls1Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview));
  }

  async expectPermissionControls1PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), expected, timeoutMs);
  }

  async expectPermissionControls1PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), substring, timeoutMs);
  }

  async expectPermissionControls1PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), value, timeoutMs);
  }

  async expectPermissionControls1PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), timeoutMs);
  }

  async expectPermissionControls1PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.permissionControls1Preview), count, timeoutMs);
  }

  async scrollPermissionControls1PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1Preview));
  }

  async doubleClickPermissionControls1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async longPressPermissionControls1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async expectPermissionControls1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.permissionControls1), expected, timeoutMs);
  }

  async expectPermissionControls1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.permissionControls1), substring, timeoutMs);
  }

  async expectPermissionControls1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.permissionControls1), value, timeoutMs);
  }

  async expectPermissionControls1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.permissionControls1), count, timeoutMs);
  }

  async scrollPermissionControls1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async clickImmediateSubProjects0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview));
  }

  async doubleClickImmediateSubProjects0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview));
  }

  async longPressImmediateSubProjects0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview));
  }

  async expectImmediateSubProjects0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), expected, timeoutMs);
  }

  async expectImmediateSubProjects0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), substring, timeoutMs);
  }

  async expectImmediateSubProjects0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), value, timeoutMs);
  }

  async expectImmediateSubProjects0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), timeoutMs);
  }

  async expectImmediateSubProjects0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview), count, timeoutMs);
  }

  async scrollImmediateSubProjects0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0Preview));
  }

  async doubleClickImmediateSubProjects0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async longPressImmediateSubProjects0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async expectImmediateSubProjects0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), expected, timeoutMs);
  }

  async expectImmediateSubProjects0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), substring, timeoutMs);
  }

  async expectImmediateSubProjects0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), value, timeoutMs);
  }

  async expectImmediateSubProjects0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), count, timeoutMs);
  }

  async scrollImmediateSubProjects0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async clickMasterProjectForSubProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects));
  }

  async doubleClickMasterProjectForSubProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects));
  }

  async longPressMasterProjectForSubProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects));
  }

  async expectMasterProjectForSubProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), expected, timeoutMs);
  }

  async expectMasterProjectForSubProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), substring, timeoutMs);
  }

  async expectMasterProjectForSubProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), value, timeoutMs);
  }

  async expectMasterProjectForSubProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), timeoutMs);
  }

  async expectMasterProjectForSubProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects), count, timeoutMs);
  }

  async scrollMasterProjectForSubProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjects));
  }

  async doubleClickMasterProjectForSubProjectsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async longPressMasterProjectForSubProjectsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async expectMasterProjectForSubProjectsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), expected, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), substring, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), value, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), count, timeoutMs);
  }

  async scrollMasterProjectForSubProjectsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async clickExpenseLimitsRates(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates));
  }

  async doubleClickExpenseLimitsRates(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates));
  }

  async longPressExpenseLimitsRates(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates));
  }

  async expectExpenseLimitsRatesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), expected, timeoutMs);
  }

  async expectExpenseLimitsRatesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), substring, timeoutMs);
  }

  async expectExpenseLimitsRatesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), value, timeoutMs);
  }

  async expectExpenseLimitsRatesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), timeoutMs);
  }

  async expectExpenseLimitsRatesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseLimitsRates), count, timeoutMs);
  }

  async scrollExpenseLimitsRatesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRates));
  }

  async doubleClickExpenseLimitsRatesLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async longPressExpenseLimitsRatesLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async expectExpenseLimitsRatesLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), expected, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), substring, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), value, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), count, timeoutMs);
  }

  async scrollExpenseLimitsRatesLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async clickBudgetHeaders0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview));
  }

  async doubleClickBudgetHeaders0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview));
  }

  async longPressBudgetHeaders0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview));
  }

  async expectBudgetHeaders0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), expected, timeoutMs);
  }

  async expectBudgetHeaders0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), substring, timeoutMs);
  }

  async expectBudgetHeaders0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), value, timeoutMs);
  }

  async expectBudgetHeaders0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), timeoutMs);
  }

  async expectBudgetHeaders0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview), count, timeoutMs);
  }

  async scrollBudgetHeaders0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0Preview));
  }

  async doubleClickBudgetHeaders0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async longPressBudgetHeaders0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async expectBudgetHeaders0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetHeaders0), expected, timeoutMs);
  }

  async expectBudgetHeaders0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetHeaders0), substring, timeoutMs);
  }

  async expectBudgetHeaders0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetHeaders0), value, timeoutMs);
  }

  async expectBudgetHeaders0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetHeaders0), count, timeoutMs);
  }

  async scrollBudgetHeaders0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async clickEstVsActuals10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10));
  }

  async doubleClickEstVsActuals10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10));
  }

  async longPressEstVsActuals10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10));
  }

  async expectEstVsActuals10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.estVsActuals10), expected, timeoutMs);
  }

  async expectEstVsActuals10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.estVsActuals10), substring, timeoutMs);
  }

  async expectEstVsActuals10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.estVsActuals10), value, timeoutMs);
  }

  async expectEstVsActuals10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.estVsActuals10), timeoutMs);
  }

  async expectEstVsActuals10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.estVsActuals10), count, timeoutMs);
  }

  async scrollEstVsActuals10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10));
  }

  async doubleClickEstVsActuals10Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async longPressEstVsActuals10Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async expectEstVsActuals10LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), expected, timeoutMs);
  }

  async expectEstVsActuals10LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), substring, timeoutMs);
  }

  async expectEstVsActuals10LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), value, timeoutMs);
  }

  async expectEstVsActuals10LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), count, timeoutMs);
  }

  async scrollEstVsActuals10LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async clickBacklogCalculations0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview));
  }

  async doubleClickBacklogCalculations0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview));
  }

  async longPressBacklogCalculations0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview));
  }

  async expectBacklogCalculations0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), expected, timeoutMs);
  }

  async expectBacklogCalculations0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), substring, timeoutMs);
  }

  async expectBacklogCalculations0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), value, timeoutMs);
  }

  async expectBacklogCalculations0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), timeoutMs);
  }

  async expectBacklogCalculations0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview), count, timeoutMs);
  }

  async scrollBacklogCalculations0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0Preview));
  }

  async doubleClickBacklogCalculations0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async longPressBacklogCalculations0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async expectBacklogCalculations0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogCalculations0), expected, timeoutMs);
  }

  async expectBacklogCalculations0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogCalculations0), substring, timeoutMs);
  }

  async expectBacklogCalculations0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogCalculations0), value, timeoutMs);
  }

  async expectBacklogCalculations0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogCalculations0), count, timeoutMs);
  }

  async scrollBacklogCalculations0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async clickBacklogDetails0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview));
  }

  async doubleClickBacklogDetails0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview));
  }

  async longPressBacklogDetails0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview));
  }

  async expectBacklogDetails0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), expected, timeoutMs);
  }

  async expectBacklogDetails0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), substring, timeoutMs);
  }

  async expectBacklogDetails0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), value, timeoutMs);
  }

  async expectBacklogDetails0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), timeoutMs);
  }

  async expectBacklogDetails0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview), count, timeoutMs);
  }

  async scrollBacklogDetails0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0Preview));
  }

  async doubleClickBacklogDetails0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async longPressBacklogDetails0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async expectBacklogDetails0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogDetails0), expected, timeoutMs);
  }

  async expectBacklogDetails0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogDetails0), substring, timeoutMs);
  }

  async expectBacklogDetails0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogDetails0), value, timeoutMs);
  }

  async expectBacklogDetails0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogDetails0), count, timeoutMs);
  }

  async scrollBacklogDetails0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async clickProjectTasks10Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview));
  }

  async doubleClickProjectTasks10Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview));
  }

  async longPressProjectTasks10Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview));
  }

  async expectProjectTasks10PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), expected, timeoutMs);
  }

  async expectProjectTasks10PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), substring, timeoutMs);
  }

  async expectProjectTasks10PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), value, timeoutMs);
  }

  async expectProjectTasks10PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectTasks10Preview), count, timeoutMs);
  }

  async scrollProjectTasks10PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10Preview));
  }

  async doubleClickProjectTasks10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async longPressProjectTasks10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async expectProjectTasks10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectTasks10), expected, timeoutMs);
  }

  async expectProjectTasks10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectTasks10), substring, timeoutMs);
  }

  async expectProjectTasks10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectTasks10), value, timeoutMs);
  }

  async expectProjectTasks10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectTasks10), count, timeoutMs);
  }

  async scrollProjectTasks10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async clickRevenueForecasts0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview));
  }

  async doubleClickRevenueForecasts0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview));
  }

  async longPressRevenueForecasts0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview));
  }

  async expectRevenueForecasts0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), expected, timeoutMs);
  }

  async expectRevenueForecasts0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), substring, timeoutMs);
  }

  async expectRevenueForecasts0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), value, timeoutMs);
  }

  async expectRevenueForecasts0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), timeoutMs);
  }

  async expectRevenueForecasts0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview), count, timeoutMs);
  }

  async scrollRevenueForecasts0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0Preview));
  }

  async doubleClickRevenueForecasts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async longPressRevenueForecasts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async expectRevenueForecasts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecasts0), expected, timeoutMs);
  }

  async expectRevenueForecasts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecasts0), substring, timeoutMs);
  }

  async expectRevenueForecasts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecasts0), value, timeoutMs);
  }

  async expectRevenueForecasts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecasts0), count, timeoutMs);
  }

  async scrollRevenueForecasts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async clickCostForecasts0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview));
  }

  async doubleClickCostForecasts0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview));
  }

  async longPressCostForecasts0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview));
  }

  async expectCostForecasts0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), expected, timeoutMs);
  }

  async expectCostForecasts0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), substring, timeoutMs);
  }

  async expectCostForecasts0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), value, timeoutMs);
  }

  async expectCostForecasts0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), timeoutMs);
  }

  async expectCostForecasts0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.costForecasts0Preview), count, timeoutMs);
  }

  async scrollCostForecasts0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0Preview));
  }

  async doubleClickCostForecasts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async longPressCostForecasts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async expectCostForecasts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.costForecasts0), expected, timeoutMs);
  }

  async expectCostForecasts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.costForecasts0), substring, timeoutMs);
  }

  async expectCostForecasts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.costForecasts0), value, timeoutMs);
  }

  async expectCostForecasts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.costForecasts0), count, timeoutMs);
  }

  async scrollCostForecasts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async clickRevenueForecastBatchLogs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs));
  }

  async doubleClickRevenueForecastBatchLogs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs));
  }

  async longPressRevenueForecastBatchLogs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs));
  }

  async expectRevenueForecastBatchLogsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), expected, timeoutMs);
  }

  async expectRevenueForecastBatchLogsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), substring, timeoutMs);
  }

  async expectRevenueForecastBatchLogsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), value, timeoutMs);
  }

  async expectRevenueForecastBatchLogsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), timeoutMs);
  }

  async expectRevenueForecastBatchLogsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs), count, timeoutMs);
  }

  async scrollRevenueForecastBatchLogsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogs));
  }

  async doubleClickRevenueForecastBatchLogsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async longPressRevenueForecastBatchLogsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async expectRevenueForecastBatchLogsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), expected, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), substring, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), value, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), count, timeoutMs);
  }

  async scrollRevenueForecastBatchLogsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async clickProjectSources7Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview));
  }

  async doubleClickProjectSources7Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview));
  }

  async longPressProjectSources7Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview));
  }

  async expectProjectSources7PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectSources7Preview), expected, timeoutMs);
  }

  async expectProjectSources7PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectSources7Preview), substring, timeoutMs);
  }

  async expectProjectSources7PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectSources7Preview), value, timeoutMs);
  }

  async expectProjectSources7PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectSources7Preview), timeoutMs);
  }

  async expectProjectSources7PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectSources7Preview), count, timeoutMs);
  }

  async scrollProjectSources7PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7Preview));
  }

  async doubleClickProjectSources7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7));
  }

  async longPressProjectSources7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7));
  }

  async expectProjectSources7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectSources7), expected, timeoutMs);
  }

  async expectProjectSources7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectSources7), substring, timeoutMs);
  }

  async expectProjectSources7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectSources7), value, timeoutMs);
  }

  async expectProjectSources7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectSources7), timeoutMs);
  }

  async expectProjectSources7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectSources7), count, timeoutMs);
  }

  async scrollProjectSources7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources7));
  }

  async clickProjectServicesDeliverables0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0));
  }

  async doubleClickProjectServicesDeliverables0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0));
  }

  async longPressProjectServicesDeliverables0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0));
  }

  async expectProjectServicesDeliverables0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), expected, timeoutMs);
  }

  async expectProjectServicesDeliverables0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), substring, timeoutMs);
  }

  async expectProjectServicesDeliverables0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), value, timeoutMs);
  }

  async expectProjectServicesDeliverables0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), timeoutMs);
  }

  async expectProjectServicesDeliverables0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0), count, timeoutMs);
  }

  async scrollProjectServicesDeliverables0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0));
  }

  async doubleClickProjectServicesDeliverables0Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async longPressProjectServicesDeliverables0Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async expectProjectServicesDeliverables0LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), expected, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), substring, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), value, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), count, timeoutMs);
  }

  async scrollProjectServicesDeliverables0LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async clickProjectServicesDeliverableItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems));
  }

  async doubleClickProjectServicesDeliverableItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems));
  }

  async longPressProjectServicesDeliverableItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems));
  }

  async expectProjectServicesDeliverableItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), expected, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), substring, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), value, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems), count, timeoutMs);
  }

  async scrollProjectServicesDeliverableItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItems));
  }

  async doubleClickProjectServicesDeliverableItemsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async longPressProjectServicesDeliverableItemsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async expectProjectServicesDeliverableItemsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), expected, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), substring, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), value, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), count, timeoutMs);
  }

  async scrollProjectServicesDeliverableItemsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async clickManagedVersions0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview));
  }

  async doubleClickManagedVersions0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview));
  }

  async longPressManagedVersions0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview));
  }

  async expectManagedVersions0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), expected, timeoutMs);
  }

  async expectManagedVersions0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), substring, timeoutMs);
  }

  async expectManagedVersions0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), value, timeoutMs);
  }

  async expectManagedVersions0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), timeoutMs);
  }

  async expectManagedVersions0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.managedVersions0Preview), count, timeoutMs);
  }

  async scrollManagedVersions0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0Preview));
  }

  async doubleClickManagedVersions0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async longPressManagedVersions0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async expectManagedVersions0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.managedVersions0), expected, timeoutMs);
  }

  async expectManagedVersions0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.managedVersions0), substring, timeoutMs);
  }

  async expectManagedVersions0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.managedVersions0), value, timeoutMs);
  }

  async expectManagedVersions0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.managedVersions0), count, timeoutMs);
  }

  async scrollManagedVersions0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async doubleClickShowLess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async longPressShowLess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async expectShowLessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showLess), expected, timeoutMs);
  }

  async expectShowLessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showLess), substring, timeoutMs);
  }

  async expectShowLessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showLess), value, timeoutMs);
  }

  async expectShowLessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showLess), count, timeoutMs);
  }

  async scrollShowLessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

}
