---
title: "aiignore/.aiignore"
---


# `aiignore/.aiignore`

Source: `examples/aiignore/.aiignore`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````text
# Secrets and local configuration
.env
.env.*
!.env.example
*.pem
*.key

# Dependencies and generated output
node_modules/
dist/
build/
coverage/
.next/
.turbo/

# Large or binary assets
*.zip
*.tar.gz
*.mp4
*.mov
*.psd

# Local databases and caches
*.sqlite
*.sqlite3
.cache/
tmp/
````
