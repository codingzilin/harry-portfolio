import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
export function SkillSlider() {
  return (
    <InfiniteSlider gap={16} reverse>
      <Image src='/nextjs.svg' alt='Nextjs logo' width={120} height={120} className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' />
      <Image
        src='/typescript-icon.svg'
        alt='Typescript logo'
        width={120}
        height={120}
        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
      />
      <Image
        src='/javascript.svg'
        alt='Javascript logo'
        width={120}
        height={120}
        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
      />
      <Image
        src='/nodejs-icon.svg'
        alt='Nodejs logo'
        width={120}
        height={120}
        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
      />
      <Image src='/dotnet.svg' alt='Dotnet logo' width={120} height={120} className='w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30' />
      <Image src='/mongodb.svg' alt='Mongodb logo' width={120} height={120} className='w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30' />
      <Image src='/mysql-icon.svg' alt='Mysql logo' width={120} height={120} className='w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30' />
      <Image src='/sap.svg' alt='sap logo' width={120} height={120} className='w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30' />
    </InfiniteSlider>
  );
}
