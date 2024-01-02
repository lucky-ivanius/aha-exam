import { ReloadIcon } from "@radix-ui/react-icons";

export default function Loading(): JSX.Element {
  return (
    <div className="flex items-center justify-start">
      <ReloadIcon className="mr-2 animate-spin" />
      <span>Loading</span>
    </div>
  );
}
