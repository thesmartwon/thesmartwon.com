#!/usr/bin/env bash

# Environment
BUILD_DIR="dist"
RELEASE_BRANCH="gh-pages"

# Script
git fetch origin $RELEASE_BRANCH
git add -f $BUILD_DIR
tree=$(git write-tree --prefix=$BUILD_DIR)
git reset -- $BUILD_DIR
identifier=$(git describe --dirty --always)
commit=$(git commit-tree -p refs/remotes/origin/$RELEASE_BRANCH -m "Publishing $identifier [ci skip]" $tree)
git update-ref refs/heads/$RELEASE_BRANCH $commit
git push --follow-tags origin refs/heads/$RELEASE_BRANCH
