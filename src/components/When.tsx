type Props = {
  children: React.ReactNode;
  condition: boolean;
};

export function When({ condition, children }: Props): React.ReactNode {
  if (condition) {
    return children;
  }
}
