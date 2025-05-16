import React from "react";
import { SkillSlider } from "../components/SkillsSlider";
import IntroCodeEditor from "../components/CodeEditor";
export default function page() {
  return (
    <div>
      <div>
        <h1>About me</h1>
        <IntroCodeEditor />
        {/* <p>
          I am a software engineer with a passion for building scalable and
          efficient web applications. I mainly focus on full stack development,
          but I am also interested in mobile development.
        </p> */}
      </div>
      <div>
        <h1>Skills</h1>
        <div>
          <SkillSlider />
        </div>
      </div>
    </div>
  );
}
