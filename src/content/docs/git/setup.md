---
title: Setup
---

## .gitconfig

Edit your `.gitconfig` file located at `~/.gitconfig`. For windows, the path is `C:\Users\<USERNAME>\.gitconfig`.

You need to tell Git who you are, so that the commits you make are authenticated:

```
[user]
	name = Louis Cassany
	email = louis.Cassany@beyond-the-sea.fr
```

## SSH key

Open a terminal and run

```console
ssh-keygen
```

Follow the instruction, don't give it a password, just type `enter` when asked for it.

The generated key should be named _id_rsa.pub_ by default and is located at `~/.ssh/` (`C:\Users\<USERNAME>\.ssh\id_rsa.pub` for windows).

The content will look like this:

```
ssh-rsa AAAAB3NzaC1yc2AAAADAQABAAABgQCnrUlzTazeZMHo3UO+m02HgqgO6RB+dtSsFdRSoRm9CnbGP5FeY80MJciWbb3jiEcrSnqsP+cKKdUZipYShtYbn8QBIpivMmn9mdk+G5sZ2S+P1sP+3//Ztg8i/biJXkPn2FOdHH4KpY6lxzE6yuxSBnbT15iyR3TqeSSvcbyxFbefgiwxtzwfPHeoIRP0fSM5MD62s8Y6gD3rK4e2wIDfPoYza6a3Xne/wwEqfL6ZgGmhvFvnZPwXzFJcskQorat4CFW7aQd7GTQfWlz0Zu1HVyMEtMT0KIzxUMz9jyFk1x4yiwlRFkiq4kts4yJoJY4JzROpneWfMspNiw58p8DThVp5DkUQD2vMPV00lI7YEyYojmE6dyFpP+EaGXMuadrMlJLWF6/49nQeMQwT0zyDQkHtMMTmhm6wIzqwOHTOKW4vSlMemfbTX5NFrywM/kYziLCnDswxbCqTCqvivRyRZZ2Q97ZsjOycpmhyp6I+IbGSV/B/0= azuread\louiscassany@BEYOND-27-W
```

Log into Github, go into you settings and then _SSH and GPG keys_ and add a new SSH key by pasting the content _id_rsa.pub_.
