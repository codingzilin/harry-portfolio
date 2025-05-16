import { CodeEditor } from "@/components/animate-ui/components/code-editor";

export default function IntroCodeEditor() {
  return (
    <CodeEditor
      lang='tsx'
      cursor={true}
      title='Introduction.tsx'
      writing={false}
      className='w-[640px] h-[400px]'
      duration={15}
      delay={0.5}
    >
      {`'use client';

import React from 'react';

const Introduction = () => {
  return {
    name: 'Harry Song',
    role: 'Full Stack Developer',
    location: 'Sydney/Adelaide, Australia',
    expertise: 'Full Stack Development, Mobile Development, DevOps, SAP'
  };
};

export default Introduction;`}
    </CodeEditor>
  );
}
