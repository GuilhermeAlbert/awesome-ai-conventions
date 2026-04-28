---
title: "llms-txt/llms-full.txt"
---


# `llms-txt/llms-full.txt`

Source: `examples/llms-txt/llms-full.txt`

````text
# Example Product Docs

This is an expanded documentation bundle for LLM ingestion. It contains the same high-value material linked from `llms.txt`, copied into one file.

## Getting Started

Create a workspace, invite teammates, and connect the billing provider before importing customers.

## API Overview

The API uses bearer token authentication. Requests and responses use JSON. Paginated endpoints accept `limit` and `cursor` parameters.

## Webhooks

Webhook events are delivered with an HMAC signature in the `X-Example-Signature` header. Failed deliveries are retried with exponential backoff.

## Changelog

- 2026-04-01: Added invoice CSV export.
- 2026-03-12: Added webhook event filtering.
- 2026-02-20: Deprecated the legacy customer notes endpoint.
````
