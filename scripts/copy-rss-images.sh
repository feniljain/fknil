#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
root_dir="$(cd -- "$script_dir/.." && pwd)"
target_root="$root_dir/public/rss-images"

copy_images() {
  local source_name="$1"
  local source_dir="$root_dir/$source_name"
  local target_dir="$target_root/$source_name"

  mkdir -p "$target_dir"

  find "$source_dir" -type f \( \
    -iname '*.jpg' -o \
    -iname '*.jpeg' -o \
    -iname '*.png' -o \
    -iname '*.gif' -o \
    -iname '*.webp' -o \
    -iname '*.avif' -o \
    -iname '*.svg' \
  \) -exec sh -c '
    set -e

    target_dir="$1"
    source_dir="$2"
    shift 2

    for file do
      relative_path="${file#"$source_dir"/}"
      destination="$target_dir/$relative_path"
      mkdir -p "$(dirname "$destination")"
      cp "$file" "$destination"
    done
  ' sh "$target_dir" "$source_dir" {} +
}

copy_images blogs
copy_images weeknotes
