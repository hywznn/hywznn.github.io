#!/bin/sh
set -eu

runtime_dir="${XDG_DATA_HOME:-$HOME/.local/share}/hyunjoon-notes"
if [ -x "$runtime_dir/ruby/bin/ruby" ]; then
  export PATH="$runtime_dir/ruby/bin:$PATH"
  export BUNDLE_PATH="${BUNDLE_PATH:-$runtime_dir/bundle}"
fi

bundle check >/dev/null || bundle install
exec bundle exec jekyll serve --livereload "$@"
