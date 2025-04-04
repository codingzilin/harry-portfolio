import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function JobCard() {
  return (
    <div className='flex flex-col gap-4'>
      <Card className='shadow-none'>
        <CardHeader>
          <div className='flex flex-row items-center justify-between'>
            <CardTitle className='text-lg font-mono'>
              Research Assistant
            </CardTitle>
            <CardDescription className='text-lg font-mono'>
              12.2024-06.2024
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-mono'>AIML</p>
        </CardContent>
      </Card>

      <Card className='shadow-none'>
        <CardHeader>
          <div className='flex flex-row items-center justify-between'>
            <CardTitle className='text-lg font-mono'>
              Front-end Developer
            </CardTitle>
            <CardDescription className='text-lg font-mono'>
              06.2024-11.2024
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-mono'>Luga AI</p>
        </CardContent>
      </Card>

      <Card className='shadow-none'>
        <CardHeader>
          <div className='flex flex-row items-center justify-between'>
            <CardTitle className='text-lg font-mono'>
              Front-end Developer
            </CardTitle>
            <CardDescription className='text-lg font-mono'>
              11.2023-05.2024
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-mono'>Rhizo Pty Ltd</p>
        </CardContent>
      </Card>

      <Card className='shadow-none'>
        <CardHeader>
          <div className='flex flex-row items-center justify-between'>
            <CardTitle className='text-lg font-mono'>SAP Consultant</CardTitle>
            <CardDescription className='text-lg font-mono'>
              08.2020-01.2023
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-mono'>Deloitte</p>
        </CardContent>
      </Card>
    </div>
  );
}
