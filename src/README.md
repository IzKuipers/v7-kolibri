# KolibriOS

This package allows you to run the Kolibri operating system on ArcOS. It's a very minimal implementation of the virtual 86 (v86) project found [here](https://copy.sh/v86)

## What is KolibriOS?

KolibriOS is a tiny yet incredibly powerful and fast operating system. It requires only a few megabyte disk space and 12 MB of RAM to run, but features a rich set of applications that include word processor, image viewer, graphical editor, web browser and over 30 exciting games. It also has full FAT12/16/32 support is implemented, as well as read-only support for NTFS, exFAT, ISO9660 and Ext2/3/4 and boasts an extensive set of drivers for popular sound, network and graphics cards.

Have you ever dreamed of a system that boots in less than few seconds from power-on to working GUI? About applications that start instantly, immediately after clicking an icon, without annoying hourglass pointers? This speed is achieved since the core parts of KolibriOS (kernel and drivers) are written entirely in FASM assembly language! Try KolibriOS and compare it with such heavyweights as Windows and Linux.

KolibriOS has forked off from MenuetOS in 2004, and is run under independent development since then. Your feedback is very much appreciated, and your help is even more welcome.

## Known problems

- Closing the application while the virtual CPU is initializing will most likely cause ArcOS to crash.
- There are no controls for the VM, you only have a close button in the top right corner of ArcOS.
- The resolution is fixed to 1024x768. FPS should be around 50.
- **WARNING**: this application can cause severe performance issues if run on slower systems. Keep that in mind before calling this app or ArcOS laggy.

## Author

Izaak Kuipers [izaak.kuipers@gmail.com](mailto:izaak.kuipers@gmail.com)

## License

MIT
