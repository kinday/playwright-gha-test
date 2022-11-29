// @ts-check
const { test, expect } = require("@playwright/test")

test("validates username presence", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Parcel/)

  const submitButton = page.getByRole("button", { name: "Submit" })
  await submitButton.click()

  const message = page.getByText("Username is required")
  await expect(message).toBeVisible()
})

test("validates password presence", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Parcel/)

  const usernameInput = page.getByLabel("Username")
  await usernameInput.type("kinday")

  const submitButton = page.getByRole("button", { name: "Submit" })
  await submitButton.click()

  const message = page.getByText("Password is required")
  await expect(message).toBeVisible()
})

test("validates credentials", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Parcel/)

  const usernameInput = page.getByLabel("Username")
  await usernameInput.type("foobar")

  const passwordInput = page.getByLabel("Password")
  await passwordInput.type("bazqux")

  const submitButton = page.getByRole("button", { name: "Submit" })
  await submitButton.click()

  const message = page.getByText("Incorrect credentials")
  await expect(message).toBeVisible()
})

test("logs in", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Parcel/)

  const usernameInput = page.getByLabel("Username")
  await usernameInput.type("kinday")

  const passwordInput = page.getByLabel("Password")
  await passwordInput.type(
    "qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890"
  )

  const submitButton = page.getByRole("button", { name: "Submit" })
  await submitButton.click()

  const message = page.getByText("Welcome kinday!")
  await expect(message).toBeVisible()
})
