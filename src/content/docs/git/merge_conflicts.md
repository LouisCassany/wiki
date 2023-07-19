---
title: Merge conflicts
description: Merge conflicts
---

## What's a merge conflict

A merge conflict occurs in Git when there are conflicting changes between two branches that are being merged together. It happens when Git is unable to automatically reconcile the differences between the branches and requires manual intervention to resolve the conflicting changes.

Git is kind enough to mark the problematic areas in the file where the conflict occurs. They’re surrounded by <<<<<<< and >>>>>>>. The content after the first marker originates from our current working branch (HEAD). The line with the equals signs (=======) separates the two conflicting changes. Finally, the changes from the other branch are displayed (develop in this example). You need to go into the file (or use a graphical tool) to delete the line you want to remove in order to fix the conflict.

 <img src="/images/conflict1.png" width="80%">
