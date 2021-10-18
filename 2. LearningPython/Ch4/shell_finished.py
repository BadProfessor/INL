#
# Example file for working with filesystem shell methods
#
import os
from os import path

# shell utilities module
import shutil

# module for the archives
from shutil import make_archive

# for the zipfile module
from zipfile import ZipFile


def main():
    # make a duplicate of an existing file
    if path.exists("textfile.txt"):
        # get the path to the file in the current directory
        # the real path from the file
        # src = path.realpath("textfile.txt")

        # let's make a backup copy by appending "bak" to the name
        # dst = src + ".bak"
        # now use the shell to make a copy of the file
        # shutil.copy(src, dst)

        # copy over the permissions, modification times, and other info
        # shutil.copystat(src, dst)

        # # # rename the original file
        # os.rename("textfile.txt", "newfile.txt")

        # # now put things into a ZIP archive
        # find the source path and split it from the file
        # root_dir, tail = path.split(src)
        # make the actual zip
        # shutil.make_archive("archive", "zip", root_dir)

        # more fine-grained control over ZIP files
        # object contructor with write access
        with ZipFile("testzip.zip", "w") as newzip:
            # write the content
            newzip.write("textfile.txt")
            # and the backup
            newzip.write("textfile.txt.bak")


if __name__ == "__main__":
    main()
