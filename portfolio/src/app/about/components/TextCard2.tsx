import { Tilt } from "@/components/ui/tilt";

export function TextCard2() {
  return (
    <Tilt rotationFactor={8} isRevese className='inline-block'>
      <div className='relative flex max-w-[400px] min-h-[180px] flex-col justify-end items-start overflow-hidden border border-zinc-950/10 bg-gray-200 dark:border-zinc-50/10 dark:bg-zinc-900 rounded-lg'>
        <div className='p-4 w-full relative z-10'>
          <h1 className='font-mono text-xl leading-snug text-zinc-950 dark:text-zinc-50'>
            Tech enthusiast with a passion for development
          </h1>
        </div>
      </div>
    </Tilt>
  );
}
