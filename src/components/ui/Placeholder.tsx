import clsx from 'clsx';

interface PlaceholderProps {
  width?: string;
  height?: string;
  label: string;
  className?: string;
}

export default function Placeholder({ width = 'w-full', height = 'h-64', label, className }: PlaceholderProps) {
  return (
    <div 
      className={clsx(
        "bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-center p-4 rounded-lg animate-pulse", 
        width, 
        height,
        className
      )}
    >
      <span className="text-gray-600 font-bold text-lg mb-1">GÖRSEL ALANI</span>
      <span className="text-gray-500 text-sm font-mono bg-white px-2 py-1 rounded border border-gray-300">
        {label}
      </span>
    </div>
  );
}