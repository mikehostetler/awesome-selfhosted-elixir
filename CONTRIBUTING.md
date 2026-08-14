# Contribution Guide

Thank you for helping to improve Awesome Self-hosted Elixir.

## Inclusion Requirements

An application must meet all of these requirements:

- It is a usable application, not only a library, framework, example, or starter project.
- A user can run it on hardware or infrastructure that the user controls.
- Elixir is a primary server-side language or an important part of the server.
- Its source code is publicly available.
- Its self-hosted core has an OSI-approved open-source license.
- It has clear installation or deployment instructions.
- It is maintained, stable, or widely used.
- Its repository is not archived.

Optional enterprise modules are permitted when the self-hosted core remains useful and uses an open-source license. The list entry must state that the project has separately licensed modules.

## Before You Submit an Application

1. Search the README and open pull requests for the application.
2. Confirm that the installation instructions work.
3. Confirm the current license from the repository.
4. Confirm that Elixir is used in the server. Do not rely only on a repository topic.
5. Select the category that best describes the main user purpose.

## Entry Format

Use this format:

```markdown
- [Application](SOURCE_URL) - Short description that starts with a capital letter and ends with a period. `SPDX-License-Identifier`.
```

Keep entries in alphabetical order. Use the source-code repository as the main link. Use one sentence for the description.

## Pull Requests

- Add one application per pull request.
- Explain how the application meets each inclusion requirement.
- Do not change unrelated entries.
- Run `npm test` before you submit the pull request.

Maintenance changes, corrections, and removals can contain more than one related entry.

## Removal

An application can be removed when it is archived, has no usable self-hosting instructions, changes to a non-open-source license, or no longer uses Elixir in its server.

A stable application does not need frequent commits. Lack of recent commits is not sufficient evidence for removal when the application continues to work and receives necessary maintenance.
