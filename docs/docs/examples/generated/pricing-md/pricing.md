---
title: "pricing-md/pricing.md"
---


# `pricing-md/pricing.md`

Source: `examples/pricing-md/pricing.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# Example SaaS Pricing

Start for free and scale as you grow. All plans include the core API, webhooks, and email support.

## Plans

| Plan       | Price      | Included units | Overage (per 1,000) |
| ---------- | ---------- | -------------- | ------------------- |
| Free       | $0/mo      | 3,000          | —                   |
| Pro        | $20/mo     | 50,000         | $0.90               |
| Scale      | $90/mo     | 100,000        | $0.80               |
| Enterprise | Custom     | Custom         | Custom              |

The overage rate applies only to units sent beyond the included volume.

## Feature Highlights

| Feature                 | Free | Pro | Scale | Enterprise |
| ----------------------- | ---- | --- | ----- | ---------- |
| API access              | ✓    | ✓   | ✓     | ✓          |
| Custom domain           | —    | ✓   | ✓     | ✓          |
| Priority support        | —    | —   | ✓     | ✓          |
| SLA guarantee           | —    | —   | —     | ✓          |
| Dedicated infrastructure| —    | —   | —     | ✓          |

## Enterprise

For teams with advanced requirements, contact us for a custom plan with volume discounts, dedicated infrastructure, and a guaranteed SLA.

Contact: sales@example.com
````
