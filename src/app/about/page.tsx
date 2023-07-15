import React from "react";

function About() {
  return (
    <div className="px-12 container font-SmileySans md:px-28">
      <div className="text-on-background container flex flex-col justify-center">
        <h1 className="display-xl text-secondary">About</h1>
        <h2 className="title-large mt-6  ">
          我是 charles yang , 一名前端开发人员。
        </h2>
        <section className="  mt-12 md:title-large">
          大家好，我是一名前端开发工程师。
          <div className="  my-3 md:title-large">
            我对前端开发充满热情，并且有着多年的实际工作经验。
            在我的职业生涯中，我专注于使用
            <span className="text-primary px-2">HTML</span>、
            <span className="text-primary px-2">CSS</span>和
            <span className="text-primary px-2">JavaScript</span>
            等技术来构建用户友好的网页和应用程序。
            <div className="  my-3 md:title-large">
              我熟悉现代前端框架和库，如React、Vue和Angular，能够利用它们来开发响应式和交互式的界面。
              我还有丰富的经验在跨浏览器和跨平台的开发中，确保在不同设备上都能提供一致的用户体验。
            </div>
            我对Web性能优化和代码优化也有一定的了解，以确保快速加载和高效运行。
            此外，我注重团队合作和沟通，具备良好的问题解决能力和自我学习能力。
            <div className="  my-3 md:title-large">
              我喜欢与设计师、后端开发人员和产品经理紧密合作，共同推动项目的成功完成。
            </div>
            我不断关注前端领域的最新趋势和技术，持续学习和提升自己。我希望能够通过我的技术和创造力，为用户提供出色的前端体验，并为团队的成功贡献力量。
            <div className=" my-3 md:title-large">
              谢谢大家！如果有任何问题或合作机会，请随时与我联系。期待与您一起创造优秀的前端作品{" "}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
