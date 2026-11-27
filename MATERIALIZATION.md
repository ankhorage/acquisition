# Materialization record

This standalone Expo project was materialized from the published
`business_productivity/acquisition` template.

- Immutable revision: `acquisition-template-bd392ac284621165`
- Manifest SHA-256:
  `bd392ac284621165f0b739555c47b41c6ace61f8ae4795a8cd211c1336c05482`
- Materializer: `@ankhorage/projects@0.6.0`
- Generated-app metadata owner: `@ankhorage/expo-runtime@7.5.0`
- Runtime bindings: `@ankhorage/runtime@^5.6.4`
- UI bindings: `@ankhorage/zora@^27.2.0`

`ankh.project-revision.json` is the machine-readable revision identity.
`MATERIALIZATION_FILES.txt` is the complete repository file list. The project
contains no Vault credentials or other secrets; the Zefix credential reference
is resolved only by the trusted host at runtime.

## Validate locally

```sh
bun install --frozen-lockfile --ignore-scripts
HOME="$(mktemp -d)" npx expo export --platform web
```
