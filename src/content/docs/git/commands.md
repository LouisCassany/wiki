---
title: commands
---

## Initialise Git

```console
# Create a new local repository
git init
```

```console
# Create a working copy of a repository.
git clone <SERVER_URL>
```

```console
# Connect a local repository to a remote repository on a server.
git remote add origin <SERVER_URL>
```

## Branches

```console
# List all branches in your repository.
git branch
```

```console
# Create a new branch called "BRANCH_NAME" and switch to it.
git checkout -b <BRANCH_NAME>
```

```console
# Switch from one branch to another.
git checkout <BRANCH_NAME>
```

```console
# Delete a branch.
git branch -d <BRANCH_NAME>
```

## Add/Commits

```console
# Add files to be trackded by git.
git add <FINE_NAMES>
```

```console
# Tell git to track all files not mentioned in the .gitignore.
git add .
```

```console
# Commit changes to local HEAD with a short commit message.
git commit -am “<COMMIT_MESSAGE>”
```

## Push/Pull/Merge/Diff

```console
# Push a branch to the server.
git push origin <BRANCH_NAME>
```

```console
# Fetch and then merge automatically changes from remote to local (may produce a merge conflict that you have to resolve).
git pull
```

```console
# Merge a different branch into your current branch.
git merge <BRANCH_NAME>
```

```console
# View all the merge conflicts.
git diff
```
