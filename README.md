PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git init

Initialized empty Git repository in C:/Users/Asus/OneDrive/Desktop/sigma_git_practice2/.git/
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        bi/
        hi/

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git add .

PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   bi/index.html
        new file:   bi/style.css
        new file:   hi/index2.html
        new file:   hi/style2.css

PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git commit -m "commit all"

[master (root-commit) 73c0b93] commit all
 4 files changed, 22 insertions(+)
 create mode 100644 bi/index.html
 create mode 100644 bi/style.css
 create mode 100644 hi/index2.html
 create mode 100644 hi/style2.css
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status
On branch master
nothing to commit, working tree clean
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git push origin main

error: src refspec main does not match any
error: failed to push some refs to 'origin'
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git remote add origin https://github.com/yashpatil81/practice27.git
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git remote -v

origin  https://github.com/yashpatil81/practice27.git (fetch)
origin  https://github.com/yashpatil81/practice27.git (push)
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git branch
* master
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git branch -M main

PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git branch        
* main
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git push origin main

Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 20 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 580 bytes | 580.00 KiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/yashpatil81/practice27.git
 * [new branch]      main -> main
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> 
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   bi/index.html
        modified:   hi/index2.html

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git add .

PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   bi/index.html
        modified:   hi/index2.html

PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git commit -m "Add hello to hi and bi"

[main bf6a735] Add hello to hi and bi
 2 files changed, 2 insertions(+), 2 deletions(-)
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status

On branch main
nothing to commit, working tree clean
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git push origin main

Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 20 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 560 bytes | 186.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/yashpatil81/practice27.git
   73c0b93..bf6a735  main -> main
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> 
PS C:\Users\Asus\OneDrive\Desktop\sigma_git_practice2> git status
On branch main
nothing to commit, working tree clean





