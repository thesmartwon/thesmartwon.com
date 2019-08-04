---
title:  "<Canvas> Game Engine: Part 1"
date:  2019-07-21T18:30:00-0400
javascript: false
---

For many, the command line is a scary prompt that reminds people of old computers that were hard to use.
<figure>

![Old CRT Terminal](./old-terminal.jpg)
<figcaption>Ooh, scary.</figcaption>
</figure>

For others like me, it's the most powerful tool to control your operating system, whether it be Windows, Mac OSX, or Linux. Let's learn what a command line can do for you! To follow along, open a program on your computer called "terminal" or "cmd".

### Echo... hello!

Once you've started a terminal, try the `echo` command! It simply prints the text you pass it.

```bash
> echo "Hello!"
Hello!
```

<figure>

![You had me at hello](./you-had-me-at-hello.gif)
<figcaption>You had me at hello.</figcaption>
</figure>

## The file system

You have files on your computer than contain everything from your photos to what's needed to boot your computer.

### Listing files
To see some of those files, list them using `ls`.

```bash
> ls
Documents   Pictures   snap   Templates 
Desktop     Downloads  go     Music
```

Actually, your file system is a hierarchy of folders.
You can see where you are in that hierarchy using `pwd` (print working directory).

```bash
> pwd
/home/thesm
```

My terminal started me out in my home directory.
To change directories I use `cd` (change directory).

```bash
> cd /home
> pwd
/home
```

```bash
> cd /
> pwd
/
```

To go back to my home directory, I can use the alias `~` which resolves to `/home/thesm` for me.

```bash
> cd ~
> pwd
/home/thesm
```

<figure>

![Don't Fear the Reaper](./dont-fear-the-reaper.jpg)
<figcaption>Don't fear the computer.</figcaption>
</figure>

Now let me introduce you to the magic of tab completion.
Sometimes, you don't know where you want to `cd` to.
In those cases, press the Tab key after typing `cd ` to get a list of possibilities.

<figure>

![You complete me](./you-complete-me.gif)
<figcaption>Tab completes me.</figcaption>
</figure>


```bash
> cd <Press Tab Key>
bundle/         .npm/           .cache/
.cups/          Pictures/       .dbus/
Desktop/        Public/         Documents/
Downloads/      src/            .gnupg/
go/             Templates/      .IdeaIC2018.3/
Videos/         .vim/
```

As you can see, I have a lot of folders sitting around. You can start typing and then use tab completion to filter them down even more.

```bash
> cd D
Desktop/   Documents/ Downloads/
```

By the way, tab completion works with most commands, so please do use it!

### Moving files

Files can be copied and moved around to suit your needs.
First, let's create an empty directory using `mkdir` to safely play inside and then `cd` into it.

```bash
> mkdir fun
> cd fun
```

Now, let's make a file that says "Hello!".

```bash
> echo "Hello!" > hello.txt
```

This command takes the output of the first command (which is "Hello!") and redirects it to a file named hello.txt.

Now let's copy it using `cp`.

```bash
> cp hello.txt hello2.txt
```

<figure>

![Copy this](./copy-this.png)
![Pasta that](./pasta-that.png)
<figcaption>Copy hello.txt and pasta hello2.txt</figcaption>
</figure>

And let's rename the original using `mv`.

```bash
> mv hello.txt goodbye.txt
```

Let's see the result of our work using `ls`!

```bash
> ls
goodbye.txt  hello2.txt
```

Not exactly exciting yet, but we're learning!

### Reading files

To read a file's contents, you can use `less`, `more`, or my favorite, `cat` (which means concatenate).

<figure>

![Nyan cat](./nyan-cat.jpg)
<figcaption>Cats bring people together.</figcaption>
</figure>

```bash
> cat hello2.txt
Hello!
```

If you decided to use `less`, to exit it just press q.

### Manipulating files

Now comes the fun part. Lets say we want to overwrite goodbye.txt to contain "Goodbye!". Like before, we do:

```bash
> echo "Goodbye!" > goodbye.txt
```

Now let's say we want to make a new file that says "Hello! Goodbye!". `cat` takes care of that too.

```bash
> cat hello2.txt goodbye.txt
Hello!
Goodbye!
```

To make it a file, we just have to redirect the output using `>`.

```bash
> cat hello2.txt goodbye.txt > hello-goodbye.txt
```

Let's say we want to copy all our files into a new directory. Let's make a directory like we did before using `mkdir`, and then use a fancy glob operator called * to copy all the files at once that end in `.txt`.

```bash
> mkdir copies
> cp *.txt copies
```

Hooray, we can manipulate our file system!

## Processes

All those commands we ran (and all programs you run!) are actually creating processes to do work for them, which your operating system also manages. To see running process, use `ps`.

```bash
> ps
  PID TTY          TIME CMD
23093 pts/1    00:00:00 bash
25326 pts/1    00:00:00 ps
```

PID stands for Process ID. Every process has one. TTY is the terminal the command is running on. Time is the amount of CPU time it's taken, and CMD is the command that's being run.

```bash
> top
top - 18:39:16 up  1:12,  1 user,  load average: 0.20, 0.30, 0.27
Tasks: 405 total,   1 running, 315 sleeping,   0 stopped,   0 zombie
%Cpu(s):  3.8 us,  1.6 sy,  0.0 ni, 94.5 id,  0.0 wa,  0.0 hi,  0.1 si,  0.0 st
KiB Mem : 16441856 total,  7211060 free,  3671524 used,  5559272 buff/cache
KiB Swap: 31998972 total, 31998972 free,        0 used. 12522024 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
20097 thesm     20   0 2126196 416264 111964 S  23.8  2.5   5:58.58 code
18850 thesm     20   0 1522628 144840  91992 S  11.9  0.9   2:17.64 code
 2347 thesm     20   0 4679016 323000 101520 S   8.3  2.0   3:25.06 gnome-shell
18902 thesm     20   0  692688 147168  81872 S   7.3  0.9   2:15.90 code
 2215 root      20   0  451816 111980  81116 S   6.0  0.7   1:29.56 Xorg
 1387 root     -51   0       0      0      0 S   1.7  0.0   1:11.42 irq/77-nvidia
 5277 thesm     20   0  362000   8448   6416 S   0.7  0.1   0:20.43 ibus-daemon
25343 thesm     20   0   51452   4228   3468 R   0.7  0.0   0:00.11 top
    1 root      20   0  225836   9704   6812 S   0.3  0.1   0:07.28 systemd
21070 thesm     20   0 2563208 343980 128284 S   0.3  2.1   0:17.76 thunderbird
```

`top` gives a slightly more interesting view. Press `q` to quit it, just like `less`.

You can create processes by running more programs, kill them by PID using `kill`, and even fork existing programs so two copies of them run at once. I won't go in-depth now, but know they are just files being executed.

## Man pages

All of these commands have much more to them. You can pass programs flags (like `cp -r` to `r`ecursively copy a directory), or you can pipe the output of one command to be the input of another using `|` instead of `>`.

Commands are just files sitting in your `$PATH` that happen to be executable. Check your path using `echo`:

```bash
> echo $PATH
/usr/sbin:/usr/bin:/sbin:/bin
```

Try `ls` on things in between the colons to see what programs you can run!

```bash
> ls /usr/bin
```

There's probably a lot of output, so pipe it through less to read it slower! Use the arrow keys to scroll.

```bash
> ls /usr/bin | less
```

You can look up the manual page for commands using `man` to learn all about them.

```bash
> man ls
LS(1)                                                                    User Commands                                                                    LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..
```

Go out and learn about some of my favorite commands!

- `grep`: Find strings in text
- `gcc`: Compile C programs
- `vim`: A wonky text editor that saves keystrokes
- `which`: A program to print the path to other programs in $PATH
- `diff`: Find differences between files
- `readelf`: Show information about executable files
- `python`: Write programs in a simple language
- `printf`: Like `echo` but better
- `tee`: Write to standard output (your terminal...) and another file at the same time
- `zip`: Add files to an archive

<figure>

![Narnia door](./narnia-door.jpg)
<figcaption>The wardrobe is open...</figcaption>
</figure>
