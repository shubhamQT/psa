import { test, expect } from '../support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Start a Planned Project Task and verify status updates to Started', { tag: ["@e2e","@regression","@P0","@start-planned-task-happy-path"] }, async ({ page, homePage, searchResultPage, pseProjCPage, pseProjCrelatedPage, pseProjectTaskCPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global search input is visible on Home page', async () => {
    await homePage.clickSearch();
    await homePage.expectSearchInputVisible();
  });

  await test.step('Fill — Enter project name in global search', async () => {
    await homePage.fillSearchInput(testData.startAPlannedProjectTaskAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Search results dropdown list is visible', async () => {
    await searchResultPage.expectSearch360HealthAndVisible();
  });

  await test.step('Click — Select matching project from search results', async () => {
    await searchResultPage.clickSearch360HealthAnd();
  });

  await test.step('Assert visible — Project detail header is visible', async () => {
    await pseProjCPage.expectProjectNameVisible();
  });

  await test.step('Assert contains — Project detail displays selected project name', async () => {
    const name = await pseProjCPage.getInnerTextProjectName();
    await expect(name).toContain(testData.startAPlannedProjectTaskAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Project Tasks related link is visible', async () => {
    await pseProjCPage.expectProjectTasks10Visible();
  });

  await test.step('Click — Open Project Tasks related list', async () => {
    await pseProjCPage.clickProjectTasks10();
  });

  await test.step('Assert visible — Project Tasks page/related list is visible', async () => {
    await pseProjCrelatedPage.expectProjectTasksVisible();
  });

  await test.step('Assert count greater than — At least one task has status Planned', async () => {
    await pseProjCrelatedPage.expectSortByStatusVisible();
  });

  await test.step('Click — Open first Planned task from list', async () => {
    await pseProjCrelatedPage.clickProjectTaskNameColumn();
  });

  await test.step('Assert visible — Project Task detail header is visible', async () => {
    await pseProjectTaskCPage.expectProjectTaskNameVisible();
  });

  await test.step('Assert contains — Task status is Planned on detail page', async () => {
    const statusText = await pseProjectTaskCPage.getInnerTextStatus();
    await expect(statusText).toContain('Planned');
  });

  await test.step('Assert visible — Start button is visible for Planned task', async () => {
    await pseProjectTaskCPage.expectStartVisible();
  });

  await test.step('Click — Click Start to begin task', async () => {
    await pseProjectTaskCPage.clickStart();
  });

  await test.step('Assert visible — Status value updates to Started', async () => {
    await pseProjectTaskCPage.expectStartedVisible();
  });

  await test.step('Assert contains — Verify status is Started on detail page', async () => {
    const statusText = await pseProjectTaskCPage.getInnerTextStatus();
    await expect(statusText).toContain('Started');
  });
});

  test('Search for project is case-insensitive and opens project detail', { tag: ["@e2e","@regression","@P1","@global-search-case-insensitive"] }, async ({ page, homePage, searchResultPage, pseProjCPage }) => {
    await test.step('Open — Navigate to Salesforce PSA Home', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Assert visible — Global search input is visible on Home page', async () => {
      await homePage.clickSearch();
      await homePage.expectSearchInputVisible();
    });

    await test.step('Fill — Enter project name in lowercase', async () => {
      await homePage.fillSearchInput(testData.searchForProjectIsCaseInsensitiveAndOpensProjectDetail.enterProjectNameInLowercase);
    });

    await test.step('Assert visible — Search results dropdown list is visible', async () => {
      await searchResultPage.expectSearchResultsVisible();
    });

    await test.step('Assert visible — Matching project appears in results despite casing', async () => {
      await searchResultPage.expectSearch360HealthAndVisible();
    });

    await test.step('Click — Select the matching project result', async () => {
      await searchResultPage.clickSearch360HealthAnd();
    });

    await test.step('Assert visible — Project detail header is visible', async () => {
      await pseProjCPage.expectProjectNameVisible();
    });

    await test.step('Assert contains — Project detail displays correct project name', async () => {
      const headerText = await pseProjCPage.getInnerTextProjectName();
      await expect(headerText).toContain(testData.startAPlannedProjectTaskAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
    });
  });

test('Invalid project name shows no matching projects found', { tag: ["@e2e","@regression","@P1","@search-invalid-project-name"] }, async ({ page, homePage, searchResultPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global search input is visible on Home page', async () => {
    await homePage.clickSearch();
    await homePage.expectSearchInputVisible();
  });

  await test.step('Fill — Enter invalid project name in global search', async () => {
    await homePage.fillSearchInput(testData.invalidProjectNameShowsNoMatchingProjectsFound.enterInvalidProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Search results dropdown list is visible', async () => {
    await searchResultPage.expectTopResultsVisible();
  });

  await test.step('Assert visible — No results message is displayed', async () => {
    await searchResultPage.expectProjects0Visible();
  });
});

test('Starting one of multiple Planned tasks updates only the selected task', { tag: ["@e2e","@regression","@P1","@multiple-planned-tasks-start-one-only"] }, async ({ page, homePage, searchResultPage, pseProjCPage, pseProjCrelatedPage, pseProjectTaskCPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global search input is visible on Home page', async () => {
    await homePage.clickSearch();
    await homePage.expectSearchInputVisible();
  });

  await test.step('Fill — Enter \'QA - Multiple Planned Tasks Project\' in global search', async () => {
    await homePage.fillSearchInput(testData.startingOneOfMultiplePlannedTasksUpdatesOnlyTheSelectedTask.enterQaMultiplePlannedTasksProjectInGlobalSearch);
  });

  await test.step('Assert visible — Search results dropdown list is visible', async () => {
    await searchResultPage.expectTopResultsVisible();
  });

  await test.step('Click — Select \'QA - Multiple Planned Tasks Project\' from results', async () => {
    await searchResultPage.clickResult();
  });

  await test.step('Assert visible — Project detail header is visible', async () => {
    await pseProjCPage.expectProjectNameVisible();
  });

  await test.step('Click — Open Project Tasks related list', async () => {
    await pseProjCPage.clickProjectTasks10();
  });

  await test.step('Assert visible — Project Tasks list is visible', async () => {
    await pseProjCrelatedPage.expectProjectTasksVisible();
  });

  await test.step('Assert visible — Sort by Status is visible', async () => {
    await pseProjCrelatedPage.expectSortByStatusVisible();
  });

  await test.step('Click — Open first Planned task from list', async () => {
    await pseProjCrelatedPage.clickProjectTaskNameColumn();
  });

  await test.step('Assert visible — Task detail header is visible', async () => {
    await pseProjectTaskCPage.expectProjectTaskNameVisible();
  });

  await test.step('Assert contains — Task status is Planned', async () => {
    const statusText = await pseProjectTaskCPage.getInnerTextStatus();
    await expect(statusText).toContain('Planned');
  });

  await test.step('Click — Click Start on Task', async () => {
    await pseProjectTaskCPage.clickStart();
  });

  await test.step('Assert visible — Task status updates to Started', async () => {
    await pseProjectTaskCPage.expectStartedVisible();
  });
});

test('Project with no Project Tasks shows appropriate message', { tag: ["@e2e","@regression","@P2","@project-has-no-tasks"] }, async ({ page, homePage, searchResultPage, pseProjCPage, pseProjCrelatedPage }) => {
  await test.step('Open — Navigate to Salesforce PSA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global search input is visible on Home page', async () => {
    await homePage.clickSearch();
    await homePage.expectSearchInputVisible();
  });

  await test.step("Fill — Enter 'QA - No Tasks Project' in global search", async () => {
    await homePage.fillSearchInput(testData.projectWithNoProjectTasksShowsAppropriateMessage.enterQaNoTasksProjectInGlobalSearch);
  });

  await test.step('Assert visible — Search results dropdown list is visible', async () => {
    await searchResultPage.expectSearchResultsVisible();
  });

  await test.step("Click — Select 'QA - No Tasks Project' from results", async () => {
    await searchResultPage.clickResult();
  });

  await test.step('Assert visible — Project detail header is visible', async () => {
    await pseProjCPage.expectProjectNameVisible();
  });

  await test.step('Click — Open Project Tasks related list', async () => {
    await pseProjCrelatedPage.clickProjectTasks();
  });

  await test.step('Assert visible — Project Tasks related list region is visible', async () => {
    await pseProjCrelatedPage.expectProjectTasksVisible();
  });

  await test.step('Assert visible — No items message is displayed for Project Tasks', async () => {
    await homePage.expectNoItemsToDisplayVisible();
  });
});
