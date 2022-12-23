// @ts-check
const { test, expect } = require("@playwright/test")

test("types bunch of stuff into editor", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Parcel/)

  const editor = page.locator("#monaco-container")
  await editor.click()

  await page.keyboard.press("Enter")
  await page.keyboard.type("// Bla, bla, bla, not a valid JavaScript, right?")
  await page.keyboard.press("Enter")
  await page.keyboard.type("// Oh wait, it is valid; these are just comments.")
  await page.keyboard.press("Enter")
  await page.keyboard.type("// Who would’ve thunk, am I right?")
})
