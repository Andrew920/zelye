# General ways of working for Zelye project

## Overview

Code is version tracked with git and available in the [zelyeProject](https://github.com/Nik-tech-cloud/zelyeProject) repository on GitHub.

Main branch is called `main` and contains the latest stable release, which is ready to be deployed to production.

Feature development and bug fixing is done in `topic` branches, branched from `main`. Once the [Definition of Done (DoD)](#definition-of-done-dod) is reached, `topic` branch is merged into `main` branch.

## Definition of Done (DoD)

- feature/bug worked on is done
- code passes formatters and linters
- tests written and passing
- all prior tests passing
- updated CHANGELOG.md (?)
- code reviewed
- code merged and deployed

## Issue tracking

Issues are listed on Jira? Trello? Github? (insert link). Each issue message should be as clear and verbouse as possible removing any double meanings and keeping it short at the same time.

## Git workflow

### Settings

#### Name and Email

Ensure commits are done using your name and email. This enables other developers to see who made the changes by inspecting the logs.

Input the following lines in your `.gitconfig` file (usually located in `$HOME/.gitconfig`).

```
[user]
	email = besterdavid01@gmail.com
	user = David Bester
```

#### Good to have

The following settings are not required but are recommended to ensure easier workflow. The lines are also added to the `$HOME/.gitconfig`.

```
[alias]
	aa = "!git add . && git add -u . && git status"
	alias = "!git config --list | grep 'alias\\.' | sed 's/alias\\.\\([^=]*\\)=\\(.*\\)/\\1\\\t => \\2/' | sort"
	br = branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate
	c = "commit"
	cia = "commit --amend"
	ciane = "commit --amend --no-edit"
	cm = "commit -m"
	co = "checkout"
	coom = "!git checkout origin/$(git morm)"
	copy = "!git diff $1 | pbcopy"
	fap = "fetch --prune"
	fbrd = "!git branch -D $(git branch | fzf)"
	fco = "!git checkout $(git branch -a | fzf)"
	frb = "!git rebase $(git branch -a | fzf)"
	lg = "log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
	llmd = "!f() { git log --pretty=format:'**%s**%n%>(2)%b' --reverse -n $1 | pbcopy; }; f"
	morm = "!git rev-parse --verify --quiet origin/master &> /dev/null && test $? -eq 0 && echo master || echo main"
	paste = "!pbpaste | git apply -"
	pushf = "push --force-with-lease"
	rb = "rebase"
	rba = "rebase --abort"
	rbc = "rebase --continue"
	rbi = "rebase --interactive"
	rbih = "!f() { git rebase -i HEAD~$1; }; f"
	rbiha = "!f() { git rebase -i --autosquash HEAD~$1; }; f"
	rbo = "rebase --onto"
	rbom = "!git rebase origin/$(git morm)"
	rhh = "reset --hard HEAD"
	rhs = "reset --soft HEAD~1"
	st = "status"
	sta = "stash"
	staply = "!f() { git stash apply stash@{$1}; }; f"
```

The aliases you would be using most of the time are:

- `git fap` - fetches the changes from all remotes and prunes the local copy
- `git rbom` - rebases the current branch with the latest `main` branch

#### Commit message

Commit messages should be formatted as following to ensure easier overview of the project:

```txt
<PART>: Capitalized, short (50 chars or less) summary
(blank line)
More detailed description of the changes made. Wrap it to around 72 characters to ensure that the content fits most terminals.

Refs: <ID>
```

part is one of the following: fe, be, db - (frontend, backend, database respecitvely)

ID is a reference of the issue this commit is about.

`Refs` can be switched with `Fixes` when a bug fix is added.

### Workflow

#### 1. Create a topic branch

Create and check out a new local branch where you will do your work. Usually you would want to checkout from the `main` branch.

```bash
git checkout -b <topic-branch> origin/main
```

When pushing the branch for the first time, ensure tracking is correctly set up:

```bash
git push -u origin <topic-branch>
```

#### 2. Keeping topic branch up-to-date

When changes are pushed to `main` branch, ensure your topic branch is up-to-date.

```bash
git fetch
git checkout <topic-branch>
git rebase origin/main
```

or if you are using the [aliases](#good-to-have):

```bash
git fap
git co <topic-branch>
git rbom
```

#### 3. Code, test

Use the code style for backend and frontend to write your code. Make sure you follow the [DoD](#definition-of-done-dod) and include all the relevant tests (if we are testing the code) and documentation.

#### 4. Commit the changes

Changes should be grouped into logical commits. Refer to [commit message](#commit-message) for details.

```bash
git add <files>     # to track them
git commit
```

If you have set up the [Name and Email](#name-and-email) your credentials should be added alongside the commit.

#### 5. Push the changes

Changes should be pushed to a correct origin branch:

```bash
git push -u origin <topic-branch>
```

If you have done rebasing of the commits you might need to force update your branch.

```bash
git push -fu origin <topic-branch>
```

#### 6. Open a merge/pull request

When changes in your branch are completed, a merge/pull request has to be opened on Gitlab.

When opening a new request, ensure that your branch is up-to-date with `main` and commits are properly formatted.

#### 7. Code review

One of your peers must review the changes you have made on the topic branch. The review is done on the web client and the reviewer should check the following:

- ensure all the automated tasks have passed succesfully
- commits are logical (propose rebase if needed)
- [commit message](#commit-message) are as agreed
- code is formatted correctly (coding style, coding format)
- changelog correctly updated
- propose code modifications when nescessary
- submit review with `approve` if everything is as it should be

Code can be merged into the `main` when:

- all the reviewer's comments have been resolved
- when no one is requesting changes
- when at least one approval is received

When changes are made after receiving a comment, it is preffered to be done in a new commit on top of the original changes to ensure the verification of the new changes more easily. After the comment is resolved, the commit is rebased (squash, fix...) before merging.
