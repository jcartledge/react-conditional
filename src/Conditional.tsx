export type ConditionalProps = React.PropsWithChildren<{ predicate: boolean }>;

export const Conditional = ({
  children,
  predicate,
}: ConditionalProps) => (predicate ? <>{children}</> : null);
