---
title: Git basics
description: A introduction to Git.
---

## Repositories

Git repositories can be hosted locally on your machine or on a remote server. **Remote** repositories enable collaboration among team members, allowing them to **push** their changes to a shared location and **pull** changes made by others.

A Git repository maintains a complete history of all changes made to the files within it. This history includes information about who made the changes, when they were made, and the specific modifications performed.

You can create a new local repository by cloning an existing remote repository:

```console
git clone <REMOTE_REPO_URL>
```

## Add

The command `git add .` can be used to tell Git to track all the files in the repository. If you add or remove new files, you'll need to run the command again to update what Git is tracking.

## .gitignore

Files or directories can be ignore by using a <a href="https://www.atlassian.com/git/tutorials/saving-changes/gitignore/" target="_blank">gitignore</a> file. For instance creating a file called **.gitignore** with the following content

```
node_modules
test.js
*.log
```

will ignore the folder _node_modules_, the file _test.js_ and any files that with a _.log_ extension.

## Commits

A Git commit is a fundamental operation in the Git version control system. It represents a snapshot of the changes made to the files within a Git repository at a specific point in time. When you make a commit, you are essentially creating a new version of your project.

A commit contains 4 basics informations:

- All the modifications made to the tracked files since the last commit,
- a unique indentifier (or commit id),
- the name of the commit author and a timestamp,
- a commit message that that summarizes the purpose or nature of the changes made in the commit.

A commit points towards its ancestor, since each commit is basically a set of modification added to a previous commit.

**HEAD** is just a pointer that tells you where you are. For example, when you have the following repo with 2 commits:

 <img src="/images/commit1.png" width="30%">

You can create new commits using the command:

```console
git commit -am "<COMMIT_MESSAGE>"
```

The **a** flag tells Git to commit all changed files at once and **m** is for the message.

 <img src="/images/commit2.png" width="50%">

## Branches

In Git, a branch is a lightweight movable pointer to a specific commit within a Git repository's commit history. It represents an independent line of development that diverges from the main codebase, often called the **master** branch.

Branches in Git allow you to work on different features, bug fixes, or experiments without affecting the main codebase until you are ready to merge your changes. Each branch maintains its own commit history, recording the changes made exclusively within that branch.

For example, starting frome the following repo:

 <img src="/images/commit2.png" width="50%">

You can create a new branch from your position (where your **HEAD** is) and switch to it with the following command:

```console
git switch -c feature
```

The **c** option tells Git to create the branch if it doesn't already exists locally.

 <img src="/images/branch1.png" width="50%">

For now, **master** and **feature** points towards the same commit **_6da84_**, e.g. the code in the **master** and the **feature** branch are identical.

Then, after two commits, the repo will look like this:

```console
# Do some work
git commit -am "Fixed bug 1"
# Do some other work
git commit -am "Added nice stuff"
```

 <img src="/images/branch2.png" width="80%">

Now, let's say you want to go back to a previous version of the code that corresponds to the master branch. You can switch to it:

```console
git switch master
```

If you do some work and then commit it, the repo will look like this:

```console
git commit -am "Some work on the master branch"
```

 <img src="/images/branch3.png" width="90%">

Now, let's say you are done working on your feature and you want to merge the code you wrote in the feature branch into your main code (the master branch).

You need first to make sure that you are on the master branch, by using the **checkout** command and then use the **merge** command to merge **feature** into **master**:

```console
git switch master
git merge feature
```

 <img src="/images/branch4.png" width="90%">

The last commit **_e4fef_** is special in the sense that it have two ancestors that represent the merging of two branches and may require you to resolve a merge conflict. If that's the case, Git will tell you that you have a conflict. Once you solved the conflict, you need to commit your changes to finish the merging process.

Don't forget to eventually delete the local branch **feature** as it's not longer needed with the command:

```console
git branch -d feature
```

 <img src="/images/branch5.png" width="90%">
