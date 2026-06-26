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

export class ProectTaskRelatedPage {
  private static readonly L = {
    stageCompletePlanned: { strategy: 'text' as const, value: 'stage completePlanned', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    stageCompleteReadyToStaff: { strategy: 'text' as const, value: 'stage completeReady to Staff', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    stageCompleteInProgress: { strategy: 'text' as const, value: 'stage completeIn Progress', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    projectSurvey: { strategy: 'css' as const, value: '[title="Project Survey"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    teamMembership: { strategy: 'css' as const, value: '[title="Team Membership"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    healthAndCommu: { strategy: 'role' as const, value: '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee', role: 'option', shadowHost: 'lst-breadcrumbs', actionKind: 'generic' as const },
    healthAndCommuOption: { strategy: 'role' as const, value: '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee', role: 'option', shadowHost: 'lst-breadcrumbs', actionKind: 'generic' as const },
    healthAndCommuLink: { strategy: 'css' as const, value: '[title="360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation"]', shadowHost: 'lst-breadcrumbs', actionKind: 'link' as const },
    projectTasks: { strategy: 'text' as const, value: 'Project Tasks', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    addProjectTasksFrom: { strategy: 'role' as const, value: 'Add Project Tasks From Template', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    generateResourceRequests: { strategy: 'role' as const, value: 'Generate Resource Requests', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    generateHeldResourceRequests: { strategy: 'role' as const, value: 'Generate Held Resource Requests', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    showActionsForProject: { strategy: 'role' as const, value: 'Show actions for Project Tasks', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    itemsUpdated: { strategy: 'text' as const, value: '32 items • Updated a few seconds ago', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    items: { strategy: 'text' as const, value: '32 items •', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    showQuickFilters: { strategy: 'role' as const, value: 'Show quick filters', role: 'button', shadowHost: 'lightning-button-icon-stateful', actionKind: 'button' as const },
    lgtDatatable22Options: { strategy: 'css' as const, value: '[name="lgt-datatable-22-options"][type="checkbox"]', shadowHost: 'lightning-primitive-header-factory', actionKind: 'checkbox' as const },
    sortByProjectTask: { strategy: 'role' as const, value: 'Sort by: Project Task Name', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectTaskName: { strategy: 'role' as const, value: 'Show Project Task Name column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4736', actionKind: 'button' as const },
    projectTaskNameColumn: { strategy: 'role' as const, value: 'Project Task Name column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByMilestone: { strategy: 'role' as const, value: 'Sort by: Milestone', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showMilestoneColumnActions: { strategy: 'role' as const, value: 'Show Milestone column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4742', actionKind: 'button' as const },
    milestoneColumnWidth: { strategy: 'role' as const, value: 'Milestone column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByParentTask: { strategy: 'role' as const, value: 'Sort by: Parent Task', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showParentTaskColumn: { strategy: 'role' as const, value: 'Show Parent Task column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4748', actionKind: 'button' as const },
    parentTaskColumnWidth: { strategy: 'role' as const, value: 'Parent Task column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByDescription: { strategy: 'role' as const, value: 'Sort by: Description', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showDescriptionColumnActions: { strategy: 'role' as const, value: 'Show Description column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4754', actionKind: 'button' as const },
    descriptionColumnWidth: { strategy: 'role' as const, value: 'Description column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByStatus: { strategy: 'role' as const, value: 'Sort by: Status', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStatusColumnActions: { strategy: 'role' as const, value: 'Show Status column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4760', actionKind: 'button' as const },
    sortByStartDate: { strategy: 'role' as const, value: 'Sort by: Start Date & Time', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStartDate: { strategy: 'role' as const, value: 'Show Start Date & Time column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4766', actionKind: 'button' as const },
    startDateTime: { strategy: 'role' as const, value: 'Start Date & Time column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByEndDate: { strategy: 'role' as const, value: 'Sort by: End Date & Time', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showEndDate: { strategy: 'role' as const, value: 'Show End Date & Time column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4772', actionKind: 'button' as const },
    endDateTime: { strategy: 'role' as const, value: 'End Date & Time column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortBySummary: { strategy: 'role' as const, value: 'Sort by: Summary', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showSummaryColumnActions: { strategy: 'role' as const, value: 'Show Summary column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4778', actionKind: 'button' as const },
    summaryColumnWidth: { strategy: 'role' as const, value: 'Summary column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByKeyTask: { strategy: 'role' as const, value: 'Sort by: Key Task Type', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showKeyTaskType: { strategy: 'role' as const, value: 'Show Key Task Type column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-4784', actionKind: 'button' as const },
    keyTaskTypeColumn: { strategy: 'role' as const, value: 'Key Task Type column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    updatedAMinuteAgo: { strategy: 'text' as const, value: 'Updated a minute ago', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickStageCompletePlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned));
  }

  async doubleClickStageCompletePlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), expected, timeoutMs);
  }

  async expectStageCompletePlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), substring, timeoutMs);
  }

  async scrollStageCompletePlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned));
  }

  async clickStageCompleteReadyToStaff(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff));
  }

  async doubleClickStageCompleteReadyToStaff(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff));
  }

  async expectStageCompleteReadyToStaffVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), expected, timeoutMs);
  }

  async expectStageCompleteReadyToStaffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), substring, timeoutMs);
  }

  async scrollStageCompleteReadyToStaffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff));
  }

  async clickStageCompleteInProgress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress));
  }

  async doubleClickStageCompleteInProgress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), expected, timeoutMs);
  }

  async expectStageCompleteInProgressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), substring, timeoutMs);
  }

  async scrollStageCompleteInProgressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress));
  }

  async clickProjectSurvey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey));
  }

  async doubleClickProjectSurvey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey));
  }

  async expectProjectSurveyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), expected, timeoutMs);
  }

  async expectProjectSurveyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), substring, timeoutMs);
  }

  async scrollProjectSurveyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey));
  }

  async clickTeamMembership(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership));
  }

  async doubleClickTeamMembership(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership));
  }

  async expectTeamMembershipVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), expected, timeoutMs);
  }

  async expectTeamMembershipContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), substring, timeoutMs);
  }

  async scrollTeamMembershipIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership));
  }

  async clickHealthAndCommu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu));
  }

  async doubleClickHealthAndCommu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu));
  }

  async expectHealthAndCommuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), expected, timeoutMs);
  }

  async expectHealthAndCommuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), substring, timeoutMs);
  }

  async scrollHealthAndCommuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu));
  }

  async clickHealthAndCommuOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption));
  }

  async doubleClickHealthAndCommuOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption));
  }

  async expectHealthAndCommuOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), expected, timeoutMs);
  }

  async expectHealthAndCommuOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), substring, timeoutMs);
  }

  async scrollHealthAndCommuOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption));
  }

  async clickHealthAndCommuLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink));
  }

  async doubleClickHealthAndCommuLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), expected, timeoutMs);
  }

  async expectHealthAndCommuLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), substring, timeoutMs);
  }

  async scrollHealthAndCommuLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink));
  }

  async getInnerTextProjectTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks));
  }

  async expectProjectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), expected, timeoutMs);
  }

  async expectProjectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), substring, timeoutMs);
  }

  async scrollProjectTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks));
  }

  async clickAddProjectTasksFrom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom));
  }

  async doubleClickAddProjectTasksFrom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom));
  }

  async expectAddProjectTasksFromVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), expected, timeoutMs);
  }

  async expectAddProjectTasksFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), substring, timeoutMs);
  }

  async scrollAddProjectTasksFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom));
  }

  async clickGenerateResourceRequests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests));
  }

  async doubleClickGenerateResourceRequests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests));
  }

  async expectGenerateResourceRequestsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), expected, timeoutMs);
  }

  async expectGenerateResourceRequestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), substring, timeoutMs);
  }

  async scrollGenerateResourceRequestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests));
  }

  async clickGenerateHeldResourceRequests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests));
  }

  async doubleClickGenerateHeldResourceRequests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests));
  }

  async expectGenerateHeldResourceRequestsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), expected, timeoutMs);
  }

  async expectGenerateHeldResourceRequestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), substring, timeoutMs);
  }

  async scrollGenerateHeldResourceRequestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests));
  }

  async clickShowActionsForProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject));
  }

  async doubleClickShowActionsForProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject));
  }

  async expectShowActionsForProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), expected, timeoutMs);
  }

  async expectShowActionsForProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), substring, timeoutMs);
  }

  async scrollShowActionsForProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject));
  }

  async getInnerTextItemsUpdated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated));
  }

  async expectItemsUpdatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), expected, timeoutMs);
  }

  async expectItemsUpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), substring, timeoutMs);
  }

  async scrollItemsUpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated));
  }

  async getInnerTextItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.items));
  }

  async expectItemsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.items), expected, timeoutMs);
  }

  async expectItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.items), substring, timeoutMs);
  }

  async scrollItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.items));
  }

  async clickShowQuickFilters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters));
  }

  async doubleClickShowQuickFilters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters));
  }

  async expectShowQuickFiltersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), expected, timeoutMs);
  }

  async expectShowQuickFiltersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), substring, timeoutMs);
  }

  async scrollShowQuickFiltersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters));
  }

  async checkLgtDatatable22Options(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options));
  }

  async uncheckLgtDatatable22Options(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options));
  }

  async expectLgtDatatable22OptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async scrollLgtDatatable22OptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options));
  }

  async clickSortByProjectTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask));
  }

  async doubleClickSortByProjectTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask));
  }

  async expectSortByProjectTaskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), expected, timeoutMs);
  }

  async expectSortByProjectTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), substring, timeoutMs);
  }

  async scrollSortByProjectTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask));
  }

  async clickShowProjectTaskName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName));
  }

  async doubleClickShowProjectTaskName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName));
  }

  async expectShowProjectTaskNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), expected, timeoutMs);
  }

  async expectShowProjectTaskNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), substring, timeoutMs);
  }

  async scrollShowProjectTaskNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName));
  }

  async clickProjectTaskNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn));
  }

  async doubleClickProjectTaskNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn));
  }

  async expectProjectTaskNameColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), expected, timeoutMs);
  }

  async expectProjectTaskNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), substring, timeoutMs);
  }

  async scrollProjectTaskNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn));
  }

  async clickSortByMilestone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone));
  }

  async doubleClickSortByMilestone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone));
  }

  async expectSortByMilestoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), expected, timeoutMs);
  }

  async expectSortByMilestoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), substring, timeoutMs);
  }

  async scrollSortByMilestoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone));
  }

  async clickShowMilestoneColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions));
  }

  async doubleClickShowMilestoneColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions));
  }

  async expectShowMilestoneColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), expected, timeoutMs);
  }

  async expectShowMilestoneColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), substring, timeoutMs);
  }

  async scrollShowMilestoneColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions));
  }

  async clickMilestoneColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth));
  }

  async doubleClickMilestoneColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth));
  }

  async expectMilestoneColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), expected, timeoutMs);
  }

  async expectMilestoneColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), substring, timeoutMs);
  }

  async scrollMilestoneColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth));
  }

  async clickSortByParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask));
  }

  async doubleClickSortByParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask));
  }

  async expectSortByParentTaskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), expected, timeoutMs);
  }

  async expectSortByParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), substring, timeoutMs);
  }

  async scrollSortByParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask));
  }

  async clickShowParentTaskColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn));
  }

  async doubleClickShowParentTaskColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn));
  }

  async expectShowParentTaskColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), expected, timeoutMs);
  }

  async expectShowParentTaskColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), substring, timeoutMs);
  }

  async scrollShowParentTaskColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn));
  }

  async clickParentTaskColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth));
  }

  async doubleClickParentTaskColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth));
  }

  async expectParentTaskColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), expected, timeoutMs);
  }

  async expectParentTaskColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), substring, timeoutMs);
  }

  async scrollParentTaskColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth));
  }

  async clickSortByDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription));
  }

  async doubleClickSortByDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription));
  }

  async expectSortByDescriptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), expected, timeoutMs);
  }

  async expectSortByDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), substring, timeoutMs);
  }

  async scrollSortByDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription));
  }

  async clickShowDescriptionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions));
  }

  async doubleClickShowDescriptionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions));
  }

  async expectShowDescriptionColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), expected, timeoutMs);
  }

  async expectShowDescriptionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), substring, timeoutMs);
  }

  async scrollShowDescriptionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions));
  }

  async clickDescriptionColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth));
  }

  async doubleClickDescriptionColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth));
  }

  async expectDescriptionColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), expected, timeoutMs);
  }

  async expectDescriptionColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), substring, timeoutMs);
  }

  async scrollDescriptionColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth));
  }

  async clickSortByStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus));
  }

  async doubleClickSortByStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus));
  }

  async expectSortByStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), expected, timeoutMs);
  }

  async expectSortByStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), substring, timeoutMs);
  }

  async scrollSortByStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus));
  }

  async clickShowStatusColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions));
  }

  async doubleClickShowStatusColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), expected, timeoutMs);
  }

  async expectShowStatusColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), substring, timeoutMs);
  }

  async scrollShowStatusColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions));
  }

  async clickSortByStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate));
  }

  async doubleClickSortByStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate));
  }

  async expectSortByStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), expected, timeoutMs);
  }

  async expectSortByStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), substring, timeoutMs);
  }

  async scrollSortByStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate));
  }

  async clickShowStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate));
  }

  async doubleClickShowStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate));
  }

  async expectShowStartDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), expected, timeoutMs);
  }

  async expectShowStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), substring, timeoutMs);
  }

  async scrollShowStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate));
  }

  async clickStartDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime));
  }

  async doubleClickStartDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime));
  }

  async expectStartDateTimeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), expected, timeoutMs);
  }

  async expectStartDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), substring, timeoutMs);
  }

  async scrollStartDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime));
  }

  async clickSortByEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate));
  }

  async doubleClickSortByEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate));
  }

  async expectSortByEndDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), expected, timeoutMs);
  }

  async expectSortByEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), substring, timeoutMs);
  }

  async scrollSortByEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate));
  }

  async clickShowEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate));
  }

  async doubleClickShowEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate));
  }

  async expectShowEndDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), expected, timeoutMs);
  }

  async expectShowEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), substring, timeoutMs);
  }

  async scrollShowEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate));
  }

  async clickEndDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime));
  }

  async doubleClickEndDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime));
  }

  async expectEndDateTimeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), expected, timeoutMs);
  }

  async expectEndDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), substring, timeoutMs);
  }

  async scrollEndDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime));
  }

  async clickSortBySummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary));
  }

  async doubleClickSortBySummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary));
  }

  async expectSortBySummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), expected, timeoutMs);
  }

  async expectSortBySummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), substring, timeoutMs);
  }

  async scrollSortBySummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary));
  }

  async clickShowSummaryColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions));
  }

  async doubleClickShowSummaryColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions));
  }

  async expectShowSummaryColumnActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), expected, timeoutMs);
  }

  async expectShowSummaryColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), substring, timeoutMs);
  }

  async scrollShowSummaryColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions));
  }

  async clickSummaryColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth));
  }

  async doubleClickSummaryColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth));
  }

  async expectSummaryColumnWidthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), expected, timeoutMs);
  }

  async expectSummaryColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), substring, timeoutMs);
  }

  async scrollSummaryColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth));
  }

  async clickSortByKeyTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask));
  }

  async doubleClickSortByKeyTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask));
  }

  async expectSortByKeyTaskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), expected, timeoutMs);
  }

  async expectSortByKeyTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), substring, timeoutMs);
  }

  async scrollSortByKeyTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask));
  }

  async clickShowKeyTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType));
  }

  async doubleClickShowKeyTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType));
  }

  async expectShowKeyTaskTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), expected, timeoutMs);
  }

  async expectShowKeyTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), substring, timeoutMs);
  }

  async scrollShowKeyTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType));
  }

  async clickKeyTaskTypeColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn));
  }

  async doubleClickKeyTaskTypeColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn));
  }

  async expectKeyTaskTypeColumnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), expected, timeoutMs);
  }

  async expectKeyTaskTypeColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), substring, timeoutMs);
  }

  async scrollKeyTaskTypeColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn));
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
    await expect(this.page).toHaveTitle('Project Tasks | Salesforce', { timeout: timeoutMs });
  }

  async getInnerTextUpdatedAMinuteAgo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo));
  }

  async expectUpdatedAMinuteAgoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), expected, timeoutMs);
  }

  async expectUpdatedAMinuteAgoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), substring, timeoutMs);
  }

  async scrollUpdatedAMinuteAgoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo));
  }


  async longPressStageCompletePlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), value, timeoutMs);
  }

  async expectStageCompletePlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.stageCompletePlanned), count, timeoutMs);
  }

  async longPressStageCompleteReadyToStaff(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff));
  }

  async expectStageCompleteReadyToStaffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), value, timeoutMs);
  }

  async expectStageCompleteReadyToStaffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteReadyToStaff), count, timeoutMs);
  }

  async longPressStageCompleteInProgress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), value, timeoutMs);
  }

  async expectStageCompleteInProgressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.stageCompleteInProgress), count, timeoutMs);
  }

  async longPressProjectSurvey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey));
  }

  async expectProjectSurveyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), value, timeoutMs);
  }

  async expectProjectSurveyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.projectSurvey), count, timeoutMs);
  }

  async longPressTeamMembership(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership));
  }

  async expectTeamMembershipValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), value, timeoutMs);
  }

  async expectTeamMembershipChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.teamMembership), count, timeoutMs);
  }

  async longPressHealthAndCommu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu));
  }

  async expectHealthAndCommuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), value, timeoutMs);
  }

  async expectHealthAndCommuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommu), count, timeoutMs);
  }

  async longPressHealthAndCommuOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption));
  }

  async expectHealthAndCommuOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), value, timeoutMs);
  }

  async expectHealthAndCommuOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), timeoutMs);
  }

  async expectHealthAndCommuOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuOption), count, timeoutMs);
  }

  async longPressHealthAndCommuLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), value, timeoutMs);
  }

  async expectHealthAndCommuLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.healthAndCommuLink), count, timeoutMs);
  }

  async clickProjectTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks));
  }

  async doubleClickProjectTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks));
  }

  async longPressProjectTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks));
  }

  async expectProjectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), value, timeoutMs);
  }

  async expectProjectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.projectTasks), count, timeoutMs);
  }

  async longPressAddProjectTasksFrom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom));
  }

  async expectAddProjectTasksFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), value, timeoutMs);
  }

  async expectAddProjectTasksFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.addProjectTasksFrom), count, timeoutMs);
  }

  async longPressGenerateResourceRequests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests));
  }

  async expectGenerateResourceRequestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), value, timeoutMs);
  }

  async expectGenerateResourceRequestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.generateResourceRequests), count, timeoutMs);
  }

  async longPressGenerateHeldResourceRequests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests));
  }

  async expectGenerateHeldResourceRequestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), value, timeoutMs);
  }

  async expectGenerateHeldResourceRequestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.generateHeldResourceRequests), count, timeoutMs);
  }

  async longPressShowActionsForProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject));
  }

  async expectShowActionsForProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), value, timeoutMs);
  }

  async expectShowActionsForProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showActionsForProject), count, timeoutMs);
  }

  async clickItemsUpdated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated));
  }

  async doubleClickItemsUpdated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated));
  }

  async longPressItemsUpdated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated));
  }

  async expectItemsUpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), value, timeoutMs);
  }

  async expectItemsUpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.itemsUpdated), count, timeoutMs);
  }

  async clickItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.items));
  }

  async doubleClickItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.items));
  }

  async longPressItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.items));
  }

  async expectItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.items), value, timeoutMs);
  }

  async expectItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.items), timeoutMs);
  }

  async expectItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.items), count, timeoutMs);
  }

  async longPressShowQuickFilters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters));
  }

  async expectShowQuickFiltersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), value, timeoutMs);
  }

  async expectShowQuickFiltersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showQuickFilters), count, timeoutMs);
  }

  async expectLgtDatatable22OptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), expected, timeoutMs);
  }

  async expectLgtDatatable22OptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), substring, timeoutMs);
  }

  async expectLgtDatatable22OptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), value, timeoutMs);
  }

  async expectLgtDatatable22OptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), timeoutMs);
  }

  async expectLgtDatatable22OptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.lgtDatatable22Options), count, timeoutMs);
  }

  async longPressSortByProjectTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask));
  }

  async expectSortByProjectTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), value, timeoutMs);
  }

  async expectSortByProjectTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByProjectTask), count, timeoutMs);
  }

  async longPressShowProjectTaskName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName));
  }

  async expectShowProjectTaskNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), value, timeoutMs);
  }

  async expectShowProjectTaskNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showProjectTaskName), count, timeoutMs);
  }

  async longPressProjectTaskNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn));
  }

  async expectProjectTaskNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), value, timeoutMs);
  }

  async expectProjectTaskNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.projectTaskNameColumn), count, timeoutMs);
  }

  async longPressSortByMilestone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone));
  }

  async expectSortByMilestoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), value, timeoutMs);
  }

  async expectSortByMilestoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByMilestone), count, timeoutMs);
  }

  async longPressShowMilestoneColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions));
  }

  async expectShowMilestoneColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), value, timeoutMs);
  }

  async expectShowMilestoneColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showMilestoneColumnActions), count, timeoutMs);
  }

  async longPressMilestoneColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth));
  }

  async expectMilestoneColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), value, timeoutMs);
  }

  async expectMilestoneColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.milestoneColumnWidth), count, timeoutMs);
  }

  async longPressSortByParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask));
  }

  async expectSortByParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), value, timeoutMs);
  }

  async expectSortByParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByParentTask), count, timeoutMs);
  }

  async longPressShowParentTaskColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn));
  }

  async expectShowParentTaskColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), value, timeoutMs);
  }

  async expectShowParentTaskColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showParentTaskColumn), count, timeoutMs);
  }

  async longPressParentTaskColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth));
  }

  async expectParentTaskColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), value, timeoutMs);
  }

  async expectParentTaskColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.parentTaskColumnWidth), count, timeoutMs);
  }

  async longPressSortByDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription));
  }

  async expectSortByDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), value, timeoutMs);
  }

  async expectSortByDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByDescription), count, timeoutMs);
  }

  async longPressShowDescriptionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions));
  }

  async expectShowDescriptionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), value, timeoutMs);
  }

  async expectShowDescriptionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showDescriptionColumnActions), count, timeoutMs);
  }

  async longPressDescriptionColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth));
  }

  async expectDescriptionColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), value, timeoutMs);
  }

  async expectDescriptionColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.descriptionColumnWidth), count, timeoutMs);
  }

  async longPressSortByStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus));
  }

  async expectSortByStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), value, timeoutMs);
  }

  async expectSortByStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByStatus), count, timeoutMs);
  }

  async longPressShowStatusColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), value, timeoutMs);
  }

  async expectShowStatusColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showStatusColumnActions), count, timeoutMs);
  }

  async longPressSortByStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate));
  }

  async expectSortByStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), value, timeoutMs);
  }

  async expectSortByStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByStartDate), count, timeoutMs);
  }

  async longPressShowStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate));
  }

  async expectShowStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), value, timeoutMs);
  }

  async expectShowStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showStartDate), count, timeoutMs);
  }

  async longPressStartDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime));
  }

  async expectStartDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), value, timeoutMs);
  }

  async expectStartDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.startDateTime), count, timeoutMs);
  }

  async longPressSortByEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate));
  }

  async expectSortByEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), value, timeoutMs);
  }

  async expectSortByEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByEndDate), count, timeoutMs);
  }

  async longPressShowEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate));
  }

  async expectShowEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), value, timeoutMs);
  }

  async expectShowEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showEndDate), count, timeoutMs);
  }

  async longPressEndDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime));
  }

  async expectEndDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), value, timeoutMs);
  }

  async expectEndDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.endDateTime), count, timeoutMs);
  }

  async longPressSortBySummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary));
  }

  async expectSortBySummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), value, timeoutMs);
  }

  async expectSortBySummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortBySummary), count, timeoutMs);
  }

  async longPressShowSummaryColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions));
  }

  async expectShowSummaryColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), value, timeoutMs);
  }

  async expectShowSummaryColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showSummaryColumnActions), count, timeoutMs);
  }

  async longPressSummaryColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth));
  }

  async expectSummaryColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), value, timeoutMs);
  }

  async expectSummaryColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.summaryColumnWidth), count, timeoutMs);
  }

  async longPressSortByKeyTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask));
  }

  async expectSortByKeyTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), value, timeoutMs);
  }

  async expectSortByKeyTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.sortByKeyTask), count, timeoutMs);
  }

  async longPressShowKeyTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType));
  }

  async expectShowKeyTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), value, timeoutMs);
  }

  async expectShowKeyTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.showKeyTaskType), count, timeoutMs);
  }

  async longPressKeyTaskTypeColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn));
  }

  async expectKeyTaskTypeColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), value, timeoutMs);
  }

  async expectKeyTaskTypeColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.keyTaskTypeColumn), count, timeoutMs);
  }

  async clickUpdatedAMinuteAgo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo));
  }

  async doubleClickUpdatedAMinuteAgo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo));
  }

  async longPressUpdatedAMinuteAgo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo));
  }

  async expectUpdatedAMinuteAgoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), value, timeoutMs);
  }

  async expectUpdatedAMinuteAgoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), timeoutMs);
  }

  async expectUpdatedAMinuteAgoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProectTaskRelatedPage.L.updatedAMinuteAgo), count, timeoutMs);
  }

}
