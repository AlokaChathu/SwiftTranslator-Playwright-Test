# IT3040 Assignment 1 - Automation Testing

**Student ID:** [INSERT YOUR STUDENT ID]
**Option:** Option 1 (Singlish to Sinhala)
**Target Application:** https://www.swifttranslator.com/

## Project Description
This repository contains the automated test suite for Assignment 1 of the IT3040 (ITPM) module. The project uses **Playwright** with **JavaScript** to test the functional accuracy, robustness, and UI stability of the Singlish-to-Sinhala transliteration system.

The test suite covers 35 scenarios:
* **24 Positive Functional Scenarios:** (Simple/Compound sentences, Tenses, Formatting, etc.)
* **10 Negative Functional Scenarios:** (Error handling, Chat shorthand, Typos)
* **1 UI Scenario:** (Real-time output updates)

## Prerequisites
Before running the tests, ensure you have the following installed:
NPM (Included with Node.js)

## Installation Instructions

1.  **Clone the repository** (or unzip the project folder):
    ```bash
    git clone https://github.com/theshanGeeth123/SwiftTranslator-Playwright-Test.git
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## How to Run Tests

### Run all tests in Headless Mode (Background)

npx playwright test --headed

### Test Report

npx playwright show-report  
