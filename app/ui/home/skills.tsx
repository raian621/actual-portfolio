import { notoSansMono } from "@/app/fonts";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className={notoSansMono.className}>Skills</h2>
      <h3>Programming Languages</h3>
      <ul>
        <li>C</li>
        <li>C++</li>
        <li>Go</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
      <h3>Technologies</h3>
      <ul>
        <li>Ansible</li>
        <li>Docker</li>
        <li>Git, GitHub, GitLab</li>
        <li>Google Cloud Platform</li>
        <li>Linux</li>
      </ul>
      <h3>Libraries</h3>
      <ul>
        <li>React</li>
        <li>Express</li>
        <li>FastAPI</li>
        <li>Pandas</li>
        <li>Numpy</li>
        <li>ScikitLearn</li>
        <li>PyTorch</li>
      </ul>
    </section>
  );
}
