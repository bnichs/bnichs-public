#!/usr/bin/env bash

SCRIPT=$(realpath "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")
PACKAGE_PATH=$(dirname "$SCRIPT_PATH")



MAGIC=$(grep magic "$PACKAGE_PATH/blog/posts/2022/test-blog.md")




grep "$MAGIC" "$PACKAGE_PATH/dist/blog/test-blog/index.html" > /dev/null && echo "Blog passed" || (echo "Blog test fail" && exit 1)
