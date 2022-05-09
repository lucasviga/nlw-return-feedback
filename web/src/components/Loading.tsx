import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="h-6 2-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="2-4 h-4 animate-spin" />
    </div>
  );
}