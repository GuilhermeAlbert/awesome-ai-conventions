---
title: "ai-plugin/openapi.yaml"
---


# `ai-plugin/openapi.yaml`

Source: `examples/ai-plugin/openapi.yaml`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````yaml
openapi: 3.0.1
info:
  title: Issue Tracker API
  version: "1.0.0"
  description: Example API described by an ai-plugin.json manifest.
servers:
  - url: https://example.com
paths:
  /issues:
    get:
      operationId: searchIssues
      summary: Search issues
      parameters:
        - name: query
          in: query
          required: true
          schema:
            type: string
      responses:
        "200":
          description: Matching issues
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: string
                    title:
                      type: string
                    status:
                      type: string
    post:
      operationId: createIssue
      summary: Create an issue
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - title
                - body
              properties:
                title:
                  type: string
                body:
                  type: string
      responses:
        "201":
          description: Issue created
````
