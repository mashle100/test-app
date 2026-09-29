import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await test.step('Open the EPAM homepage', async () => {
      await page.goto('https://www.epam.com/');
    });

    await test.step('Select Services from the header menu', async () => {
      await page.getByRole('banner').getByRole('link', { name: 'Services' }).click();
    });

    await test.step('Open Explore Our Client Work', async () => {
      await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    });

    await test.step('Verify Client Work is visible', async () => {
      await expect(page).toHaveURL(/\/services\/client-work\/?$/);
      await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
    });
  });
});
