import type { MDXComponents } from "mdx/types";

// TODO: use MDXComponents and replace MDXRemote
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
