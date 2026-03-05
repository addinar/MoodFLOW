# Code Review Process Using Pull Requests

The team will use a Pull Request workflow to ensure all code changes are reviewed before merged into the `main` branch.

---

## Development Workflow

- All development work will be done in feature branches, Ex. feature/name
  
- Developers will **never** push directly to the `main` branch.

---

## When a Feature is Complete

1. A Pull Request will be created from the feature branch into the `main` branch.
2. The PR must include a clear and meaningful description using the Pull Request template.
3. At least **one team member** must review and approve the PR before it can be merged.
4. The team member assigned to review 

---

## Responsibilities of the Reviewer

During the review process, the reviewer must:

### 1. Verify Code Quality
- Ensure the code is readable and well-structured.
- Confirm that naming conventions are followed.
- Check for unnecessary complexity or duplicated logic.
- Ensure no debug statements or commented code remain.

### 2. Check Functionality
- Confirm that the feature meets the described requirements.
- Check that edge cases and error handling are considered.
- Verify that the implementation aligns with the user story.

### 3. Ensure Standards Compliance
- Confirm that coding standards are followed.
- Ensure formatting and styling is consistent.
- Verify that project structure is maintained.

### 4. Review Testing
- Ensure all necessary tests are added or updated.
- Confirm all tests pass in the CI pipeline.

### 5. Check Documentation
- Verify that documentation is updated if the feature changes functionality.
- Ensure functions and important logic are properly documented.

### 6. Provide Constructive Feedback
- Leave clear, specific, and respectful comments.
- Suggest improvements when necessary.
- Request changes if requirements are not met.

The reviewer must not approve a Pull Request unless all requirements are satisfied.

---

## Merge Requirements

A Pull Request **cannot** be merged unless:

- The code compiles successfully.
- All automated tests pass.
- Coding standards are followed.
- Documentation is updated (if required).
- At least one reviewer approves the pull request.