import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: ["src/**/*.graphql", "src/**/*.gql"],
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwudzwtr02yu08umcj6fnolo/master",
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
      },
    },
  },
};

export default config;
