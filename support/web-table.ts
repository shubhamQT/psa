import type { Locator, Page } from "@playwright/test";

export class WebTable {
  private root: Locator;

  constructor(page: Page, selector: string) {
    this.root = page.locator(selector);
  }

  rows(): Locator {
    return this.root.locator("tbody tr");
  }

  row(index: number): Locator {
    return this.rows().nth(index);
  }

  async rowCount(): Promise<number> {
    return this.rows().count();
  }

  cellAt(rowIndex: number, colIndex: number): Locator {
    return this.row(rowIndex).locator("td, th").nth(colIndex);
  }

  async cell(rowIndex: number, col: number | string): Promise<Locator> {
    if (typeof col === "number") return this.cellAt(rowIndex, col);
    const labeled = this.row(rowIndex).locator(
      `td[data-label="${col}"], th[data-label="${col}"]`,
    );
    if ((await labeled.count()) > 0) return labeled;
    return this.cellAt(rowIndex, await this.columnIndex(col));
  }

  async header(col: number | string): Promise<Locator> {
    const headers = this.root.locator("thead tr:first-child th, thead tr:first-child td");
    if (typeof col === "number") return headers.nth(col);
    return headers.nth(await this.columnIndex(col));
  }

  async getText(rowIndex: number, col: number | string): Promise<string> {
    const loc = await this.cell(rowIndex, col);
    return ((await loc.textContent()) ?? "").trim().replace(/\s+/g, " ");
  }

  async getColumn(col: number | string): Promise<string[]> {
    const count = await this.rowCount();
    const out: string[] = [];
    for (let i = 0; i < count; i++) out.push(await this.getText(i, col));
    return out;
  }

  async getRowData(rowIndex: number): Promise<Record<string, string>> {
    const row = this.row(rowIndex);
    const labeled = row.locator("td[data-label], th[data-label]");
    if ((await labeled.count()) > 0) {
      const entries = await labeled.evaluateAll((els) =>
        els.map((el) => [
          (el.getAttribute("data-label") ?? "").trim(),
          (el.textContent ?? "").trim().replace(/\s+/g, " "),
        ]),
      );
      return Object.fromEntries(entries);
    }
    const headers = await this.columnNames();
    const cells = row.locator("td, th");
    const count = await cells.count();
    const data: Record<string, string> = {};
    for (let i = 0; i < count && i < headers.length; i++) {
      const key = headers[i];
      if (key) data[key] = ((await cells.nth(i).textContent()) ?? "").trim().replace(/\s+/g, " ");
    }
    return data;
  }

  async findRow(col: number | string, value: string, exact = true): Promise<number> {
    const count = await this.rowCount();
    for (let i = 0; i < count; i++) {
      const text = await this.getText(i, col);
      if (exact ? text === value : text.includes(value)) return i;
    }
    return -1;
  }

  async findRowByText(text: string): Promise<number> {
    const count = await this.rowCount();
    const lower = text.toLowerCase();
    for (let i = 0; i < count; i++) {
      const rowText = ((await this.row(i).textContent()) ?? "").toLowerCase();
      if (rowText.includes(lower)) return i;
    }
    return -1;
  }

  getInRow(rowIndex: number, selector: string): Locator {
    return this.row(rowIndex).locator(selector);
  }

  async getSwitchState(rowIndex: number): Promise<boolean> {
    const sw = this.row(rowIndex).locator('[role="switch"]').first();
    return (await sw.getAttribute("aria-checked")) === "true";
  }

  async toggleSwitch(rowIndex: number, targetState?: boolean): Promise<void> {
    const sw = this.row(rowIndex).locator('[role="switch"]').first();
    const current = (await sw.getAttribute("aria-checked")) === "true";
    if (targetState === undefined || current !== targetState) {
      await sw.click();
    }
  }

  async clickLink(rowIndex: number, col: number | string): Promise<void> {
    const c = await this.cell(rowIndex, col);
    await c.locator("a").click();
  }

  async clickButton(rowIndex: number, label?: string): Promise<void> {
    const buttons = this.row(rowIndex).locator('button, [role="button"]');
    if (label) {
      await buttons.filter({ hasText: label }).first().click();
    } else {
      await buttons.last().click();
    }
  }

  async clickMenuOption(label: string): Promise<void> {
    await this.root.page()
      .locator('[role="menu"] [role="menuitem"], [role="listbox"] [role="option"]')
      .filter({ hasText: label })
      .first()
      .click();
  }

  async sortBy(col: string): Promise<void> {
    await (await this.header(col)).click();
  }

  async columnIndex(colName: string): Promise<number> {
    const headers = this.root.locator("thead tr:first-child th, thead tr:first-child td");
    const count = await headers.count();
    for (let i = 0; i < count; i++) {
      const text = ((await headers.nth(i).textContent()) ?? "").trim().replace(/\s+/g, " ");
      if (text.toLowerCase() === colName.toLowerCase()) return i;
    }
    throw new Error(
      `WebTable: column "${colName}" not found — available: ${(await this.columnNames()).join(", ")}`,
    );
  }

  async columnNames(): Promise<string[]> {
    const headers = this.root.locator("thead tr:first-child th, thead tr:first-child td");
    const count = await headers.count();
    const names: string[] = [];
    for (let i = 0; i < count; i++) {
      names.push(((await headers.nth(i).textContent()) ?? "").trim().replace(/\s+/g, " "));
    }
    return names;
  }
}

export function webTable(page: Page, selector: string): WebTable {
  return new WebTable(page, selector);
}
