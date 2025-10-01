import { Spinner } from '@/core/components/Spinner';

/**
 * @component GlobalLoading
 * @summary A global loading indicator shown during route transitions.
 * @domain core
 * @type ui-component
 */
export default function GlobalLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner size="large" />
    </div>
  );
}
