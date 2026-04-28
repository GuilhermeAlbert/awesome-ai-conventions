---
title: "ai-plugin/openapi.yaml"
---


# `ai-plugin/openapi.yaml`

Source: `examples/ai-plugin/openapi.yaml`

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
