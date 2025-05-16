import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
export function SkillSlider() {
  return (
    <InfiniteSlider gap={24} reverse>
      <Image src='/nextjs.svg' alt='Nextjs logo' width={120} height={120} />
      <Image
        src='/typescript-icon.svg'
        alt='Typescript logo'
        width={120}
        height={120}
      />
      <Image
        src='/javascript.svg'
        alt='Javascript logo'
        width={120}
        height={120}
      />
      <Image
        src='/nodejs-icon.svg'
        alt='Nodejs logo'
        width={120}
        height={120}
      />
      <Image src='/dotnet.svg' alt='Dotnet logo' width={120} height={120} />
      <Image src='/mongodb.svg' alt='Mongodb logo' width={120} height={120} />
      <Image src='/mysql-icon.svg' alt='Mysql logo' width={120} height={120} />
      <Image src='/sap.svg' alt='sap logo' width={120} height={120} />
    </InfiniteSlider>
  );
}
