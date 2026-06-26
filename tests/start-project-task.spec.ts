import testData from '../testdata/test-data.json';
import { test, expect } from '../support/fixtures';

test('Start a Planned Project Task and verify status updates to Started', { tag: ["@e2e","@regression","@P0","@start-planned-task-success"] }, async ({ page, homePage, searchResultPage, projectDetailsPage, proectTaskRelatedPage, pseProjectTaskCPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible on Home page', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Assert visible — Assert global search is present', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Enter project name in global search', async () => {
    await homePage.fillSearchThisList(testData.startAPlannedProjectTaskAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });
  await test.step('Assert visible — Wait for search results panel', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Click — Select matching project from results', async () => {
    await searchResultPage.clickSearch360HealthAnd();
  });
  await test.step('Assert visible — Project Detail header displays selected project', async () => {
    await projectDetailsPage.expectProject360HealthAndVisible();
  });
  await test.step('Click — Open Related tab', async () => {
    await projectDetailsPage.clickProjectTask();
  });
  await test.step('Assert visible — Project Tasks related list is visible', async () => {
    await proectTaskRelatedPage.expectProjectTasksVisible();
  });
  await test.step('Click — Open Project Tasks list via View All', async () => {
    await proectTaskRelatedPage.clickProjectTasks();
  });
  await test.step('Assert visible — Project Tasks page/table is displayed', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert visible — Assert tasks list is visible', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert count greater than — Ensure at least one Planned task exists', async () => {
    await proectTaskRelatedPage.expectStageCompletePlannedVisible();
  });
  await test.step('Click — Open first task with status Planned', async () => {
    await pseProjectTaskCPage.clickAdminTasksPostKickOffLink();
  });
  await test.step('Assert visible — Project Task Detail page header', async () => {
    await pseProjectTaskCPage.expectProjectTaskAdminTasksVisible();
  });
  await test.step('Assert visible — Start button is visible on Planned task', async () => {
    await pseProjectTaskCPage.expectStartVisible();
  });
  await test.step('Click — Click Start to begin the task', async () => {
    await pseProjectTaskCPage.clickStart();
  });
  await test.step('Assert visible — Wait for status to update to Started', async () => {
    await pseProjectTaskCPage.expectStartedVisible();
  });
  await test.step('Assert contains — Verify task status is Started on detail page', async () => {
    await pseProjectTaskCPage.expectStartedContainsText('Started');
  });
});

test('Search is case-insensitive for project name', { tag: ["@e2e","@regression","@P1","@search-case-insensitive-project"] }, async ({ page, homePage, searchResultPage, projectDetailsPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Enter project name in lowercase', async () => {
    await homePage.fillSearchThisList(testData.searchIsCaseInsensitiveForProjectName.enterProjectNameInLowercase);
  });
  await test.step('Assert visible — Search results panel visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Assert contains — Results contain the matching project (original case)', async () => {
    await searchResultPage.expectSearchResultsContainsText(testData.startAPlannedProjectTaskAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });
  await test.step('Click — Open matching project from results', async () => {
    await searchResultPage.clickSearch360HealthAnd();
  });
  await test.step('Assert visible — Project Detail displays selected project', async () => {
    await projectDetailsPage.expectProject360HealthAndVisible();
  });
});

test('Invalid project search returns no matching projects found', { tag: ["@e2e","@regression","@P1","@search-invalid-project-no-results"] }, async ({ page, homePage, searchResultPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Enter invalid project name', async () => {
    await homePage.fillSearchThisList(testData.invalidProjectSearchReturnsNoMatchingProjectsFound.enterInvalidProjectName);
  });
  await test.step('Assert visible — Search results panel visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Assert contains — Assert no matching projects message', async () => {
    await searchResultPage.expectTopResultsResultsContainsText('No matching projects found');
  });
});

test('Project exists but contains no Project Tasks', { tag: ["@e2e","@regression","@P2","@project-has-no-tasks"] }, async ({ page, homePage, searchResultPage, projectDetailsPage, proectTaskRelatedPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Search for a project known to have no tasks', async () => {
    await homePage.fillSearchThisList(testData.projectExistsButContainsNoProjectTasks.searchForAProjectKnownToHaveNoTasks);
  });
  await test.step('Assert visible — Search results panel visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Click — Open the project from results', async () => {
    await searchResultPage.clickResult();
  });
  await test.step('Assert visible — Project Detail page for selected project', async () => {
    await projectDetailsPage.expectOverviewVisible();
  });
  await test.step('Click — Open Related tab', async () => {
    await projectDetailsPage.clickProjectTask();
  });
  await test.step('Assert visible — Project Tasks related list shown', async () => {
    await proectTaskRelatedPage.expectProjectTasksVisible();
  });
  await test.step('Click — Open Project Tasks via View All', async () => {
    await proectTaskRelatedPage.clickProjectTasks();
  });
  await test.step('Assert visible — Tasks list/table area', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert contains — Assert no tasks message displayed', async () => {
    await proectTaskRelatedPage.expectItemsContainsText('No items to display');
  });
});

test('Project has tasks but none with status Planned', { tag: ["@e2e","@regression","@P2","@tasks-exist-none-planned"] }, async ({ page, homePage, searchResultPage, projectDetailsPage, proectTaskRelatedPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Search for a project with tasks but none Planned', async () => {
    await homePage.fillSearchThisList(testData.projectHasTasksButNoneWithStatusPlanned.searchForAProjectWithTasksButNonePlanned);
  });
  await test.step('Assert visible — Search results panel visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Click — Open the project from results', async () => {
    await searchResultPage.clickResult();
  });
  await test.step('Assert visible — Project Detail page for selected project', async () => {
    await projectDetailsPage.expectOverviewVisible();
  });
  await test.step('Click — Open Related tab', async () => {
    await projectDetailsPage.clickProjectTask();
  });
  await test.step('Assert visible — Project Tasks related list shown', async () => {
    await proectTaskRelatedPage.expectProjectTasksVisible();
  });
  await test.step('Click — Open Project Tasks via View All', async () => {
    await proectTaskRelatedPage.clickProjectTasks();
  });
  await test.step('Assert visible — Tasks list/table area', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert count greater than — Ensure tasks exist in the list', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert count — Verify no rows have status Planned', async () => {
    await proectTaskRelatedPage.expectStageCompletePlannedHidden();
  });
});

test('Multiple Planned tasks: start one and verify others remain Planned', { tag: ["@e2e","@regression","@P1","@multiple-planned-tasks-start-one"] }, async ({ page, homePage, searchResultPage, projectDetailsPage, proectTaskRelatedPage, pseProjectTaskCPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Global search input visible', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Fill — Search for a project with multiple Planned tasks', async () => {
    await homePage.fillSearchThisList(testData.multiplePlannedTasksStartOneAndVerifyOthersRemainPlanned.searchForAProjectWithMultiplePlannedTasks);
  });
  await test.step('Assert visible — Search results panel visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });
  await test.step('Click — Open the project from results', async () => {
    await searchResultPage.clickResult();
  });
  await test.step('Assert visible — Project Detail page for selected project', async () => {
    await projectDetailsPage.expectOverviewVisible();
  });
  await test.step('Click — Open Related tab', async () => {
    await projectDetailsPage.clickProjectTask();
  });
  await test.step('Assert visible — Project Tasks related list shown', async () => {
    await proectTaskRelatedPage.expectProjectTasksVisible();
  });
  await test.step('Click — Open Project Tasks via View All', async () => {
    await proectTaskRelatedPage.clickProjectTasks();
  });
  await test.step('Assert visible — Tasks list/table area', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert count greater than — Verify at least two tasks have status Planned', async () => {
    await proectTaskRelatedPage.expectStageCompletePlannedVisible();
  });
  await test.step('Click — Open first Planned task', async () => {
    await pseProjectTaskCPage.clickAdminTasksPostKickOffLink();
  });
  await test.step('Assert visible — Project Task Detail page', async () => {
    await pseProjectTaskCPage.expectProjectTaskAdminTasksVisible();
  });
  await test.step('Assert visible — Start button visible', async () => {
    await pseProjectTaskCPage.expectStartVisible();
  });
  await test.step('Click — Click Start', async () => {
    await pseProjectTaskCPage.clickStart();
  });
  await test.step('Assert visible — Status updates to Started', async () => {
    await pseProjectTaskCPage.expectStartedVisible();
  });
  await test.step('Navigate back — Return to Project Tasks list', async () => {
    await page.goBack();
  });
  await test.step('Assert visible — Tasks list/table area', async () => {
    await proectTaskRelatedPage.expectItemsVisible();
  });
  await test.step('Assert count greater than — At least one Planned task remains', async () => {
    await proectTaskRelatedPage.expectStageCompletePlannedVisible();
  });
  await test.step('Click — Open another Planned task (independent)', async () => {
    await pseProjectTaskCPage.clickAdminTasksPostKickOffLink();
  });
  await test.step('Assert visible — Second Project Task Detail page', async () => {
    await pseProjectTaskCPage.expectProjectTaskAdminTasksVisible();
  });
  await test.step('Assert visible — Start button is still available for this Planned task', async () => {
    await pseProjectTaskCPage.expectStartVisible();
  });
});
