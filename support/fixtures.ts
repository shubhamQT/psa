import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { ProectTaskRelatedPage } from "../pageobjects/ProectTaskRelatedPage";
import { ProjectDetailsPage } from "../pageobjects/ProjectDetailsPage";
import { ProjectListPage } from "../pageobjects/ProjectListPage";
import { PseProjectTaskCPage } from "../pageobjects/PseProjectTaskCPage";
import { SearchResultPage } from "../pageobjects/SearchResultPage";

type AppFixtures = {
  homePage: HomePage;
  proectTaskRelatedPage: ProectTaskRelatedPage;
  projectDetailsPage: ProjectDetailsPage;
  projectListPage: ProjectListPage;
  pseProjectTaskCPage: PseProjectTaskCPage;
  searchResultPage: SearchResultPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  proectTaskRelatedPage: async ({ page }, use) => {
    await use(new ProectTaskRelatedPage(page));
  },
  projectDetailsPage: async ({ page }, use) => {
    await use(new ProjectDetailsPage(page));
  },
  projectListPage: async ({ page }, use) => {
    await use(new ProjectListPage(page));
  },
  pseProjectTaskCPage: async ({ page }, use) => {
    await use(new PseProjectTaskCPage(page));
  },
  searchResultPage: async ({ page }, use) => {
    await use(new SearchResultPage(page));
  },
});

export { expect };
