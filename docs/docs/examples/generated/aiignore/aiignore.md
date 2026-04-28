---
title: "aiignore/.aiignore"
---


# `aiignore/.aiignore`

Source: `examples/aiignore/.aiignore`

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
