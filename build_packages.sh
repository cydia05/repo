#!/bin/bash

set -e

rm -f Packages.bz2
dpkg-scanpackages -m ./debs > Packages
bzip2 Packages
