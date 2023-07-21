---
title: Working with remotes
description: Strategies and best practices for working/collaborating with remote repositories
---

## Setting up a remote repository

If you clone a repository from a server (Github for example), the remote is already set as the server.

```console
git clone <REMOTE_REPO_URL> <FOLDER_NAME>
```

The **FOLDER_NAME** option is optional. By default, the remote server (where you clonned from) is named **origin**.

## Fetch/Switch

The git fetch command is used to retrieve the latest changes from a remote repository without automatically merging them with your local branch. It updates your local copy of the remote repository, allowing you to see the latest commits and branches but it **does not modify your working directory or current branch**.

When you run git fetch, Git connects to the remote repository specified in your configuration (usually called "origin") and fetches any new commits or changes that exist there. It updates your local copy of the remote branches and stores them as remote tracking branches, which are prefixed with **origin\/**.

For instance, let's say we have a local repository with a master branch and a remote repository with the same master branch as well as a develop branch that have been pushed by other collaborators. Calling `git fetch` will produce the result shown on the picture below:

 <img src="/images/fetch1.png" width="75%">

Git fetch allows our local repo to get updated with the latest changes comming from the remote. However, this operation is considered safe, as it does not modify our files, it only **fetches** the lastest changes, allowing you to see what happened on the remote. It's up to you if you want to merge the changes in your local repo.

If we inspect the available branches with `git branch -a`, we'll see the following results

```
*master
remotes/origin/develop
remotes/origin/master
```

The first one is our local **master** branch and the two other are from the remote server and were obtained via `git fetch`.

If we want to get a local copy of the **origin/develop** branch we can use the **switch** command:

```console
git switch develop
```

Note that when Git is unable to find a branch in your local repository, it will assume that you want to switch to the respective remote branch with the same name. It will then create a local branch with the same name. It will also set up a tracking relationship between your remote and local branch so that `git pull` and `git push` will work as intended.

 <img src="/images/fetch2.png" width="75%">

## Fetching periodically

If you are working on a feature branching out from the develop branch

 <img src="/images/fetch3.png" width="60%">

and someone keep pushing new changes to the develop branch on the server:

<img src="/images/fetch4.png" width="60%">

Fetching periodically and merging the **origin/develop** branch into your **feature** branch allows your code to stay relevent and prevent future merge conflicts when you will want to merge your feature into the develop branch, as intented from the start.

```console
git fetch
git merge remotes/origin/develop
...
git fetch
git merge remotes/origin/develop
```

<img src="/images/fetch5.png" width="80%">

## Push

You can use the command `git push` to send a branch to the remote server or to update a branch on the remote repository.

You may encounter the following message if your `git push` command fails:

```
> git push
fatal: The current branch feature has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature
```

It means that either the **feature** branch doesn't exist on the remote or that the our local **feature** has no upstream branch (Git doesn't know where to push our branch).

You can resolve it by telling Git explicity what you want to do:

```console
git push -u origin feature
```

Note that you only have to do it once, subsequent `git push` should work as itended.

## Push

You can use the command `git push` to send a branch to the remote server or to update a branch on the remote repository.

You may encounter the following message if your `git push` command fails:

```
> git push
fatal: The current branch feature has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature
```

It means that either the **feature** branch doesn't exist on the remote or that the our local **feature** has no upstream branch (Git doesn't know where to push our branch).

You can resolve it by telling Git explicity what you want to do:

```console
git push -u origin feature
```

Note that you only have to do it once, subsequent `git push` should work as itended.

## Pull

`git pull` incorporates changes from a remote repository into the **current branch** (it won't update all the branches, only the current branch you're on). If the current branch is behind the remote, then by default it will fast-forward the current branch to match the remote. If the current branch and the remote have diverged, you may have to resolve a merge conflict.

More precisely, git pull runs git fetch with the given parameters and then will call git merge to reconcile diverging branches.
