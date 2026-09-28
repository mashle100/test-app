# Quiz CLI

An interactive command-line quiz game for learning JavaScript, Node.js, and general programming concepts.

## Overview

Quiz CLI presents programming questions in a terminal-based interactive session. You choose a category and the number of questions, answer multiple-choice prompts, receive immediate feedback and explanations, and see a final score with a review of incorrect answers.

The project is implemented with Node.js ES modules and uses only Node.js built-in modules. Quiz content is stored in `questions.json`.

> **Current repository layout issue:** `index.js` currently imports modules from `src/` and loads questions from `data/questions.json`, but the repository stores those files at the project root. As committed, `npm start` will fail until either the files are moved to the paths expected by `index.js` or the paths in `index.js` are updated.

## Features

- Interactive category selection
- Three quiz categories:
  - JavaScript Basics
  - Node.js Fundamentals
  - General Programming
- Choice of all available questions, 3 questions, or 5 questions when the category contains enough questions
- Randomized question order for each quiz
- Multiple-choice answers with input validation
- Immediate correct or incorrect feedback
- Explanations for questions
- Terminal progress bar
- Final score and percentage
- Performance message based on the score
- Review of incorrect answers
- Option to play again
- ANSI terminal colors without external dependencies

## Technology Stack

| Category | Technology |
| --- | --- |
| Language | JavaScript |
| Runtime | Node.js `>=18.0.0` |
| Module system | ECMAScript modules (`"type": "module"`) |
| Input handling | Node.js built-in `readline` module |
| File access | Node.js built-in `fs/promises` module |
| Data format | JSON |
| Testing command | Node.js built-in test runner command |
| External runtime dependencies | None |

## Prerequisites

- Node.js version 18 or newer
- A terminal that supports interactive standard input and ANSI escape colors

No third-party packages are declared in `package.json`.

## Installation

Clone the repository and enter its directory:

```bash
git clone <repository-url>
cd test-app
```

This project does not declare external dependencies, so there is no package installation step required by the repository configuration.

Before running the application, resolve the path mismatch described in [Known Issues](#known-issues).

## Running the Application

The configured start command is:

```bash
npm start
```

It runs `node index.js`. With the current file layout, the command is expected to fail because `index.js` references `./src/input.js`, `./src/quiz.js`, `./src/colors.js`, and `data/questions.json`, while those files are currently located at the repository root.

## Usage

When the path mismatch is corrected, the application workflow is:

1. Choose a quiz category.
2. Choose to answer all questions, 3 questions, or 5 questions when available.
3. Press Enter to begin.
4. Enter the number corresponding to an answer choice.
5. Review immediate feedback and the explanation, then press Enter to continue.
6. Review the final score and any incorrect answers.
7. Choose whether to play again.

Input selections are entered as numbers. Invalid category, question-count, or answer selections are rejected and prompted again. Replay confirmation accepts responses beginning with `y` as yes; other responses are treated as no.

## Question Data

Questions are read from `questions.json` as a `categories` object. Each category contains a display `name` and a `questions` array. Each question contains:

- `question`: The prompt text
- `options`: The available answer strings
- `answer`: The zero-based index of the correct option
- `explanation`: Feedback shown after answering

The repository currently contains 15 questions: 5 in each of the three categories.

## Project Structure

```text
.
├── index.js        # Application entry point and main quiz loop
├── input.js        # Readline interface, selection, confirmation, and pause helpers
├── quiz.js         # Quiz class, shuffling, scoring, feedback, and results
├── colors.js       # ANSI color and text-style helpers
├── questions.json  # Categories and quiz questions
├── package.json     # Project metadata, scripts, and Node.js requirement
└── README.md        # Project documentation
```

`index.js` currently expects the JavaScript modules under `src/` and the question data under `data/`; the checked-in structure shown above does not match those references.

## Testing

The package defines this test command:

```bash
npm test
```

It runs:

```bash
node --test
```

No test files are present in the repository, so no project-specific automated test cases are documented or available.

## Build

No build step is configured. The application is intended to run directly with Node.js.

## Configuration

No environment variables, configuration files, command-line arguments, database connections, or external services are defined by the repository.

The quiz content can be changed by editing `questions.json` while preserving its existing structure and zero-based answer indexes.

## Troubleshooting

### `ERR_MODULE_NOT_FOUND` when running `npm start`

`index.js` references modules in `src/`, but the files are currently at the repository root. It also looks for `data/questions.json`, while `questions.json` is at the repository root.

Resolve the inconsistency by either:

- Moving `input.js`, `quiz.js`, and `colors.js` into `src/`, and moving `questions.json` into `data/`; or
- Updating the import paths and question-file path in `index.js` to match the current root-level layout.

### Node.js version errors

Use Node.js 18 or newer, as required by the `engines` field in `package.json`.

## Known Issues

- The configured entry point does not match the committed file layout, so the application cannot start successfully without a path correction.
- The repository contains no automated test files despite defining an `npm test` script.
- `package.json` declares an MIT license, but no `LICENSE` file is present in the repository.

## Development Notes

- The project uses ES module `import`/`export` syntax because `package.json` sets `"type": "module"`.
- Question order is randomized with a Fisher–Yates shuffle when a `Quiz` instance is created.
- The selected question count is applied before the quiz is created; the quiz then shuffles that selected subset.
- Terminal styling is implemented locally with ANSI escape codes in `colors.js`; no color package is required.
- `index.js` handles file-loading and runtime errors by printing the error and exiting with status 1.

## License

`package.json` identifies the project license as **MIT**. A `LICENSE` file is not included in the repository.

## Documentation Notes

The repository does not specify a canonical clone URL, maintainer information, contribution guidelines, or a deployment process. The intended resolution for the mismatch between `index.js` paths and the committed file layout also requires clarification or a code change.