import { test, expect } from '@playwright/test';

test('', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Example Domain');
});
