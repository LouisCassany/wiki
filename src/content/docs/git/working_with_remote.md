---
title: Working with remote repositories
description: Strategies and best practices for working/collaborating with remote repositories
---

## Setting up a remote repository

If you clone a repository from a server (Github for example), the remote is already set as the server.

```console
git clone <REMOTE_REPO_URL> <FOLDER_NAME>
```

The **FOLDER_NAME** option is optional. By default, the remote server (where you clonned from) is named **origin**.

## Fetch/checkout

The git fetch command is used to retrieve the latest changes from a remote repository without automatically merging them with your local branch. It updates your local copy of the remote repository, allowing you to see the latest commits and branches but it **does not modify your working directory or current branch**.

When you run git fetch, Git connects to the remote repository specified in your configuration (usually called "origin") and fetches any new commits or changes that exist there. It updates your local copy of the remote branches and stores them as remote tracking branches, which are prefixed with **origin\/**.

For instance, let's say we have a local repository with a master branch and a remote repository with the same master branch as well as a develop branch that have been pushed by other collaborators. Calling `git fetch` will produce the result shown on the picture below:

 <img src="/images/fetch1.png" width="75%">

We can only _see_ the modification comming from the remote server, not the actual changes on the files. If we inspect the available branches with `git branch -a`, we'll see the following results

```
*master
remotes/origin/develop
remotes/origin/master
```

The first one is our local **master** branch and the two other are from the remote server.

If we want the **origin/develop** branch to show up locally (getting the modifications in our files), we can use the checkout command to create a new branch called **develop** from the remote branch:

```console
git checkout -b develop origin/develop
```

 <img src="/images/fetch2.png" width="75%">

## Fetching periodically

If you are working on a feature branching out from the develop branch

 <img src="/images/fetch3.png" width="60%">

and someone keep pushing new changes to the develop branch on the server:

<img src="/images/fetch4.png" width="60%">

Fetching periodically and merging the **origin/develop** branch into your **feature** branch allows your code to stay relevent and prevent future merge conflict when you will want to merge your feature into the develop branch, as intented from the start.

```console
git fetch
git merge remotes/origin/develop
```

<img src="/images/fetch5.png" width="80%">
